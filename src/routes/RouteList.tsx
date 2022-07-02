import { useRoutes } from 'react-router-dom'
import { MainPage } from "../pages/MainPage";
import { PessoaCadastroPage } from '../pages/PessoaCadastroPage';



export const RouteList = () => {

    return useRoutes([
        { path: '/', element: <MainPage /> },
        { path: '/cadastro', element: <PessoaCadastroPage /> }
    ]);

}