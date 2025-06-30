import { useState } from 'react';
import BurgerMenu from './BurgerMenu.js';

const BurgerMenuIcon = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            id='burger-menu-icon-cont'
            onClick={() => { setMenuOpen(!menuOpen) }}
        >
            <div id='burger-menu-icon-inner-cont'>
                <div className='burger-menu-icon-line'></div>
                <div className='burger-menu-icon-line'></div>
                <div className='burger-menu-icon-line'></div>
            </div>
            {menuOpen && (
                <BurgerMenu />
            )}

        </div>
    )
}

export default BurgerMenuIcon;