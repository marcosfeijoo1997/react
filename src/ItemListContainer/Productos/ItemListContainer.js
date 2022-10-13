import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import './producto.css' 
const Carpinteria=()=>{
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
            <div key={element.name}> {element.titulo}</div>
            <img src={element.imagen}></img>
            </div>
        )
        })}
      </div>
      )
    }
export default Carpinteria