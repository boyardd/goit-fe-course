"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = "gMango";

// const checkLoginValidity = function(login){
//   let validLogin = login;
//   if (validLogin.length >= 4 && validLogin.length <= 16){
//     validLogin = true;
//   }
//  else {
//      alert("Ошибка");
//      validLogin = false;

//  }
//   console.log(validLogin);
//   return validLogin;

// }
const checkLoginValidity = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    // alert ("Ошибка");
    return false;
  }
};

const checkIfLoginExists = function(logins, login) {
  let loginExist;
  let arrLogins = logins;
  let userLogin = login;
  for (let i = 0; i < arrLogins.length; i++) {
    if (userLogin.includes(arrLogins[i])) {
      // alert("Такой логин уже используется")
      return true;
    } else {
      return false;
    }
    // else{
    //  alert("Логин успешно добавлен")
    //  userLogin.push(arrLogins[i]);
    // }
  }
};

const addLogin = function(logins, login) {
  let checkLogin;
  let checkExists;
  let userLogin = login;
  if ((checkLogin = checkLoginValidity(login))) {
    checkIfLoginExists(logins, login);
    if ((checkExists = checkIfLoginExists(logins, login))) {
      alert("Такой логин уже используется");
    } else {
      alert("Логин успешно добавлен");
      userLogin.push(arrLogins[i]);
    }
  } else {
    alert("Ошибка");
  }
};

console.log(addLogin(logins, login));
