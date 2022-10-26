
import React from 'react'

import { Button } from 'react-bootstrap';
import Contador from './Productos/Contador';


import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import '../ItemListContainer/Productos/producto.css' 


const Herreria=()=>{
     let [datos,setDatos]=useState();
    useEffect(()=>{
        fetch("http://localhost:3000/ApiCarpinteria.json")
        .then(response =>
             response.json())
        .then(datos=>setDatos(datos))
        
    },[])
    const navigate=useNavigate()
    return(
        
    <div>
        
        {datos?.map((element)=>{
            
        return(
          
            <><div className='producto' key={element.name} onClick={() => { navigate('/id-' + element.name); } }>
                <div key={element.name}> {element.titulo}</div>
            </div>
            <div className='imgprod'>
                    <img src={element.imagen}></img></div><div className="Precio">${element.precio}</div><Contador /><div className='contador'><p></p></div><button className='agregar al carrito'>agregar al carrito</button></>
        
            
        )
        })}
      </div>
      )
    }


export default Herreria