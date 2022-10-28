import ShoppingCart from "../Productos/carritologica/ShoppingCart";
import { categoriaReducer,categoriaInitialState } from "./categoriaReducer";
import { useEffect,useReducer } from "react";
import { TYPES } from "./categoriaAction";

const Categoria=()=>{ 
    
    useEffect(()=>{
    fetch("http://localhost:3000/ApiCarpinteria.json")
    .then(response =>
         response.json())
    .then(datos=>dispatch({type:TYPES.FETCH_PRODUCTS, payload:datos}))
    
    },[])
    

    const [state,dispatch]=useReducer(categoriaReducer,categoriaInitialState);
    let {products}=state;
    

    return (
   <div>
    {products.map(function(product){
      <p key={product.name}>{product.titulo}</p>
    })}
   </div>)
}

export default Categoria