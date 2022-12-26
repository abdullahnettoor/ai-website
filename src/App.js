import React from 'react'

import './App.css'
import { Header, Footer, Features, Blog } from './containers';
import { Article, Feature, Cta, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Feature/>
      <Article/>
      <Footer/>
    </div>
  )
}

export default App
