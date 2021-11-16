import Nav from "./Nav";
import Carousel from "./Carousel";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Carousel></Carousel>
      <Home></Home> 
    </div>
  );
}

export default App;
