import { Authresponse } from './../../infrastructure/auth.response';
import { tesloApi } from '../../config/api/TesloApi';
import { User } from '../../Interfaces/Interfaces';

const userAuth = (data:Authresponse) => {
    const user:User = {
        id:data.id,
        email:data.email,
        fullName:data.fullName,
        isActive:data.isActive,
        roles:data.roles,
    };

    return {
        user:user,
        token:data.token,
    };
};
export const authLogin = async(email:string,password:string) =>{
    try {
        const { data } = await tesloApi.post<Authresponse>('/auth/login',{email,password});

        return userAuth(data);
    } catch (error) {
        console.log(error);
        return null;
    }
};
