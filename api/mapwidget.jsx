import React, { useEffect, useState } from 'react'

export default function Mapwidget({place}) {
  const visitingPlaces = [
    "India Gate",
    "Lotus Temple",
    "Red Fort",
    "Qutub Minar",
    "Akshardham Temple",
    "Humayun's Tomb",
    "Jama Masjid",
    "Raj Ghat",
    "ISKCON Temple",
    "Lodhi Garden",
    "Gateway of India",
    "Marine Drive",
    "Siddhivinayak Temple",
    "Elephanta Caves",
    "Juhu Beach",
    "Haji Ali Dargah",
    "Chhatrapati Shivaji Maharaj Terminus",
    "Hawa Mahal",
    "Amber Fort",
    "City Palace",
    "Jantar Mantar",
    "Nahargarh Fort",
    "Kalkaji mandir"
  ];
    
    const [data,setdata]=useState(null);
    const getlocation=async(origin,destination)=>{
      const objects={
        method:'GET',
        headers:{
          'x-rapidapi-host': 'google-map-places.p.rapidapi.com', 
	        'x-rapidapi-key': import.meta.env.VITE_MAP_RAPIDAPI_KEY

        }
      };
        const api=await fetch(`https://google-map-places.p.rapidapi.com/maps/api/directions/json?destination=${destination}&origin=${origin}&departure_time=1782624107&traffic_model=pessimistic&region=en&transit_routing_preference=less_walking&alternatives=true&units=metric&transit_mode=train%7Ctram%7Csubway&mode=driving&language=en`,objects);
        
        const result=await api.json();
        console.log(result);
        return result;
      }
      
      const lower = place.toLowerCase();
      const matchplace=visitingPlaces.find((place)=>lower.includes(place.toLowerCase()));
      
      useEffect(()=>{
        if(matchplace){
          async function fetchdirection(){
            const direction=await getlocation('Narela',matchplace);
            setdata(direction);
          }
        
        fetchdirection();
      }
      },[place]);
      if(!matchplace||!data) return null;
  return (
      
  <div style={{ border: "1px solid gray", padding: "1rem", borderRadius: "10px", margin:"10px" }}>
      <h2>🗺️ Total distance: 
      {JSON.stringify(data?.routes[0]?.legs[0]?.distance?.text)||''}</h2>
      <h2>🗺️ Total time: 
      {JSON.stringify(data?.routes[0]?.legs[0]?.duration?.text)||''}</h2>
      <h2>🗺️ Total time with traffic: 
      {JSON.stringify(data?.routes[0]?.legs[0]?.duration_in_traffic?.text)||''}</h2>
    </div>
  )
}


