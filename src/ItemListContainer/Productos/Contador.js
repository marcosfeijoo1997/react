import { useEffect, useState } from "react"


const Contador =()=>{

    const [count,setcount]= useState (0);

    useEffect (()=>{<p>cargando...</p>;
},[]);

    const clickHandler=()=>{
        setcount(count+1);
       


    };
    
    const clickHandlerr=()=>{
        setcount(count-1);
       


    };

    return (

        <div>
         <button onClick={clickHandler}>+</button>
            <button onClick={clickHandlerr}>-</button>
            {count}</div>
       
    )
}



export default Contador 
