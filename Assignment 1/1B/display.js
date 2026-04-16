document.addEventListener("DOMContentLoaded", function () {

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let table = document.getElementById("userTable");

    if (users.length === 0) {
        table.innerHTML = "<tr><td colspan='3' class='text-center'>No users found</td></tr>";
        return;
    }

    users.forEach(function (user) {
        let row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
            </tr>
        `;
        table.innerHTML += row;
    });

});