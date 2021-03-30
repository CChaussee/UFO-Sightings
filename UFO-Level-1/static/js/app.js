// from data.js
var tableData = data;
// testing connection
tableData.forEach(function(report){ 
    console.log(`${report.city}: ${report.state}`);

var tbody = d3.select("#ufo-tbody");    

// build table
function buildTable (tableData) {
    tableData.forEach(function(ufoReport) {
        var row = tableData.append("tr")
        row.append("td").attr('scope', 'row').text(ufoReport.datetime);
        row.append("td").text(ufoReport.city);
        row.append("td").text(ufoReport.state);
        row.append("td").text(ufoReport.country);
        row.append("td").text(ufoReport.shape);
        row.append("td").text(ufoReport.comments);
    })
    });
}