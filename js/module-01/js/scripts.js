"use strict";
let sharm = 15;
let hurgada = 25;
let tuba = 6;

let userTickets = prompt("Введите количество необходимых билетов:");
const asNumber = Number(userTickets);

const isValidInput = userTickets !== null && !Number.isNaN(asNumber);
if (isValidInput) {
  if (userTickets <= tuba) {
    const okTrip = confirm("Есть место в группе на Tuba, вы согласны?");

    if (okTrip) {
      alert("Отлично вы в группе Tuba");
      tuba = tuba - userTickets;
    }
  } else if (userTickets <= sharm) {
    const okTrip = confirm("Есть место в группе в Sharm, вы согласны?");
    if (okTrip) {
      alert("Отлично вы в группе Sharm");
      sharm = sharm - userTickets;
    }
  } else if (userTickets <= hurgada) {
    const okTrip = confirm("Есть место в группе в Hurgada, вы согласны?");
    if (okTrip) {
      alert("Отлично вы в группе Tuba");
      hurgada = hurgada - userTickets;
    }
  } else {
    alert("Нам жаль");
  }
} else {
  alert("Ошибка ввода");
}
