document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        let fullname = document.querySelector("input[name='fullname']").value.trim();
        let gender = document.querySelector("select[name='gender']").value;
        let age = document.querySelector("input[name='age']").value;
        let grade = document.querySelector("select[name='grade']").value;
        let phone = document.querySelector("input[name='phone']").value.trim();
        let address = document.querySelector("textarea[name='address']").value.trim();

        // 1. Empty check
        if (fullname === "" || gender === "" || age === "" || grade === "" || phone === "" || address === "") {
            alert("❌ Please fill all fields!");
            event.preventDefault();
            return;
        }

        // 2. Name validation (only letters)
        let namePattern = /^[a-zA-Z\s]+$/;
        if (!namePattern.test(fullname)) {
            alert("❌ Full name must contain only letters!");
            event.preventDefault();
            return;
        }

        // 3. Age validation
        if (age < 10 || age > 30) {
            alert("❌ Age must be between 10 and 30!");
            event.preventDefault();
            return;
        }

        // 4. Phone validation (simple)
        if (phone.length < 9 || phone.length > 15) {
            alert("❌ Enter a valid phone number!");
            event.preventDefault();
            return;
        }

        // 5. Success message
        alert("✅ Student enrolled successfully!");

    });

});
