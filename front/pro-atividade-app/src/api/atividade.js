import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:3333/api/",
});
