var debug = {};


debug.showAvailableCells = function(availableCells) {
    // clear html table contents first
    for (var weekday = 1; weekday <= 5; weekday++) {
        for (var classOrder = 1; classOrder <= 8; classOrder++) {
            var cells = getTableCells("debug-table", weekday, classOrder);
            cells[0].textContent = "";
            cells[1].textContent = "";
        }
    }
    
    for (var i = 0; i < availableCells.length; i++) {
        var cells = getTableCells("debug-table", availableCells[i].weekday, availableCells[i].classOrder);
        cells[0].textContent = "√";
        //cells[1].textContent = courseObj.teacher ? courseObj.teacher.姓名 : "";
    }
};