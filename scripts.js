document.addEventListener("DOMContentLoaded", () => {
    // Login form validation
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const emailError = document.getElementById("loginEmailError");
            const passwordError = document.getElementById("loginPasswordError");

            emailError.textContent = "";
            passwordError.textContent = "";

            if (!email.includes("@")) {
                emailError.textContent = "Please enter a valid email.";
            }
            if (password.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters.";
            }
            if (!emailError.textContent && !passwordError.textContent) {
                alert("Login Successful!");
            }
        });
    }

    // Registration form validation
    const registerForm = document.getElementById("registerForm");
    console.log("registerForm,,,,,", registerForm)
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            const usernameError = document.getElementById("usernameError");
            const emailError = document.getElementById("registerEmailError");
            const passwordError = document.getElementById("registerPasswordError");

            usernameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";

            if (username.trim() === "") {
                usernameError.textContent = "Username is required.";
            }
            if (!email.includes("@")) {
                emailError.textContent = "Please enter a valid email.";
            }
            if (password.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters.";
            }
            if (!usernameError.textContent && !emailError.textContent && !passwordError.textContent) {
                alert("Registration Successful!");
            }
        });
    }
});
