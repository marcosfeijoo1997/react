import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar'
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import CartWidget from './CartWidget';
import Productos from './Producto';




function App() {
  return (
    <div className="App">
      <Navbar src="https://viaplaceholder.com/150x150"/>
      
      
      <Navbar>    <li>Inicio</li>
            <li>Nosotros</li>
            <li ><a href='Productos'>Productos</a></li >
            <li>Servicios</li>
            <li>Sucursales</li>
            <CartWidget></CartWidget>
            </Navbar>
            
   
   
    </div>
    
  );
}

export default App;
