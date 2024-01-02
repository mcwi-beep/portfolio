<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
use PHPMailer\PHPMailer\PHPMailer;

require_once 'PHPMailer/Exception.php';
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';


$mail = new PHPMailer(true);


    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
// echo "Received data:\n";
// echo "Name: $name\n";
// echo "Email: $email\n";
// echo "Subject: $subject\n";
// echo "Message: $message\n";

    
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Username = "markwilliamsowusu@gmail.com";
        $mail->Password = "htqoplfbafsjgxfh";
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = '587';
        $mail->setFrom('markwilliamsowusu@gmail.com');
        $mail->addAddress('markwilliamsowusu@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = 'Message Received (Contact Page)';
       $mail->Body= "<h3>Name: $name <br>Email: $email <br>Message : $message</h3>";

       
      if ($mail->send()) {
        // Email sent successfully
        $alert = '<div class="alert-success" style="z-index: 9999;">
        <span>Message Sent! Thank you for contacting us.</span>
    </div>
    ';
    echo $alert;
      } else {
        // Email sending failed
        $alert = '<div class="alert-danger">
            <span>Error! Message could not be sent.</span>
        </div>';
        echo $alert;
      }
     


?>

