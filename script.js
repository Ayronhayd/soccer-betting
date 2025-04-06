// Замыкания (Closures)
const btn = document.querySelector('.btn-country');

const safeBooking = function () {
  let passengerCount = 0; // Приватная переменная

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
}

const booker = safeBooking(); // Создаем экземпляр функции

btn.addEventListener('click', function () {
  booker(); // Вызываем замыкание
});