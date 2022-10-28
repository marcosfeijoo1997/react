import carrito from '../../../../assets/carrito.png'
import { useEffect, useReducer } from "react"
import { shoppingInitialState,shoppingReducer } from "./shoppingReducer"
import ProductItem from "../ProductItem";
import CartItem from "./CartItem";
import { TYPES } from "./shoppingAction";



const ShoppingCart=()=>{
    const [state,dispatch]=useReducer (shoppingReducer,shoppingInitialState);

        const {cart}=state;
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
           
            <article className="box grid-responsive ">
                asdfaoshidfpaougfh
                {cart.map((product)=>{
                    <p key={product.name}>{product.name}: {product.cantidad} items</p>
            })}
            </article>
                <button onClick={clearCart}>Limpiar Carrito</button>
                {
                    cart.map((item,index)=><CartItem key={index} data={item} delFromCart={delFromCart}/>)
                }
            
        </div>
    )
}
export default ShoppingCart