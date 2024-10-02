import { Authresponse } from './../../infrastructure/auth.response';
import { tesloApi } from '../../config/api/TesloApi';

export const authLogin = async(email:string,password:string) =>{
    try {
        const { data } = await tesloApi.post<Authresponse>('/auth/login',{email,password});

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
