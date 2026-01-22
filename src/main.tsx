import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import { FlightsPage } from './pages/FlightsPage'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/flights' element={<FlightsPage/>}></Route>
    </Routes>
  </BrowserRouter>,
)
