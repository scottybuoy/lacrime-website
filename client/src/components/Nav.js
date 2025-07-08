import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BurgerMenuIcon from './BurgerMenuIcon';

const Nav = () => {

    let url = useLocation().pathname.split('/')[1];

    const [activeLink, setActiveLink] = useState('');

    const getTargetText = (e) => {
        let targetText = '';
        if (!e.target.children.length && e.target.tagName !== 'IMG') {
            targetText = e.target.textContent;
        } else if (e.target.tagName === 'IMG') {
            targetText = e.target.nextElementSibling.textContent;
        } else if (e.target.tagName === 'A') {
            targetText = e.target.children[0].children[1].textContent;
        } else {
            targetText = e.target.children[1].textContent;
        }
        console.log('TARGET TEXT: ', targetText);
        if (targetText === activeLink) {
            return {fontWeight: '900'};
        } else {
            return {};
        }
    }

    const updateActiveLink = (e) => {
        console.log('URL: ', url)
        setActiveLink(url);
        console.log('STATE: ', activeLink);
        getTargetText(e);
    };

    const activeLinkStyling = function(linkName) {
        if (url === linkName) {
            return {backgroundColor: 'rgb(211, 211, 211)'};
        }
    };

    return (
        <div className='nav-cont'>
            <Link to={'/'}>
                <div className='logo-cont'>
                    <img id='whole-logo' alt='whole company logo' src={`${process.env.PUBLIC_URL}/images/whole-logo.png`}></img>
                </div>
            </Link>
            <div
                className='nav-items-cont'
                onClick={updateActiveLink}
            >
                <Link to={'/products'} className='link'>
                    <div className='nav-link-cont' style={activeLinkStyling('products')}>
                        <img className='nav-item-arrow' alt='arrow icon' src={`${process.env.PUBLIC_URL}/images/nav-item-arrow.png`}></img>
                        <p className='nav-link'>Products</p>
                    </div>
                </Link>
                <Link to={'/about'} className='link'>
                    <div className='nav-link-cont' style={activeLinkStyling('about')}>
                        <img className='nav-item-arrow' alt='arrow icon' src={`${process.env.PUBLIC_URL}/images/nav-item-arrow.png`}></img>
                        <p className='nav-link'>About</p>
                    </div>
                </Link>
                <Link to={'/our-science'} className='link'>
                    <div className='nav-link-cont' style={activeLinkStyling('our-science')}>
                        <img className='nav-item-arrow' alt='arrow icon' src={`${process.env.PUBLIC_URL}/images/nav-item-arrow.png`}></img>
                        <p className='nav-link'>Our Science</p>
                    </div>
                </Link>
                <Link to={'/contact'} className='link'>
                    <div className='nav-link-cont' style={activeLinkStyling('contact')}>
                        <img className='nav-item-arrow' alt='arrow icon' src={`${process.env.PUBLIC_URL}/images/nav-item-arrow.png`}></img>
                        <p className='nav-link'>Contact</p>
                    </div>
                </Link>
                {/* <div className='nav-link-cont'>
                    <img id='shopping-basket' alt='shopping basket icon' src={`${process.env.PUBLIC_URL}/images/basket.png`} />
                </div> */}
            </div>
            <BurgerMenuIcon />
        </div>
    )
}

export default Nav;