import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Nav.css'

function Nav() {
  return (
    <div className='Nav'>
        <div>
            <ul>
              <div className='pages'>
                <Link to="home" className='Link'><li>Home</li></Link>
                <Link to="beliebteste" className='Link'><li>Beliebteste</li></Link>
                <Link to="comingsoon" className='Link'><li>Coming soon</li></Link>
                <Link to="kategorien" className='Link'><li>Kategorien</li></Link>
                <Link to="meineliste" className='Link'><li>Meine Liste</li></Link>
              </div>

              <div className='login-register'>
                <Link to="login" className='Link'><li>Login</li></Link>
                <Link to="registrieren" className='Link'><li>Registrieren</li></Link>
              </div>
            </ul>
        </div>
    </div>
  )
}

export default Nav