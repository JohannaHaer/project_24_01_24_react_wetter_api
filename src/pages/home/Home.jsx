import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import WeatherCard from '../../components/weatherCard/WeatherCard';

const Home = () => {

    // const {weather, setWeather} = useContext(mainContext)
    // const weatherArray = []
    // const weatherValue = Object.value(weather)
    // console.log("weatherValue", weatherValue);
    // weatherArray.push(weatherValue)
    // console.log("weatherArray", weatherArray);

    return (
        <>
            <h1>Home</h1>
            <WeatherCard/>
        </>
    )
}

export default Home