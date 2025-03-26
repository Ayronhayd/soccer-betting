'use strict';

const bookings = [];

const makeBooking = function (
  flightNum,
  passengersNum = 1,
  price = 100 * passengersNum
) {
  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// makeBooking('LH123', 2, 80);
// makeBooking('LH123', 2);

// 131. 131. Передача Аргументов. Значения vs Ссылки

const flightNumber = 'BV328';
const passenger1145 = {
  firstName: 'John',
  lastName: 'Smith',
  passport: 'HFD1234567',
};

const checkIn = function (flight, passenger) {
  flight = 'bv328';
  passenger.firstName = passenger.firstName.toLowerCase();
  passenger.lastName = passenger.lastName.toLowerCase();

  if (passenger.passport === 'HFD1234567') {
    console.log(`Checked in ${passenger.firstName} ${passenger.lastName}`);
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flightNumber, passenger1145);
console.log(flightNumber);
console.log(passenger1145);
