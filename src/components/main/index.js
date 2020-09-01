import React, { Component } from 'react'


import './style.css';
import Produto from '../Produtos';
import Produto2 from './assets/produto2.png'
import Produto3 from './assets/produto3.png'
import Produto4 from './assets/produto4.png'
import Produto5 from './assets/produto5.png'
import Produto6 from './assets/produto6.png'
import Produto7 from './assets/produto7.png'
import Produto8 from './assets/produto8.png'


function Main() {
    return (
        <main>
            <div className="container">


                <section className="intro">
                    <p className="promo">Promoção</p>

                    <div className="quanty">
                        <p>9 produtos</p>
                    </div>

                </section>


            </div>
            <hr />




            <div className="container produto">

                <Produto img={Produto2} message="Lorem ipsum dolor sit" price='50.00' />

                <Produto img={Produto3} message="Lorem ipsum dolor sit" price='50.00' />



                <Produto img={Produto4} message="Lorem ipsum dolor sit" price='50.00' />


                <Produto img={Produto5} message="Lorem ipsum dolor sit" price='50.00' />



                <Produto img={Produto6} message="Lorem ipsum dolor sit" price='50.00' />




                <Produto img={Produto7} message="Lorem ipsum dolor sit" price='50.00' />

                <Produto img={Produto8} message="Lorem ipsum dolor sit" price='50.00' />

            </div>
        </main>
    )
}

export default Main
