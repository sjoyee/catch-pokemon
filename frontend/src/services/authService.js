import api from "./api";

export const login = async (username, password, setFail) => {
  try {
    const response = await api.post("/auth/jwt/create/", {
      username,
      password,
    });
    setFail(false);
    if (response.data.access) {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("username", username);
      window.location.replace("/");
    } else {
      window.location.replace("/login");
    }
  } catch (e) {
    setFail(true);
    return false;
  }
  return true;
};

export const createAccount = async (
  username,
  firstName,
  lastName,
  password,
  password2,
  setStatus,
  setErrors
) => {
  let result = null;
  try {
    const res = await api.post("/auth/users/", {
      username: username,
      first_name: firstName,
      last_name: lastName,
      password: password,
      re_password: password2,
    });
    result = res;
  } catch (res) {
    console.log(res.response.status, res.response.data);
    setStatus(false);
    setErrors(res.response.data);
    return;
  }
  console.log("no error");
  console.log(result);
  setStatus(true);
  setErrors([]);
  return;
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("username");
  window.location.replace("/login");
};
