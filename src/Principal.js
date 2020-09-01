import React, { Component } from 'react'
import Banner from './components/banner/index';

import App from './components/header/App';
import Main from './components/main';
import Footer from './components/footer';



function Principal() {
    return (
        <>
      <App/>
      <Banner/>
      <Main/>

      <Footer/>
      </>
    )
}

export default Principal
