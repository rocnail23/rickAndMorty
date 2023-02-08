import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import getRandomLocation from './utils/getRandomLocation'
import Locationinfo from './components/Locationinfo'
import ResidentInfo from './components/ResidentInfo'


function App() {
  const [location, setLocation] = useState()
  const [numberRandom, setnumberRandom] = useState(getRandomLocation)
  const [haserror, sethaserror] = useState(false)
  

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${numberRandom}`
    axios.get(url)
    .then(res => {setLocation(res.data)
    sethaserror(false)})
    .catch(err => {console.log(err)
    sethaserror(true)})
  }, [numberRandom])

  const handleinput = (e) => {
    e.preventDefault()
    if(e.target.planet.value.trim().length === 0){
      setnumberRandom(getRandomLocation)
    } else{
    setnumberRandom(e.target.planet.value.trim())
    }
  }
  
  return (
    <div className="App">
      <div className='banner'>
      <h1 className='App__title'>Rick and Morty</h1>
      </div>
      <form onSubmit={handleinput} action="">
        <input id='planet' type="text" />
        <button type='submit'>submit</button>
      </form>
      {
        haserror ?
        <h2>hay un error debes proveer un numero del 1 al 126</h2>
        :
        <> 
        <Locationinfo
      location={location}
      />
      <div className='resident_container'>
        {
          location?.residents.map((url) => (
            <ResidentInfo key={url} url={url} />
          ))
        }
      </div>
        </>
      }
      
    </div>
  )
}

export default App
