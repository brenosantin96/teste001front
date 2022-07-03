import { useRoutes } from 'react-router-dom'
import { MainPage } from "../pages/MainPage";
import PessoaEditPage from '../pages/PessoaEditPage';



export const RouteList = () => {

    return useRoutes([
        { path: '/', element: <MainPage /> },
        { path: '/pessoas/:id', element: <PessoaEditPage />}
    ]);

}