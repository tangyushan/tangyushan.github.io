function CourseTable(schoolClass) {
    const CLASSES_NUM_ONE_DAY = 8;
    
    this.schoolClass = schoolClass;
    this.coursesName = ["班会", "语文", "数学", "英语", "生物", "历史", "地理", "美术", "音乐", "政治", "体育", "信息技术", "写字", "心理", "自习"];
    
    this.COURSE_NAME_MAX_LEN = 0;

    this.monday = [];
    this.tuesday = [];
    this.wednesday = [];
    this.thursday = [];
    this.friday = [];
    
    this.mapNumAndWeekday = {
        1: this.monday,
        2: this.tuesday,
        3: this.wednesday,
        4: this.thursday,
        5: this.friday
    };
    
    this.mapWeekdayAndNum = {
        "monday": 1,
        "tuesday": 2,
        "wednesday": 3,
        "thursday": 4,
        "friday": 5
    };
    
    this.init = function() {
//        for (var i = 0; i < this.coursesName.length; i++) {
//            if (this.COURSE_NAME_MAX_LEN < this.coursesName[i].length) {
//                this.COURSE_NAME_MAX_LEN = this.coursesName[i].length;
//            }
//        }
        
        for (var prop in this) {
            if (prop === "monday" || prop === "tuesday" || prop === "wednesday" || prop === "thursday" || prop === "friday") {
                for (var i = 0; i < CLASSES_NUM_ONE_DAY; i++) {
                    this[prop].push({
                        course: "",
                        teacher: null
                    });
                }
            }
        }
        
        this.applyRules();
    };
    
    this.resetTable = function() {
        this.monday = [];
        this.tuesday = [];
        this.wednesday = [];
        this.thursday = [];
        this.friday = [];
        
        this.init();
    };
    
    this.applyRules = function() {
        this.setCourse(1, 1, "班会", this.schoolClass.班主任);
        
        this.setCourse(4, 8, "N/A", null);
        this.setCourse(5, 8, "N/A", null);
    };
    
    this.setCourse = function(weekday, classOrder, course, teacher) {
        try {
//            if (teacher) {
//                this.checkTeacherAvailable(teacher, weekday, classOrder);
//            }
            
            
            
            var courseObj = this.mapNumAndWeekday[weekday][classOrder-1];
            courseObj.course = course;
            courseObj.teacher = teacher;
            
            // N/A and 自习课没有老师
            if (!teacher) {
                //console.log("teacher is null");
                //console.log(courseObj);
            } else {
                // teacher state
                teacher.addTeachingTask(weekday, classOrder, this.schoolClass, course);
            }
        } catch (err) {
            console.log("found error!");
            console.log(err.message);
            console.log(weekday, classOrder);
            console.log(course);
            console.log(teacher);
        }
    };
    
    this.checkTeacherAvailable = function(teacher, weekday, classOrder) {
        var isTeacherFree = teacher.isFree(weekday, classOrder);
        
        if (!isTeacherFree) {
            console.log("排课有冲突！");
            console.log(teacher.姓名);
            
            var task = teacher.getTeachingTask(weekday, classOrder);
            console.log("第" + classOrder + "节课", task.班级.id+"班", task.课程);
        }
    };
    
    this.getCourse = function(weekday, classOrder) {
        var courseObj = this.mapNumAndWeekday[weekday][classOrder-1];
        return courseObj;
    };
    
    this.getAvailableCells = function() {
        var availableCells = [];
        
        for (var prop in this) {
            if (prop === "monday" || prop === "tuesday" || prop === "wednesday" || prop === "thursday" || prop === "friday") {
                for (var i = 0; i < CLASSES_NUM_ONE_DAY; i++) {
                    var cell = this[prop][i];
                    if (cell.course === "") {
                        availableCells.push({weekday: this.mapWeekdayAndNum[prop], classOrder: i + 1});
                    }
                }
            }
        }
        
        return availableCells;
    };
    
    this.isSubjectExistInDay = function(subject, weekday) {
        var isSetSubjectInThisDay = false;

        var coursesThisDay = this.mapNumAndWeekday[weekday];

        for (var i = 0; i < coursesThisDay.length; i++) {
            if (coursesThisDay[i].course === subject) {
                isSetSubjectInThisDay = true;
                break;
            }
        }
        
        return isSetSubjectInThisDay;
    };
    
    this.getAvailableCellsForSubject = function(subjectName) {
        // for reference in inner function
        var courseTable = this;
        
        var availabelCells = this.getAvailableCells();
        
        switch(subjectName) {
            case "语文":
            case "数学":
            case "英语":
                return appleRulesForCME();
                break;
                
            default:
                break;
        }
        
        function appleRulesForCME() {
            var result = [];
            
            for (var i = 0; i < availabelCells.length; i++) {
                var cell = availabelCells[i];
                
                // 对于语数英，先不排在下午8节。在特定的时间，语数英只能排在下午。而对于同时上两个班的语数英老师来讲，应允许排在下午6、7节
                if (cell.classOrder >= 8) {
                    continue;
                }
                
                // 星期二上午不排语文，星期三上午不排数学，星期五上午不排英语
                if ((subjectName === "语文" && cell.weekday === 2) || (subjectName === "数学" && cell.weekday === 3) || (subjectName === "英语" && cell.weekday === 5) ) {
                    if (cell.classOrder <= 5) {
                        continue;
                    }
                } else if (cell.classOrder >= 6) { // 只有在特定的时间，才能排下午。不在特定的时间，下午不能排
                    continue;
                }
                
                // 检查同一天内是否已经排过此科目的课
                if (courseTable.isSubjectExistInDay(subjectName, cell.weekday)) {
                    continue;
                }
                
                result.push(cell);
            }
            
            //debug.showAvailableCells(result); 
            
            return result;
        }
        
        
        var result = [];
        
        for (var i = 0; i < availabelCells.length; i++) {
            var cell = availabelCells[i];
            
            if (subjectName === "体育") {
                // 不能排在星期五上午
                if (cell.weekday === 5) {
                    if (cell.classOrder <= 5) {
                        continue;
                    }
                }
                
                // 一般排在上午4、5节，下午第8节
                if (cell.classOrder <= 3 || cell.classOrder === 6 || cell.classOrder === 7) {
                    continue;
                }
            } else if (subjectName === "生物" || subjectName === "地理") {
                // 不能排在星期三下午
                if (cell.weekday === 3) {
                    if (cell.classOrder >= 6) {
                        continue;
                    }
                }
            } else if (subjectName === "政治") {
                // 不能排在星期一下午
                if (cell.weekday === 1) {
                    if (cell.classOrder >= 6) {
                        continue;
                    }
                }
            } else if (subjectName === "心理") {
                // 不能排在星期二上午
                if (cell.weekday === 2) {
                    if (cell.classOrder <= 5) {
                        continue;
                    }
                }
            } else if (subjectName === "物理" || subjectName === "历史" || subjectName === "音乐" ) {
                // 不能排在星期二下午
                if (cell.weekday === 2) {
                    if (cell.classOrder >= 6) {
                        continue;
                    }
                }
            } else if (subjectName === "信息技术") {
                // 不能排在星期三上午
                if (cell.weekday === 3) {
                    if (cell.classOrder <= 5) {
                        continue;
                    }
                }
            } else if (subjectName === "美术") {
                // 不能排在星期五上午
                if (cell.weekday === 5) {
                    if (cell.classOrder <= 5) {
                        continue;
                    }
                }
            } else if (subjectName === "自习") {
                // 一般排在周一、周二、周三的下午第8节
                if (cell.classOrder <= 7) {
                    continue;
                }
            }
            
            result.push(cell);
        }
        
        return result;
    };
    
    this.getAvailableCellsForCMEInWeekday = function(subjectName, weekday) {
        var availabelCells = this.getAvailableCellsForSubject(subjectName);
        
        
        
        var result = [];
        
        for (var i = 0; i < availabelCells.length; i++) {
            var cell = availabelCells[i];
            
            if (cell.weekday !== weekday) {
                continue;
            }
            
            result.push(cell);
        }
        
        //debug.showAvailableCells(result);
        
        return result;
    };
    
    this.printInfo = function() {
        var titleGapSpaces = "  ".repeat(5);
        
        console.log("   一" + titleGapSpaces + "二" + titleGapSpaces + "三" + titleGapSpaces + "四" + titleGapSpaces + "五");
        
        function appendSpaces(str) {
            return str + "  ".repeat(5);
        }
        
        console.log(appendSpaces("1. √") + appendSpaces("√") + appendSpaces("√") + appendSpaces("√") + appendSpaces("√"));
        console.log(appendSpaces("2. √") + appendSpaces("√") + appendSpaces("√") + appendSpaces("X") + appendSpaces("√"));
        console.log(appendSpaces("3. √") + appendSpaces("__") + appendSpaces("X") + appendSpaces("X") + appendSpaces("√"));
        console.log(appendSpaces("4. √") + appendSpaces("√") + appendSpaces("√") + appendSpaces("X") + appendSpaces("X"));
        console.log(appendSpaces("5. √") + appendSpaces("X") + appendSpaces("X") + appendSpaces("X") + appendSpaces("√"));
        
        
    };
    
    this.init();
}