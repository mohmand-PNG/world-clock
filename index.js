function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#first-city");
  if (losAngelesElement) {
    let losAngelesDateElement = document.querySelector("#first-city-date");
    let losAngelesTimeElement = document.querySelector("#first-city-time");
    // let losAngelesTime = moment();

    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("H:mm:ss [<small>]A[</small]");
  }

  //paris
  let parisElement = document.querySelector("#second-city");
  if (parisElement) {
    let parisDateElement = document.querySelector("#second-city-date");
    let parisTimeElement = document.querySelector("#second-city-time");

    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do YYYY");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("H:mm:ss [<small>]A[</small]");
  }
  //Sydney
  let sydneyElement = document.querySelector("#third-city");
  if (sydneyElement) {
    let sydneyDateElement = document.querySelector("#third-city-date");
    let sydneyTimeElement = document.querySelector("#third-city-time");

    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("H:mm:ss [<small>]A[</small]");
  }
}
setInterval(updateTime, 1);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="second-city">
          <div>
            <h2>${cityName}</h2>
            <div id="second-city-date">
              <p>${cityTime.format("MMMM Do YYYY")}</p>
            </div>
          </div>
          <h1 id="second-city-time">${cityTime.format(
            "H:mm:ss"
          )} <small>${cityTime.format("A")}</small></h1>
          </div>
        </div>
    <a id="link" href="index.html"> All cities</a>
    `;
}

let selectForm = document.querySelector("#selectForm");
selectForm.addEventListener("change", updateCity);
