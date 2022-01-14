<%@ page import="models.Point" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
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
                <select id="selectX" name="x">
                    <option value="-3">-3</option>
                    <option value="-2">-2</option>
                    <option value="-1">-1</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

            <p class="variable"> Y= <input id="y_value" type="text" name="Y-input" onkeyup="validateY()"><br></p>

            <p class="r_value_field"> R=
                <input type="button" name="r" value="1" onclick="press(this)">
                <input type="button" name="r" value="2" onclick="press(this)">
                <input type="button" name="r" value="3" onclick="press(this)">
                <input type="button" name="r" value="4" onclick="press(this)">
                <input type="button" name="r" value="5" onclick="press(this)">
            </p>
            <button id="checkButton" style="width: 100px; height: 30px">SEND</button>

        </form>
    </div>
    <div>
        <canvas id="cns" width="310px" height="310px"></canvas>
    </div>

    </tbody>
</table>
</div>
</table>
<table id="outputTable" class="outputStub" cellpadding="13.8%">
    <tr>
        <td>x</td>
        <td>y</td>
        <td>r</td>
        <td>Попадание</td>
        <td>Текущее время</td>
        <td>Время работы, мс</td>
    </tr>
    <%
        List tableRows = (List) config.getServletContext().getAttribute("tableRows");
        if (tableRows == null) {
            tableRows = new ArrayList<>();
            config.getServletContext().setAttribute("tableRows", tableRows);
        } else {
            for (Object tableRow: tableRows) { %>
    <%= tableRow%>
    <%}%>
    <%}%>
</table>
<script src="assets/js/jquery-3.6.0.min.js"></script>
<script src="assets/js/canvas.js"></script>
<script src="assets/js/scripts.js"></script>
</body>
</html>