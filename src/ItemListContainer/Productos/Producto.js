


import herreriaimg from '../assets/herreria.jpg';
import carpinteriaimg from '../assets/carpinteria.jpg'
import pintureriaimg from '../assets/pintureria.jpg'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import {  Row, Col, Navbar } from "react-bootstrap";
import Herreria from '../card';


function Rubros(){
 // const navigate=useNavigate();
    return (
      <div className="productos">
  
          <li className='rotate-scale-up'><a href='Herreria'>Herreria</a></li>
          <div className='imgprod'>
          <img src={herreriaimg}></img>
          
          </div>

          <li className='rotate-scale-up'><a href='carpinteria'>Carpinteria</a></li>
          <div className='imgprod'>
          <img src={carpinteriaimg}></img></div>

          <li className='rotate-scale-up'><a href='pintureria'>Pintureria</a></li>
          <div className='imgprod'>
          
          <img src={pintureriaimg}></img></div>
          
     
         
          
         


            
   
        
       
        
    
     
     
      </div>
      
      
    );
    
  }


export default Rubros