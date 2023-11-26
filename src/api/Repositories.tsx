import axios from "axios";
import { Alert } from "react-native/Libraries/Alert/Alert";

export interface Repo {
  name: string;
  language: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export const getRepos = async (username: string) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);
    return res.data;
  } catch (error) {
    Alert.alert(
      "Erro de requisição",
      "Houve um erro ao puxar os repositórios"
    );
    throw error;
  }
};
