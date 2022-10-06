
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import electrodos from '../assets/electrodos2.jpg'
import flux from '../assets/rollo flux.jpg'
import { Button } from 'react-bootstrap';

const Herreria=()=>{
    return (
      <div className="productos">
        <li className='listadeherreria' >  
        <ItemListContainer Nombre="Electrodos"

        imagen={electrodos}>

      
          
          </ItemListContainer>

          </li>
        
         

          <li className='listadeherreria'> 
          <ItemListContainer Nombre={"Alambre"}

         imagen={flux}>
          
             </ItemListContainer></li>
            
       
        
       
        
    
     
     
      </div>
      
      
    );
  }


export default Herreria