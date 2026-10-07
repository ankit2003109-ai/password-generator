const length = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

length.addEventListener("input", () => {
    lengthValue.textContent = length.value;
});

function generatePassword() {

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let characters = "";

    if (document.getElementById("uppercase").checked)
        characters += upper;

    if (document.getElementById("lowercase").checked)
        characters += lower;

    if (document.getElementById("numbers").checked)
        characters += numbers;

    if (document.getElementById("symbols").checked)
        characters += symbols;

    if (characters === "") {
        document.getElementById("message").textContent =
            "Select at least one option!";
        return;
    }

    let password = "";

    for (let i = 0; i < length.value; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
    document.getElementById("message").textContent =
        "Strong password generated! 🔐";
}

function copyPassword() {

    const password = document.getElementById("password").value;

    if (!password) {
        document.getElementById("message").textContent =
            "Generate a password first!";
        return;
    }

    navigator.clipboard.writeText(password);

    document.getElementById("message").textContent =
        "Password copied! ✅";
}

generatePassword();