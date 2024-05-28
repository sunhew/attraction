import React from 'react'

import Logo from '../Header/Logo'
import Menu from '../Header/Menu'
import Sns from '../Header/Sns'

const Header = () => {
    return (
        <header id='header' role='banner'>
            <Logo />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header