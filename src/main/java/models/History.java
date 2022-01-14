package models;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class History implements Serializable {
    private List<Point> list;

    public History(){
        list = new ArrayList<Point>();
    }

    public void addPoint(Point point){
        list.add(point);
    }

    public List<Point> getList(){
        return list;
    }

    public void setList(ArrayList<Point> pointList) {
        list = pointList;
    }
}

