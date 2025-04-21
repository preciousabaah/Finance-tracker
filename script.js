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

