var counter = document.getElementById("counter");
var count = 0

function increment(){
    // get value from the DOM
    console.log(counter.innerHTML);
    let parsedCounter = parseInt(counter.innerHTML)
    console.log(parsedCounter);

    parsedCounter++

    counter.innerHTML = parsedCounter;


    let newDiv = document.createElement("div");
    newDiv.innerHTML = "The counter has been increased by 1";

    document.getElementById("counterLogs").appendChild(newDiv);
}

function decrement(){
    console.log(counter.innerHTML);
    parsedCounter = parseInt(counter.innerHTML)
    console.log(parsedCounter);

    parsedCounter--

    counter.innerHTML = parsedCounter;

    newDiv = document.createElement("div");
    newDiv.innerHTML = "The counter has been decreased by 1";

    document.getElementById("counterLogs").appendChild(newDiv);
}

function reset(){
    counter.innerHTML = parseInt(0);

    newDiv = document.createElement("div");
    newDiv.innerHTML = "The counter has been reset";

    document.getElementById("counterLogs").appendChild(newDiv);
}

