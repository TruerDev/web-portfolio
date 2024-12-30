<?php
$host = 'YOUR_HOST';
$port = 'YOUR_PORT';
$dbname = 'YOUR_DBNAME';
$user = 'YOUR_USERNAME';
$password = 'YOUR_PASS';

try {
    $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname", $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch (PDOException $e) {
    die("Ошибка подключения к базе данных: " . $e->getMessage());
}

$firstName = $_POST['first-name'] ?? null;
$lastName = $_POST['last-name'] ?? null;
$email = $_POST['email'] ?? null;
$phone = $_POST['phone'] ?? null;
$message = $_POST['message'] ?? null;

if (!$firstName || !$lastName || !$email) {
    die("Обязательные поля не заполнены.");
}

try {
    $stmt = $pdo->prepare("INSERT INTO form_data (first_name, last_name, email, phone, message) VALUES (:first_name, :last_name, :email, :phone, :message)");
    $stmt->execute([
        ':first_name' => $firstName,
        ':last_name' => $lastName,
        ':email' => $email,
        ':phone' => $phone,
        ':message' => $message,
    ]);

    echo "Данные успешно отправлены!";
} catch (PDOException $e) {
    die("Ошибка записи в базу данных: " . $e->getMessage());
}
