const secondHand=document.querySelector(".second-hand")
const minuteHand=document.querySelector(".min-hand")
const hourHand=document.querySelector(".hour-hand")
function setTime()
{
const time= new Date();

const second= time.getSeconds()
const minutes=time.getMinutes();
const hours= time.getHours();

const stopTransition = (second >= 59 && second < 60.5) ? 'none' : 'all';
secondHand.style.transition = stopTransition;
minuteHand.style.transition = stopTransition;
hourHand.style.transition = stopTransition;

const setMintes=((minutes/60)*360+90);
const setSecond = ((second/60)*360+90);
const setHours=((hours/24)*360+90)

secondHand.style.transform=`rotate(${setSecond}deg)`
minuteHand.style.transform=`rotate(${setMintes}deg)`
hourHand.style.transform=`rotate(${setHours}deg)`
console.log(hours,minutes,second)
}
setInterval(setTime,1000)