import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form  from "./components/Form.jsx"
import Card from "./components/Card.jsx"

function App() {
  return (
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
     <div className='shadow-lg bg-light gap-4'>
       <Form/>    
      <Card/>
     </div>
    </div>
  );
}

export default App;
