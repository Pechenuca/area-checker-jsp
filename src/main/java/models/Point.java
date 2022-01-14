package models;

import java.util.Date;

public class Point {

    private final double x, y, r;
    private final boolean coordsStatus;
    private final double workingTime;

    public Point(double x, double y, double r, long startTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        coordsStatus = checkCoordinates(x, y, r);
        workingTime = System.currentTimeMillis() - startTime;
    }

    private boolean checkCoordinates(double x, double y, double r) {
        return  (x >= 0) && (x <= r/2) && (y >= -r) && (y <= 0) ||
                (x <= 0) && (y >= 0) && (y <= (r + x)/2) ||
                (x*x + y*y <= r*r/4) && (x <= 0) && (y <= 0);
    }


    public String toHtmlCode() {
        return "<tr>" +
                "<td>" + x + "</td>" +
                "<td>" + y + "</td>" +
                "<td>" + r + "</td>" +
                "<td style='color: " + ((coordsStatus) ? "green" : "red") + "'>" + coordsStatus + "</td>" +
                "<td>" + new Date() + "</td>" +
                "<td>" + workingTime + "</td>" +
                "</tr>";
    }
}