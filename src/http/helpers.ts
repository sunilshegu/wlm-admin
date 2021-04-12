const AUTH_TOKEN_KEY = 'medical_auth_token';

export const getAuthorizationToken = () => {
  return window.sessionStorage.getItem(AUTH_TOKEN_KEY);
}

export const setAuthorizationToken = (token: string) => {
  window.sessionStorage.setItem(AUTH_TOKEN_KEY, 'Bearer ' + token);
}

export const removeAuthorizationToken = () => {
  return window.sessionStorage.removeItem(AUTH_TOKEN_KEY);
}