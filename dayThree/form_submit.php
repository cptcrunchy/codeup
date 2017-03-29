<?php
if(isset($_POST['form1'])) {
   $password = $_POST['password'];
   $username = $_POST['username'];


    if($password == 'tacos' && $username == 'deadpool') {
        header("Location: home.html");
   } else {
       echo "Not the password. <a href='form.html'>Try Again!</a>";
   }

}

?>