import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form  from "./components/Form.jsx"
import Card from "./components/Card.jsx"
import {api,apiKey} from "./api/Api.js"
import { useEffect, useState } from 'react';


function App() {
const [country,setCountry] = useState('Yangon')
const [data,setData] = useState({})  
const fetchWeather = async () => {
    const res = await api.get(`/weather?q=${country}&appid=${apiKey}`);
    setData(res.data)
};

useEffect(()=> {
fetchWeather();
},[])


  
  return (
    <>
     
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">   
      
     <div className='shadow-lg bg-light gap-4'>
      <div className=' text-center mt-3 '>Weather App</div>  
       <Form/>    
      <Card data={data}/>
     </div>
    </div>
    </>
  );
}

export default App;
