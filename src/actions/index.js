import axios from 'axios';
export const FETCH_POSTS = "FETCH_POSTS";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=RouteApp3110";
export function fetchWeather() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return ({
        payload: request,
        type: FETCH_POSTS
    })
}