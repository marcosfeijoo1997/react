import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import './producto.css' 

const ItemDetail=()=>{
 const { productName } = useParams();
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
             if(productName===element.name){
                return <div className='producto' key={element.name} onClick={()=>{navigate('/id-'+element.name)}}>
            <div key={element.name}><h1>{element.titulo} </h1></div>
            <img src={element.imagen}></img>
            <div> {element.descripcion}</div>
            <div className="Precio">${element.precio}</div>
            </div>
             }

            
        
        })}
      </div>
      )
    }
export default ItemDetail