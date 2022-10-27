import ShoppingCart from "../Productos/carritologica/ShoppingCart";
import { categoriaReducer,categoriaInitialState } from "./categoriaReducer";
import { useEffect } from "react";
import { TYPES } from "./categoriaAction";

const Categoria=()=>{ 
    
    useEffect(()=>{
    fetch("http://localhost:3000/ApiCarpinteria.json")
    .then(response =>
         response.json())
    .then(datos=>dispatch({type:TYPES.FETCH_PRODUCTS, payload:datos}))
    
    },[])
    

    const [state,dispatch]=useReducer(categoriaReducer,categoriaInitialState);
    const {products}=state;
    

    return (
   <div><ShoppingCart/></div>)
}

export default Categoria