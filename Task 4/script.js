/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

let getCars = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      let cars = await response.json();
      createCarCards(cars);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

function createCarCards(cars) {
  const carsContainer = document.getElementById("output");
  carsContainer.innerHTML = "";

  cars.forEach((car) => {
    const carImage = document.createElement("h1");
    carImage.innerText = car.brand;
    carImage.setAttribute("alt", "car brand");

    const carName = document.createElement("p");
    const models = car.models;
    let carModels = models.join(", ");
    carName.innerText = carModels;
    carName.setAttribute("alt", "car model");

    const carCard = document.createElement("div");
    carCard.setAttribute("class", "car-card");
    carCard.append(carImage, carName);
    carsContainer.append(carCard);
  });
}

getCars();
