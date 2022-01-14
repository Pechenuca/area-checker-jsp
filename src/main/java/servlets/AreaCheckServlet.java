package servlets;

import models.CheckList;
import models.Clock;
import models.Model;
import models.Point;


import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;


public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Clock clock = new Clock();
        clock.start();
        double x = Double.parseDouble(req.getParameter("x"));
        double y = Double.parseDouble(req.getParameter("y"));
        double r = Double.parseDouble(req.getParameter("r"));
        if (!checking(x, y, r)) {
            getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
        }
        Point point = new Point(x, y, r);
        point.setResult(checkingTheArea(x, y, r));
        clock.stop();
        point.setClock(clock);
        CheckList answerList = (CheckList) getServletContext().getAttribute("answerList");
        if (answerList == null) {
            getServletContext().setAttribute("answerList", new CheckList());
            answerList = (CheckList) getServletContext().getAttribute("answerList");
        }
        answerList.add(point);
        getServletContext().setAttribute("answerList", answerList);
        PrintWriter writer = resp.getWriter();
        writer.write(answerPage(point));
        writer.close();
    }

    public String answerPage(Point point) {
        String result = point.isResult() ? "Yes!" : "No!";
        String answer = "<html lang=\"ru\">\n" +
                "<head>\n" +
                "    <meta charset=\"utf-8\">\n" +
                "    <title>WebLab2</title>\n" +
                "    <link rel=\"stylesheet\" href=\"assets/styles.css\">\n" +
                "</head>\n" +
                "\n" +
                "<body onload=\"canvasInit(2.5)\">\n" +
                "<table class=\"main-table\" align=\"center\">\n" +
                "    <p title=\"Hello\" class=\"main-table\">\n" +
                "        Epifanov Maxim, P3232,\n" +
                "    </p>\n" +
                "\n" +
                "\n" +
                "    <p class=\"main-table\"> Enter values</p>\n" +
                "    <div class=\"main-table\">\n" +
                "        <form id=\"form_send\" method=\"GET\" action=\"\">\n" +
                "            <p class=\"variable\"> X=\n" +
                "                <select id=\"selectX\" name=\"x_value\">\n" +
                "                    <option value=\"-3\">-3</option>\n" +
                "                    <option value=\"-2\">-2</option>\n" +
                "                    <option value=\"-1\">-1</option>\n" +
                "                    <option value=\"0\">0</option>\n" +
                "                    <option value=\"1\">1</option>\n" +
                "                    <option value=\"2\">2</option>\n" +
                "                    <option value=\"3\">3</option>\n" +
                "                </select>\n" +
                "\n" +
                "            <p class=\"variable\"> Y= <input id=\"y_value\" type=\"text\" onkeyup=\"checkY()\"><br></p>\n" +
                "\n" +
                "            <p class=\"r_value_field\"> R=\n" +
                "                <input type=\"button\" name=\"r_value\" value=\"1\" onclick=\"press(this)\">\n" +
                "                <input type=\"button\" name=\"r_value\" value=\"2\" onclick=\"press(this)\">\n" +
                "                <input type=\"button\" name=\"r_value\" value=\"3\" onclick=\"press(this)\">\n" +
                "                <input type=\"button\" name=\"r_value\" value=\"4\" onclick=\"press(this)\">\n" +
                "                <input type=\"button\" name=\"r_value\" value=\"5\" onclick=\"press(this)\">\n" +
                "            </p>\n" +
                "            <button type=\"submit\" style=\"width: 100px; height: 30px\">SEND</button>\n" +
                "\n" +
                "        </form>\n" +
                "    </div>\n" +
                "    <div>\n" +
                "        <canvas id=\"cns\" width=\"310px\" height=\"310px\"></canvas>\n" +
                "    </div>\n" +
                "        <%=TableMaker.createTable(getServletConfig().getServletContext().getAttribute(\"answerList\"))%>\n" +
                "        </tbody>\n" +
                "    </table>\n" +
                "    </div>\n" +
                "</table>\n" +
                "<script src=\"assets/js/jquery-3.6.0.min.js\"></script>\n" +
                "<script src=\"assets/js/canvas.js\"></script>\n" +
                "<script src=\"assets/js/scripts.js\"></script>\n" +
                "</body>\n" +
                "</html>\n";
        return answer;
    }

    private boolean checkingTheArea(double x, double y, double r) {
        return (x >= -r) && (x <= 0) && (y >= 0) && (y <= r) ||
                ((x * x + y * y <= r * r) && (x <= 0) && (y <= 0)) ||
                ((x >= 0) && (x <= r) && (y >= -r) && (y <= 0) && (y >= x - r));
    }

    public boolean checking(double x, double y, double r) {
        return (x >= -3) && (x <= 3) && (y > -3) && (y < 3) && (r >= 1) && (r <= 5);
    }
}