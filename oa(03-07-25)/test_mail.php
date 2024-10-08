<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (mail('your-email@example.com', 'Test Email', 'This is a test email.')) {
    echo 'Mail sent successfully!';
} else {
    echo 'Mail sending failed.';
}
?>
