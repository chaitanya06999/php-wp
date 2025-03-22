function checkVisa() {
    var country = document.getElementById("countrySelect").value;
    var message = document.getElementById("visaMessage");

    if (country === "") {
        message.innerHTML = "Please select a country.";
        message.classList.add("error");
        message.classList.remove("success");
    } else {
        message.classList.remove("error");
        message.classList.add("success");
        switch (country) {
            case "USA":
                message.innerHTML = "Visa required for most applicants.";
                break;
            case "Canada":
                message.innerHTML = "Visa required unless you have an eTA.";
                break;
            case "India":
                message.innerHTML = "Visa required before travel.";
                break;
            case "UK":
                message.innerHTML = "Visa depends on the duration of stay.";
                break;
            case "Australia":
                message.innerHTML = "eVisa available for eligible travelers.";
                break;
        }
    }
}
