package servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class ControllerServlet extends HttpServlet {

    private final List<Double> xValues = Arrays.asList(-3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0);
    private final List<Double> rValues = Arrays.asList(1.0, 2.0, 3.0, 4.0, 5.0);

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        try {
            long startTime = System.currentTimeMillis();
            getServletContext().setAttribute("startTime", startTime);
            double x = getValue(req, "x");
            getValue(req, "y");
            double r = getValue(req, "r_value");
            String key = req.getParameter("key");
            if(key.equals("button")){
                if (!xValues.contains(x)) {
                    throw new Exception("Неверный X!");
                }
                if (!rValues.contains(r)) {
                    throw new Exception("Неверный R!");
                }
            }
            getServletContext().getRequestDispatcher("/areaChecker").forward(req, resp);
        } catch (Exception e) {
            resp.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
        }
    }

    public double getValue(HttpServletRequest request, String parameter) {
        return Double.parseDouble(request.getParameter(parameter).replace(",", "."));
    }
}