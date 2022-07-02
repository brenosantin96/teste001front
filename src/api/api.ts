import axios from 'axios';
const BASE = 'http://localhost:4000';


export const api = {

    getPing: async () => {

        let response = await axios.get(`${BASE}/ping`);
        return response.data;
    },

    getAllPessoas: async () => {

        let response = await axios.get(`${BASE}/pessoas`);
        return response.data.pessoas;
    },

    createPessoa: async (name: string, birthDate: Date) => {

        let response = await axios.post(`${BASE}/pessoas`, {
            name, birthDate
        });

            return response.data;
        

    },

    signIn: async (email: string, password: string) => {

        let response = await axios.post(`${BASE}/login`, {
            email, password
        });
        return response.data;
    }
}