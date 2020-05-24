var passwords = document.getElementById('pass');

function valid(){
    if(passwords.value.length() < 6){
        alert('password must be longer than 6 characters');
    }
}