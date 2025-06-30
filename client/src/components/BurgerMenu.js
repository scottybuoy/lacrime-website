import { Link } from 'react-router-dom'

const BurgerMenu = () => {
    return (
        <div id='burger-menu-cont'>
            <div className='burger-menu-item-cont'>
                <Link to={'/products'} className='link'>
                    <p className='burger-menu-item'>Products</p>
                </Link>
            </div>
            <div className='burger-menu-item-cont'>
            <Link to={'/about'} className='link'>
                    <p className='burger-menu-item'>About</p>
                </Link>
            </div>
            <div className='burger-menu-item-cont'>
            <Link to={'/our-science'} className='link'>
                    <p className='burger-menu-item'>Our Science</p>
                </Link>
            </div>
            <div className='burger-menu-item-cont'>
            <Link to={'/contact'} className='link'>
                    <p className='burger-menu-item'>Contact</p>
                </Link>
            </div>
        </div>
    )
}

export default BurgerMenu;