import React from 'react'
// import { WiDayCloudy, WiRain } from "react-icons/wi";


const Card = ({data}) => {

  if(JSON.stringify(data) !== '{}'){
  return (
    <div className='d-flex flex-column align-items-center gap-2 mt-3'>
        <p>Jun 34 ,2025</p>
        <h2>{data.name},{data.sys.country}</h2>
        <h1> 
          <img src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`} alt="" />
          {data.main.temp}</h1>
        <p>{data.weather[0].main} </p>
        <p>Humidity:{data.main.humidity}</p>
        <p>Visibility:{data.visibility/1000}km</p>
    </div>
  )
  }else{
    return(
      <h1 className='text-center'>Loading....</h1>
    )
  }
   

}

export default Card