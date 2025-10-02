<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email   = htmlspecialchars($_POST['email']);
    $jobRole = htmlspecialchars($_POST['jobRole']);
    $message = htmlspecialchars($_POST['message']);

    // Resume file
    $resume = $_FILES['resume'];
    $resumePath = $resume['tmp_name'];
    $resumeName = $resume['name'];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'kaveri@vcreatetech.com'; // still using same SMTP account
        $mail->Password   = 'xjfl xsqx vawx gnsc';  // Gmail App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom($email);
        $mail->addAddress('kaveri@vcreatetech.com', 'Vcreate Tech'); // Job Applications go here
        $mail->addReplyTo($email);

        $mail->isHTML(true);
        $mail->Subject = "New Job Application: {$jobRole}";
        $mail->Body = "
            <h3>New Job Application</h3>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Job Role:</strong> {$jobRole}</p>
            <p><strong>Message:</strong> {$message}</p>
        ";

        if ($resumePath) {
            $mail->addAttachment($resumePath, $resumeName);
        }

        $mail->send();
        echo "Application submitted successfully!";
    } catch (Exception $e) {
        echo "Application could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
