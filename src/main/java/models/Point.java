package models;

public class Point {
    private Clock clock;
    private  double x;
    private  double y;
    private  double r;
    private boolean result;

    public Point(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;

    }

    public Clock getClock() {
        return clock;
    }

    public void setClock(Clock clock) {
        this.clock = clock;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }
    //
//    private boolean checkPoint(double x, double y, double r) {
//        return (x >= -r) && (x <= 0) && (y >= 0) && (y <= r) ||
//                ((x * x + y * y <= r * r) && (x <= 0) && (y <= 0)) ||
//                ((x >= 0) && (x <= r) && (y >= -r) && (y <= 0) && (y >= x - r));
//    }


//    public String toJson() {
//        return "[[" +
//                "\"" + x + "\"" + ',' +
//                "\"" + y + "\"" + ',' +
//                "\"" + r + "\"" + ',' +
//                "" + result + "" + ',' +
//                "\"" + timeOfSending + "\"" + ',' +
//                "\"" + timeOfExecuting + "\"" +
//                "]]";
//    }




}