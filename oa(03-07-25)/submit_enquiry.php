<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database credentials
$servername = "objectarena.powwebmysql.com";
$username = "object_01"; // Replace with your MySQL username
$password = "Object@2"; // Replace with your MySQL password
$dbname = "oa_enquiry";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';

// Debugging output
echo "Received data: Name=$name, Email=$email, Phone=$phone<br>";

// Prepare and execute SQL query using prepared statements
$stmt = $conn->prepare("INSERT INTO enquiries (name, email, phone) VALUES (?, ?, ?)");
if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
}

$stmt->bind_param("sss", $name, $email, $phone);

if ($stmt->execute()) {
    echo "Enquiry submitted successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
