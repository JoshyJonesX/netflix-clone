import React, { useState, useEffect } from 'react'
import './Nav.css'
function Nav() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else setShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <nav className={`nav ${show && 'nav_black'}`}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
        className='nav_logo'
      />

      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/120px-Netflix-avatar.png'
        alt='smiling face avatar'
        className='nav_avatar'
      />
    </nav>
  )
}

export default Nav
