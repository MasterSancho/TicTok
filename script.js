var table;
var mat = [[0,0,0],[0,0,0],[0,0,0]];
var tableSize = 3;
var not = 'nothing.jpg';
var size100 = '100px';
var noth = '<img src=' + not + ' width=' + size100 + ' height=' + size100 + '>';
var textP1 = "<h2>Player One turn</h2>";
console.log("noth.value")

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
    document.getElementById("display").style.marginLeft = '35%';
    console.log(table);
}

function ofNothing() {
    var not = 'nothing.jpg';
    for (let r = 0; r < tableSize; r++) {
        for (let c = 0; c < tableSize; c++) {
            mat[r][c] = noth;
        }
    }
    document.getElementById("textInfo").innerHTML = textP1;
}

ofNothing()
creatTable()