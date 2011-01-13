function jiracount_initialize() {
  //var visualization = new google.visualization.LineChart(container);
  // Replace the data source URL on next line with your data source URL.
  var query = new google.visualization.Query('https://spreadsheets.google.com/a/timothyandrew.net/ccc?key=tl5K_J8zFDB3FehtoB7sZXg&authkey=CNum4YcC');
  
  // Optional request to return only column C and the sum of column B, grouped by C members.
  //query.setQuery('select C, A group by B');
  
  // Send the query with a callback function.
  query.send(jiracount_handleQueryResponse);
}

function jiracount_handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, {width: 800, height: 240, is3D: true});
}
