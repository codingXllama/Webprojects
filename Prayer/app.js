const currentTimeID = document.getElementById("currentTime");
const currentDate_ID = document.getElementById("currentDate");
const fajrAdhan_label = document.getElementById("fair-prayer");
const fajrAdhan_timing = document.getElementById("fajr-adhan");
const fajrIqama_timing = document.getElementById("fajr-iqama");
const sunrise_timing = document.getElementById("sunrise-time");
const duhrAdhan_timing = document.getElementById("duhr-adhan");
const duhrIqama_timing = document.getElementById("duhr-iqama");

const asrAdhan_timing = document.getElementById("asr-adhan");
const asrIqama_timing = document.getElementById("asr-iqama");

const maghribAdhan_timing = document.getElementById("maghrib-adhan");
const maghribIqama_timing = document.getElementById("maghrib-iqama");

const ishaAdhan_timing = document.getElementById("isha-adhan");
const ishaIqama_timing = document.getElementById("isha-iqama");

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

// async function getPrayer() {
//   // showLoader();
//   const myCity = "Windsor";
//   var days = new Array(
//     "Sunday", // index 0
//     "Monday", // index 1
//     "Tuesday", // index 2
//     "Wednesday", //index 3
//     "Thursday", // index 4
//     "Friday", //index 5
//     "Saturday" //index 6
//   );
//   // var months = new Array(
//   //   "January",
//   //   "February",
//   //   "March",
//   //   "April",
//   //   "May",
//   //   "June",
//   //   "July",
//   //   "August",
//   //   "September",
//   //   "October",
//   //   "November",
//   //   "December"
//   // );

//   // const myCountry = "Canada";

//   //Getting the date
//   // var todaysDay = "";
//   var now = new Date();
//   // todaysDay += "Today is: " + days[now.getDay()]; // Thursday
//   todaysDay += "Today is: " + [now.getDay() + 1]; // 4
//   // console.log(todaysDay);
//   var todaysMonthDay = now.getDate();
//   console.log(todaysMonthDay);

//   // console.log(str);
//   // var now = new Date().getMonth();
//   // const currentMonth = months[now.getMonth()];
//   const monthNumber = new Date().getMonth() + 1;
//   // console.log(monthNumber);
//   const currentYear = new Date().getFullYear();
//   // const monthNow = now.getMonth() + 1;
//   // console.log("current month", today);
//   // console.log("Current Year is:", currentYear);
//   // console.log(`The current month is:${currentMonth}`);
//   // const apiURL = `http://api.aladhan.com/v1/hijriCalendarByCity?city=${myCity}&country=${myCountry}&method=2&month=${monthNumber}&year=${currentYear}`;
//   const apiURL = ` http://api.aladhan.com/v1/calendarByAddress?address=65%20Ellis%20St%20E,%20${myCity},%20ON%20N8X%202G8&method=2&day=${todaysMonthDay}&month=${monthNumber}&year=${currentYear}`;

//   // console.log(apiURL);
//   // attempting to complete a fetch request
//   try {
//     //This response const will not be populated until it has fetched some data
//     // const response = await get(apiURL);
//     // apiPrayer = await response.json();

//     fetch(apiURL)
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data.data[0].timings.Fajr);
//         console.log(data.data[0].timings);

//         var currentFajrTime = data.data[0].timings.Fajr;
//         fajrIqama_timing.textContent = currentFajrTime.slice(0, 6); // 06:22(EST)

//         // var currentSunriseTime = data.date[]

//         // sunrise_timing;
//       });

//     // fajrAdhan_label.textContent = "hello";

//     // newPrayer();
//   } catch (error) {
//     console.log("Failure");
//   }
// }

// getPrayer();

async function getPrayer2() {
  fetch("PrayerTimes.json")
    .then(function (response) {
      return response.json();
    })

    // to access the data

    .then(function (allPrayers) {
      var now = new Date();
      const monthNumber = new Date().getMonth() + 1;
      // console.log(monthNumber);
      const currentYear = new Date().getFullYear();
      var todaysMonthDay = now.getDate();
      var todaysDate = currentYear + "-" + monthNumber + "-0" + todaysMonthDay;
      console.log(todaysDate);

      let placeholder = document.querySelector(".container");
      let out = "";

      for (let prayer of allPrayers) {
        if (prayer.Date == todaysDate) {
          sunriseTime = prayer.Sunrise;
          fajrAdhan = prayer.Fajr;
          fajrIqama = prayer.FajrIqama;
          // Duhr timing
          duhrAdhan = prayer.Dhuhr;
          duhrIqama = prayer.DhuhrIqama;
          //Asr  timing
          asrAdhan = prayer.Asr;
          asrIqama = prayer.AsrIqama;

          // Maghrib timing
          maghribAdhan = prayer.Maghrib;
          maghribIqama = prayer.MaghribIqama;

          //Isha
          ishaAdhan = prayer.Isha;
          ishaIqama = prayer.IshaIqama;

          out += `
            <p> Fajr </p>
            <p> Adhan: ${prayer.Fajr}</p>
            <p> Iqama: ${prayer.FajrIqama}</p>
            <p> Duhr </p>
            <p> Adhan: ${prayer.Dhuhr}</p>
            <p> Iqama: ${prayer.DhuhrIqama}</p>
            <p> Asr </p>
            <p> Adhan: ${prayer.Asr}</p>
            <p> Iqama: ${prayer.AsrIqama}</p>
            <p> Maghrib </p>
            <p> Adhan: ${prayer.Maghrib}</p>
            <p> Iqama: ${prayer.MaghribIqama}</p>
             <p> Isha </p>
            <p> Adhan: ${prayer.Isha}</p>
            <p> Iqama: ${prayer.IshaIqama}</p>

          `;
        }
        // placeholder.innerHTML = out;
      }
      console.log(out);
      fajrAdhan_timing.innerHTML = fajrAdhan;
      fajrIqama_timing.innerHTML = fajrIqama;

      duhrAdhan_timing.innerHTML = duhrAdhan;
      duhrIqama_timing.innerHTML = duhrIqama;

      asrAdhan_timing.innerHTML = asrAdhan;
      asrIqama_timing.innerHTML = asrIqama;

      maghribAdhan_timing.innerHTML = maghribAdhan;
      maghribIqama_timing.innerHTML = maghribIqama;

      ishaAdhan_timing.innerHTML = ishaAdhan;
      ishaIqama_timing.innerHTML = ishaIqama;

      sunrise_timing.innerHTML = sunriseTime;
      // console.log(out.indexOf(1));
    });
}

getPrayer2();
