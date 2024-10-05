import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageAdapter {

    static async getItem(key:string):Promise<string|null> {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    static async setItem(key:string,value:string):Promise<void>{
        try {
            return await AsyncStorage.setItem(key,value);
        } catch (error) {
            throw new Error(`Error al guardar la información ${key} y ${value}`);
        }
    }
}
