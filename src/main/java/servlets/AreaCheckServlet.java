package servlets;

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
        long timeStart = System.nanoTime();
        PrintWriter out  = resp.getWriter();
        Model model = Model.getInstance();

        try{
            double x = Double.parseDouble(req.getParameter("x"));
            double y = Double.parseDouble(req.getParameter("y"));
            double r = Double.parseDouble(req.getParameter("r"));
            Point point = new Point(x, y, r, new SimpleDateFormat("HH:mm:ss").format(new Date()), String.valueOf((System.nanoTime() - timeStart)/ 1000000d));
            ServletContext servletContext = getServletContext();
            model.add(point);
            servletContext.setAttribute("points", model.getPoints());
            out.println(point.toJson());
        }catch (NumberFormatException e){
            out.println("Some incorrect data");
        }

    }

//    public boolean checkingTheArea(double x, double y, double r) {
//        return ((x >= -r) && (x <= 0) && (y >= 0) && (y <= r) ||
//                ((x * x + y * y <= r * r) && (x <= 0) && (y <= 0)) ||
//                ((x >= 0) && (x <= r) && (y >= -r) && (y <= 0) && (y >= x - r)));
//    }
//
//    public boolean checking(double x, double y, double r) {
//        return (x >= -3) && (x <= 3) && (y > -3) && (y < 3) && (r >= 1) && (r <= 5);
//    }
}