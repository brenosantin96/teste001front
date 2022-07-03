import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'

type Props = {
    id: number;
    name: string;
    birthDate: Date;
}

export const PessoaComponent = ({id, name, birthDate} : Props) => {
    return (
        <div className='pessoaItem'>
            {`${id} - ${name} - ${birthDate}`}
            <Link to={`/pessoas/${id}`}>
                <span className='editLink'>Editar</span>    
            </Link>
        </div>
    )
}