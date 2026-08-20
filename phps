<?php

$clientId = 'DEINE_CLIENT_ID';

$loginUrl =
    'https://github.com/login/oauth/authorize'
    . '?client_id=' . urlencode($clientId)
    . '&redirect_uri=' . urlencode('http://SERVER/github_con/callback.php');

?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>GitHub Connector</title>
</head>
<body>

<h1>GitHub Connector</h1>

<a href="<?= htmlspecialchars($loginUrl) ?>">
    Mit GitHub anmelden
</a>

</body>
</html>


<?php

$code = $_GET['code'] ?? null;

if (!$code) {
    die('Kein GitHub-Code erhalten.');
}

echo 'GitHub Code erhalten: ';
echo htmlspecialchars($code);



---
  <?php
session_start();

$clientId = 'DEINE_CLIENT_ID';
$redirectUri = 'http://SERVER/github_con/callback.php';

$state = bin2hex(random_bytes(16));
$_SESSION['github_oauth_state'] = $state;

$params = [
    'client_id' => $clientId,
    'redirect_uri' => $redirectUri,
    'state' => $state
];

header(
    'Location: https://github.com/login/oauth/authorize?' .
    http_build_query($params)
);
exit;


<?php
session_start();

$clientId = 'DEINE_CLIENT_ID';
$clientSecret = 'DEIN_CLIENT_SECRET';
$redirectUri = 'http://SERVER/github_con/callback.php';

$code = $_GET['code'] ?? null;
$state = $_GET['state'] ?? null;

if (!$code) {
    die('Kein GitHub-Code erhalten.');
}

if (!$state || $state !== ($_SESSION['github_oauth_state'] ?? null)) {
    die('Ungültiger OAuth-State.');
}

$postData = [
    'client_id' => $clientId,
    'client_secret' => $clientSecret,
    'code' => $code,
    'redirect_uri' => $redirectUri
];

$ch = curl_init('https://github.com/login/oauth/access_token');

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($postData),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Accept: application/json'
    ]
]);

$response = curl_exec($ch);

if ($response === false) {
    die('Fehler beim Token-Abruf: ' . curl_error($ch));
}

curl_close($ch);

$data = json_decode($response, true);

if (!isset($data['access_token'])) {
    die('Kein Access Token erhalten: ' . htmlspecialchars($response));
}

$_SESSION['github_token'] = $data['access_token'];

echo 'GitHub Login erfolgreich.';
