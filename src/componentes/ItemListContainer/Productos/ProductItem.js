
const ProductItem= ({data,addToCart})=>{
    let {id,name,price}=data;

    return <div style={{border:"thin solid gray"}}>
        <h4>{name} </h4>
        <h5>${price}</h5>
   
    </div>
}
export default ProductItem