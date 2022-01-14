package models;

import java.util.List;

public class TableMaker {
    public static String createTable(Object checkList) {
        if(checkList==null){
            return "";
        }
        CheckList checking=(CheckList) checkList;
        StringBuilder table = new StringBuilder("<table align=\"center\" class=\"tableWithBorder\">\n" +
                "    <tr>\n" +
                "        <td class=\"tableWithBorder\"> " +
                "        <td class=\"tableWithBorder\"> " +
                "        <td class=\"tableWithBorder\"> " +
                "        <td class=\"tableWithBorder\"> " +
                "        <td class=\"tableWithBorder\"> " +
                "    </tr>");
        for (Point points : checking.getChecks()) {
                table.append("<tr>");
                table.append("td class=\"tableWithBorder\"").append(points.getX()).append(("</td>"));
                table.append("td class=\"tableWithBorder\"").append(points.getY()).append(("</td>"));
                table.append("td class=\"tableWithBorder\"").append(points.getR()).append(("</td>"));
                table.append("td class=\"tableWithBorder\"").append(points.isResult()).append(("</td>"));
                table.append("<th>").append(points.getClock().getDate()).append("</th>");
                table.append("</tr></tbody>");
        }
        table.append("</table>");
        return table.toString();
    }
}