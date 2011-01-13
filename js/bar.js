 function bar_initialize() {
      // Callback that creates and populates a data table, 
      // instantiates the pie chart, passes in the data and
      // draws it.

      var query = new google.visualization.Query('https://spreadsheets.google.com/ccc?key=tZfVnizsjpROyOigrbY8Ncw&hl=en#gid=0') ;
    
       //query.setQuery('SELECT A,B,C,D,E');
           
        // Send the query with a callback function.
       query.send(bar_handleQueryResponse); 
  }
  
   function bar_handleQueryResponse(response) {
       if (response.isError()) {
               alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
                return;
        }

        var data = response.getDataTable();

        // Instantiate and draw our chart, passing in some options.
       // var chart = new google.visualization.ImageChart(document.getElementById('chart_div'));
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, {width: 700, height: 700,
                          hAxis: {title: 'Year', titleTextStyle: {color: 'black'}},
                          vAxis: {title: 'Number of Jiras', titleTextStyle: {color: 'black'}},                          
                          isStacked: true,
                          colors: ['FF0000','FF6600','FF9900','99CC00', '66FF00']
                         });

       //chart.draw(data, options);
      }
