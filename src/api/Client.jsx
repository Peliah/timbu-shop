import axios from "axios";


export default axios.create({
    baseURL: '/api/',
    // baseURL: import.meta.env.VITE_BASE_URL,
    params: {
        organization_id: import.meta.env.VITE_ORGANISATION_ID,
        Appid: import.meta.env.VITE_APP_ID,
        Apikey: import.meta.env.VITE_API_KEY,
    }
})
