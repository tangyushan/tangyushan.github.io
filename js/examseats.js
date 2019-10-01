window.onload = init;

const EXAM_SEAT_ROWS = 7;
const EXAM_SEAT_COLS = 6;

const EXAMSEATS_ARRANGE_STYLE = {
    HORIZONTAL: 0,
    VERTICAL: 1
};

const seatsLimit = [41, 38, 37, 40, 39, 41, 38, 39];

var allExamSeats;

var gradeOne;

function init() {
    //doTest();
    //return;
    
    gradeOne = new Grade("初一");
    
    allExamSeats = assignStudentsInExamRooms(gradeOne);
    
    printStudentsExamRooms(gradeOne, allExamSeats);
    
    setupDragAndDrop();
}

function setupDragAndDrop() {
    for (var i = 1; i <= 8; i++) {
        var table = document.getElementById("seats" + i);
        
        var tds = table.getElementsByTagName("td");
        
        for (var j = 0; j < tds.length; j++) {
            var cell = tds[j];
            
            if (cell.textContent !== "") {
                cell.draggable = "true";
                cell.ondragstart = onSeatDragStart;
                cell.ondragover = allowSeatDrop;
                cell.ondrop = onSeatDrop;
            }
        }
    }
}

function doTest() {
    var examRoom = new ExamRoom(1, seatsLimit[8 - 1], EXAMSEATS_ARRANGE_STYLE.HORIZONTAL);
    examRoom.initExamSeats(EXAM_SEAT_ROWS, EXAM_SEAT_COLS);
    
    //console.log(examRoom.examSeats);
    
//    for (var col = 1; col <= 6; col++) {
//        var seat = examRoom.getExamSeat(1, col);
//        console.log(seat.getDeskNum());
//    }
    
    examRoom.printExamSeats();
}

function assignStudentsInExamRooms(grade) {
    var studentsRandom = getStudentsInRandomOrder(grade, 1, 8);
    
    studentsRandom.sort(function(a, b) {
        return Math.random() > 0.5 ? -1 : 1;
    });
    
    var studentIndex = 0;
    
    var allExamSeats = [];
    
    for (var classId = 1; classId <= 8; classId++) {
        var examRoom = new ExamRoom(classId, seatsLimit[classId-1], EXAMSEATS_ARRANGE_STYLE.HORIZONTAL);
        examRoom.initExamSeats(EXAM_SEAT_ROWS, EXAM_SEAT_COLS);
        
        var seatsInExamRoom = examRoom.getExamSeatsByOrder();

        for (var i = 0; i < seatsInExamRoom.length; i++) {
            var nextStudent = studentsRandom[studentIndex];
            if (nextStudent) {
                seatsInExamRoom[i].assignExaminee(nextStudent);
                studentIndex++;
                
                allExamSeats.push(seatsInExamRoom[i]);
            } else {
                break;
            }
        }
        
        popDataInTable(examRoom, seatsInExamRoom, "seats" + classId);
    }
    
    return allExamSeats;
}

function printStudentsExamRooms(grade, allExamSeats) {
    var div = document.getElementById("classStudentInfo");
    
    div.innerHTML = "";
    
    for (var i = 1; i <= 8; i++) {
        div.appendChild(document.createElement("p"));

        var schoolClass = grade.getClass(i);
        var students = schoolClass.students;

        students.sort(function(a, b) {
            return a.name - b.name;
        });

        var table = document.createElement("table");

        var caption = document.createElement("caption");
        caption.textContent = "初一" + schoolClass.id + "班学生考场分配表";

        table.caption = caption;

        var tHead = document.createElement("thead");

        var tr = document.createElement("tr");

        ["序号", "姓名", "考场", "座位号"].forEach(function(element){
            var th = document.createElement("th");
            th.textContent = element;
            tr.appendChild(th);
        });

        tHead.appendChild(tr);

        table.appendChild(tHead);

        var tBody = document.createElement("tbody");
        table.appendChild(tBody);

        for (var j = 0; j < students.length; j++) {
            var row = document.createElement("tr");

            var td = document.createElement("td");
            td.textContent = j+1;
            td.className = "numOrder";
            row.appendChild(td);

            td = document.createElement("td");
            td.textContent = students[j].name;
            row.appendChild(td);

            var info = findStudentInfo(students[j]);

            td = document.createElement("td");
            td.textContent = info.classRoom;
            row.appendChild(td);

            td = document.createElement("td");
            td.textContent = info.seatIndex;
            td.className = "seatIndex";
            row.appendChild(td);

            tBody.appendChild(row);
        }

        div.appendChild(table);
    }
    
    function findStudentInfo(student) {
        for (var i = 0; i < allExamSeats.length; i++) {
            if (allExamSeats[i].examinee === student) {
                return {classRoom: "初一" + allExamSeats[i].classRoomId + "班", seatIndex: allExamSeats[i].getDeskNum()};
            }
        }
    }
}

function popDataInTable(examRoom, seatsInAClassRoom, tableId) {
    //examRoom.printExamSeats();
    
    var table = document.getElementById(tableId);
    
    table.caption.textContent = examRoom.getName() + "考场座位";
    
    var tableRows = table.tBodies[0].rows;

    for (var i = 0; i < seatsInAClassRoom.length; i++) {
        var seat = seatsInAClassRoom[i];
        
        var row = seat.row;
        var col = seat.col;
        
        tableRows[row].cells[col].textContent = seat.getDeskNum() + ". " + seat.examinee.name + " (初一" + seat.examinee.schoolClassId + "班)";
    }
}

function getStudentsInRandomOrder(grade, schoolClassIdStart, schoolClassIdEnd) {
    var students = [];
    
    for (var i = schoolClassIdStart; i <= schoolClassIdEnd; i++) {
        var schoolClass = grade.getClass(i);
        var studentsInClass = schoolClass.students;
        
        students = students.concat(studentsInClass);
    }
    
    students.sort(function(a, b) {
        return Math.random() > 0.5 ? -1 : 1;
    });
    
    return students;
}

function getExamSeatTextInfoFromSelectedTD(td) {
    var table = td.parentNode.parentNode.parentNode;
    var tableId = table.id;
    var examRoomId = tableId.substring(tableId.length - 1);
    
    var text = td.textContent;
    var patternRE = /(\d{1,2})\.\s/;

    var result = patternRE.exec(text);
    var seatNum = result[1];
    
    //var seat = getExamSeatFromAllSeats(parseInt(examRoomId), parseInt(seatNum));

    //return seat;
    
    // examRooId, seatNum
    return examRoomId + ", " + seatNum;
}

function getExamSeatFromAllSeats(classRoomId, seatNum) {
    for (var i = 0; i < allExamSeats.length; i++) {
        var seat = allExamSeats[i];
        if (seat.classRoomId === classRoomId && seat.getDeskNum() === seatNum) {
            return seat;
        }
    }
    
    console.error("No mathcing seat is found!");
    
    return null;
}

function onSeatDragStart(event) {
    var td = event.target;
    var seatInfo = getExamSeatTextInfoFromSelectedTD(td);
    
    event.dataTransfer.setData("text", seatInfo);
    
    td.id = "dragSourse";

    //td.style.backgroundColor = "green";
}

function allowSeatDrop(event) {
    event.preventDefault();
    //event.target.style.backgroundColor = "green";
    
}

function onSeatDrop(event) {
    event.preventDefault();
    
    var seat1Infor = event.dataTransfer.getData("text");
    var seat1 = parseInfor(seat1Infor);
    
    var td = event.target;
    var seat2Infor = getExamSeatTextInfoFromSelectedTD(td);    
    var seat2 = parseInfor(seat2Infor);
    
    swapExaminee(seat1, seat2);
    
    var sourceCell = document.getElementById("dragSourse");
    sourceCell.textContent = seat1.getDeskNum() + ". " + seat1.examinee.name + " (初一" + seat1.examinee.schoolClassId + "班)";
    sourceCell.removeAttribute("id");
    
    td.textContent = seat2.getDeskNum() + ". " + seat2.examinee.name + " (初一" + seat2.examinee.schoolClassId + "班)";
    
    printStudentsExamRooms(gradeOne, allExamSeats);
    
    function parseInfor(infor) {
        var array = infor.split(", ");
        
        var examRoomId = parseInt(array[0]);
        var seatNum = parseInt(array[1]);
        
        var seat = getExamSeatFromAllSeats(examRoomId, seatNum);
        
        return seat;
    }
    
    function swapExaminee(seat1, seat2) {
        var temp = seat1.examinee;
        
        seat1.examinee = seat2.examinee;
        seat2.examinee = temp;
    }
}