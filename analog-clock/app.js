const secondHand = document.getElementById('seconds-hand');
const minuteHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // console.log(seconds, minutes, hours);

    const timeInterval = 6;

    secondHand.style.transform = 'rotate('+( seconds * timeInterval)+'deg)';
    minuteHand.style.transform = 'rotate('+( minutes * timeInterval + seconds /10)+'deg)';
    hoursHand.style.transform = 'rotate('+( hours * 30 + minutes /2)+'deg)';
}

setInterval(getTime, 100);
getTime();