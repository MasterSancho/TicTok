var table;
var mat = [[0,0,0],[0,0,0],[0,0,0]];
var tableSize = 3;

function creatTable() {
    table = '<table border=1>';
    for (let rows = 0; rows < tableSize; rows++) {
        table += '<tr>';
        for (let cols = 0; cols < tableSize; cols++) {
            table += '<td>' + mat[r][c];
        }
    }
    table += '</table>';
    document.getElementById("display").innerHTML = table;
}