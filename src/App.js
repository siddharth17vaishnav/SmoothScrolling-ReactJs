import Aos from 'aos';
import "aos/dist/aos.css";
import './App.css';
import {useEffect} from 'react';

function App() {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className="App">
    <h1>Smooth Scrolling Effect in ReactJs </h1>
    <div data-aos="fade" className="container one">
      1
    </div>
    <div data-aos="fade-up" className="container two">
      2
    </div>
    <div data-aos="flip-up" className="container three">
      3
    </div>
    <div data-aos="fade-left" className="container four">
      4
    </div>
    <div data-aos="slide-right" className="container five">
      5
    </div>
    </div>
  );
}

export default App;
