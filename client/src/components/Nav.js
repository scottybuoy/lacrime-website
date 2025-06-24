import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-cont'>
            <Link to={'/'}>
                <div className='logo-cont'>
                    <img id='whole-logo' alt='whole company logo' src={`${process.env.PUBLIC_URL}/images/whole-logo.png`}></img>
                </div>
            </Link>
            <div className='nav-items-cont'>
                <Link to={'/products'} className='link'>
                    <div className='nav-link-cont'>
                        <img className='nav-item-arrow' alt='arrow icon' src={`${process.env.PUBLIC_URL}/images/nav-item-arrow.png`}></img>
                        <p className='nav-link'>Products</p>
                    </div>
                </Link>
                <Link to={'/about'} className='link'>
                    <div className='nav-link-cont'>
                        <img className='nav-item-arrow' alt='arrow icon' src={`${process.env.PUBLIC_URL}/images/nav-item-arrow.png`}></img>
                        <p className='nav-link'>About</p>
                    </div>
                </Link>
                <div className='nav-link-cont'>
                    <img className='nav-item-arrow' alt='arrow icon' src={`${process.env.PUBLIC_URL}/images/nav-item-arrow.png`}></img>
                    <p className='nav-link'>Our Science</p>
                </div>
                <div className='nav-link-cont'>
                    <img id='shopping-basket' alt='shopping basket icon' src={`${process.env.PUBLIC_URL}/images/basket.png`} />
                </div>
            </div>
        </div>
    )
}

export default Nav;