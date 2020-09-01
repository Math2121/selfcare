import React from 'react'
import Produto1 from './assets/produto1.png'
import './style.css'
function Produto(props) {
    return (
  
            <div>
              
                <div className="descricao">
                <img src={props.img} alt="" />
                    <p className="message">{props.message}</p>
                    <p style={{fontWeight:'bold'}}>R$ <span>{props.price}</span></p>
                </div>
            </div>
    
    )
}

export default Produto;