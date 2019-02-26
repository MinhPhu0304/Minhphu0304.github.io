var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["C++", "Javascript", "Boostrap", "Html","Communication"],
        datasets: [{
            label: "Confident Level",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [5,7.5,5.5,8.5,9],
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  }});