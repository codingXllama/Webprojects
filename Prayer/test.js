fetch("PrayerTimes.json")
  .then(function (response) {
    return response.json();
  })

  // to access the data

  .then(function (products) {
    let placeholder = document.querySelector(".container");
    let out = "";

    for (let product of products) {
      if (product.Date == "2022-01-01") {
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
