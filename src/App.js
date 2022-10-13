import logo from './logo.svg';
import './App.css';
import Navbar from '../src/componentes/navbar/navbar'
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import CartWidget from './componentes/CartWidget';
import Producto from './ItemListContainer/Productos/Producto'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Row, Col } from "react-bootstrap";
import Inicio from '../src/ItemListContainer/Inicio'
import Herreria from './ItemListContainer/herreria';
import Carpinteria from './ItemListContainer/Productos/ItemListContainer'
import DetalleProducto from './ItemListContainer/Productos/ItemDetail';



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
        <Route path='/CartWidget' exact element={<CartWidget></CartWidget>}/>
        <Route path="/id-:productName" element={<DetalleProducto></DetalleProducto>} />
        </Routes>
      </Router>




    </div>

  )
}

export default App;

