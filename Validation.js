const form = document.getElementById("form");
const usernameV = document.getElementById("name");
const emailV = document.getElementById("email");
const pass1 = document.getElementById("password");
const pass2 = document.getElementById("checkPassword");

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  
  checkValidation();
});

function checkValidation(){
  const username = usernameV.value;
  const email = emailV.value; 
  const password = pass1.value;
  const passwordC = pass2.value;
  var regexName = /[a-zA-Zçë]{3,20}/;
  var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var regexPass = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;
   
  if(username === '' || username == null){
    errorMSG(usernameV, "Username isn't filled");
  } else if (!regexName.test(username)){
    errorMSG(usernameV, "Username doesn't meet the requirements");
  } else {
    successMSG(usernameV, "");
  }

  if(email === '' || email == null){
    errorMSG(emailV, "Email isn't filled");
  } else if (!regexEmail.test(email)){
    errorMSG(emailV, "Email doesn't meet the requirements");
  } else {
    successMSG(emailV, "");
  }

  if(password == null || password === ''){
    errorMSG(pass1, "Password isn't filled");
  } else if (!regexPass.test(password)){
    errorMSG(pass1, "Password doesn't meet the requirements");
  } else {
    successMSG(pass1, "");
  }

  if(passwordC == null || passwordC === ''){
    errorMSG(pass2, "Password isn't filled");
  } else if (!regexPass.test(passwordC)){
    errorMSG(pass2, "Password doesn't meet the requirements");
  } else if (passwordC !== password){
    errorMSG(pass2, "Passwords don't match");
  } else {
    successMSG(pass2, "");
  }

}

function errorMSG(input, message){
  const controlForm = input.parentElement;
  const small = controlForm.querySelector('small');
  small.innerText = message;
  controlForm.className = 'controlForm error';
}

function successMSG(input, message){
  const controlForm = input.parentElement;
  const small = controlForm.querySelector('small');
  controlForm.className = 'controlForm success';
  small.innerText = message;
}