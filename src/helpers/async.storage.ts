import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageAdapter {

    static async getItem(key:string):Promise<string|null> {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }
}
