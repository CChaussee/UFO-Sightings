// from data.js
let tableData = data;
// testing connection
tableData.forEach(function(report){ 
    console.log(`${report.city}: ${report.state}`)});
//reference table body and not table like before
let tbody = d3.select("tbody");    
// when search button is clicked
let submit = d3.select("#filter-btn");
submit.on("click", function() {
    let datetimeSearch = d3.select("#dateime");
    let datetimeValue = d3.datetimeSearch.property("value");
    if (datetimeValue != "") {
        data = data.filter(entry.datetime === datetimeValue);
    }

})
