function loadUsers() {
    const usersJson = localStorage.getItem("users");
    if (usersJson) {
        const users = JSON.parse(usersJson);
        return users;
    }
    else {
        return [];
    }
}

function showAlert(message) {
    const alertElement = document.getElementById("validationError");
    alertElement.innerHTML = message;
    alertElement.classList.remove("d-none");
}