<<<<<<< HEAD
<?php 
    if(isset($_POST['submit'])){
        $check = validateData($_POST['emailInp'], $_POST['passwordInp']);
        if($check){
            echo 'login successful';
        } else {
            echo 'data empty';
        }
    } else {
        echo 'login not successful';
    }

    function validateData($username, $password){
        if(empty($username)){
            return false;
        } else if($password){
            return false;
        } else {
            return true;
        }
    }
=======
<?php 
    if(isset($_POST['submit'])){
        $check = validateData($_POST['emailInp'], $_POST['passwordInp']);
        if($check){
            echo 'login successful';
        } else {
            echo 'data empty';
        }
    } else {
        echo 'login not successful';
    }

    function validateData($username, $password){
        if(empty($username)){
            return false;
        } else if($password){
            return false;
        } else {
            return true;
        }
    }
>>>>>>> fb3e07175f628032af803f730914b7bf7b074004
?>