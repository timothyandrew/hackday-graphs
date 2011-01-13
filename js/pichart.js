 function gonogo_initialize() {
    // Callback that creates and populates a data table, 
    // instantiates the pie chart, passes in the data and
    // draws it.
     var query = new google.visualization.Query('https://spreadsheets.google.com/ccc?key=tM-rDFuQX-DhdPG6_TTglKQ#gid=0') ;
  
     query.setQuery('SELECT A,SUM(B) GROUP BY A');
         
      // Send the query with a callback function.
     query.send(gonogo_handleQueryResponse); 
}

function gonogo_handleQueryResponse(response) {
     if (response.isError()) {
             alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
              return;
      }
       var data = response.getDataTable();
       // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, {width: 800, height: 440, is3D: true, title: 'GoNoGo PiChart', colors: ['FF0000','FF6600','FF9900','99CC00', '66FF00']});
}

