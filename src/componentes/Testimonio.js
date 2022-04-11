import * as React from 'react';
import "../hoja-estilos/Testimonio.css";


export function Testimonio(props) {
  return(
    

    <div className="flex-container">
           
           
           <img className="imagen-testimonio" 
                    src={require(`../imagenes/testimonio-${props.imagen}.png`)}
                    alt={`Fotografia de ${props.nombre}`} />
      
                   
      
            
                   <div className=" contenedor-testimonio">                
                        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
                        <p className="texto-testimonio">"{props.testimonio}"</p>
                   </div>
    </div>    
            
  


  );   
}
//export default Testimonio;