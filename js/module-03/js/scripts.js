"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = "Mango";

const checkLoginValidity = function(login) {
  let validLogin = login;
  if (validLogin.length >= 4 && validLogin.length <= 16) {
    validLogin = true;
  } else {
    alert("Ошибка");
    validLogin = false;
  }
  console.log(validLogin);
  return validLogin;
};

const checkIfLoginExists = function(logins, login) {
  let loginExist;
  let arrLogins = logins;
  let userLogin = login;
  for (let i = 0; i < arrLogins.length; i++) {
    if (userLogin.includes(arrLogins[i])) {
      alert("Такой логин уже используется");
    } else {
      alert("Логин успешно добавлен");
      userLogin.push(arrLogins[i]);
    }
  }
};

const addLogin = function(logins, login) {
  let checkLogin;
  if ((checkLogin = checkLoginValidity(login))) {
    console.log(checkIfLoginExists(logins, login));
  }
};
console.log(addLogin(logins, login));
