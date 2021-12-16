// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("button").addEventListener("click", submit)
// })
// let submit = function (e) {
//     if (!checkY()) {
//         e.preventDefault();
//     }
// }
//
// function checkY() {
//     let y = document.getElementById("y");
//     if (y.value.trim() === "") {
//         alert("Y не должен быть пустым!");
//         return false;
//     } else if (!isFinite(y.value.replace(',', '.'))) {
//         alert("Y должен быть числом!");
//     } else if (y.value.replace(',', '.') >= 5 || y.value.replace(',', '.') <= -3) {
//         alert("Y должен быть в диапазоне (-3; 5)");
//         return false;
//     } else {
//         return true;
//     }
// }
//
// function rChoose(r) {
//     const R_field = document.getElementById('R_field');
//     if (R_field.value === r) {
//         R_field.value = "";
//         document.getElementById("r" + r).classList.remove("active");
//     } else {
//         if (R_field.value !== "") {
//             document.getElementById("x" + R_field.value).classList.remove("active");
//         }
//         R_field.value = r;
//         document.getElementById("x" + r).classList.add("active");
//         document.getElementById('labelX').className = "input-group-text";
//     }
//
// }
// const submit_btn = function(e) {
//
//     const rValue = document.getElementById('R_field').value;
//     if (!(checkY() && (rValue !== "") )) e.preventDefault();
//
//     if (rValue === "") document.getElementById('labelX').className = "input-group-text bg-danger text-white";
//
// }
// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('submitButton').addEventListener('click', submit_btn);
// })
let rButtonValue = 0
let previousButton = null

function checkY(){
    document.querySelector('#y_value').addEventListener('keyup',function(){
        let reg = /[^(\-?(\d\.))]/;
        let c = parseFloat(this.value);
        if(this.value.search(reg)!==-1 || c < -3 || c > 3){
            this.value = "";
        }
    })
}

function checkData() {
    let x = document.getElementById('selectX').value
    let y_check = parseFloat(document.getElementById("y_value").value.substring(0, 12).replace(',', '.'));
    let y = !isNaN(y_check) && y_check >= -3 && y_check <= 3;
    let r = rButtonValue !== 0;
    console.log(x,y,rButtonValue, "checkData");

    return x && y && r;
}
function press(button) {
    $(previousButton).css('background', '#ffffff');
    $(button).css('background', '#c94a4a');
    previousButton = button;
    rButtonValue = button.value;
    changeCanvas(rButtonValue);
}



function addRow(x, y, r, result, time, delta) {
    let tbody = document.getElementById("results").getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");

    let tdX = document.createElement("td");
    tdX.appendChild(document.createTextNode(x));

    let tdY = document.createElement("td");
    tdY.appendChild(document.createTextNode(y));

    let tdR = document.createElement("td");
    tdR.appendChild(document.createTextNode(r));

    let tdResult = document.createElement("td");
    tdResult.appendChild(document.createTextNode(result));

    let tdTime = document.createElement("td");
    tdTime.appendChild(document.createTextNode(time));

    let tdDelta = document.createElement("td");
    tdDelta.appendChild(document.createTextNode(delta));

    row.appendChild(tdX);
    row.appendChild(tdY);
    row.appendChild(tdR);
    row.appendChild(tdResult);
    row.appendChild(tdTime);
    row.appendChild(tdDelta);
    tbody.appendChild(row);
}

function getData() {
    let data = "x=" + document.getElementById("selectX").value
    data += "&y=" + parseFloat(document.getElementById("y_value").value.substring(0, 5).replace(',', '.'));
    data += "&r=" + rButtonValue;
    console.log(data + "getData")
    return data;

}
$('#form_send').on('submit', function (event) {
    if (checkData()) {
        let str = getData();
        event.preventDefault();
        submit(str);
    } else {
        alert(getData());
    }

});

function submit(str) {
    $.ajax({
        url: '/lab2/filter',
        type: 'GET',
        data: str,
        dataType: 'json',
        success: function(data){
            addRow(data[0][0], data[0][1], data[0][2], data[0][3], data[0][4], data[0][5]);
            drawPoint(data[0][0], data[0][1],data[0][3]);
        },
        error: function(data) {
            alert("error");
        }
    });
}