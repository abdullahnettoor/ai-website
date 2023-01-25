import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What GPT3</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#home'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__links_logo'>
          <img src={logo} alt="logo"></img>
        </div>
        <div className='navbar__links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar__sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='navbar__menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar__menu_container scale-up-center'> 
            <div className='navbar__menu_container_links'>
              <Menu/>
              <div className='navbar__menu_container_links_sign  '>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
