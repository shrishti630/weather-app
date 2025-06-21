import { useState } from 'react'
import './App.css'
import { CityCard } from './component/CityCard/CityCard'
import { useEffect } from 'react'

function App() {
  const [weatherData, setWeatherData] = useState([])

  const getWeatherData = async () => {
    const res = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/topcities/100?apikey=${import.meta.env.VITE_API_KEY}`)
    const data = await res.json()
    setWeatherData(data)
  }

  useEffect(() => {
    getWeatherData()
  }, [])

  return (
    <>
      <h1>Weather App</h1>
      <div className='container'>
        {
          weatherData.map(city => {
            return (
              <CityCard
                cityName={city.EnglishName}
                cityTemperature={city.Temperature}
                weatherText={city.WeatherText}
                key={city.Key}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App
