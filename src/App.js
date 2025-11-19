import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form  from "./components/Form.jsx"
import Card from "./components/Card.jsx"
import {api,apiKey} from "./api/Api.js"


function App() {
  
  const fetchWeather = async () => {
    const res = await api.get(`/weather?q=Yangon&appid=${apiKey}`)
    console.log(res.data);
    
  }

  fetchWeather();
  
  return (
    <>
     
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">   
      
     <div className='shadow-lg bg-light gap-4'>
      <div className=' text-center mt-3 '>Weather App</div>  
       <Form/>    
      <Card/>
     </div>
    </div>
    </>
  );
}

export default App;
