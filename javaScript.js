let myMonth =
    [
        "JANURARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
    ];

let myDays =
    [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY"
    ];



let getaway = document.querySelector(".hiding2");

let date = new Date(2022, 1, 23, 17, 59);
//console.log(date.getTime());

let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDate = date.getDate();
let currentDay = date.getDay();

// console.log(currentYear);
// console.log(currentMonth);
// console.log(currentDate);
// console.log(currentDay);

getaway.innerHTML = `Giveaway Ends on ${myMonth[currentMonth]} , ${currentDate}  ,  ${myDays[currentDay]} , ${currentYear} at ${date.getHours()}:${date.getMinutes()} am`;

let deadline = document.querySelector(".deadline");
let format1 = document.querySelector(".deadline-format1 h4");
let format2= document.querySelector(".deadline-format2 h4");
let format3 = document.querySelector(".deadline-format3 h4");
let format4 = document.querySelector(".deadline-format4 h4");

function getRemainingTime() {
    let actualDate = new Date();
    // console.log(actualDate.getTime());  // gives time in mili seconds

    let currentTime = date - actualDate;
    //console.log(currentTime);
    //setting standard for calculation
    //    1s=1000ms
    //    1min=60s
    //    1hr=60min
    //    1day=24hr

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinut = 60 * 1000;

    let days = currentTime / oneDay;
    //      console.log(days);
    days = Math.floor(days);
    let hours = (currentTime % oneDay) / oneHour;
   // console.log(hours);
    hours = Math.floor(days);
    let minute = (currentTime % oneHour) / oneMinut;
    minute= Math.floor(minute);
    let second = (currentTime % oneMinut) / 1000;
    second= Math.floor(second);
    const value=[days,hours,minute,second];


        format1.innerHTML=value[0];

        format2.innerHTML=value[1];

        format3.innerHTML=value[2];

        format4.innerHTML=value[3];
        if(currentTime<0)
        {
            deadline.innerHTML="Sorry this Giveaway is out of stock .....";

        }
};

let interval= setInterval(getRemainingTime,1000);
getRemainingTime();

