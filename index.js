let countEl = document.getElementById("count-el");
countEl.innerText = 0;
let count = 0;

function increment() {
    // count = count + 1;
    count++;
    countEl.innerText = count;
}

function save() {
console.log(count);
    // let countStr = count + " - ";
    // console.log(countStr);
    // document.getElementById("count-el").innerText += countStr;
    // countEl.innerText = 0;
    // count = 0;
}

save();
