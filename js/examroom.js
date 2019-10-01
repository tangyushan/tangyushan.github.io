


function ExamRoom(id, seatsLimit, seatsArrangeStyle) {
    this.id = id;
    this.seatsLimit = seatsLimit;
    this.seatsArrangeStyle = seatsArrangeStyle;
    
    this.examSeats = [];
    
    this.initExamSeats = function(rows, cols) {
        if (this.seatsArrangeStyle === EXAMSEATS_ARRANGE_STYLE.VERTICAL) {
            var col = 0;
            var row = 0;

            for (var i = 0; i < this.seatsLimit; i++) {
                if (row > rows - 1) {
                    col++;
                    row = 0;
                }

                var seat = new ExamSeat(this.id, row, col, seatsArrangeStyle);
                this.examSeats.push(seat);

                row++;
            }
        } else if (this.seatsArrangeStyle === EXAMSEATS_ARRANGE_STYLE.HORIZONTAL) {
            var row = 0;
            var col = 0;

            for (var i = 0; i < this.seatsLimit; i++) {
                if (col > cols - 1) {
                    row++;
                    col = 0;
                }

                var seat = new ExamSeat(this.id, row, col, seatsArrangeStyle);
                this.examSeats.push(seat);

                col++;
            }
        } else {
            console.error("Unexpected seats arrange style.");
        }
    };
    
    this.getName = function() {
        return "初一" + this.id + "班";
    };
    
    this.getExamSeats = function() {
        return this.examSeats;
    };
    
    this.getExamSeat = function(row, col) {
        for (var i = 0; i < this.examSeats.length; i++) {
            if (this.examSeats[i].row === row-1 && this.examSeats[i].col === col-1) {
                return this.examSeats[i];
            }
        }
        
        //console.error("can't find seat for (" + row + ", " + col + ")");
        
        return null;
    };
    
    this.getExamSeatFromId = function(seatId) {
        for (var i = 0; i < this.examSeats.length; i++) {
            if (this.examSeats[i].getDeskNum() === seatId) {
                return this.examSeats[i];
            }
        }
        
        return null;
    };
    
    this.getExamSeatMinId = function() {
        return 1;
    };
    
    this.getExamSeatMaxId = function() {
        return this.examSeats.length;
    };
    
    this.getExamSeatsByOrder = function() {
        var seats = [];
        
        var minId = this.getExamSeatMinId();
        var maxId = this.getExamSeatMaxId();
        
        for (var i = minId; i <= maxId; i++) {
            var seat = this.getExamSeatFromId(i);
            
            if (seat === null) {
                console.log("get null seat!");
                console.log("id = " + i);
            }
            
            seats.push(seat);
        }
        
        return seats;
    };
    
    this.printExamSeats = function() {
        if (this.seatsArrangeStyle !== EXAMSEATS_ARRANGE_STYLE.HORIZONTAL && this.seatsArrangeStyle !== EXAMSEATS_ARRANGE_STYLE.VERTICAL) {
            console.error("Unexpected seats arrange style.");
            return;
        }
        
        for (var row = 1; row <= EXAM_SEAT_ROWS; row++) {
            var rowText = "";

            for (var col = 1; col <= EXAM_SEAT_COLS; col++) {
                var seat = this.getExamSeat(row, col);

                if (seat) {
                    rowText += seat.getDeskNum() + "\t" ;
                }
            }

            console.log(rowText);
        }
    };
}

function ExamSeat(classRoomId, row, col, seatsArrangeStyle) {
    this.classRoomId = classRoomId;
    this.seatsArrangeStyle = seatsArrangeStyle;
    
    this.row = row;
    this.col = col;
    
    this.examinee = null;

    this.assignExaminee = function(student) {
        this.examinee = student;
    };
    
    this.getDeskNum = function() {
        if (this.seatsArrangeStyle === EXAMSEATS_ARRANGE_STYLE.VERTICAL) {
            return this.col * EXAM_SEAT_ROWS + this.row + 1;
        }
        else if (this.seatsArrangeStyle === EXAMSEATS_ARRANGE_STYLE.HORIZONTAL) {
            return this.row * EXAM_SEAT_COLS + this.col + 1;
        } else {
            console.error("Unexpected seats arrange style.");
            return -999;
        }
    };
}