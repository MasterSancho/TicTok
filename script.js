var table;
var mat = [[0,0,0],[0,0,0],[0,0,0]];
var tableSize = 3;

function creatTable() {
    table = '<table border=1>';
    for (let r = 0; r < tableSize; r++) {
        table += '<tr>';
        for (let c = 0; c < tableSize; c++) {
            table += '<td>' + mat[r][c];
        }
    }
    table += '</table>';
    document.getElementById("display").innerHTML = table;
    document.getElementById("display").style.marginLeft = '40%';
    console.log(table);
}

creatTable()