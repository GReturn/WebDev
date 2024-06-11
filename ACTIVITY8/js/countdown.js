const countdown_date = new Date("June 21, 2024 00:00:00").getTime();

const countdown_days = document.getElementById("days");
const countdown_hours = document.getElementById("hours");
const countdown_minutes = document.getElementById("minutes");
const countdown_seconds = document.getElementById("seconds");

let x = setInterval(function () {
    let date_today = new Date().getTime();
    let days_left = countdown_date - date_today;

    let days = Math.floor(days_left / (1000 * 60 * 60 * 24));
    let hours = Math.floor((days_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((days_left % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((days_left % (1000 * 60)) / 1000);

    countdown_days.innerHTML = days;
    countdown_hours.innerHTML = hours;
    countdown_minutes.innerHTML = minutes;
    countdown_seconds.innerHTML = seconds;

    if (days_left < 0) {
        clearInterval(x);
        countdown_days.innerHTML = "00";
        countdown_hours.innerHTML = "00";
        countdown_minutes.innerHTML = "00";
        countdown_seconds.innerHTML = "00";
    }
}, 1000);

console.log("countdown.js has successfully connected to index.html");