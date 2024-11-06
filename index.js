function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#first-city");
  let losAngelesDateElement = document.querySelector("#first-city-date");
  let losAngelesTimeElement = document.querySelector("#first-city-time");
  // let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("H:mm:ss:SSS [<small>]A[</small]");

  //paris
  let parisElement = document.querySelector("#second-city");
  let parisDateElement = document.querySelector("#second-city-date");
  let parisTimeElement = document.querySelector("#second-city-time");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM Do YYYY");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("H:mm:ss:SSS [<small>]A[</small]");
  //Sydney
  let sydneyElement = document.querySelector("#third-city");
  let sydneyDateElement = document.querySelector("#third-city-date");
  let sydneyTimeElement = document.querySelector("#third-city-time");

  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("H:mm:ss:SSS [<small>]A[</small]");
}
setInterval(updateTime, 1);
