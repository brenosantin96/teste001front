import { ChangeEvent, useEffect, useState } from 'react'
import { api } from '../api/api'
import { PessoaType } from '../types/PessoaType'
import {PessoaComponent} from '../components/PessoaComponent'
import '../index.css'

export const MainPage = () => {


  //To List Pessoas
  const [pessoas, setPessoas] = useState<PessoaType[]>([])
  const [namePessoa, setNamePessoa] = useState('');
  const [dateBirthPessoa, setDateBirthPessoa] = useState(new Date());

  useEffect(() => { getPessoas() }, []);

  //HandleChanges

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setNamePessoa(e.target.value);
  }

  const handleChangeDate = (e: ChangeEvent<HTMLDataElement>) => {

    if (e.target.value.length >= 10) {

      let valueDateInput = e.target.value;
      let arrayDateYYMMDD = valueDateInput.split('-');


      let day: string = arrayDateYYMMDD[2];
      let month: string = arrayDateYYMMDD[1];
      let year: string = arrayDateYYMMDD[0];



      let numberDay: number = parseInt(day);
      let numberMonth: number = parseInt(month) - 1;
      let numberYear: number = parseInt(year);

      let dateStarted = new Date(numberYear, numberMonth, numberDay, 0, 0, 0);
      let dateToFormat = new Date(numberYear, numberMonth, numberDay, 0, 0, 0).toJSON();
      let dateFormatted = dateToFormat.split("T");

      setDateBirthPessoa(dateStarted);
      //Mon Dec 01 1997 00:00:00 GMT-0200 (hora de verano de Brasilia)

    }

  }

  const getPessoas = async () => {
    const data = await api.getAllPessoas();
    if (data) {
      console.log(data);
      setPessoas(data);
    }
  }

  const createPessoa = async () => {

    console.log(namePessoa); //Maria
    console.log(dateBirthPessoa); //Tue Jan 10 1995 00:00:00 GMT-0200 (hora de verano de Brasilia)
    const data = await api.createPessoa(namePessoa, dateBirthPessoa);
    getPessoas();

}



return (
  <>
    <div className="formContainer">
      <input onChange={handleChangeName} type="text" placeholder='Nome' />
      <label htmlFor="dateBirth">Data de nascimento:</label>
      <input onChange={handleChangeDate} type="date" name="dateBirth" id="dateBirth" />
      <button onClick={createPessoa}>Cadastrar</button>
    </div>
    <div className="mainContainer">
      <h2>Pessoas</h2>
      <div className="lista">
        {pessoas.map((item) => (<PessoaComponent key={item.id} id={item.id} name={item.name} birthDate={item.birthDate} ></PessoaComponent>))}
      </div>

    </div>

  </>
)
}

