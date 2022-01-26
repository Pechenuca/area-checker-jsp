package servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class ControllerServlet extends HttpServlet {

    private final List<Double> xValues = Arrays.asList(-4.0, -3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0, 4.0);
    private final List<Double> rValues = Arrays.asList(1.0, 2.0, 3.0, 4.0, 5.0);

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        try {
            if (req.getParameter("x")!=null && req.getParameter("y")!=null && req.getParameter("r")!=null) {
                long startTime = System.currentTimeMillis();
                getServletContext().setAttribute("startTime", startTime);

                double x = Double.parseDouble(req.getParameter("x"));
                Double.parseDouble(req.getParameter("y"));
                double r = Double.parseDouble(req.getParameter("r"));
                if (!xValues.contains(x)) {
                    throw new Exception("Неверный X!");
                }
                if (!rValues.contains(r)) {
                    throw new Exception("Неверный R!");
                }
                getServletContext().getRequestDispatcher("/areaChecker").forward(req, resp);
            }
        } catch (Exception e) {
            resp.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
        }
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
    }
}