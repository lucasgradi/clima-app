import React, { createContext, useState, useEffect } from 'react'

import axios from 'axios'

export const ClimaContext = createContext();

const API_KEY = "3ce1d8e12905a2466afd049ce2c0f506";

export const ClimaProvider = props => {
    // const [ubicacion, setUbicacion] = useState('')

    const [clima, setClima] = useState([])

    // const getApi = async () => {
    //     const url = (`https://(api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)

    //     const req = axios.get(url)

    //     const res = await req

    //     setClima(res.data.main)
    // }
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`);
            console.log(res)
            setClima(res);
        }
        fetchData();
    }, []);

    return (
        <ClimaContext.Provider value={{ clima }}>
            {props.children}
        </ClimaContext.Provider>
    );
}


