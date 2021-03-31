// from data.js
const tableData = data;
// testing connection
tableData.forEach(function(report){ 
    console.log(`${report.city}: ${report.state}`);

let tbody = d3.select("#ufo-table");    

// build table
function buildTable (tableData) {
    tableData.forEach(function(ufoReport) {
        let row = tableData.append("tr")
        row.append("td").attr('scope', 'row').text(ufoReport.datetime);
        row.append("td").text(ufoReport.city);
        row.append("td").text(ufoReport.state);
        row.append("td").text(ufoReport.country);
        row.append("td").text(ufoReport.shape);
        row.append("td").text(ufoReport.comments);
    })
    }
})
console.log(tableData)
let submit = d3.select("#filter-btn");
let row = d3.select("tbody").selectAll("td");
let inputElement = d3.select("#datetime");
let inputValue = inputElement.property("value");
let filteredData = tableData;
let filtered = filteredData.filter(tbody => tbody.datetime === inputValue);

console.log(filteredData);