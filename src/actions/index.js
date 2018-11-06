import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
export const FETCH_POST = "FETCH_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=RouteApp3110";
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    payload: request,
    type: FETCH_POSTS
  };
}
export function createPosts(values, callBack) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callBack());

  return {
    payload: request,
    type: CREATE_POSTS
  };
}

export function fetchPost(id) {
  const request = axios.post(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    payload: request,
    type: FETCH_POST
  };
}
