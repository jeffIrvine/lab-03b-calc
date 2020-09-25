// # Calculator Plan
// Add 
import { handleAddClick, } from "./handlers.js"


const addButton = document.getElementById("add-button");
const subButton = document.getElementById("sub-button");
const multButton = document.getElementById("mult-button");
const divButton = document.getElementById("div-button");




addButton.addEventListener ("click", handleAddClick);
subButton.addEventListener ("click", ()

















// subtract
const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");

const subDif = document.getElementById("sub-dif")


subButton.addEventListener ("click", () => {
    const value1 = subInput1.value; 
    const value2 = subInput2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const difResults  = value1AsNumber - value2AsNumber;
    subDif.textContent = difResults;
});


// multiply
const multInput1 = document.getElementById("mult-input-1");
const multInput2 = document.getElementById("mult-input-2");

const multProd = document.getElementById("mult-prod")


multButton.addEventListener ("click", () => {
    const value1 = multInput1.value; 
    const value2 = multInput2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const prodResults  = value1AsNumber * value2AsNumber;
    multProd.textContent = prodResults;
});

// divide
const divInput1 = document.getElementById("div-input-1");
const divInput2 = document.getElementById("div-input-2");

const divQuot = document.getElementById("div-quot")


divButton.addEventListener ("click", () => {
    const value1 = divInput1.value; 
    const value2 = divInput2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const quotResults  = value1AsNumber / value2AsNumber;
    divQuot.textContent = quotResults;
});
