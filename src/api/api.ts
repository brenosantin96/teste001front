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

        console.log("Api Name: ",name);
        console.log("Api Birthdate: ", birthDate)

        let response = await axios({
            method: "post",
            url: `${BASE}/pessoas`,
            data: {
                name: name,
                birthDate: birthDate
            }
        });

        if(response){
            console.log(response);
            return response.data;
        }
            
        

    },

    getOnePessoa : async (id: number) => {
        let response = await axios.get(`${BASE}/pessoas/${id}`);
        if (response) {
            return response.data.pessoa;
        } else {
            alert("Não foi possível se conectar com a API para pegar dados do usuário.")
        }
    },

    signIn: async (email: string, password: string) => {

        let response = await axios.post(`${BASE}/login`, {
            email, password
        });
        return response.data;
    }
}