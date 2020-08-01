import React from 'react';
import logo from '../../assets/img/logo.png';

//import ButtonLink from './components/ButtonLink';

import Button from '../Button';

//Styled
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">

            <a href="/">
                <img className="logo" src={logo} alt="LuizFlix" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
            
        </nav>
    );
}

export default Menu;