import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.kodegen.kr', // 기본 API URL
  timeout: 10000, // 10초 타임아웃 설정
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;