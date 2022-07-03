import React, { useEffect, useState } from 'react'
import '../index.css'
import { PessoaType } from '../types/PessoaType'
import { useParams } from 'react-router-dom'
import { api } from '../api/api'

export default function PessoaEditPage() {

    let params = useParams();

    const [pessoa, setPessoa] = useState<PessoaType>()
    const [namePessoa, setNamePessoa] = useState('');
    const [dateBirthPessoa, setDateBirthPessoa] = useState(new Date());

    useEffect(() => { getPessoa() }, []);

    const getPessoa = async () => {
        if (params.id) {
            const apiResponse = await api.getOnePessoa(parseInt(params.id));
            if (apiResponse) {
                setPessoa(apiResponse)
            }
        }
    }


    return (
        <div>
            {pessoa &&

                <div>
                    {`${pessoa.id} - ${pessoa.name} - ${pessoa.birthDate}`}
                </div>

            }
            <form action="submit">

            </form>
        </div>
    )
}
