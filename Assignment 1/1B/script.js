document.addEventListener("DOMContentLoaded", function () {

    console.log("Script Loaded ");

    const form = document.getElementById("regForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("Form Submitted ");

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        if (name === "" || email === "" || password === "") {
            alert("All fields are required!");
            return;
        }
        let user = { name, email, password };
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log("API Response:", data);
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration Successful ");
            form.reset();
            window.location.href = "data.html";
        })
        .catch(err => {
            console.error("Error:", err);
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Saved locally (API failed) ");
            form.reset();
        });

    });
});