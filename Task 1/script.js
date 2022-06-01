/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function convertWeight(event) {
  event.preventDefault();
  const weightInput = document.getElementById("search").value;
  const outputElemGrams = document.getElementById("g");
  const outputElemLb = document.getElementById("lb");
  const outputElemOz = document.getElementById("oz");
  console.log(weightInput);
  if (weightInput) {
    const kg = Number(weightInput);
    const g = (kg * 1000).toFixed(2) + " Grams ";
    const lb = (kg * 2.2046).toFixed(2) + " Pounds ";
    const oz = (kg * 35.274).toFixed(2) + " Ounces ";
    outputElemGrams.innerText = g;
    outputElemLb.innerText = lb;
    outputElemOz.innerText = oz;
  } else {
    outputElem.innerText = " ";
  }
}

document.querySelector("form").addEventListener("submit", convertWeight);
