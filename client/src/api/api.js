import axios from "axios";

let url;

if (process.env.NODE_ENV === "production") {
    url = "/";
}
if (process.env.NODE_ENV === "development") {
    url = "http://localhost:8080/";
}

export default axios.create({
    baseURL: url,
});
