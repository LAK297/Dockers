import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://api.trustmii.com:8800/api/",
    withCredentials: true,
})