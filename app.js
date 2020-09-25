// # Calculator Plan
// Add 
import { handleAddClick, handleSubClick, handleMultClick, handleDivClick } from "./handlers.js"


const addButton = document.getElementById("add-button");
const subButton = document.getElementById("sub-button");
const multButton = document.getElementById("mult-button");
const divButton = document.getElementById("div-button");

addButton.addEventListener ("click", handleAddClick);
subButton.addEventListener ("click", handleSubClick);
multButton.addEventListener ("click", handleMultClick);
divButton.addEventListener ("click", handleDivClick);










