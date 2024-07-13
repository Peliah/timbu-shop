import axios from "axios";


export const Client = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    params: {
        organization_id: import.meta.env.VITE_ORGANISATION_ID,
        Appid: import.meta.env.VITE_APP_ID,
        Apikey: import.meta.env.VITE_API_KEY,
        size: 10
    },
})

export const ClientProduct = axios.create({
    baseURL: import.meta.env.VITE_SINGLE_PROD_BASE_URL,
    params: {
        organization_id: import.meta.env.VITE_ORGANISATION_ID,
        Appid: import.meta.env.VITE_APP_ID,
        Apikey: import.meta.env.VITE_API_KEY,
    },
})