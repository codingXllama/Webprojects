const currentTimeID = document.getElementById("currentTime");
const currentDate_ID = document.getElementById("currentDate");
const fajrAdhan = document.getElementById("fair-prayer");

var currentTime = new Date().toLocaleTimeString();
var currentDate = new Date().toLocaleDateString("en-US");
// var x = currentDate.toISOString().slice(0, 10);
// var enDate = x.toLocaleDateString("en-us");

// currentTimeID.textContent = currentTime;
currentDate_ID.textContent = currentDate.slice(0, 10);
// setInterval(currentTime, 1000);

// prayer List

let apiPrayer = [];

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
// updating the time every second
setInterval(doDate, 1000);

function newPrayer() {
  // console.log(apiPrayer[0].timings);
  // console.log("hi");
  fajrAdhan.textContent = "ss";
}

async function getPrayer() {
  // showLoader();
  const myCity = "Windsor";
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

  const myCountry = "Canada";

  // var now = new Date().getMonth();
  // const currentMonth = months[now.getMonth()];
  const monthNumber = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  console.log("Current Year is:", currentYear);
  // console.log(`The current month is:${currentMonth}`);
  const apiURL = `http://api.aladhan.com/v1/hijriCalendarByCity?city=${myCity}&country=${myCountry}&method=2&month=${
    monthNumber + 1
  }&year=${currentYear}`;
  // console.log(apiURL);
  // attempting to complete a fetch request
  try {
    //This response const will not be populated until it has fetched some data
    // const response = await get(apiURL);
    // apiPrayer = await response.json();

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
      });

    // fajrAdhan.textContent = "hello";

    // newPrayer();
  } catch (error) {
    console.log("Failure");
  }
}

getPrayer();
