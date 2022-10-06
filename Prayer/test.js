fetch("PrayerTimes.json")
  .then(function (response) {
    // var now = new Date();
    // const monthNumber = new Date().getMonth() + 1;
    // // console.log(monthNumber);
    // const currentYear = new Date().getFullYear();
    // var todaysMonthDay = now.getDate();
    // var todaysDate = currentYear + "-" + monthNumber + "-" + todaysMonthDay;
    // console.log(typeoftodaysDate);
    // var currentDate=
    return response.json();
  })

  // to access the data

  .then(function (products) {
    var now = new Date();
    const monthNumber = new Date().getMonth() + 1;
    // console.log(monthNumber);
    const currentYear = new Date().getFullYear();
    var todaysMonthDay = now.getDate();
    var todaysDate = currentYear + "-" + monthNumber + "-0" + todaysMonthDay;
    console.log(todaysDate);

    let placeholder = document.querySelector(".container");
    let out = "";

    for (let product of products) {
      if (product.Date == todaysDate) {
        out += `
            <p> Fajr </p>
            <p> Adhan: ${product.Fajr}</p>
            <p> Iqama: ${product.FajrIqama}</p>
            <p> Duhr </p>
            <p> Adhan: ${product.Dhuhr}</p>
            <p> Iqama: ${product.DhuhrIqama}</p>
            <p> Asr </p>
            <p> Adhan: ${product.Asr}</p>
            <p> Iqama: ${product.AsrIqama}</p>
            <p> Maghrib </p>
            <p> Adhan: ${product.Maghrib}</p>
            <p> Iqama: ${product.MaghribIqama}</p>
             <p> Isha </p>
            <p> Adhan: ${product.Isha}</p>
            <p> Iqama: ${product.IshaIqama}</p>

          `;
      }
    }
    console.log(out);
    placeholder.innerHTML = out;
  });
