import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import FilmPreviews from './components/FilmPreviews'
import FestivalProgramme from './components/FestivalProgramme'
import AudienceChoice from './components/AudienceChoice'
import PopularMovies from './components/PopularMovies'
import Magazine from './components/Magazine'
import Speakers from './components/Speakers'
import Tickets from './components/Tickets'
import Brends from './components/Brends'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <main>
      
      <Header/>
      <FilmPreviews/>
      <FestivalProgramme/>
      <AudienceChoice/>
      <PopularMovies/>
      <Magazine/>
      <Tickets/>
      <Brends/>
    </main>
    <Footer/>
    </>
  )
}

export default App
