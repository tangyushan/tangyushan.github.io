function Teacher(姓名) {
    this.姓名 = 姓名;
    
    //this.上课任务 = {班级: 1, 课程: "语文"};
    
    this.每周上课任务 = {
        monday: [null, null, null, null, null, null, null, null],
        tuesday: [null, null, null, null, null, null, null, null],
        wednesday: [null, null, null, null, null, null, null, null],
        thursday: [null, null, null, null, null, null, null, null],
        friday: [null, null, null, null, null, null, null, null]
    };
    
    this.addTeachingTask = function(weekday, classOrder, schoolClass, course) {
        var selectedDay = null;
        
        switch (weekday) {
            case 1:
                selectedDay = this.每周上课任务.monday;
                break;
            case 2:
                selectedDay = this.每周上课任务.tuesday;
                break;
            case 3:
                selectedDay = this.每周上课任务.wednesday;
                break;
            case 4:
                selectedDay = this.每周上课任务.thursday;
                break;
            case 5:
                selectedDay = this.每周上课任务.friday;
                break;
            default:
                selectedDay = null;
                break;
        }
        
        selectedDay[classOrder-1] = {班级: schoolClass, 课程: course};
    };
    
    this.listTeachingTasks = function() {
        console.log(this.姓名 + "的教学任务：");
        
        for (var propName in this.每周上课任务) {
            var tasksInADay = this.每周上课任务[propName];
            
            console.log("    " + propName + ":");
            
            for (var index = 0; index < tasksInADay.length; index++) {
                var task = tasksInADay[index];
                
                if (task) {
                    console.log("        第" + (index+1) + "节，" + task.班级.id + "班，" + task.课程 + "课");
                }
            }
        }
    };
    
    this.isFree = function(weekday, classOrder) {
        var selectedDay = null;
        
        switch (weekday) {
            case 1:
                selectedDay = this.每周上课任务.monday;
                break;
            case 2:
                selectedDay = this.每周上课任务.tuesday;
                break;
            case 3:
                selectedDay = this.每周上课任务.wednesday;
                break;
            case 4:
                selectedDay = this.每周上课任务.thursday;
                break;
            case 5:
                selectedDay = this.每周上课任务.friday;
                break;
            default:
                selectedDay = null;
                break;
        }
        
        var task = selectedDay[classOrder-1];
        
        return task ? false : true;
    };
    
    this.getTeachingTask = function(weekday, classOrder) {
        var selectedDay = null;
        
        switch (weekday) {
            case 1:
                selectedDay = this.每周上课任务.monday;
                break;
            case 2:
                selectedDay = this.每周上课任务.tuesday;
                break;
            case 3:
                selectedDay = this.每周上课任务.wednesday;
                break;
            case 4:
                selectedDay = this.每周上课任务.thursday;
                break;
            case 5:
                selectedDay = this.每周上课任务.friday;
                break;
            default:
                selectedDay = null;
                break;
        }
        
        return selectedDay[classOrder-1];
    };
}