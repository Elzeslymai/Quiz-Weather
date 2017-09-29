$(function () {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    var day = '<div class="day">' + days[d.getDay()] + '</div>';
    var month = '<div class="date">' + months[d.getMonth()] + ' ' + d.getDate() + '</div>';
    $('#date').append(day);
    $('#date').append(month);

    $('#find').click(function () {
        var city = $('#city').val();
        console.log(city);


        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=41014b71583254732e462352f02946fe", function (data) {
            console.log(data);
            var temps = 'images/icons/icon-1.svg';
            console.log();

            if (data.main.humidity > 20 && data.main.humidity < 40) {
                temps = 'images/icons/icon-3.svg';
            } else if (data.main.humidity > 40 && data.main.humidity < 60) {
                temps = 'images/icons/icon-6.svg';
            } else if (data.main.humidity > 60 && data.main.humidity < 80) {
                temps = 'images/icons/icon-9.svg';
            } else if (data.main.humidity > 80) {
                temps = 'images/icons/icon-10.svg';
            }

            var layer1 = '<div class="location">' + data.name + '</div>';
            var layer1_1 = '<div class="degree"><div class="num">' + (data.main.temp / 10).toFixed(2) + '<sup>o</sup>C</div><center><div class="forecast-icon" ><img src="' + temps + '" alt="" width=90></div></center></div>';

            $('#layer1').append(layer1);
            $('#layer1').append(layer1_1);
        });


        //เรียกรายวัน 7 วัน
        /*$.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=7&appid=7304e2ab353a2a3c3a054d6ab5adc4fe", function(data){
            console.log(data);
            
        });*/
    });
});