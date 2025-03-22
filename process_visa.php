<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $country = $_POST['country'];

    if (empty($country)) {
        header("Location: form.html?error=Invalid country selection.");
        exit();
    }

    switch ($country) {
        case "USA":
            $message = "Visa required for most applicants.";
            break;
        case "Canada":
            $message = "Visa required unless you have an eTA.";
            break;
        case "India":
            $message = "Visa required before travel.";
            break;
        case "UK":
            $message = "Visa depends on the duration of stay.";
            break;
        case "Australia":
            $message = "eVisa available for eligible travelers.";
            break;
        default:
            $message = "Invalid country selection.";
    }

    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Visa Application Result</title>
        <link rel='stylesheet' href='styles.css'>
    </head>
    <body>
        <div class='container'>
            <h2>Visa Requirement</h2>
            <p>$message</p>
            <a href='form.html'>Go Back</a>
        </div>
    </body>
    </html>";
}
?>
