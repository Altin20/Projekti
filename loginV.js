const form = document.getElementById("form");
const emailV = document.getElementById("email");
const pass1 = document.getElementById("password");

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  
  checkValidation();
});

function checkValidation(){
  const email = emailV.value; 
  const password = pass1.value;
  var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var regexPass = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;
   
  if(email === '' || email == null){
    errorMSG(emailV, "Email isn't filled");
  } else if (!regexEmail.test(email)){
    errorMSG(emailV, "Email doesn't exist");
  } else {
    successMSG(emailV, "");
  }

  if(password == null || password === ''){
    errorMSG(pass1, "Password isn't filled");
  } else if (!regexPass.test(password)){
    errorMSG(pass1, "Password isn't correct");
  } else {
    successMSG(pass1, "");
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