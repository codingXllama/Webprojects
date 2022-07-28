const currentTimeID = document.getElementById("currentTime");
const currentDate_ID = document.getElementById("currentDate");

var currentTime = new Date().toLocaleTimeString();
var currentDate = new Date().toLocaleDateString("en-US");
// var x = currentDate.toISOString().slice(0, 10);
// var enDate = x.toLocaleDateString("en-us");

currentTimeID.textContent = currentTime;
currentDate_ID.textContent = currentDate.slice(0, 10);
setInterval(currentTime, 1000);
