import axios from 'axios';
// import pinia from './stores';
import { useAuthStore }from '@/stores/auth';


const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/'
})



axiosClient.interceptors.request.use(config => {
    const store = useAuthStore();
    config.headers.Authorization = `Bearer ${store.token}`
    return config;
})

export default axiosClient
