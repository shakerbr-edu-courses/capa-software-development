export function saveToken (token) {
    localStorage.setItem("token", token);
}

export function logout() {
    localStorage.removeItem('token');
}

export function getToken () {
    return localStorage.getItem("token");
}

export function isLoggedIn () {
    const token = getToken();
    return !!token;
}