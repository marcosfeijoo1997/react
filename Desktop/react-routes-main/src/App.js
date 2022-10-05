import logo from './logo.svg';
import './App.css';
import './App.css';
import Navbar from '../src/componentes/navbar/navbar'
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import CartWidget from './componentes/CartWidget';
import Producto from '../src/ItemListContainer/Productos/Producto'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {  Row, Col } from "react-bootstrap";
import Inicio from '../src/ItemListContainer/Inicio'
import Herreria from './ItemListContainer/herreria';
import Electrodos from './electrodos';
import Alambre from './ItemListContainer/Productos/Alambre';







function App() {
  return (
    <div className="App">
       <Navbar>    <li><a href='Inicio'>Inicio</a></li>
            <li>Nosotros</li>
            <li ><a href='Producto'>Productos</a></li >
            <li>Servicios</li>
            <li>Sucursales</li>
            <CartWidget></CartWidget>
            </Navbar>


       <Router>
      
      <Row style={{minHeight:"90vh"}}>
          <Col lg={12} className={"margin-top"}>
            <Routes>
              
              
            <Route path="/Producto" exact element={<Producto></Producto>} />
            <Route path="/Inicio" exact element={<Inicio></Inicio>}/>
            <Route path='/Herreria' exact element={<Herreria></Herreria>}/>
            <Route path='/Electrodos' exact element={<Electrodos></Electrodos>}/>
            <Route path='/Alambre' exact element={<Alambre></Alambre>}/>
            <Route path='/CartWidget' exact element={<CartWidget></CartWidget>}/>


     

            </Routes>
            </Col>
            </Row>
            </Router>
            
            
   
   
    </div>
    
  )
}

export default App;

