var leg_st = [];
var leg_st_pie = [];
var leg_st_low_pie = [];
var angle_count_pie = [];
var i=0;
var n=0;

$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:5000/legmotion",
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
        console.log(res);
        for(i in res){
          leg_st = [];
          leg_st_pie = [];
          leg_st_low_pie = [];
          angle_count_pie = [];
            var x = res[i].date;
            var g = res[i].pattern;
             console.log(g);
             for(n in g){
                 z = g[n].angle;
                 leg_st.push(z);

                if(z>=90){
                  leg_st_pie.push(z);
                } 
                if(z<90){
                  leg_st_low_pie.push(z);
              }
             }

             var valueanglehigh = leg_st_pie.length;
             var valueanglelow = leg_st_low_pie.length;
       
         
             angle_count_pie.push(valueanglehigh,valueanglelow);

        $('#accordion').append('<div class="card mb-3"><div class="card-header" id="s'+i+'"><h5 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#n'+i+'" aria-expanded="true" aria-controls="collapseOne">'+x+'</button></h5></div><div id="n'+i+'" class="collapse" aria-labelledby="s'+i+'" data-parent="#accordion"><div class="card-body"><div class="row"><div class="col-lg-8"><canvas id="'+i+'"></canvas></div><div class="col-lg-4 pt-5 pb-5"><canvas id="'+i+'4"></canvas></div></div></div></div>');
          var ctx = document.getElementById(i).getContext("2d");

          var ctxpi = document.getElementById(i+4);


        Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = '#858796';

        var myPieChart = new Chart(ctxpi, {
        type: 'doughnut',
        data: {
            labels: ["angle > 90", "angle < 90"],
            datasets: [{
            data: angle_count_pie,
            backgroundColor: ['#1cc88a', '#e74a3b'],
            hoverBackgroundColor: ['#1cc88a', '#e74a3b'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: true,
            caretPadding: 10,
            },
            legend: {
            display: true
            },
            cutoutPercentage: 50,
        },
        });
        


          

    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20],
        datasets: [{
            label: "Leg Motion",
            lineTension: 0.3,
            backgroundColor: "rgba(28, 200, 138, 0.05)",
            borderColor: "rgba(28, 200, 138, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(28, 200, 138, 1)",
            pointBorderColor: "rgba(28, 200, 138, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(28, 200, 138, 1)",
            pointHoverBorderColor: "rgba(28, 200, 138, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: leg_st
        },
      
        ]
    },
    options: {}
        });
                
        }

        }
    });
});

