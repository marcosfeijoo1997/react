const CartItem =({data,delFromCart})=>{
    let {name,cantidad}=data;
    return (
        <div style={{borderBottom:"thin solid gray"}}>
            <h4>{name}</h4>
            {/*<h5>${price}x {quantity}=${price*quantity}</h5>*/}
            <button>eliminar</button>

        </div>
    )
}
export default CartItem