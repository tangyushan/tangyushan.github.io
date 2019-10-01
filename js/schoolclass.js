function SchoolClass(id, classMaster) {
    this.id = id;
    this.班主任 = classMaster;
    
    this.students = [];
    
    this.语文老师 = null;
    this.数学老师 = null;
    this.英语老师 = null;
    this.生物老师 = null;
    this.历史老师 = null;
    this.地理老师 = null;
    this.美术老师 = null;
    this.音乐老师 = null;
    this.政治老师 = null;
    this.体育老师 = null;
    this.信息技术老师 = null;
    this.写字老师 = null;
    this.心理老师 = null;
    
    this.courseTable = new CourseTable(this);
    
    this.setCourseTeacher = function(course, teacher) {
        this[course+"老师"] = teacher;
    };
    
    this.listTeachers = function() {
        console.log(this);
        
        for (var propName in this) {
            
            if (propName === "班主任" || propName.substring(propName.length - 2) === "老师") {
                var teacher = this[propName];
                console.log(propName, teacher);
            }
        }
    };
    
    this.getTeacherForSubject = function(subject) {
        return this[subject + "老师"];
    };
    
    this.addStudent = function(student) {
        student.schoolClassId = this.id;
        this.students.push(student);
    };
    
}