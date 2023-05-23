// Taken from w3schools.com 
// Set the date we're counting down to
let countDownDate = new Date("Dec 1, 2022 15:37:25").getTime();
let days_container = document.querySelector(".days");
let hours_container = document.querySelector(".hours");
let minutes_container = document.querySelector(".minutes");
let seconds_container = document.querySelector(".seconds");
// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  // Print the time 
  days_container.innerText = days;
  hours_container.innerText = hours;
  minutes_container.innerText = minutes;
  seconds_container.innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);