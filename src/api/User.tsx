import axios from "axios";
import { Alert } from "react-native/Libraries/Alert/Alert";

export interface User {
    avatar_url: string;
    name: string;
    login: string;
    location:string;
}

export const getUser = async (username: string) => {
    try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
      
        return res.data;
    } catch(error) {
        Alert.alert('Erro de requisição', 'Houve um erro na requisição, tente novamente mais tarde');
        throw error;
    } 

};
