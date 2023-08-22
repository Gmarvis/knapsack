const setbtn = document.getElementById("setbtn");
const doneBtn = document.getElementById("donebtn");
const errorText = document.getElementById("errortext");
const reset = document.getElementById("reset");
const displayMax = document.getElementById("displaymax");
const currentWeight = document.getElementById("current");
const listIterms = document.getElementById("list");

const iterms = [
  { name: "Sneakers", value: "5000 CFA", weigth: 4 },
  { name: "Hoody", value: "3500 CFA", weigth: 5 },
  { name: "i Pad", value: "200,000 CFA", weigth: 1 },
  { name: "laptop", value: "300000 CFA", weigth: 9 },
  { name: "Track suit", value: "20000 CFA", weigth: 6 },
  { name: "sun glasses", value: "5000 CFA", weigth: 1.5 },
  { name: "hiking boots", value: "15000 CFA", weigth: 2 },
  { name: "Water butle", value: "1000 CFA", weigth: 0.5 },
  { name: "Sleeping bag", value: "6000 CFA", weigth: 2.5 },
  { name: "Lamp light", value: "7000 CFA", weigth: 3.5 },
  { name: "Face cap", value: "3000 CFA", weigth: 2 },
  { name: "Hat", value: "1000 CFA", weigth: 2.5 },
  { name: "Swimsuit", value: "8000 CFA", weigth: 0.5 },
  { name: "cofee bag", value: "1500 CFA", weigth: 0.5 },
  { name: "Tryport", value: "15000 CFA", weigth: 1.5 },
  { name: "Jacket", value: "8500 CFA", weigth: 0.5 },
  { name: "passport", value: "120000 CFA", weigth: 0.5 },
  { name: "Phone", value: "150000 CFA", weigth: 0.5 },
  { name: "Camera", value: "600000 CFA", weigth: 7.5 },
  { name: "Towel", value: "1000 CFA", weigth: 0.5 },
];
// map through iterms and display them on the dom
const options = iterms.map((iterm) => {
  return `<option value="${iterm.name}">${iterm.name}, ${iterm.weigth}kg,  ${iterm.value}</option>`;
});
// target the select input field
const selectIterms = document.getElementById("select");
//append options to the select input field
selectIterms.innerHTML = options;

let selectedWeight = 0;
let max = 0;
let itermsSeleced = [];

// diisplay max weight on the dom

setbtn.addEventListener("click", () => {
  const maxWeight = document.getElementById("maxweight").value;
  if (+maxWeight === 0) {
    errorText.innerHTML = `<p>error: max weight can not be zero (0)</p>`;
    return;
  }

  errorText.innerHTML = ``;
  max = +maxWeight;

  displayMax.innerHTML = `<p>Max weight: <span>${max}</span>Kg</p>`;
});

// update current weight
document.getElementById(
  "current"
).innerHTML = `<p>Current weight: ${selectedWeight}</p>`;

// add change event listener to the select inport
selectIterms.addEventListener("change", () => {
  let maxWeight = document.getElementById("maxweight").value;
  maxWeight = +maxWeight;

  if (maxWeight === 0) {
    errorText.innerHTML = `<p>error: max weight can not be zero (0)</p>`;
    return;
  }
  errorText.innerHTML = ``;
  max = maxWeight;

  //
  intoBag = iterms.find((iterm) => iterm.name === selectIterms.value);

  // restrict selection when max weight is exceeded
  if (selectedWeight === maxWeight) {
    doneBtn.style.backgroundColor = "red";
    errorText.innerHTML = `<p>You have reached maximum Sack Capasity...!</p>`;
    return;
  }
  if (selectedWeight + intoBag.weigth > maxWeight) {
    doneBtn.style.backgroundColor = "red";
    errorText.innerHTML = `<p>You have reached maximum Sack Capasity, pick iterm with a lesser wieght between <span>${0}Kg</span> and <span>${max-selectedWeight}Kg</span></p>`;
    return;
  } else {
    // add iterm into the selected div
    itermsSeleced.push(intoBag);

    // set the done button status
    doneBtn.style.backgroundColor = "#2c922c";

    // upddate selected weight when selected
    selectedWeight = selectedWeight += intoBag.weigth;
    currentWeight.innerHTML = `<p>Current weight: <span>${selectedWeight}</span>Kg</p>`;

    // display selected iterms as a list
    let list = itermsSeleced.map((iterm) => {
      return `<p>${iterm.name} ${iterm.weigth}Kg ${iterm.value}</p>`;
    });
    listIterms.innerHTML = list;
  }
});

// handle reset btn
reset.addEventListener("click", () => {
  // reset max
  max = 0;
  selectedWeight = 0;
  max = 0;
  maxWeight = 0;
  itermsSeleced = [];
  listIterms.innerHTML = ``;
  currentWeight.innerHTML = `<p>Current weight: ${selectedWeight}</p>`;
  errorText.innerHTML = ``;

  displayMax.innerHTML = `<p>Max weight: ${max}</p>`;
});
