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
        $('#layer1').empty();
        $('#layer2').empty();
        $('#layer3').empty();
        $('#layer4').empty();
        $('#layer5').empty();
        $('#layer6').empty();
        $('#layer7').empty();



        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=41014b71583254732e462352f02946fe", function (data) {
            console.log(data);
            var temps = 'images/icons/icon-1.svg';
            console.log();

            if (data.clouds.all >= 20 && data.clouds.all < 40) {
                temps = 'images/icons/icon-3.svg';
            } else if (data.clouds.all >= 40 && data.clouds.all < 60) {
                temps = 'images/icons/icon-6.svg';
            } else if (data.clouds.all >= 60 && data.clouds.all < 80) {
                temps = 'images/icons/icon-9.svg';
            } else if (data.clouds.all > 80) {
                temps = 'images/icons/icon-10.svg';
            }

            var layer1 = '<div class="location">' + data.name + '</div>';
            var layer1_1 = '<div class="degree"><div class="num">' + (data.main.temp / 10).toFixed(2) + '<sup>o</sup>C</div><center><div class="forecast-icon" ><img src="' + temps + '" alt="" width=90></div></center></div>';

            $('#layer1').append(layer1);
            $('#layer1').append(layer1_1);

            var layer2 = data.wind.speed + ' m/s.';
            $('#layer2').append(layer2);

            var layer3 = data.weather[0].description + '.';
            $('#layer3').append(layer3);

            var layer4 = data.main.pressure + ' hpa.';
            $('#layer4').append(layer4);

            var layer5 = data.main.humidity + '%';
            $('#layer5').append(layer5);

            //เอาเลขสามหลักสุดท้าย
            var str = data.sys.sunrise;
            var str1 = str%1000;
            
            //แปลงสามหลักสุดท้ายให้เป็น String และเอาเลขสามหลักสุดท้ายมาต่อหลังเลขชุดเดิม
            var bnt = '' + str1 + '';
            var bnt1 = str + bnt;

            //แปลงให้เป็น INTEGER
            var datecode = parseInt(bnt1);
            
            //นำโค้ดที่ได้ไปแปลงเป็นวันที่และเวลา
            var date = new Date(datecode);
            
            //เอาชั่วโมง
            var date1 = date.getHours();
            
            //เอานาที
            var date2 = date.getMinutes();
            

            var layer6 = date1 + ':' + date2;
            $('#layer6').append(layer6);


            //เอาเลขสามหลักสุดท้าย
            var str2 = data.sys.sunset;
            var str3 = str%1000;
            
            //แปลงสามหลักสุดท้ายให้เป็น String และเอาเลขสามหลักสุดท้ายมาต่อหลังเลขชุดเดิม
            var bnt2 = '' + str3 + '';
            var bnt3 = str2 + bnt2;

            //แปลงให้เป็น INTEGER
            var datecode1 = parseInt(bnt3);
            
            //นำโค้ดที่ได้ไปแปลงเป็นวันที่และเวลา
            var date3 = new Date(datecode1);
            
            //เอาชั่วโมง
            var date4 = date3.getHours();
            
            //เอานาที
            var date5 = date3.getMinutes();

            var layer7 = date4 + ':' + date5;
            $('#layer7').append(layer7);

        });


        //เรียกรายวัน 7 วัน
        /*$.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=7&appid=7304e2ab353a2a3c3a054d6ab5adc4fe", function(data){
            console.log(data);
            
        });*/
    });
});