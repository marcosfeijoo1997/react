import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
/*

{
    url:https://pokeapi.co/api/v2/pokemon/ditto}
*/

const ItemDetails=({})=>{
     let [datos,setDatos]=useState();
     const {id}=useParams()
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/1/')
        .then((res)=>res.json())
        .then((datos)=>setDatos(datos));
       ;
    },['https://pokeapi.co/api/v2/pokemon/1/'])
    
    return(
    <div>
        {!datos ? (
            <div>cargando...</div> ):(
        
       <div>
        <p>{datos.name}</p>
        <img src={datos.sprites.front_default}/>
        

       </div>
        
        
    )}
    </div>)

}
export default ItemDetails