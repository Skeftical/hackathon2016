var dataset = [15,30,45,60];

var idFirstChart = 0;
d3.select("#chart-01").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", function(){
        var temp = "bar-"+idFirstChart;
        idFirstChart++;
        return temp;
    })
    .style("background","cyan")
    .style("height","24px")
    .style("margin-bottom","1px")
    .style("width", function(d) {
        var barWidth = d * 5;
        return barWidth + "px";
    });

d3.select("#chart-02").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("background","red")
    .style("height","24px")
    .style("margin-bottom","1px")
    .style("width", function(d) {
        var barWidth = d * 5;
        return barWidth + "px";
    });

d3.select("#chart-03").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("background","yellow")
    .style("height","24px")
    .style("margin-bottom","1px")
    .style("width", function(d) {
        var barWidth = d * 5;
        return barWidth + "px";
    });
