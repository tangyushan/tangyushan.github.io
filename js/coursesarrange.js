window.onload = init;

function init() {
    doUnitTest();
    return;
    
    var gradeOne = new Grade("初一");
    
    // 测试同时给两个斑上课的情况。先假设一个条件，调试记得删掉
//    var schoolClass2 = gradeOne.getClass(2);
//    schoolClass2.courseTable.setCourse(2, 1, "数学", schoolClass2.数学老师);
//    schoolClass2.courseTable.setCourse(2, 2, "数学", schoolClass2.数学老师);
//    
//    schoolClass2.courseTable.setCourse(1, 4, "体育", schoolClass2.体育老师);
    
    //schoolClass2.courseTable.setCourse(3, 1, "语文", schoolClass2.语文老师);
    //schoolClass2.courseTable.setCourse(3, 2, "语文", schoolClass2.语文老师);
    
    //popDataInTable(schoolClass2.courseTable, "course-table-2");
    
    
    
    var schoolClass1 = gradeOne.getClass(1);
    arrangeCoursesInAClass(schoolClass1);
    
    var schoolClass2 = gradeOne.getClass(2);
    arrangeCoursesInAClass(schoolClass2);
}

function doUnitTest() {
    var gradeOne = new Grade("初一");
    var schoolClass = gradeOne.getClass(1);
    var courseTable = schoolClass.courseTable;
    
    console.log(courseTable);
    
}

function arrangeCoursesInAClass(schoolClass) {
    arrangeCMECourse(schoolClass);
    //arrangeSelfStudyCourse(schoolClass);
    arrangePECourse(schoolClass);
    //arrangeOtherCourses(schoolClass);
    
    updateView();
    
    function updateView() {
        popDataInTable(schoolClass.courseTable, "course-table-" + schoolClass.id);
    }
}

function applyTeacherTasksConstraint(freeCells, teacher) {
    var result = [];
        
    for (var i = 0; i < freeCells.length; i++) {
        var cell = freeCells[i];
        
        if (teacher.isFree(cell.weekday, cell.classOrder) === false) {
            continue;
        }
        
        result.push(cell);
    }
    
    return result;
}

function arrangeCME连堂Course(schoolClass, subjectName, weekday) {
    var courseTable = schoolClass.courseTable;
    var freeCells = courseTable.getAvailableCellsForCMEInWeekday(subjectName, weekday);
    
    var subjectTeacher = schoolClass[subjectName + "老师"];
    freeCells = applyTeacherTasksConstraint(freeCells, subjectTeacher);
    
    // 如果能排5节课，则取第1、第2节连堂
    if (freeCells.length === 5) {
        courseTable.setCourse(weekday, 1, subjectName, subjectTeacher);
        courseTable.setCourse(weekday, 2, subjectName, subjectTeacher);
    } else {  // 否则只有3节课，中间要休息一节课的时间，取4、5节
        courseTable.setCourse(weekday, 4, subjectName, subjectTeacher);
        courseTable.setCourse(weekday, 5, subjectName, subjectTeacher);
    }
}

// 语数英
function arrangeCMECourse(schoolClass) {
    var courseTable = schoolClass.courseTable;
    
    // 连堂
    // 数学 － 星期二，1， 2节
    // 语文 － 星期三，1， 2节
    // 英语 － 星期四，1， 2节
    arrangeCME连堂Course(schoolClass, "数学", 2);
    arrangeCME连堂Course(schoolClass, "语文", 3);
    arrangeCME连堂Course(schoolClass, "英语", 4);
    
    // 每天
    var subjects = ["语文", "数学", "英语"];
    
    subjects.sort(randomSort);
    
    for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        
        iterate(subject);
    }
    
    function iterate(subject) {
        for (var i = 1; i <= 5; i++) {
            var availCells = courseTable.getAvailableCellsForCMEInWeekday(subject, i);
            
            var subjectTeacher = schoolClass[subject + "老师"];
            availCells = applyTeacherTasksConstraint(availCells, subjectTeacher);
            
//            if (subject === "数学" && i === 1) {
//                debug.showAvailableCells(availCells); 
//            }
            
            // 对于语数英，尽量优先排在前面
            if (availCells.length > 0) {
//                var count = availCells.length;
//                var randomIndex = getRandomIntInclusive(0, count - 1);
//                var cell = availCells[randomIndex];
                var cell = availCells[0];
                courseTable.setCourse(cell.weekday, cell.classOrder, subject, schoolClass[subject+"老师"]);
            }
        }
    }
}

// 自习
function arrangeSelfStudyCourse(schoolClass) {
    arrangeNonCMECourse(schoolClass, "自习", 2);
}

// 体育
function arrangePECourse(schoolClass) {
    arrangeNonCMECourse(schoolClass, "体育", 3);
}

// 其他
function arrangeOtherCourses(schoolClass) {
    arrangeNonCMECourse(schoolClass, "生物", 3);
    
    arrangeNonCMECourse(schoolClass, "政治", 2);
    arrangeNonCMECourse(schoolClass, "历史", 2);
    arrangeNonCMECourse(schoolClass, "地理", 2);
    
    arrangeNonCMECourse(schoolClass, "音乐", 1);
    arrangeNonCMECourse(schoolClass, "美术", 1);
    arrangeNonCMECourse(schoolClass, "信息技术", 1);
    
    arrangeNonCMECourse(schoolClass, "心理", 1);
    arrangeNonCMECourse(schoolClass, "写字", 1);
}

function arrangeNonCMECourse(schoolClass, subjectName, courseNumInAWeek) {
    var courseTable = schoolClass.courseTable;
    
    var availCells = courseTable.getAvailableCellsForSubject(subjectName);
    
    if (subjectName !== "自习") {
        var subjectTeacher = schoolClass[subjectName + "老师"];
        availCells = applyTeacherTasksConstraint(availCells, subjectTeacher);
    }
    
    if (schoolClass.id === 2) {debug.showAvailableCells(availCells);}
    
    //console.log(availCells);
    
    // 每天上一节，能各排在星期几？
    var weekdays = [];
    
    for (var i = 0; i < availCells.length; i++) {
        var cell = availCells[i];
        
        if (!weekdays.includes(cell.weekday)) {
            weekdays.push(cell.weekday);
        }
    }
    
    if (schoolClass.id === 2) {console.log(weekdays);}
    
    if (weekdays.length < courseNumInAWeek) {
        console.log("错误：" + subjectName + "需要每周排" + courseNumInAWeek + "节课，但只能排" + weekdays.length  + "天。排课失败！需重排！");
        // 需要重排！
        courseTable.resetTable();
        
        
        debug.showAvailableCells(courseTable.getAvailableCells());
        
        //arrangeCoursesInAClass(schoolClass);
        
        
        return;
    }
    
    // 根据一周能排的天数，  如3天，
    weekdays.sort(randomSort);
    
    var selectedWeekdays = [];
    
    for (var i = 0; i < courseNumInAWeek; i++) {
        selectedWeekdays.push(weekdays.shift());
    }
    
    for (var i = 0; i < selectedWeekdays.length; i++) {
        var result = [];
        
        for (var j = 0; j < availCells.length; j++) {
            var cell = availCells[j];

            if (cell.weekday === selectedWeekdays[i]) {
                result.push(cell.classOrder);
            }
        }
        
        var randSelectedIndex = getRandomIntInclusive(0, result.length - 1);
        
        //console.log(selectedWeekdays[i], result[randSelectedIndex]);
        
        courseTable.setCourse(selectedWeekdays[i], result[randSelectedIndex], subjectName, courseTable.schoolClass[subjectName + "老师"]);
    }
}

function randomSort(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}





function popDataInTable(courseTable, htmlTableId) {
    for (var weekday = 1; weekday <= 5; weekday++) {
        for (var classOrder = 1; classOrder <= 8; classOrder++) {
            var courseObj = courseTable.getCourse(weekday, classOrder);
            
            var cells = getTableCells(htmlTableId, weekday, classOrder);
            cells[0].textContent = courseObj.course;
            cells[1].textContent = courseObj.teacher ? courseObj.teacher.姓名 : "";
        }
    }
}

function getTableCells(htmlTableId, weekday, classOrder) {
    var table = document.getElementById(htmlTableId);
    
    var colStart = 3;
    var row, col;
    
    switch(classOrder) {
        case 1:
            row = 0;
            break;
        case 2:
            row = 2;
            break;
        case 3:
            row = 5;
            break;
        case 4:
            row = 7;
            break;
        case 5:
            row = 9;
            break;
        case 6:
            row = 12;
            colStart = 4;
            break;
        case 7:
            row = 14;
            break;
        case 8:
            row = 16;
            break;
    }
    
    if (row >= 1) {
        colStart--;
    }
    
    col = colStart + weekday - 1;
    
    var result = [];
    
    result.push(table.tBodies[0].rows[row].cells[col]);
    
    if (row === 0 || row === 12) {
        col = col - 3;
    } else {
        col = col - 2;
    }
    
    result.push(table.tBodies[0].rows[row+1].cells[col]);
    
    return result;
}







