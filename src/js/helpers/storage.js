const setAdminToken = (adminToken) => {
    return localStorage.setItem('adminToken', adminToken);
}

const isAuthenticated = () => {
    if (getAdminToken() || getToken()){
        return true;
    }
    return false;
}

const setToken = (token) => {
    return localStorage.setItem('token', token);
}

const getAdminToken = () => {
    return localStorage.getItem('adminToken');
}

const getToken = () => {
    return localStorage.getItem('token');
}

const clearToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('adminToken');
}

const storage = {
    setAdminToken,
    setToken,
    getAdminToken,
    getToken,
    clearToken,
    isAuthenticated
}

export default storage;