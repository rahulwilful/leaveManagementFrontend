import axios from 'axios';
import {MMKV} from 'react-native-mmkv';
const storage = new MMKV();
const axiosClient = axios.create({
  baseURL: 'http://10.0.2.2:5000/api/v1',
  //baseURL: 'https://digitalregisterbackend.onrender.com/api',
});

axiosClient.interceptors.request.use(
  async config => {
    const token = await storage.getString('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosClient;
