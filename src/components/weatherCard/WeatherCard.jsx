import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider';

const WeatherCard = () => {
    const {weather, setWeather} = useContext(mainContext)
    console.log("test", weather);
    return (
        <>
            <div>
                <button>Hamburg</button>
                <button>Berlin</button>
                <button>Köln</button>
                <button>Australien</button>
            </div>
            <div>
                <h2>{weather.name}</h2>
                {/* <h2>{weather.weather[0].description}</h2> */}
                {/* <img src={} alt="" /> */}
                {/* <h3>Aktuell: {weather?.main.temp} °C</h3> */}
                {/* <h3>Windgeschwindigkeit: {weather?.wind.speed} km/h</h3> */}
            </div>
        </>
    )
}

export default WeatherCard