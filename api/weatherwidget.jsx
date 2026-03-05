import React, { useEffect, useState } from "react";

// STEP 1: Fetch user city using IP



// STEP 2: Fetch weather from OpenWeather API
// const getWeather = async (city) => {
//     const apiKey="ee111c16f90c4bff81b144707251704";
//     const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// };

export function WeatherWidget({task}) {
  // const [mycity,setcity]=useState("");
  const [weather, setWeather] = useState(null);   

  // const getUserCity = async () => {
  //   const res = await fetch("http://api.ipapi.com/2401:4900:1c88:6827:8872:c9ca:b78a:2de2?access_key=1f86b4b11126823c820ffa5416edf91f");
  //   const data = await res.json();
  //   // setcity(data.city);.
  //   console.log(data);
    
  //   return data.city;
  // };

  
  const getWeather = async (city) => {
    const apiKey="c0fe3f6c0daa49748a193524253004";
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}}`);
    let data = await res.json();
    console.log(data);
    return data;
  };
    const outdoorKeywords = [
      "go",
    "walk",
    "run",
    "jog",
    "cricket",
    "football",
    "bike",
    "cycling",
    "garden",
    "park",
    "outside",
    "today",
  ];
    const lower = task.toLowerCase();
    const placeweather=outdoorKeywords.some((word) => lower.includes(word))
    useEffect(() => {
        if(placeweather){
        async function fetchWeatherData() {
          
            // const city = await getUserCity();           // get location
            const data = await getWeather("Noida");        // get weather
            setWeather({ ...data });              // save data to state
          }
          fetchWeatherData();}
      }, []); 

   if(!placeweather||!weather) return null;
  return (
    <div style={{ border: "1px solid gray", padding: "1rem", borderRadius: "10px" }} className="ms-25">
      <h3>🌤️ Weather in Delhi</h3>
      <p>Temperature: {weather.current.temp_c}°</p>
     
    </div>
  );
};

export default WeatherWidget;
