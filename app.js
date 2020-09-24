// # Calculator Plan
// Add 
const addInput1 = document.getElementById("add-input-1");
const addInput2 = document.getElementById("add-input-2");
const addButton = document.getElementById("add-button");
const addSum = document.getElementById("add-sum")


addButton.addEventListener ("click", () => {
    const value1 = addInput1.value; 
    const value2 = addInput2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const sumResults  = value1AsNumber + value2AsNumber;
    addSum.textContent = sumResults;
});


// subtract
const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");
const subButton = document.getElementById("sub-button");
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
const multButton = document.getElementById("mult-button");
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
const divButton = document.getElementById("div-button");
const divQuot = document.getElementById("div-quot")


divButton.addEventListener ("click", () => {
    const value1 = divInput1.value; 
    const value2 = divInput2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const quotResults  = value1AsNumber / value2AsNumber;
    divQuot.textContent = quotResults;
});
