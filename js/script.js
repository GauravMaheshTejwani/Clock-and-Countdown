let finalDate = new Date(prompt('Enter the Date and its time too for Countdown','Oct 17, 2023 00:00:00'));

let clockH = document.querySelector('.clock__hours');
let clockM = document.querySelector('.clock__minutes');
let clockS = document.querySelector('.clock__seconds');
//let finalDate = new Date('Oct 17, 2023 00:00:00');
let countdownDays = document.querySelector('.countdown__days');
let countdownHours = document.querySelector('.countdown__hours');
let countdownMinutes = document.querySelector('.countdown__minutes');
let countdownSeconds = document.querySelector('.countdown__seconds');

let second = 1000;
let minute = second*60;
let hour = minute*60;
let day = hour*24;

let  startClock = () => {
    updateTime();
    updateCountdown();
    setInterval(() => {
        updateTime();
        updateCountdown();
    }, 1000);
}

let updateTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clockH.style.transform = `rotate(${360 / 12 * hours}deg)`;
    clockM.style.transform = `rotate(${360 / 60 * minutes}deg)`;
    clockS.style.transform = `rotate(${360 / 60 * seconds}deg)`;
}

let updateCountdown = () =>{
    let now  = new Date();
    let diff = finalDate - now;
    let diffobj = convertMillisToDHMS(diff);
    countdownDays.textContent = diffobj.days >= 10 ? diffobj.days : '0'+diffobj.days;
    countdownHours.textContent = diffobj.hours >= 10? diffobj.hours : '0' + diffobj.hours;
    countdownMinutes.textContent = diffobj.minutes >= 10? diffobj.minutes : '0' + diffobj.minutes;
    countdownSeconds.textContent = diffobj.seconds >= 10? diffobj.seconds : '0' + diffobj.seconds;
}

let convertMillisToDHMS = (millis) =>{
    let days = Math.floor(millis / day);
    let hours = Math.floor(millis % day / hour);
    let minutes = Math.floor(millis % hour / minute);
    let seconds = Math.floor(millis % minute / second);
    return {days, hours, minutes, seconds};
}

startClock();
