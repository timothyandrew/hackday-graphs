 function dy_initialize() {
  g4 = new Dygraph(
      document.getElementById("chart-div"),
      "http://vps.timothyandrew.net/graphs/src/data.csv",
      {
        rollPeriod: 7,
        showRoller: true,
        errorBars: true,
        valueRange: [50,125]
      }
  );
}
