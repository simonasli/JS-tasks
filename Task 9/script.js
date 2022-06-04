/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = function () {
      if (this.budget > 100000000) {
        return true;
      } else {
        return false;
      }
    };
  }
}

const myMovie = new Movie("Matrix", "Good director", 200000000);
const yourMovie = new Movie("Titanic", "Sad director", 5000000);

console.log(myMovie);
console.log(myMovie.wasExpensive());
console.log(yourMovie);
console.log(yourMovie.wasExpensive());
