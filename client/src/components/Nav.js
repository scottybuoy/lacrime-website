

const Nav = () => {
    return (
        <div className='nav-cont'>
            <div className='logo-cont'>
                <img id='whole-logo' alt='whole company logo' src='/images/whole-logo.png'></img>
            </div>
            <div className='nav-items-cont'>
                <div className='nav-link-cont'>
                    <p className='nav-link'>Products</p>
                </div>
                <div className='nav-link-cont'>
                    <img id='shopping-basket' alt='shopping basket icon' src='/images/basket.png'/>
                </div>
            </div>
        </div>
    )
}

export default Nav;