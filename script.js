function loadUsers() {
    const usersStr = localStorage.getItem("users");
    if (usersStr) {
        const users = JSON.parse(usersStr);
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
