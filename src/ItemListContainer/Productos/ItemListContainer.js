import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import './producto.css' 
const ItemListContainer=()=>{
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
            <div className='producto' key={element.name} onClick={()=>{navigate('/id-'+element.name)}}>
            <div key={element.name}> <h1>{element.titulo}</h1></div>
            <div className='imgprod'>
            <img src={element.imagen}></img></div>
            <div className="Precio">${element.precio}</div>
        
            </div>
        )
        })}
      </div>
      )
    }
export default ItemListContainer