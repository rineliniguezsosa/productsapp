import { STAGE,API_URL as PROD_URL,API_URL_ANDROID,API_URL_IOS } from '@env';
import axios from 'axios';
import { Platform } from 'react-native';
import { StorageAdapter } from '../../helpers/async.storage';

const API_URL = (STAGE === 'prod') ? PROD_URL : Platform.OS === 'ios' ? API_URL_IOS : API_URL_ANDROID;

const tesloApi = axios.create({baseURL:API_URL,headers:{'Content-Type':'application/json'}});

//interceptors
//if I have a token, updated
tesloApi.interceptors.request.use(
    async(config)=>{
        const token = await StorageAdapter.getItem('token');

        if(token){
            config.headers.Authorization = `Barer ${token}`;
        }
        return config;
    }
);

export {
    tesloApi,
};
