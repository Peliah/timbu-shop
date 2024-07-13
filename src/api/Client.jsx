import axios from "axios";


// const baseURL = import.meta.env.MODE === 'development' ? '/api' : 'https://api.timbu.cloud';


export default axios.create({
    baseURL: '/api',
    // baseURL: baseURL,
    // baseURL: import.meta.env.VITE_BASE_URL,
    params: {
        organization_id: import.meta.env.VITE_ORGANISATION_ID,
        Appid: import.meta.env.VITE_APP_ID,
        Apikey: import.meta.env.VITE_API_KEY,
    },
    withCredentials: false,
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // }
    headers: {
        'Access-Control-Allow-Origin': '*', // Adjust as needed
        'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }
})
