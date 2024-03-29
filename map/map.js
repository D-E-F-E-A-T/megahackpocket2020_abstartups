(function(){
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Estado', 'Startups em atividade', 'Fundadoras mulheres'],
      ['São Paulo', 200, 25],
      ['Minas Gerais', 80, 15],
      ['Rio de Janeiro', 40, 11],
      ['Amazonas', 150, 30],
      ['Bahia', 60, 10],
      ['Piauí', 70, 1]
    ]);

    var options = {
        region: 'BR',
        resolution: 'provinces',
        colorAxis: {
            colors: [
                '#00D99D',
                '#066'
            ]
        }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
})()