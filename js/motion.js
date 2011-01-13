 function motion_initialize() {
    // Callback that creates and populates a data table, 
    // instantiates the pie chart, passes in the data and
    // draws it.
     var query = new google.visualization.Query('https://spreadsheets.google.com/a/timothyandrew.net/ccc?key=tKxJFM4nr6xJSBl9sPTeuUw&authkey=CNfx0pQO#gid=0') ;
  
     //query.setQuery('SELECT A,SUM(B) GROUP BY A');
         
      // Send the query with a callback function.
     query.send(motion_handleQueryResponse); 
}

function motion_handleQueryResponse(response) {
     if (response.isError()) {
             alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
              return;
      }
       var data = response.getDataTable();
       // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.MotionChart(document.getElementById('chart_div'));
      chart.draw(data, {width: 800, height: 600, is3D: true, title: 'GoNoGo PiChart'});
}
