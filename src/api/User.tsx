import axios from "axios";

export const getUser = async (username: string) => {
    try {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        console.log(res.data);
        return res.data;
    } catch(error) {
        console.log(error);
        throw error;
    } 

};
