const calEvent = document.getElementById("cal");
const display = document.getElementsByClassName("main")[0];

calEvent.addEventListener("click", fetchValue);

let prev = 0;
let curr = 0;

let op;
let removePrev = false;
let multiZero = false;

function fetchValue(event) {
    
    const { number, opration } = event.target.dataset;

    if (removePrev) {
        removePrev = false;
        display.innerText = "";
    }

    if (number) {
        if (display.innerText === "0") {
            display.innerText = number;
            return;
        }
        display.innerText = display.innerText + number
    } else {
        if (opration) {
            curr = Number(display.innerText);
            if (opration === "c") {
                prev = 0;
                curr = 0;
                display.innerText = ""
            }
            if (opration === "=") {
                // console.log(prev , op, curr)
                opratinoHandler()
            } else {
                // console.log(curr, opration)
                prev = curr;
                op = opration;
                display.innerText = 0;
            }
        }
    }
};

function opratinoHandler() {
    switch (op) {
        case '=':
            prev = prev - curr;
            console.log(prev);
            display.innerText = prev;
            prev = 0;
            curr = 0;
            break;
        case '+':
            removePrev = true;
            display.innerText = prev + curr;
            prev = 0;
            curr = 0;
            break;
        case '-':
            removePrev = true;
            // if (curr < prev) {
            //     prev = curr - prev;
            // } else {
            // console.log(curr, prev)
            prev = prev - curr;
            // }
            display.innerText = prev;
            prev = 0;
            curr = 0;
            break;
        case '*':
            removePrev = true;
            display.innerText = prev;
            removePrev = true;
            display.innerText = prev * curr;
            prev = 0;
            curr = 0;
            break;
        case '/':
            removePrev = true;
            display.innerText = prev / curr;
            prev = 0;
            curr = 0;
            break;
        default:
            break;
    }
}
for (var i = 0; i < 5; ++i) {
    setTimeout(function () {
        console.log(i)
        console.log(i) 
    }, 1000);
}