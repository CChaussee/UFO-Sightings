// from data.js
let tableData = data;
//reference table body and not table like before
let tbody = d3.select("tbody");    
// when search button is clicked
let submit = d3.select("#filter-btn");
submit.on("click", function() {
    let datetimeSearch = d3.select("#dateime");
    let datetimeValue = datetimeSearch.property("value");
    if (datetimeValue != "") {
        tableData = tableData.filter(entry.datetime === datetimeValue);
    }

})
console.log(data);

//trying to make table appear
renderTable();
function renderTable(){
    d3.select("#tbodyid").empty();
    console.log(tableData);
    tableData.forEach(function(ufoSightings) {
        console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key,value]) {
            console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}