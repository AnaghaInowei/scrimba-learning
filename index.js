let countEl = document.getElementById("count-el");
countEl.innerText = 0;
let count = 0;

function increment() {
    //count = count + 1;
    count++;
    countEl.innerText = count;
    console.log(count);
}

increment();