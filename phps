<?php

session_start();

$githubBaseUrl = 'https://github.firma.de';

$clientId = 'DEINE_CLIENT_ID';
$clientSecret = 'DEIN_CLIENT_SECRET';

$redirectUri = 'http://DEIN-SERVER/github_con/callback.php';

$code = $_GET['code'] ?? null;
$state = $_GET['state'] ?? null;

if (!$code) {
    die('Kein GitHub-Code erhalten.');
}

if (
    !$state ||
    !isset($_SESSION['github_oauth_state']) ||
    $state !== $_SESSION['github_oauth_state']
) {
    die('Ungültiger OAuth-State.');
}

unset($_SESSION['github_oauth_state']);

$postData = http_build_query([
    'client_id' => $clientId,
    'client_secret' => $clientSecret,
    'code' => $code,
    'redirect_uri' => $redirectUri
]);

$options = [
    'http' => [
        'method' => 'POST',
        'header' =>
            "Accept: application/json\r\n" .
            "Content-Type: application/x-www-form-urlencoded\r\n" .
            "User-Agent: github-con\r\n",
        'content' => $postData,
        'ignore_errors' => true,
        'timeout' => 15
    ]
];

$context = stream_context_create($options);

$tokenUrl = $githubBaseUrl . '/login/oauth/access_token';

$response = file_get_contents(
    $tokenUrl,
    false,
    $context
);

if ($response === false) {
    die('Fehler beim Abruf des GitHub Access Tokens.');
}

$data = json_decode($response, true);

if (!is_array($data)) {
    die('Ungültige Antwort von GitHub: ' . htmlspecialchars($response));
}

if (!isset($data['access_token'])) {
    $error = $data['error'] ?? 'Unbekannter Fehler';
    $description = $data['error_description'] ?? '';

    die(
        'Kein Access Token erhalten.<br>' .
        'Fehler: ' . htmlspecialchars($error) . '<br>' .
        htmlspecialchars($description)
    );
}

$_SESSION['github_token'] = $data['access_token'];

header('Location: repos.php');
exit;



----

<?php

$githubBaseUrl = 'https://DEIN-GITHUB-HOST';

echo '<h2>PHP</h2>';
echo 'Version: ' . PHP_VERSION . '<br>';

echo '<h2>allow_url_fopen</h2>';
var_dump(ini_get('allow_url_fopen'));

echo '<h2>Stream Wrapper</h2>';
echo 'HTTPS vorhanden: ';
var_dump(in_array('https', stream_get_wrappers()));

echo '<h2>DNS</h2>';

$host = parse_url($githubBaseUrl, PHP_URL_HOST);

echo 'Hostname: ' . htmlspecialchars($host) . '<br>';
echo 'Aufgelöste IP: ';
var_dump(gethostbyname($host));

echo '<h2>GitHub Startseite abrufen</h2>';

$url = $githubBaseUrl . '/';

echo 'URL: ' . htmlspecialchars($url) . '<br><br>';

$response = @file_get_contents($url);

if ($response === false) {
    echo '<strong>FEHLER</strong><br><pre>';
    print_r(error_get_last());
    echo '</pre>';
} else {
    echo '<strong>ERFOLG</strong><br>';
    echo 'Bytes empfangen: ' . strlen($response);
}

echo '<h2>OAuth Token Endpoint</h2>';

$tokenUrl = $githubBaseUrl . '/login/oauth/access_token';

echo htmlspecialchars($tokenUrl);
