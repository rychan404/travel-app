import './App.css'
import { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { HeroContainer } from './components/HeroContainer'
import { AboutContainer } from './components/AboutContainer';

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <HeroContainer/>
        <AboutContainer/>
      </main>
    </>
  )
}

export default App