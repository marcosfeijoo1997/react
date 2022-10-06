import logo from './logo.svg';
import './App.css';
import './App.css';
import Navbar from '../src/componentes/navbar/navbar'
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import CartWidget from './componentes/CartWidget';
import Producto from './componentes/itemListContainer/Productos/Producto'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Row, Col } from "react-bootstrap";
import Inicio from '../src/ItemListContainer/Inicio'
import Herreria from './ItemListContainer/herreria';
import Electrodos from './electrodos';
import Alambre from './componentes/itemListContainer/Productos/Alambre';
import Carpinteria from './componentes/itemListContainer/Carpinteria'
import ApiCarpinteria from './componentes/apis/ApiCarpinteria';


const DefaultContainer=()=>(
  <div>

  </div>


)



function App() {
  return (
    <div className="App">
      
      <Router>
            <Navbar />
        <Routes>
        <Route path="/Producto" exact element={<Producto></Producto>} />
        <Route path="/Inicio" exact element={<Inicio></Inicio>}/>
        <Route path='/Herreria' exact element={<Herreria></Herreria>}/>
        <Route path='/Carpinteria' exact element={<Carpinteria></Carpinteria>}/>
        <Route path='/Electrodos' exact element={<Electrodos></Electrodos>}/>
        <Route path='/Alambre' exact element={<Alambre></Alambre>}/>
        <Route path='/CartWidget' exact element={<CartWidget></CartWidget>}/>
        </Routes>
      </Router>




    </div>

  )
}

export default App;

