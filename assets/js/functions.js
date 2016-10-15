var dataset = [1,2,3,4,5 ];

d3.select("#chart-01").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("background","cyan")
    .style("height","14px")
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
    .style("height","14px")
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
    .style("height","14px")
    .style("margin-bottom","1px")
    .style("width", function(d) {
        var barWidth = d * 5;
        return barWidth + "px";
    });
