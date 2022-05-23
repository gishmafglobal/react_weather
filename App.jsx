import React, { useState } from 'react';
import axios from 'axios';

// api key from open weather
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const API_KEY ='bfb52f122fe1fb57c00f79b5343c8955'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url)
        .then((response) => {
          setData(response.data)
          // console.log(response.data);
        })
      setLocation('')
    }
  }

  return (
    <div className='app'>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}&#8451;</h1> : null}
            {/* <h1>61&#8451; </h1> */}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            {/* <p>Clouds</p> */}
          </div>
        </div>
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&#8451;</p> : null}
              {/* <p className='bold'>61&#8451;</p> */}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              {/* <p className='bold'>20%</p> */}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
              {/* <p className='bold'>12 MPH</p> */}
              <p>Wind Speed</p>
            </div>
          </div>
        }

      </div>
    </div>

  )
}

export default App


