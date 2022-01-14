let rButtonValue = 0;
let previousButton = null;
let x, y, r;

function press(button) {
    $(previousButton).css('background', '#ffffff');
    $(button).css('background', '#c94a4a');
    previousButton = button;
    rButtonValue = button.value;
    changeCanvas(rButtonValue);
}

document.getElementById("checkButton").onclick = function () {
    if (validateY()) {
        sendRequest("button");
    }
};

//Параметр key установливает, тип запроса обработки точки на сервере: "button" - для клика по кнопке, "svg" - для клика по канвасу.
function sendRequest(key) {
    const keys = ["button", "svg"];
    if (keys.includes(key)) {
        fetch(createRequest(key)).then(response => response.text()).then(serverAnswer => {
            document.getElementById("outputTable").innerHTML = document.getElementById("outputTable").innerHTML + serverAnswer;
        }).catch(err => alert("Ошибка HTTP. Повторите попытку позже. " + err));
    } else throw new Error("Не указан способ отправки");
}

function createRequest(key) {
    console.log(r)
    let path = 'controller?x='
        + encodeURIComponent(x) + '&y='
        + encodeURIComponent(y.substring(0, 6)) + '&r='
        + r + '&key='
        + encodeURIComponent(key);
    console.log(r)
    let header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    let init = {method: 'GET', headers: header};
    return new Request(path, init);
}

function validateY() {
    y = document.querySelector("input[name=Y-input]").value.replace(",", "."); //замена разделителя дробной части числа
    y = y.substring(0, 6);
    if (y === undefined) {
        alert("Y не введён");
        return false;
    } else if (!isNumeric(y)) {
        alert("Y не число");
        return false;
    } else if (!((y > -3) && (y < 3))) {
        alert("Y не входит в область допустимых значений");
        return false;
    } else return true;
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}