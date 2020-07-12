const form = document.getElementById("form");
const usernameV = document.getElementById("name");
const emailV = document.getElementById("email");
const pass1 = document.getElementById("pass");

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  
  checkValidation();
});

function checkValidation(){
    const username = usernameV.value;
    const email = emailV.value; 
    const password = pass1.value;
  
    var regexName = /[a-zA-Zçë]{3,20}/;
    var regexNumber = /[0-9]{9}$/;
    var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var regexPass = /[a-zA-Z0-9]{6,20}$/;
  
    if(username === '' || username == null){
        errorMSG(usernameV, "Username isn't filled.");
    } else if (!regexName.test(username)){
        errorMSG(usernameV, "Username doesn't meet the requirements.");
    } else {
        successMSG(usernameV, " ");
    }

    if(email === '' || email == null){
        errorMSG(emailV, "Email isn't filled.");
    } else if (!regexEmail.test(email)){
        errorMSG(emailV, "Email doesn't meet the requirements.");
    } else {
        successMSG(emailV, " ");
    }

    if(password == null || password === ''){
        errorMSG(pass1, "Password isn't filled.");
    } else {
        successMSG(pass1, " ");
    }

}

function errorMSG(input, message){
  const controlForm = input.parentElement;
  const small = controlForm.querySelector('small');
  small.innerText = message;
}

function successMSG(input, message){
  const controlForm = input.parentElement;
  const small = controlForm.querySelector('small');
  small.innerText = message;
}