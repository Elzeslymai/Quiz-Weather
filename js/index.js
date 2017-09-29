$(function(){
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    
    var day = '<div class="day">' + days[d.getDay()] + '</div>';
    var month = '<div class="date">' + months[d.getMonth()] + ' ' + d.getDate() + '</div>';
    $('#date').append(day);
    $('#date').append(month);
    
    $('#find').click(function(){
        var city = $('#city').val();
        console.log(city);


        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=41014b71583254732e462352f02946fe", function(data){
            console.log(data);
                        
        });

        /*$.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&cnt=7&appid=7304e2ab353a2a3c3a054d6ab5adc4fe", function(data){
            console.log(data);
            
        });*/
    });
});