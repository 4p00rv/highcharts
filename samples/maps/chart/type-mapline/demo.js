

$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function (data) {

    // Initiate the chart
    Highcharts.mapChart('container', {

        chart: {
            type: 'mapline'
        },

        title: {
            text: 'Chart of type mapline'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 1,
            max: 1000,
            type: 'logarithmic'
        },

        legend: {
            title: {
                text: 'Population per km²'
            }
        },

        series: [{
            data: data,
            mapData: Highcharts.geojson(Highcharts.maps['custom/world']),
            joinBy: ['iso-a2', 'code'],
            name: 'Population density',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            tooltip: {
                valueSuffix: '/km²'
            }
        }]
    });
});