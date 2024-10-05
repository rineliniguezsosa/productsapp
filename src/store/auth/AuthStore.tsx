/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { User } from '../../Interfaces/Interfaces';
import { authLogin } from '../../actions/auth/auth';
import { StorageAdapter } from '../../helpers/async.storage';

type AuthStatusTypes = 'check' | 'notauthenticated' | 'authenticated';

interface AuthState {
    status: AuthStatusTypes,
    token?:string,
    user?:User,
    login:(email:string,password:string)=> Promise<boolean>
}


export const useAuthStore = create<AuthState>()((set,get)=>({
    status:'check',
    token:undefined,
    user:undefined,
    login:async(email:string,password:string) =>{
        const resp = await authLogin(email,password);
        console.log(resp);

        if (!resp) {
            set({status:'authenticated',token:undefined,user:undefined});
            return false;
        }

        //save token in localStorage
        await StorageAdapter.setItem('token',resp.token);

        set({status:'authenticated',token:resp.token,user:resp.user});
        return true;
    },
}));
