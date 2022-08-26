const currentTimeID = document.getElementById("currentTime");
const currentDate_ID = document.getElementById("currentDate");
const fajrAdhan_label = document.getElementById("fair-prayer");
const fajrAdhan_timing = document.getElementById("fajr-adhan");
const fajrIqama_timing = document.getElementById("fajr-iqama");
const sunrise_timing = document.getElementById("sunrise-time");
// const ishaIqama_timings
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
  fajrAdhan_label.textContent = "ss";
}

async function getPrayer() {
  // showLoader();
  const myCity = "Windsor";
  var days = new Array(
    "Sunday", // index 0
    "Monday", // index 1
    "Tuesday", // index 2
    "Wednesday", //index 3
    "Thursday", // index 4
    "Friday", //index 5
    "Saturday" //index 6
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

  const myCountry = "Canada";

  //Getting the date
  var todaysDay = "";
  var now = new Date();
  // todaysDay += "Today is: " + days[now.getDay()]; // Thursday
  todaysDay += "Today is: " + [now.getDay() + 1]; // 4
  // console.log(todaysDay);
  var todaysMonthDay = now.getDate();
  console.log(todaysMonthDay);

  // console.log(str);
  // var now = new Date().getMonth();
  // const currentMonth = months[now.getMonth()];
  const monthNumber = new Date().getMonth() + 1;
  // console.log(monthNumber);
  const currentYear = new Date().getFullYear();
  console.log("Current Year is:", currentYear);
  // console.log(`The current month is:${currentMonth}`);
  const apiURL = `http://api.aladhan.com/v1/hijriCalendarByCity?city=${myCity}&country=${myCountry}&method=2&month=${monthNumber}&year=${currentYear}`;
  // const apiURL = ` http://api.aladhan.com/v1/calendarByAddress?address=65%20Ellis%20St%20E,%20${myCity},%20ON%20N8X%202G8&method=4&day=${todaysMonthDay}&month=${monthNumber}&year=${currentYear}`;

  // console.log(apiURL);
  // attempting to complete a fetch request
  try {
    //This response const will not be populated until it has fetched some data
    // const response = await get(apiURL);
    // apiPrayer = await response.json();

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data[0].timings.Fajr);
        console.log(data.data[0].timings);

        var currentFajrTime = data.data[0].timings.Fajr;
        fajrIqama_timing.textContent = currentFajrTime.slice(0, 6); // 06:22(EST)

        // var currentSunriseTime = data.date[]

        // sunrise_timing;
      });

    // fajrAdhan_label.textContent = "hello";

    // newPrayer();
  } catch (error) {
    console.log("Failure");
  }
}

getPrayer();
