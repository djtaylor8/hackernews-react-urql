const AUTH_TOKEN = 'auth-token';

export const getToken = () => localStorage.getItem(AUTH_TOKEN);
export const setToken = () => localStorage.setItem(AUTH_TOKEN, token);
export const deleteToken = () => localStorage.removeItem(AUTH_TOKEN);