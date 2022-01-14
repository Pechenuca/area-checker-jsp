package servlets;

import models.Point;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;

public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("text/html;charset=UTF-8");
        ArrayList tableRows = (ArrayList) getServletContext().getAttribute("tableRows");
        if (tableRows == null) {
            tableRows = new ArrayList<>();
            getServletContext().setAttribute("tableRows", tableRows);
        }
        double x = Double.parseDouble(req.getParameter("x"));
        String y = req.getParameter("y");
        double r = Double.parseDouble(req.getParameter("r"));
        if(y.length() >= 6 && y.contains(".")){
            y = y.substring(0,6);
        }
        String key = req.getParameter("key");
        try (PrintWriter writer = resp.getWriter()) {
            if (checkData(x, Double.parseDouble(y), r, key)) {
                tableRows.add(new Point(x, Double.parseDouble(y), r, (long) getServletContext().getAttribute("startTime")).toHtmlCode());
                writer.println(tableRows.get(tableRows.size() - 1));
            } else resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
            getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
        } catch (ServletException e) {
            e.printStackTrace();
        }
    }

    private boolean checkData(double x, double y, double r, String key) {
        Double[] xValues = {-3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0};
        Double[] rValues = {1.0, 2.0, 3.0, 4.0, 5.0};
        return Arrays.asList(xValues).contains(x) && (y > -3 && y < 3) && Arrays.asList(rValues).contains(r);
    }
    public static double roundDown6(double d) {
        return Math.floor(d * 1e6) / 1e6;
    }
}