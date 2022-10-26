import ShoppingCart from "./ShoppingCart" 
const Navbar =({children})=>
{
   return ( 
        <div className="NavbarStyle">
            
                <li><a href='Inicio'>Inicio</a></li>    
                <li>Nosotros</li>
                <li ><a href='Producto'>Productos</a></li >
                <li>Servicios</li>
                <li>Sucursales</li>
      
            
            
            <ShoppingCart></ShoppingCart>
            {children}
        </div>
        
    )
    
}
export default Navbar

