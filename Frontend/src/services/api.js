import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});
export const getLeaderboard = () =>
  API.get("/user/leaderboard");
export const login = (data) => API.post("/auth/login", data);

export const addScore = (value, token) =>
  API.post("/user/score", {value}, {
    headers:{authorization: token}
  });

export const getProfile = (token) =>
  API.get("/user/profile", {
    headers:{authorization: token}
  });
  export const subscribe = (plan, token) =>
  API.post("/user/subscribe", { plan }, {
    headers: { authorization: token }
  });

export const runDraw = async () => {
  try {
    const res = await API.post("/draw/run");
    return res;
  } catch (err) {
    console.log("ERROR:", err.response.data);
  }
};
