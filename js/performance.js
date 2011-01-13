function perf_initialize() {
    // Callback that creates and populates a data table, 
    // instantiates the pie chart, passes in the data and
    // draws it.
     var query = new google.visualization.Query('https://spreadsheets.google.com/ccc?key=tlXbDEtnVxjl5XyK1d4_uOA&hl=en&authkey=CMaisdQE#gid=0') ;
  
     //query.setQuery('SELECT B,C,D');
         
      // Send the query with a callback function.
     query.send(perf_handleQueryResponse); 
}

function perf_handleQueryResponse(response) {
    if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
             return;
     }
      var data = response.getDataTable();
      // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
     chart.draw(data, {width: 700, height: 700, title: 'Company Performance',
                       vAxis: {title: 'Year', titleTextStyle: {color: 'black'}},
				  hAxis: {title: 'Number of Employees', titleTextStyle: {color: 'black'}},
				  legend: 'bottom'						  
                  });
}
