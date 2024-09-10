import axios from "axios";

// var HippikartUrl = `http://127.0.0.1:4000/api`;
var HippikartUrl = `http://hippikart.profcymadev.in:4000/api`;

const axiosClient = axios.create({
  baseURL: HippikartUrl,
  mode: "no-cors",
  headers: {
    Authorization: ``,
    Accept: "application/json",
    "Content-Type": "application/json multipart/form-data",
  },
});
axiosClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    // const id = sessionStorage.getItem("userid");
    // console.log(id,'i');
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

export default axiosClient;
