import { add, sub, mult, div} from "./mathUtils.js";

// Addition
const addInput1 = document.getElementById("add-input-1");
const addInput2 = document.getElementById("add-input-2");
const addSum = document.getElementById("add-sum")

export function handleAddClick() {
    const value1 = addInput1.valueAsNumber; 
    const value2 = addInput2.valueAsNumber;
    const sum = add(value1, value2);
    addSum.textContent = sum;
}

// Subtraction
const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");
const subDif = document.getElementById("sub-dif")

export function handleSubClick() {
    const value1 = subInput1.valueAsNumber; 
    const value2 = subInput2.valueAsNumber;
    const difference = sub(value1, value2);
    subDif.textContent = difference;
}

// Multiplication
const multInput1 = document.getElementById("mult-input-1");
const multInput2 = document.getElementById("mult-input-2");
const multProd = document.getElementById("mult-prod")

export function handleMultClick() {
    const value1 = multInput1.valueAsNumber; 
    const value2 = multInput2.valueAsNumber;
    const Product = mult(value1, value2);
    multProd.textContent = Product;
}

// Division
const divInput1 = document.getElementById("div-input-1");
const divInput2 = document.getElementById("div-input-2");
const divQuot = document.getElementById("div-quot")

export function handleDivClick() {
    const value1 = divInput1.valueAsNumber; 
    const value2 = divInput2.valueAsNumber;
    const Quotient = div(value1, value2);
    divQuot.textContent = Quotient;
}