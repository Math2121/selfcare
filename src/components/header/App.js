import React, { Component } from 'react'
import Logo from './assets/logo.png'
import Search from './assets/search.png'
import Carrinho from './assets/carrinho.png'
import User from './assets/user.png'
import Banner from '../banner/index'
import './style.css';
// class Equipe extends Component {
//     render() {
//         return (
//             <div>
//                 <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
//                <Social/>
//             </div>
//         )
//     }
// }


// class Sobre extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Funcionou,{this.props.nome}</h2>
//                 <h2>Funcionou,{this.props.cargo}</h2>
//                 <h2>Funcionou,{this.props.idade}</h2>
//             </div>
//         )
//     }
// }


// const Social = ()=>{
//     return(

//         <div>
//  <a href="http://" target="_blank" rel="noopener noreferrer">Linkedin</a>
//         </div>

//     )
// }
// function App() {
//     return (
//         <div>


//             Olá,
//             <Equipe nome="Matheus" cargo="Programador" idade="19"/>

//         </div>
//     )
// }

// export default App




// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             nome: 'Matheus',
//             count: 0,
//             hora: '00:00:00'
//         }
//         this.cresce = this.cresce.bind(this)
//     }

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({ hora: new Date().toLocaleTimeString() })
//         }, 1000)
//     }

//     // componentDidUpdate(){
//     //     console.log('Atualizado')
//     // }


//     cresce() {
//         let state = this.state;
//         state.count += 1
//         this.setState(state)
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.nome}<br />

//                 {this.state.count}<br />

//                 <button onClick={this.cresce}>+</button><br />

//                 {this.state.hora}<br />
//             </div>
//         )
//     }
// }

// export default App



function Header() {
    return (
        <header>
            <div className="container">
                <div className="menu">

                    <img src={Logo} alt="Logo do site" />

                    <nav>
                        <ul className="item">
                            <li>

                                <a href="">
                                    <img src={Search} alt="Pesquisar" />

                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={User} alt="Pesquisar" />
                                </a>
                            </li>
                            <li>
                                <a href="">

                                    <img src={Carrinho} alt="Pesquisar" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>



    )
}

export default Header
