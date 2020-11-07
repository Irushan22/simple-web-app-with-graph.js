var forefoot_st = [];
var forefoot_pie = [];
var midfoot_st = [];
var raefoot_st = [];
var raefoot_pie = [];
var i=0;
var n=0;
forefoot_count_pie = [];
$(document).ready(function () {
    $.ajax({
    url: "http://127.0.0.1:5000/footstrike",
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
        console.log(res);
        for(i in res){
            forefoot_st = [];
            forefoot_pie = [];
            forefoot_count_pie = [];
            midfoot_st = [];
            raefoot_st = [];
            raefoot_pie = [];
            var x = res[i].date;
            var g = res[i].pattern;
           
            for(n in g){
                console.log(g);
                z = g[n].forefoot_strike;
                mid = g[n].midfoot_strike;
                rare = g[n].rarefoot_strike;
                forefoot_st.push(z);
                midfoot_st.push(mid);
                raefoot_st.push(rare);  
                if(z>500){
                    forefoot_pie.push(z);
                }
                if(rare<500){
                    raefoot_pie.push(z);
                }
              
            }
            var valueforfoot = forefoot_pie.length;
            var valuerearfoot = raefoot_pie.length;
      
        
            forefoot_count_pie.push(valueforfoot,valuerearfoot);
           
           

        $('#accordion').append('<div class="card mb-3"><div class="card-header" id="s'+i+'"><h5 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#n'+i+'" aria-expanded="true" aria-controls="collapseOne">'+x+'</button></h5></div><div id="n'+i+'" class="collapse" aria-labelledby="s'+i+'" data-parent="#accordion"><div class="card-body"><div class="row"><div class="col-lg-8"><canvas id="'+i+'"></canvas></div><div class="col-lg-4 pt-5 pb-5"><canvas id="'+i+'4"></canvas></div></div></div></div>');
        var ctx = document.getElementById(i).getContext("2d");
        var ctxpi = document.getElementById(i+4);


        Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = '#858796';

        var myPieChart = new Chart(ctxpi, {
        type: 'doughnut',
        data: {
            labels: ["Forefoot strike", "Rearfoot strike"],
            datasets: [{
            data: forefoot_count_pie,
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
        type: 'line',

        // The data for our dataset
        data: {
            labels: [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20],
            datasets: [{
                label: "forefoot Strike",
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
                data: forefoot_st
            },
            {
                label: "Midfoot Strike",
                lineTension: 0.3,
                backgroundColor: "rgba(246, 194, 62, 0.05)",
                borderColor: "rgba(246, 194, 62, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(246, 194, 62, 1)",
                pointBorderColor: "rgba(246, 194, 62, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(246, 194, 62, 1)",
                pointHoverBorderColor: "rgba(246, 194, 62, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: midfoot_st,
            },
            {
                label: "Rarefoot Strike",
                lineTension: 0.3,
                backgroundColor: "rgba(231, 74, 59, 0.05)",
                borderColor: "rgba(231, 74, 59, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(236, 41, 59, 1)",
                pointBorderColor: "rgba(236, 41, 59, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(236, 41, 59, 1)",
                pointHoverBorderColor: "rgba(236, 41, 59, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: raefoot_st,
            },
            ]

                },
                options: {}
            });
            
            }
        }
    });
});
