import { createApi } from "unsplash-js";

const unsplash = new createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESSKEY,
});

export default unsplash;
