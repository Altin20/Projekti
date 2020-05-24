var submitB = document.getElementById('submitButton');

function validate(){
    var names = document.getElementById('fullname');
    var passwords = document.getElementById('pass');
    var emails = document.getElementById('email');
    var mosha = document.getElementById('mosha');
    var forms = document.getElementById('form');
    
    if(names.value.trim() < 8){
        alert('emri nuk duhet te jete i zbrazet')
    }

    if(passwords.value.length() < 8){
        alert('passwordi duhet te jete me i madh se 8 karaktere')
    }

    if(mosha.value.length < 8){
        numbers.style.border = "1px solid red";
        numbers.error.style.display = "block";
        numbers.focus();
    }
}