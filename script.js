const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputEmailZone = document.getElementById("input-email");
const inputPasswordZone = document.getElementById("input-password");

inputEmail.addEventListener("focus", function () {
    inputEmailZone.style.borderColor = "rgb(5, 126, 55)";
});

inputEmail.addEventListener("blur", function () {
    inputEmailZone.style.borderColor = "#595757";
});

inputPassword.addEventListener("focus", function () {
    inputPasswordZone.style.borderColor = "rgb(5, 126, 55)";
});

inputPassword.addEventListener("blur", function () {
    inputPasswordZone.style.borderColor = "#595757";
});

