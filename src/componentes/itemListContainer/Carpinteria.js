import { useEffect,useState } from "react";

const Carpinteria=()=>{
     let [datos,setDatos]=useState;
    useEffect(()=>{
        fetch("http://localhost:3001/ApiCarpinteria.json")
        .then(response =>
             response.json())
        .then(datos=>console.log(datos))
        setDatos(datos);
    },[])
    
    return(<div>
        {datos?.foreach(producto=>{
            console.log(producto.name)
        return producto.name
        })}
    </div>)

}
export default Carpinteria