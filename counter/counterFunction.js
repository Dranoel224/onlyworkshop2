
let countDownClock = document.getElementsById("container").onmouseover = function () {
    //displayUI = document.getElementsById("container");
    for (let counter = 60; counter >= 0; counter -= 5) {
        if (counter % 2 == 0) {
            document.getElementsById("container").style.background = "yellow";
        }else if (counter % 5 == 0) {
            document.getElementsById("container").style.background = "green";
        } else if (counter < 10) {
            document.getElementsById("container").style.background = "red";
        }
        return counter;
        
    }
    console.log(countDownClock());
    document.getElementsById("container").innerHTML += countDownClock;
}

//document.getElementsById("container").innerHTML += counter;