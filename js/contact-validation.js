document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    function handleSubmit(event) {
        const emailInput = document.querySelector(".contact__form-el--email");
        const emailValue = emailInput.value.trim();
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(emailValue)) {
            event.preventDefault(); // Prevents the form submission
            alert("Please enter a valid email address.");
        }
    }

    contactForm.addEventListener("submit", handleSubmit);
});