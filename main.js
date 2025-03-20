document.addEventListener("DOMContentLoaded", function () {
    console.log("ASKDEAL App Loaded");

    // Registration Form Validation
    let registerForm = document.querySelector("form[action='register.php']");
    if (registerForm) {
        registerForm.onsubmit = function (e) {
            let email = document.querySelector("#email").value.trim();
            let phone = document.querySelector("#phone").value.trim();
            let password = document.querySelector("#psw").value.trim();
            let confirmPassword = document.querySelector("#psw-repeat").value.trim();

            if (email === "" || phone === "" || password === "" || confirmPassword === "") {
                alert("All fields are required!");
                e.preventDefault();
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                e.preventDefault();
                return;
            }
        };
    }

    // Login Form Validation
    let loginForm = document.querySelector("form[action='login.php']");
    if (loginForm) {
        loginForm.onsubmit = function (e) {
            let email = document.querySelector("input[name='email']").value.trim();
            let password = document.querySelector("input[name='psw']").value.trim();

            if (email === "" || password === "") {
                alert("Email and Password are required!");
                e.preventDefault();
                return;
            }
        };
    }

    // Navigation Handling (if applicable)
    let navButtons = document.querySelectorAll(".nav-buttons button");
    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            let sectionId = this.getAttribute("onclick").replace("showSection('", "").replace("')", "");
            showSection(sectionId);
        });
    });

});

// Function to handle navigation (if included in your project)
function showSection(sectionId) {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    let activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block";
    }
}
