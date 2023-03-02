import api from "./api";

export const login = async (username, password) => {
  const response = await api.post("/auth/jwt/create/", {
    username,
    password,
  });
  if (response.data.access) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("username", username);
    window.location.replace("/");
  } else {
    window.location.replace("/login");
  }
  return response.data;
};

export const createAccount = async (
  username,
  firstName,
  lastName,
  password,
  password2
) => {
  let success = false;
  await api
    .post("/auth/users/", {
      username: username,
      first_name: firstName,
      last_name: lastName,
      password: password,
      re_password: password2,
    })
    .then((res) => {
      success = true;
      window.location.replace("/login");
    })
    .catch((res) => {
      console.log(res);
    });
  return success;
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("username");
  window.location.replace("/login");
};

// export const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };
