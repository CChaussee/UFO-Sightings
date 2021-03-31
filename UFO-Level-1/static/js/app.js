// from data.js
const tableData = data;
// testing connection
tableData.forEach(function(report){ 
    console.log(`${report.city}: ${report.state}`)});

let tbody = d3.select("#ufo-table");    

// build table
function buildTable(tableData) {
    tableData.forEach( row => {
        const row1 = tbody.append("tr") 
        let stick = row1.append("td")
        
        Object.values(row).forEach( event => {
            stick.text(event)
        })
        
    
})};
function filtering (tableData) {tbody.html("")
   let stuff = filteredData.filter(tbody => tbody.datetime === inputValue)
buildTable(stuff)
}

let row = d3.select("tbody").selectAll("td");

console.log(tableData)
let submit = d3.select("#filter-btn");
let inputElement = d3.select("#datetime");
let inputValue = inputElement.property("value");
let filteredData = tableData;

let search = d3.select("filter-btn").on("click", filtering);

buildTable(tableData);