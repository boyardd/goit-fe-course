"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = "uMango";


const checkLoginValidity = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const checkIfLoginExists = function(logins, login) {
  // let loginExist;
  // let arrLogins = logins;
  // let userLogin = login;
  return logins.includes(login);
 
};

const addLogin = function(logins, login) {
  
  let userLogin = login;
  let arrLogins = logins;

  const loginValid = checkLoginValidity(login);
  if(!loginValid){
    alert('Ошибка');
    return;
  }
  const loginExists = checkIfLoginExists(logins, login);
  if(loginExists){
    alert("Такой логин уже используется");
    return;
  }
  arrLogins.push(userLogin);
  alert('логин успешно добавлен');
};

console.log(addLogin(logins, login));
