// let ctx = document.getElementById('canvas').getContext('2d')
// const width = ctx.canvas.width;
// const height = ctx.canvas.height;
// let R = height / 3;
//
// // side boundaries of the logical viewport
// const maxX = 10;
// const minX = -10;
// const maxY = maxX * height / width;
// const minY = minX * height / width
//
// // Returns the physical x-coordinate of a logical x-coordinate:
// function getPhysicalX(x) {
//     return (x - minX) / (maxX - minX) * width;
// }
//
// // Returns the physical y-coordinate of a logical y-coordinate:
// function getPhysicalY(y) {
//     return height - (y - minY) / (maxY - minY) * height;
// }
//
//
// /*
// * Taking a life the canvas
// * */
// function drawCanvas() {
//     if (!ctx) {
//         alert('your browser doesn\'t support canvas');
//         return;
//     }
//
//     ctx.clearRect(0, 0, width, height);
//     ctx.font = '8px sans-serif';
//     ctx.strokeStyle = "rgba(255,255,255,0.8)";
//     ctx.fillStyle = "rgba(255,255,255,0.8)";
//
//     ctx.beginPath()
//     ctx.moveTo(getPhysicalX(0), getPhysicalY(0))
//     ctx.arc(getPhysicalX(0), getPhysicalY(0), R, Math.PI, Math.PI / 2, true);
//     ctx.closePath()
//     ctx.fill()
//     ctx.stroke()
//
// //square in the left up
//     ctx.fillRect(getPhysicalX(0) - R, getPhysicalY(0) - R, R, R)
//
// //triangle*
//     ctx.beginPath();
//     ctx.moveTo(getPhysicalX(0), getPhysicalY(0) + R);
//     ctx.lineTo(getPhysicalX(0) + R, getPhysicalY(0));
//     ctx.lineTo(getPhysicalX(0), getPhysicalY(0));
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
//
//
//     //draw Axis
//     const limitMargin = 15;
//     ctx.save();
//     ctx.strokeStyle = "black";
//     ctx.fillStyle = "black";
//
//     // +Y axis
//     ctx.beginPath();
//     ctx.moveTo(getPhysicalX(0), getPhysicalY(0));
//     ctx.lineTo(getPhysicalX(0), getPhysicalY(maxY) + limitMargin);
//     ctx.stroke();
//
//     // -Y axis
//     ctx.beginPath();
//     ctx.moveTo(getPhysicalX(0), getPhysicalY(0));
//     ctx.lineTo(getPhysicalX(0), getPhysicalY(minY) - limitMargin);
//     ctx.stroke();
//
//     // +X axis
//     ctx.beginPath();
//     ctx.moveTo(getPhysicalX(0), getPhysicalY(0));
//     ctx.lineTo(getPhysicalX(maxX) + limitMargin, getPhysicalY(0));
//     ctx.stroke();
//
//     // -X axis
//     ctx.beginPath();
//     ctx.moveTo(getPhysicalX(0), getPhysicalY(0));
//     ctx.lineTo(getPhysicalX(minX) - limitMargin, getPhysicalY(0));
//     ctx.stroke();
//
//     // axis names and arrows
//     ctx.fillText('X', width - limitMargin, getPhysicalY(0) - 3)
//     ctx.fillText('Y', getPhysicalX(0) - 10, maxY + limitMargin)
//
//     // drawing tick marks
//     let valR = $('input[name="r"]:checked').val();
//     const startTickX = width / 1.95, finishTickX = width / 2.05;
//     const startTickY = height / 1.9, finishTickY = height / 2.1;
//
//     // Y axis tick marks
//     ctx.fillText(-valR / 2, width / 2.05 + 8, getPhysicalY(0) + R / 2 + 2)
//     ctx.fillText(-valR, width / 2.05 + 8, getPhysicalY(0) + R + 2)
//     ctx.fillText(valR / 2, width / 2.05 + 8, getPhysicalY(0) - R / 2 + 2)
//     ctx.fillText(valR, width / 2.05 + 8, getPhysicalY(0) - R + 2)
//     ctx.beginPath();
//     ctx.moveTo(startTickX, getPhysicalY(0) + R);
//     ctx.lineTo(finishTickX, getPhysicalY(0) + R);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(startTickX, getPhysicalY(0) + R / 2);
//     ctx.lineTo(finishTickX, getPhysicalY(0) + R / 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(startTickX, getPhysicalY(0) - R);
//     ctx.lineTo(finishTickX, getPhysicalY(0) - R);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(startTickX, getPhysicalY(0) - R / 2);
//     ctx.lineTo(finishTickX, getPhysicalY(0) - R / 2);
//     ctx.stroke();
//
//     // X tick marks
//     ctx.fillText(-valR / 2, getPhysicalX(0) - R / 2 - 6, height / 2.2)
//     ctx.fillText(-valR, getPhysicalX(0) - R - 3, height / 2.2)
//     ctx.fillText(valR / 2, getPhysicalX(0) + R / 2 - 6, height / 2.2)
//     ctx.fillText(valR, getPhysicalX(0) + R - 3, height / 2.2)
//     ctx.beginPath();
//     ctx.moveTo(getPhysicalX(0) + R, startTickY);
//     ctx.lineTo(getPhysicalX(0) + R, finishTickY);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(getPhysicalX(0) + R / 2, startTickY);
//     ctx.lineTo(getPhysicalX(0) + R / 2, finishTickY);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(getPhysicalX(0) - R, startTickY);
//     ctx.lineTo(getPhysicalX(0) - R, finishTickY);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(getPhysicalX(0) - R / 2, startTickY);
//     ctx.lineTo(getPhysicalX(0) - R / 2, finishTickY);
//     ctx.stroke();
//
//     drawPoints();
// }
//
//
// function drawPoint(x, y, result) {
//     let canvas = document.getElementById("canvas"),
//         context = canvas.getContext("2d");
//     if (result === "false") {
//         context.fillStyle = "#FF2A1F";
//     } else {
//         context.fillStyle = "#5FFF33";
//     }
//     context.beginPath();
//     context.arc(x, y, 5, 0, 2 * Math.PI);
//     context.fill();
//     context.stroke();
//     context.closePath();
// }
// function drawPoints() {
//     let Xs = Array.from(document.getElementsByClassName("the_X")).map(v => v.innerHTML);
//     let Ys = Array.from(document.getElementsByClassName("the_Y")).map(v => v.innerHTML);
//     let Rs = Array.from(document.getElementsByClassName("the_R")).map(v => v.innerHTML);
//     let Results = Array.from(document.getElementsByClassName("the_Result")).map(v => v.innerHTML);
//     for (let i = 0; i < Xs.length; i++) {
//         drawPoint(Xs[i] / Rs[i] * 400 / 2 + 250, Ys[i] / Rs[i] * (-400) / 2 + 250, Results[i]);
//     }
// }
//
let r_value;
function canvasInit(coeff){
    let canvas = document.getElementById("cns");
    canvas.addEventListener('mousedown', event => shoot(canvas, event));
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    //console.log(width,height);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 1.0;
    ctx.fillRect(0, 0, width, height);
    r_value = coeff;
    drawAxis(ctx,width,height,coeff);
    drawText(ctx,width,height);
}

function drawAxis(ctx,width,height,coeff){
    //square
    ctx.fillRect(width - coeff, height - coeff, coeff, coeff)

    //rec
    ctx.beginPath();
    ctx.moveTo(65+(3-coeff)*30,height/2);
    ctx.lineTo(65+(3-coeff)*30, 65+(3-coeff)*30);
    ctx.lineTo(width/2, 65+(3-coeff)*30);
    ctx.lineTo(width/2, height/2);
    ctx.closePath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();

    //triangle
    ctx.beginPath();
    ctx.moveTo(width/2, height + coeff);
    ctx.lineTo(width + coeff, height);
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //Y
    ctx.beginPath();
    ctx.moveTo(width/2,0);
    ctx.lineTo(width/2, height);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.stroke();

    //X
    ctx.beginPath();
    ctx.moveTo(0,height/2);
    ctx.lineTo(width, height/2);
    ctx.closePath();
    ctx.stroke();

}

function drawText(ctx,width,height){
    ctx.font = "bold 7.5px Verdana";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.fillText("5",width/2+2.5,7.5);
    ctx.fillText("4",width/2+2.5,35);
    ctx.fillText("3",width/2+2.5,65);
    ctx.fillText("2",width/2+2.5,95);
    ctx.fillText("1",width/2+2.5,125);

    ctx.fillText("-1",width/2+2.5,185);
    ctx.fillText("-2",width/2+2.5,215);
    ctx.fillText("-3",width/2+2.5,245);
    ctx.fillText("-4",width/2+2.5,275);
    ctx.fillText("-5",width/2+2.5,305);

    ctx.fillText("0",width/2+2.5,height/2+10);

    ctx.fillText("-5",5,height/2+10);
    ctx.fillText("-4",35,height/2+10);
    ctx.fillText("-3",65,height/2+10);
    ctx.fillText("-2",95,height/2+10);
    ctx.fillText("-1",125,height/2+10);
    ctx.fillText("1",185,height/2+10);
    ctx.fillText("2",215,height/2+10);
    ctx.fillText("3",245,height/2+10);
    ctx.fillText("4",275,height/2+10);
    ctx.fillText("5",302.5,height/2+10);
}
function changeCanvas(value){
    let canvas = document.getElementById("cns");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    //console.log(width,height);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 1.0;
    ctx.fillRect(0, 0, width, height);
    r_value = value;
    drawAxis(ctx,width,height,value);
    drawText(ctx,width,height);
}

function shoot(canvas, event){
    if (rButtonValue!==0){
        let x = event.offsetX;
        let y = event.offsetY;
        let x_out = (x-155) / 30;
        x_out = x_out.toString().substring(0,5);
        let y_out = (155-y)/30;
        y_out = y_out.toString().substring(0,5);
        let str = "x=";
        str += x_out;
        str += "&y=";
        str += y_out;
        str += "&r=";
        str += r_value;
        event.preventDefault();
        submit(str);
    }else{
        alert("Choose R firstly");
    }

}

function drawPoint(x,y,result){
    let canvas = document.getElementById("cns");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    let x_draw = width/2 + x*30;
    let y_draw = height/2 - y*30;
    ctx.beginPath();
    ctx.arc(x_draw,y_draw,2.5,0, Math.PI*2);
    ctx.closePath();
    if (result===true){
        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";
    }else{
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
    }
    ctx.fill();
    ctx.stroke();
}