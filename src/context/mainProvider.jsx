import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const apiKey = "7b3bf715f0a79625b3baf4664d3a2ebf"

    const [weather, setWeather] = useState([])

    const [city, setCity] = useState("Globe")

    useEffect(() => {
        const apiFetch = async() => {
            const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`)
            // console.log(resp.data);
            setWeather(resp.data)
        }
        apiFetch()
    }, [city])

    // console.log("nach useEffect", weather);

  return (
    <>
        <mainContext.Provider value={{weather, setWeather, city, setCity}}>
            {children}
        </mainContext.Provider>
    </>
  )
}

export default MainProvider