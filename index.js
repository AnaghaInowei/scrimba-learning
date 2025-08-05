let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
countEl.innerText = 0;
let count = 0;

function increment() {
    // count = count + 1;
    // count++;
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    console.log(countStr);
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
save();
