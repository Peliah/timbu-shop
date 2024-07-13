import axios from "axios";


// const baseURL = import.meta.env.MODE === 'development' ? '/api' : 'https://api.timbu.cloud';
// const proxyURL = 'https://cors-anywhere.herokuapp.com/';

export default axios.create({
    // baseURL: '/api',
    baseURL: import.meta.env.VITE_BASE_URL,
    // baseURL: proxyURL + import.meta.env.VITE_BASE_URL,
    params: {
        organization_id: import.meta.env.VITE_ORGANISATION_ID,
        Appid: import.meta.env.VITE_APP_ID,
        Apikey: import.meta.env.VITE_API_KEY,
    },
})
