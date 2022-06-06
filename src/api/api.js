import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1e06eb9a-0d49-47d2-9a3d-59a50cf4053c",
  },
});

const Api = {
  getUsers: (totalCount, pageSize) => {
    return instance
      .get(`users?page=${totalCount}&count=${pageSize}`)
      .then((response) => response.data);
  },

  deleteFollow: (id) => {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  postFollow: (id) => {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },

  getProfile: (userId) => {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },

  setAuth: () => {
    return instance.get("auth/me").then((response) => response.data);
  },

  setNews: () => {
    return axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_71229f52ec9873cef06493c4ce0185058fe4&q=ukraine"
      )
      .then((response) => response.data.results);
  },

  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },

  putStatus: (status) => {
    return instance.put("profile/status", { status: status });
  },

  login: (email, password, rememberMe) => {
    return instance.post("auth/login", { email, password, rememberMe });
  },

  logout: () => {
    return instance.delete("auth/login");
  },

  updatePhoto: (photo) => {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put("profile/photo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default Api;
