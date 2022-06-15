import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID adxzYDJ17XSaaq4jT6icz3SfVDM3q21S3sUHRViyiDE",
  },
});
