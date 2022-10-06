import CartWidget from "../CartWidget"
const Navbar =({children})=>
{
   return ( 
        <div className="NavbarStyle">
            
                <li><a href='Inicio'>Inicio</a></li>    
                <li>Nosotros</li>
                <li ><a href='Producto'>Productos</a></li >
                <li>Servicios</li>
                <li>Sucursales</li>
      
            
            
            <CartWidget></CartWidget>
            {children}
        </div>
        
    )
    
}
export default Navbar

