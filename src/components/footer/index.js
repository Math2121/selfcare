import React, { Component } from 'react'
import Insta from './assets/insta.png'
import Face from './assets/facebook.png'
import Master from './assets/mastercard.png'
import Paypal from './assets/paypal.png'
import Visa from './assets/visa.png'

import './style.css';



function Footer() {
    return (
        <footer>
            <div className="container intro-footer">
                <div className="termos">
                    <ul>
                        <li>Contato</li>
                        <li>Termos de serviço</li>
                        <li>Política de privacidade</li>
                        <li>Cancelamento, troca e reembolso</li>
                    </ul>
                </div>

                <div className="news">
                    <h4>Newsletter</h4>

                    <div className="input-news">
                        <input type="text" name="newsletter" />
                        <button type="submit">Inscrever</button>

                    </div>
                </div>

            </div>

            <hr />

            <div className="container intro-footer">
                <div className="social">
                    <img src={Insta} alt="" />
                    <img src={Face} alt="" />
                </div>

                <div className="payment">

                    <img src={Master} alt=""/>
                    <img src={Paypal} alt=""/>
                    <img src={Visa} alt=""/>

                </div>
            </div>
        </footer>
    )
}

export default Footer
