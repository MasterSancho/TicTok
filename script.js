var table;
var mat = [[0,0,0],[0,0,0],[0,0,0]];
var tableSize = 3;
var not = 'nothing.jpg';
var x = 'xImg.jpg';
var o = 'oImg.jpg';
var size100 = '100px';
var noth = '<img src=' + not + ' width=' + size100 + ' height=' + size100 + '>';
var x = '<img src=' + x + ' width=' + size100 + ' height=' + size100 + '>';
var o = '<img src=' + o + ' width=' + size100 + ' height=' + size100 + '>';
var textP1 = "<h2>Player One turn</h2>";
var textP2 = "<h2>Player Two turn</h2>";
var turn = false;
var info = document.getElementById("textInfo");

function play() {
    let rows = document.getElementById("input1").value
    let cols = document.getElementById("input2").value
        turn = !turn;
    mat[rows - 1][cols - 1] = turn ? x : o;
    document.getElementById("textInfo").innerHTML = turn ? textP2 : textP1;
    creatTable()
}

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