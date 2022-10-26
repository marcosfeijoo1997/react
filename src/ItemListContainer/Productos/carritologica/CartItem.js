const CartItem =({data,delFromCart})=>{
    let {id,name,price,quantity}=data;
    return (
        <div style={{borderBottom:"thin solid gray"}}>
            <h4>{name} {id}</h4>
            <h5>${price}x {quantity}=${price*quantity}</h5>
            <button>eliminar</button>

        </div>
    )
}
export default CartItem