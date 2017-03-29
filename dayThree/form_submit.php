<?php
if(isset($_POST['form1'])) {
   $password = $_POST['password'];
   $username = $_POST['username'];


    if($password == 'tacos' && $username == 'deadpool') {
        header("Location: welcome.html");
   } else {
       echo "Not the password. <a href='my_first_form.html'>Try Again!</a>";
   }

}

?>