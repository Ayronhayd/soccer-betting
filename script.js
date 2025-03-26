'use strict';

const bookings = [];

const makeBooking = function (flightNum, passengersNum = 1, price = 100 * passengersNum) {
  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};


makeBooking('LH123', 2, 80);
makeBooking('LH123', 2);


