 function annotated_initialize() {
    // Callback that creates and populates a data table, 
    // instantiates the pie chart, passes in the data and
    // draws it.
     var query = new google.visualization.Query('https://spreadsheets0.google.com/a/timothyandrew.net/ccc?key=tJ34cdN6CtJB1FailyuuIeg&authkey=CPfMqaEH');
  
     //query.setQuery('SELECT A,SUM(B) GROUP BY A');
         
      // Send the query with a callback function.
     query.send(annotated_handleQueryResponse); 
}

function annotated_handleQueryResponse(response) {
     if (response.isError()) {
             alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
              return;
      }
      var data = response.getDataTable();
       // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.AnnotatedTimeLine(document.getElementById('chart_div'));
      chart.draw(data, {'displayAnnotations': false});
}
