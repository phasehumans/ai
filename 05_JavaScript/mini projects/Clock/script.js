
function updateClock (){

    const timeElment = document.getElementById("time");     //h1 elmt with id "time"
    const dateElment = document.getElementById("date");
    
    const now= new Date();
    const hours= now.getHours() % 12 || 12;     //agar value 0 then send 12
    
    // 1-9 meh screen shrink hoge > 1-> 01
    const minutes= now.getMinutes().toString().padStart(2, "0"); 
    
    // minutes < 10 ? `0${minutes}`: `${minutes}`; ---> ternary approach for padstart
    
    const seconds= now.getSeconds().toString().padStart(2, "0");
    const ampm= now.getHours() <= 12 ? "AM": "PM"

    const options= {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    
    timeElment.textContent= `${hours}:${minutes}:${seconds}:${ampm}`
    
    dateElment.textContent= now.toLocaleDateString(undefined, options)
}

// setTimeout- itne time badh ye kaam karunga
// setInterval - itne time badh ye kaam phirse karunga (phases)

setInterval(updateClock, 1000);

updateClock();      //soln - 00 error on reload
