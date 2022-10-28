import logo from './logo.svg';
import './App.css';
import Navbar from '../src/componentes/navbar/navbar'
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import ShoppingCart from './componentes/ItemListContainer/Productos/carritologica/ShoppingCart';
import Producto from './componentes/ItemListContainer/Productos/Producto'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Row, Col } from "react-bootstrap";
import Inicio from './componentes/ItemListContainer/Inicio'
import Herreria from './componentes/ItemListContainer/Herreria';
import Carpinteria from './componentes/ItemListContainer'
import DetalleProducto from './componentes/ItemListContainer/Productos/ItemDetail';
import Pintureria from './componentes/ItemListContainer/categorias/Categoria';
import Categoria from './componentes/ItemListContainer/categorias/Categoria';
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
        <Route path='/ShoppingCart' exact element={<ShoppingCart></ShoppingCart>}/>
        <Route path='/Pintureria' exact element={<Categoria></Categoria>}/>
       <Route path="/id-:productName" element={<DetalleProducto></DetalleProducto>} />
        </Routes>
      </Router>




    </div>

  )
}

export default App;

