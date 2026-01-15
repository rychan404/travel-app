import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [flightsText, setFlightsText] = useState('Loading flights...')

  useEffect(() => {
    fetch('http://localhost:8000/flights/')
      .then(res => res.json())
      .then(data => setFlightsText(JSON.stringify(data)))
      .catch(err => setFlightsText(`Error: ${err.message}`))
  }, [])  

  return <h1>{flightsText}</h1>
}

export default App