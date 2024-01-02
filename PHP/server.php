<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $name = $_POST['name'];

    echo ("Hello from server: $name");
    echo ("Hello from server: $email");
    echo ("Hello from server: $subject");
    echo ("Hello from server: $message");
    ?>