const currentTimeID = document.getElementById("currentTime");
const currentDate_ID = document.getElementById("currentDate");

var currentTime = new Date().toLocaleTimeString();
var currentDate = new Date().toLocaleDateString("en-US");
// var x = currentDate.toISOString().slice(0, 10);
// var enDate = x.toLocaleDateString("en-us");

// currentTimeID.textContent = currentTime;
currentDate_ID.textContent = currentDate.slice(0, 10);
// setInterval(currentTime, 1000);

function doDate() {
  var str = "";
  var days = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );

  var months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  var now = new Date();

  str +=
    "Today is: " +
    days[now.getDay()] +
    ", " +
    now.getDate() +
    " " +
    months[now.getMonth()] +
    "" +
    now.getFullYear() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    now.getSeconds();

  var currentTime = new Date().toLocaleTimeString();
  document.getElementById("currentTime").innerHTML = currentTime;
}
setInterval(doDate, 1000);
