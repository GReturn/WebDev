<?php
include('connect_db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $birthday = $_POST['birthday'];
    $sex = $_POST['sex'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    //FUTURE REFERENCE(don't mind this maam hehe): $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, birthday, sex, email, password) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $firstname, $lastname, $birthday, $sex, $email, $password);

    if ($stmt->execute()) {
        echo "User successfully added to the database";
    } else {
        echo "Error: Failed to add user to the database";
    }

    $stmt->close();
    $conn->close();
}
?>