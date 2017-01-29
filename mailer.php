<?php

    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $findus = trim($_POST["findus"]);
    $message = trim($_POST["message"]);

    // Check the data.
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.linocatucci.com/index.php?success=-1#lets-work-together");
        exit;
    } 

    // Set the recipient email address. Update this to YOUR desired email address.
    //$recipient = "linocatucci@gmail.com";
    $recipient = "linocatucci@gmail.com";

    // Set the email subject.
    $subject = "New contact from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "findus:\n$findus\n";
    $email_content .= "Message:\n$message\n";
    

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);

/*
    if($send_contact){
        echo "Thank you! We've received your information.\r\n";
        echo "Please go back to the website: http://www.linocatucci.com/kupaflyfishing/index.html\r\n";
    }
    else{
        echo "Error";
    }
    */

    // Redirect to the index.html page with success code
   header("Location: http://www.linocatucci.com/index.php?success=1#lets-work-together");

?>