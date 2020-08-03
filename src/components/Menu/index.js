import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

//import ButtonLink from './components/ButtonLink';

import Button from '../Button';

//Styled
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">

            <Link to="/">
                <img className="logo" src={logo} alt="LuizFlix" />
            </Link>

            <Button as={ Link } className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
            
        </nav>
    );
}

export default Menu;