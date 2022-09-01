let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0 

function increment() {
    count += 1
    countEl.textContent = count
}

let entry = count + " - " 

function saveCount() {
    let entry = count + " - "
    saveEl.textContent += entry
    countEl.textContent = 0
    count = 0
}