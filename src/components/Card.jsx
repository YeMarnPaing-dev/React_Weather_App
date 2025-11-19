import React from 'react'
import { WiDayCloudy, WiRain } from "react-icons/wi";


const Card = ({data}) => {
   
  return (
    <div className='d-flex flex-column align-items-center gap-2 mt-3'>
        <p>Jun 34 ,2025</p>
        <h2>{data.name},mm</h2>
        <h1><WiDayCloudy /> 25C</h1>
        <p><WiRain />2.37mm </p>
        <p>Humidity:</p>
        <p>Dew point:25C</p>
        <p>Visibility:5.0 km</p>
    </div>
  )
}

export default Card