$(document).ready(function(){
// console.log("working");
// if (navigator.geolocation){
//   navigator.geolocation.getCurrentPosition(function(position){
//
//     lat = position.coords.latitude;
//     lat = lat.toFixed(3);
//     lon = position.coords.longitude;
//     lon = lon.toFixed(3);
//     $("#weather-map").html("Latitude: " + lat +
//   "</br>Longitude: " + lon);
//   var url = "http://api.wunderground.com/api/d8483e016960a875/animatedradar/animatedsattelite/image.gif?num=8&delay=25&rad.maxlat=" +
//   (lat+5) + "&rad.maxlon=" + (lon+5)+ "&rad.minlat=" + (lat-5) +
//   "&rad.minlon="+ (lon-5) + "&rad.width=640&rad.height=480&rad.rainsnow=1&rad.reproj.automerc=1&rad.num=5&" +
//   "sat.maxlat=" + (lat+5) + "&sat.maxlon=" + (lon +5) +
//   "&sat.minlat=" + (lat-5) + "&sat.minlon=" + (lon -5) + "&sat.width=640&sat.height=480&sat.key=sat_ir4_bottom&sat.gtt=107&sat.proj=me&sat.timelabel=0&sat.num=5callback=?";
// url = "http://api.wunderground.com/api/d8483e016960a875/animatedradar/animatedsatellite/image.gif?num=8&delay=25&rad.maxlat=47.709&rad.maxlon=-69.263&rad.minlat=31.596&rad.minlon=-97.388&rad.width=640&rad.height=480&rad.rainsnow=1&rad.reproj.automerc=1&rad.num=5&sat.maxlat=47.709&sat.maxlon=-69.263&sat.minlat=31.596&sat.minlon=-97.388&sat.width=640&sat.height=480&sat.key=sat_ir4_bottom&sat.gtt=107&sat.proj=me&sat.timelabel=0&sat.num=5callback=?"
//   $.getJSON(url, function(data){
//     console.log(data);
//   }, "jsonp");
// $("#weather-map").html(url);
//   console.log(url);
//   })
// }
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
    lat = position.coords.latitude;
    lat = lat.toFixed(3);
    lon = position.coords.longitude;
    lon = lon.toFixed(3);
    $("#weather-map").html("Latitude: " + lat +
     "</br>Longitude: " + lon);
     url = "http://api.wunderground.com/api/d8483e016960a875/geolookup/q/" + lat +
     "," + lon + ".json";
     $.getJSON(url, function(data){
       console.log(url);
       console.log(data);
       var city = data.location.city;
       var state = data.location.state;
       url = "http://api.wunderground.com/api/d8483e016960a875/forecast10day/q/" + state + "/" + city+".json"
       $.getJSON(url, function(data){
         console.log(url);
         console.log(data);
         var day1 = data.forecast.txt_forecast.forecastday[0].title;
         var day2 = data.forecast.txt_forecast.forecastday[2].title;
         var day3 = data.forecast.txt_forecast.forecastday[4].title;
         var i1 = data.forecast.txt_forecast.forecastday[0].icon_url;
         var i2 = data.forecast.txt_forecast.forecastday[2].icon_url;
         var i3 = data.forecast.txt_forecast.forecastday[4].icon_url;
         var des1 = data.forecast.txt_forecast.forecastday[0].fcttext;
         var des2 = data.forecast.txt_forecast.forecastday[2].fcttext;
         var des3 = data.forecast.txt_forecast.forecastday[4].fcttext;
         var temph1 = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
         var temph2 = data.forecast.simpleforecast.forecastday[2].high.fahrenheit;
         var temph3 = data.forecast.simpleforecast.forecastday[4].high.fahrenheit;
         var templ1 = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
         var templ2 = data.forecast.simpleforecast.forecastday[2].low.fahrenheit;
         var templ3 = data.forecast.simpleforecast.forecastday[4].low.fahrenheit;
         $("#ft1").html(day1);
         $("#ft2").html(day2);
         $("#ft3").html(day3);
         $("#fi1").html("<img src='"+i1+"'/>");
         $("#fi2").html("<img src='"+i2+"'/>");
         $("#fi3").html("<img src='"+i3+"'/>");
         $("#fth1").html("H:" + temph1 + "℉");
         $("#ftl1").html("L:" + templ1 + "℉");
         $("#fth2").html("H:" + temph2 + "℉");
         $("#ftl2").html("L:" + templ2 + "℉");
         $("#fth3").html("H:" + temph3 + "℉");
         $("#ftl3").html("L:" + templ3 + "℉");
       }, "jsonp")
     }, "jsonp")
})
}
})
