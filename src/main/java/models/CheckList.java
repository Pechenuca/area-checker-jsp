package models;

import java.util.ArrayList;
import java.util.List;

public class CheckList {
    private List<Point> points;

    public CheckList() {
        points = new ArrayList<Point>();
    }

    public List<Point> getChecks() {
        return points;
    }

    public void add(Point check) {
        points.add(check);
    }

}