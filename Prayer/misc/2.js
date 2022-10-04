function PrayerTime() {
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

  const monthNumber = new Date().getMonth();
  //   console.log(typeof months[monthNumber]);
  switch (months[monthNumber]) {
    case "January":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-1-1&date_to=2022-1-31&show_iqamah=Y";
      break;
    case "February":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-2-1&date_to=2022-2-31&show_iqamah=Y";
      break;
    case "March":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-3-1&date_to=2022-3-31&show_iqamah=Y";
      break;
    case "April":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-4-1&date_to=2022-4-31&show_iqamah=Y";
      break;
    case "May":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-5-1&date_to=2022-5-31&show_iqamah=Y";
      break;
    case "June":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-6-1&date_to=2022-6-31&show_iqamah=Y";
      break;
    case "July":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-7-1&date_to=2022-7-31&show_iqamah=Y";
      break;
    case "August":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-8-1&date_to=2022-8-31&show_iqamah=Y";
      break;
    case "September":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-9-1&date_to=2022-9-31&show_iqamah=Y";
      break;
    case "October":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-10-1&date_to=2022-10-31&show_iqamah=Y";
      break;
    case "November":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-11-1&date_to=2022-11-31&show_iqamah=Y";
      break;
    case "December":
      window.location.href =
        "https://ca.mohid.co/on/windsor/abm/masjid/widget/api/index/?v=prayercalendar&date_from=2022-12-1&date_to=2022-12-31&show_iqamah=Y";
      break;

    default:
      alert("try again");
  }
}
PrayerTime();
