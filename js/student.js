
var studentIdGenerator = {
    currentId: 0,
    
    getNextId: function() {
        this.currentId++;
        return this.currentId;
    }
};

function Student(name, gender) {
    this.id = studentIdGenerator.getNextId();
    this.schoolClassId = null;
    
    this.name = name;
    this.gender = gender;
    
    
}