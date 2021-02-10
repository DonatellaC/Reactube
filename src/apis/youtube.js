import axios from "axios";
require("dotenv").config();
const MY_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 9,
    key: MY_KEY,
  },
});
