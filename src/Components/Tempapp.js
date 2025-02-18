import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () => {
    const [search, setSearch] = useState("Greater Noida");
    const [city, setCity] = useState(null);

    useEffect(()=>{
        const FetchAPI = async(lon,lat) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5f7278a73fe141eb43231e42dd35541c`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };

    FetchAPI();   
    },[search]);
    const inputEvent = (event) => {
        setSearch(event.target.value);
    }
  return (
    <>
    <div className="box">
        <div className="inputData">
            <input
                type = "search"
                className='inputField'
                autoComplete='off'
                value={search}
                onChange={inputEvent}
            />
        </div>

        {!city ?
         (<p className="errorMsg">No Data Found 😢</p>):(
            <>
            <div className='info'>
                <h2 className="location">
                    <i className ="fa-solid fa-street-view"></i> {search}
                </h2>
                <h1 className="temp">{city.temp} °C</h1>
            <div className="tempdata">
                Min : {city.temp_min} °C | Max : {city.temp_max} °C<br/>
                Feels-like : {city.feels_like} °C<br/>
                Humidity : {city.humidity}%<br/>
                Pressure : {city.pressure}mb<br/>
            </div>
            </div>
            </>
         )}
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
    </div>
    </>
  )
}

export default Tempapp;
