<%@ page import="models.Point" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>WebLab2</title>
    <link rel="stylesheet" href="assets/styles.css">
</head>

<body onload="canvasInit(2.5)">
<table class="main-table" align="center">
    <p title="Hello" class="main-table">
        Epifanov Maxim, P3232,
    </p>


    <p class="main-table"> Enter values</p>
    <div class="main-table">
        <form id="form_send" method="GET" action="">
            <p class="variable"> X=
                <select id="selectX" name="x_value">
                    <option value="-3">-3</option>
                    <option value="-2">-2</option>
                    <option value="-1">-1</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

            <p class="variable"> Y= <input id="y_value" type="text" onkeyup="checkY()"><br></p>

            <p class="r_value_field"> R=
                <input type="button" name="r_value" value="1" onclick="press(this)">
                <input type="button" name="r_value" value="2" onclick="press(this)">
                <input type="button" name="r_value" value="3" onclick="press(this)">
                <input type="button" name="r_value" value="4" onclick="press(this)">
                <input type="button" name="r_value" value="5" onclick="press(this)">
            </p>
            <button type="submit" style="width: 100px; height: 30px">SEND</button>

        </form>
    </div>
    <div>
        <canvas id="cns" width="310px" height="310px"></canvas>
    </div>

    <table id="results">
        <tbody>
        <tr>
            <td class="tableWithBorder">X</td>
            <td class="tableWithBorder">Y</td>
            <td class="tableWithBorder">R</td>
            <td class="tableWithBorder">Result</td>
            <td class="tableWithBorder">Time of sending</td>
            <td class="tableWithBorder">Script working time</td>
        </tr>
        <%
            List<Point> points = (List<Point>) request.getServletContext().getAttribute("points");
            if (points != null) {
                for (int i = 0; i < points.size(); i++) {
                    out.println("<tr>");
                    out.println("td class=\"tableWithBorder\"" + points.get(i).getX() + "</td>");
                    out.println("td class=\"tableWithBorder\"" + points.get(i).getY() + "</td>");
                    out.println("td class=\"tableWithBorder\"" + points.get(i).getR() + "</td>");
                    out.println("td class=\"tableWithBorder\"" + points.get(i).isResult() + "</td>");
                    out.println("td class=\"tableWithBorder\"" + points.get(i).getTimeOfSending() + "</td>");
                    out.println("td class=\"tableWithBorder\"" + points.get(i).getTimeOfExecuting() + "</td>");
                }
            }
        %>
        </tbody>
    </table>
    </div>
</table>
<script src="assets/js/jquery-3.6.0.min.js"></script>
<script src="assets/js/canvas.js"></script>
<script src="assets/js/scripts.js"></script>
</body>
</html>
