const  clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1"),
calendarContainer = document.querySelector(".js-calendar"),
calendarText = calendarContainer.querySelector("h1");

function getToday(){
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    var stringDay = "";
    const years = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay();

    switch(day){
        case 1:
            stringDay="Mon";
            break;
        case 2:
            stringDay="Tue";
            break;
        case 3:
            stringDay="Wen";
            break;
        case 4:
            stringDay="Thu";
            break;
        case 5:
            stringDay="Fri";
            break;
        case 6:
            stringDay="Sat";
            break;
        case 7:
            stringDay="Sun";
            break;
    }
    calendarText.innerText = `${years}-${month+1}-${date}(${stringDay})`;
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getToday();
    setInterval(getToday,1000);
}

init();