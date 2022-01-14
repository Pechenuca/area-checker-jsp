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
        url: '/lab2/controller',
        type: 'GET',
        data: str,
        dataType: 'json',
        success: function(data){
            drawPoint(data[0][0], data[0][1],data[0][3]);
        },
        error: function(data) {

        }
    });
}