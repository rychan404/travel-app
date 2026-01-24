import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import { RecommendationPage } from './pages/RecommendationPage.tsx'
import { LocationInfoPage } from './pages/LocationInfoPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/recommend' element={<RecommendationPage/>}></Route>
      <Route path='/location/:city' element={<LocationInfoPage/>}></Route>
    </Routes>
  </BrowserRouter>,
)
