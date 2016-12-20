<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en" dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="content-type" content="text/xml; charset=utf-8" />
  <!--ensures proper rendering and touch zooming on mobile devices-->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Local Weather</title></title>
  <!--import google font-->
<link href="https://fonts.googleapis.com/css?family=Sanchez" rel="stylesheet">
  <!--import style sheet-->
  <link rel="stylesheet" type = "text/css"
   href = "dashboardstyle.css">
</head>



<body>
<?php include_once("navbartemplate.php") ?>
<div class="main-content" >
  <div class="col-4">
    <div id="tab-container">
      <div id="schedule-tab"  >Schedule</div>
      <div id="harvest-tab">Harvest Logs</div>
      <div id="seeding-tab">Seeding</div>
      <div id="planting-tab">Planting</div>
      <div id="field-tab">Field Map</div>
    </div>
  </div>
  <div class="col-2" id="nav">
    <div class="container" id="tasks">
      <div class="title">Tasks</div>
      <div id="week-cal">
        <div class="day" id="d1">
          <div class="dayname" id="name1">Day 1</div>
          <div class="daycontent">Content</div>
        </div>
        <div class="day" id="d2">
          <div class="dayname" id="name2">Day 2</div>
          <div class="daycontent">Content</div>
        </div>
        <div class="day" id="d3">
          <div class="dayname" id="name3">Day 3</div>
          <div class="daycontent">Content</div>
        </div>
        <div class="day" id="d4">
          <div class="dayname" id="name4">Day 4</div>
          <div class="daycontent">Content</div>
        </div>
        <div class="day" id="d5">
          <div class="dayname" id="name5">Day 5</div>
          <div class="daycontent">Content</div>
        </div>
        <div class="day" id="d6">
          <div class="dayname" id="name6">Day 6</div>
          <div class="daycontent">Content</div>
        </div>
        <div class="day" id="d7">
          <div class="dayname" id="name7">Day 7</div>
          <div class="daycontent">Content</div>
        </div>
      </div>
      <div id="day-description">

      </div>
    </div>
    <div class="container" id="weather">
      <div class="title">Weather</div>
        <div id="forecast">
          <div class="fday" id="fday1">
            <div class="ftitle" id="ft1"></div>
            <div class="ficon" id="fi1"></div>
            <div class="ftemp">
              <div class="ftemph" id="fth1"></div>
              <div class="ftempl" id="ftl1"></div>
            </div>
          </div>
          <div class="fday" id="fday2">
            <div class="ftitle" id="ft2"></div>
            <div class="ficon" id="fi2"></div>
            <div class="ftemp">
              <div class="ftemph" id="fth2"></div>
              <div class="ftempl" id=ftl2></div>
            </div>
          </div>
          <div class="fday" id="fday3">
            <div class="ftitle" id="ft3"></div>
            <div class="ficon" id="fi3"></div>
            <div class="ftemp">
              <div class="ftemph" id="fth3"></div>
              <div class="ftempl" id="ftl3"></div>
            </div>
          </div>
        </div>
        <div id="weather-descrition">
          <p>%weather description%</P>
        </div>
        <div id="weather-recs">
          <p>%weather recommendations%</P>
        </div>
    </div>
    <div class = "container" id="week-harvest">
      <div class="title">Harvest at a Glance</div>
    </div>
  </div>
  <div class="col-4">

  </div>
</div>
</body>
<script src="jQuery.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src ="dashboard.js"></script>
