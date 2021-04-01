// from data.js
var tableData = data;

//reference table body and not table like before
let tbody = d3.select("tbody");    
// when search button is clicked
let submit = d3.select("#filter-btn");
submit.on("click", function() {
    let citySearch = d3.select("#city");
    let cityValue = citySearch.property("value");
    if (cityValue != "") {
        tableData = tableData.filter(entry.city === cityValue);
    }    
    let stateSearch = d3.select("#state");
    let stateValue = stateSearch.property("value");
    if (stateValue != "") {
        tableData = tableData.filter(entry.state === stateValue)
    }    
    let countrySearch = d3.select("#country");
    let countryValue = countrySearch.property("value");
    if (countryValue != "") {
        tableData = tableData.filter(entry.country === countryValue)
    }    
    let shapeSearch = d3.select("#shape");
    let shapeValue = shapeSearch.property("value");
    if (shapeValue != "") {
        tableData = tableData.filter(entry.shape === shapeValue)
    }    
    let durationSearch = d3.select("#duration");
    let durationValue = durationSearch.property("value");
    if (durationValue != "") {
        tableData = tableData.filter(entry.duration === durationValue)
    }
})
console.log(data);
//have table cleared inorder to search
//datetimeSearch.on("change", function () {
    //var table = d3.select("tbody").selectAll("tr").remove()
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