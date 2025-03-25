'use strict';

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  workingHours: {
    wed: {
      open: 10,
      close: 23,},
      fri: {
        open: 10,
        close: 23
      },
      sun: {
        open: 12,
        close: 23
      }
  },

  orderFood: function (starterIndex, mainIndex) {
    return [this.appetizers[starterIndex], this.mainMenu[mainIndex]];
  },

  foodDelivery: function ({mainMenuIndex, appetizersIndex, time, deliveryTime}) {
    console.log(`Order received! ${this.mainMenu[mainMenuIndex]} and ${this.appetizers[appetizersIndex]} will arrive in ${time} minutes, at ${deliveryTime}`);
  }
};

japaneseRestaurant.foodDelivery({
  mainMenuIndex: 1,
  appetizersIndex: 1,
  time: 45,
  deliveryTime: '2022-03-18 14:15'
});


// Диструктуризация объекта

const {workingHours: hours, name: restName, categories} = japaneseRestaurant;
console.log(hours, restName, categories);


const {sun} = hours;
console.log(sun);

// Диструктуризация массива
// const arr = [3, 5, 7];

// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[2];

// const [y1, y2, y3] = arr;
// console.log(y1, y2, y3);

// console.log(x1, x2, x3);

// console.log(arr);

// let [main, , secondary] = japaneseRestaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1);

// console.log(appetizer, mainFood);

// const nestedArr = [1, 2, [7, 9]];

// const [f, , d] = nestedArr;

// const [f, , [d, e]] = nestedArr;
// console.log(f, d, e);
