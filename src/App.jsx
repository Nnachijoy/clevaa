
import './App.css'
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Firstsection from './components/Firstsection';
import Secondsection from './components/secondsection';
import Thirdsection from './components/Thirdsection';
import Fifthsection from './components/Fifthsection';
import Sixthsection from './components/Sixthsection';
import Seventhsection from './components/Seventhsection';
import Eightsection from './components/Eightsection';

const App = () =>{
  return(
    <div>
     <Navbar/>
     <Hero/>
     <Firstsection/>
    <Secondsection/>
     <Thirdsection/> 
     <Fifthsection/>
     <Sixthsection/>
     <Seventhsection/>
     <Eightsection/>
    </div>
  )
}

  
export default App
  
