import axios from 'axios';
import { API_URL, GUEST_TOKEN} from '../configs/api';
import {GetNonce } from './functions';

const request = axios.create();
const plugin_name ='reactro/';
const jwtRequiredList = [plugin_name, 'dokan'];
const nonceNotRequiredList = ['settings'];
const isLoggedIn =false;


request.interceptors.request.use(
    config => {
        config.baseURL = API_URL + '/wp-json/'+plugin_name;
        const nonce = GetNonce();
        
        const url = config.url;
        const checkJwt = jwtRequiredList.findIndex(jwt => url.includes(jwt));
        const checkNonceRequired = nonceNotRequiredList.findIndex(nonce => url.includes(nonce));
        if(nonce && checkNonceRequired){
            config.params={
            '_wpnonce':nonce 
        };
        }
        
            // config.headers = {
            //     Authorization: `Bearer ${isLoggedIn ? isLoggedIn : GUEST_TOKEN}`
            // }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

request.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return Promise.reject(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            return Promise.reject(error);
        }
    },
);

// request.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

export default request;
