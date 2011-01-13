  function cloud_initialize()  {
      // Callback that creates and populates a data table, 
      // instantiates the pie chart, passes in the data and
      // draws it.

      var query = new google.visualization.Query('https://spreadsheets.google.com/ccc?key=tsCh7bnp0GzaZAJJO8kYVKg#gid=0') ;
    
       //query.setQuery('SELECT *');
           
        // Send the query with a callback function.
       query.send(cloud_handleQueryResponse); 
   }

    function cloud_handleQueryResponse(response) {
       if (response.isError()) {
               alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
                return;
        }

        var data = response.getDataTable();

       // Instantiate our table object.
        var vis = new gviz_word_cumulus.WordCumulus(document.getElementById('chart_div'));

        // Draw our table with the data we created locally.
        vis.draw(data, {text_color: '#00ff00', speed: 100, width:500, height:500});
       }
