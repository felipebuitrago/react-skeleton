import axios from 'axios';
import { getEnvVariables } from './getEnvVariables'

const { VITE_API_URL } = getEnvVariables();

const api = axios.create({
        baseURL : VITE_API_URL
});

api.interceptors.request.use(config=>{
        config.headers = {
                ...config.headers,
                'x-token':localStorage.getItem('token')        
        }
        return config;
})


export default api; 