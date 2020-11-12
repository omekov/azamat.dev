import React from 'react'
import './styles.scss'
import developer from '../../assets/developer.svg'
const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={developer} alt="developer" />
        </div>
      </div>
    </header>
  )
}

export default Header