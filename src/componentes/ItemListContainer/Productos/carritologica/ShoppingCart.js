import carrito from '../../../../assets/carrito.png'
import { useEffect, useReducer } from "react"
import { shoppingInitialState,shoppingReducer } from "./shoppingReducer"
import ProductItem from "../ProductItem";
import CartItem from "./CartItem";
import { TYPES } from "./shoppingAction";



const ShoppingCart=()=>{
    const [state,dispatch]=useReducer (shoppingReducer,shoppingInitialState);
    useEffect(()=>{
        fetch("http://localhost:3000/ApiCarpinteria.json")
        .then(response =>
             response.json())
        .then(datos=>setDatos(datos))
        
    },[])
        const {products,cart}=state;
        const addToCart =(id)=>{
            console.log (id);
            dispatch({type:TYPES.ADD_TO_CART, payload:id});


        };
        const delFromCart =()=>{

        };
        const clearCart=()=>{

        };
       

    return(
        <div>
            <h2>Carrito de Compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive ">{products.map((product)=>(
            <ProductItem key={product.id} data={product} addToCart={addToCart}/>))}</article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={clearCart}>Limpiar Carrito</button>
                {
                    cart.map((item,index)=><CartItem key={index} data={item} delFromCart={delFromCart}/>)
                }
            </article>
        </div>
    )
}
export default ShoppingCart