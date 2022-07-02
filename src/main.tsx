import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import {RouteList} from './routes/RouteList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  </React.StrictMode>
)
