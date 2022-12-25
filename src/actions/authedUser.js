export const AUTH_USER = "AUTH_USER";
export const AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT";

export function setAuthedUser(authedUser) {
  return {
    type: AUTH_USER,
    authedUser,
  };
}

export function logoutAuthedUser() {
  return {
    type: AUTH_USER_LOGOUT,
  };
}

export function handleUserLogin(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const user = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );
    if (user) {
      return dispatch(setAuthedUser(user))
    } else {
      return alert("Ooops! such user does't exist in our database")
    } username("")
    password("")
  };
}

export function handleLogout() {
  return (dispatch) => {
    return dispatch(logoutAuthedUser());
  };
}
