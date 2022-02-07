import axios from 'axios';

const url = 'http://3.135.237.248:5222/v0.0.1/auth/login';

export const login = (loginDetails) => {
    axios.post(url, loginDetails);
};