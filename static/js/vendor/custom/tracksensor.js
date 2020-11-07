var i=0;
var n=0;
$(document).ready(function(){
      $.ajax({url: "http://127.0.0.1:5000/tracksensors",
        type: 'GET',
        dataType: 'json',
        success: function(result){
            console.log(result);
            for(i in result){
                var x = result[i].sprint_id;
                var sprint_begin = result[i].sprint_begin;
                var sprint_40 = result[i].sprint_40;
                var sprint_90 = result[i].sprint_90;
                var sprint_end = result[i].sprint_end;
                // console.log(x);
                $('#accordion').append('<div class="card mb-3"><div class="card-header" id="s'+i+'"><h5 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#n'+i+'" aria-expanded="true" aria-controls="collapseOne">'+x+'</button></h5></div><div id="n'+i+'" class="collapse" aria-labelledby="s'+i+'" data-parent="#accordion"><div class="card-body track-sensor-card"><ul><li><i class="fas fa-stopwatch m-3"></i>Sprint begin<span class="track-time">'+sprint_begin+'</span></li><li><i class="fas fa-stopwatch-20 m-3"></i>Timing Gate<span class="track-time">'+sprint_40+'</span></li><li><i class="fas fa-stopwatch-20 m-3"></i>Sprint begin<span class="track-time">'+sprint_90+'</span></li><li><i class="fas fa-stopwatch m-3"></i>Sprint End<span class="track-time">'+sprint_end+'</span></li></ul></div></div>');
            }
               
      }});
  });