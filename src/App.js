import React from 'react'

import './App.css'
import { Header, Footer, Features, Blog, WhatGPT3, Possibility } from './containers';
import { Article, Feature, Cta, Navbar, Brand } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
