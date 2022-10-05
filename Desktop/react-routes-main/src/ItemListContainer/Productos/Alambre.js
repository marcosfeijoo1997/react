import Rollo from '../assets/rollo flux.jpg'
const Alambre=()=> {
    return(
    <h3> <img src={Rollo}></img>
    <label for="membership">Selecciona el espesor deseado</label>
<select name="membership" id="membership">
  <option value='1,6'>1,6mm</option>
  <option value="2,0">2,0mm</option>
  <option value="2,5" selected>2,5mm</option>
  <option value="3,25">3,25mm</option>
  
</select>
<br></br>
<button type='submit'>Agregar al carrito</button>


    </h3>
)
    
    
}
export default Alambre;