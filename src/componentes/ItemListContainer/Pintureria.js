import ShoppingCart from "./Productos/carritologica/ShoppingCart";

const Pintureria=()=>{ useEffect(()=>{
    fetch("http://localhost:3000/ApiCarpinteria.json")
    .then(response =>
         response.json())
    .then(datos=>setDatos(datos))
    
},[])
    return (
   <div><ShoppingCart/></div>)
}

export default Pintureria