import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "69fffc0e-9b9e-4602-9adc-6d9baa3d8be8",
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
        "https://newsdata.io/api/1/news?apikey=pub_71229f52ec9873cef06493c4ce0185058fe4&q=pegasus&language=en"
      )
      .then((response) => response.data.results);
  },
};

export default Api;
