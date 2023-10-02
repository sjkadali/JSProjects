const newYear ='1 Jan 2024';

const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds /3600/ 24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const minutes = Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, minutes);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minutesE1.innerHTML = minutes;
    secondsE1.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);