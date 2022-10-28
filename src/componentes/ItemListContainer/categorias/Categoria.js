import ShoppingCart from "../Productos/carritologica/ShoppingCart";
import { categoriaReducer,initialState } from "./categoriaReducer";
import { useEffect,useReducer } from "react";
import { TYPES} from "./categoriaAction";
//import {TYPES as TYPESCarrito } from "../Productos/carritologica/shoppingAction"
import { shoppingInitialState, shoppingReducer } from "../Productos/carritologica/shoppingReducer";
import { useNavigate } from "react-router-dom";

const Categoria=()=>{ 
    const navigate=useNavigate();
    useEffect(()=>{
    fetch("http://localhost:3000/ApiCarpinteria.json")
    .then(response =>
         response.json())
    .then(datos=>dispatch({type:TYPES.FETCH_PRODUCTS, payload:datos}))
    
    },[])
    

    const [state,dispatch]=useReducer(categoriaReducer,categoriaReducer());
    const [stateShopping,dispatchShopping]=useReducer(shoppingReducer,shoppingInitialState);
    

    return (
   <div>
    <button onClick={()=>{navigate("/Carrito")}}>hola{stateShopping.cart?.length}</button>
    {state.products?.map(product=>
    <div key={product.name}>
      <h1 >{product.titulo}</h1>
      <img src={product.imagen}></img>
      <p>{product.descripcion}</p>
      <button onClick={()=>{dispatchShopping({type:"ADD_TO_CART",payload:product.name})}}> Agregar al carrito </button>
    </div>
    )}
   </div>)
}

export default Categoria