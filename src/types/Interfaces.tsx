export type RootStackParams = {
    LoginScreen:undefined,
    RegisterScreen:undefined,
    HomeScreen:undefined,
    LoadingScreen:undefined,
    ProductScreen: { productId: number }
};

export interface MyIconProps {
    name:string,
    color?:string,
    white?:boolean
};