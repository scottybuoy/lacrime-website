

const LacrimeHero = () => {
    return (
        <div id='lacrime-hero-cont'>
            <div id='lacrime-hero-left-cont'>
                <div id='lacrime-logo-hero-cont'>
                    <img id='lacrime-logo-hero' alt='lacrime logo' src={`${process.env.PUBLIC_URL}/images/lacrime-logo.png`}></img>
                </div>
                <div id='lacrime-hero-left-cont-inner'>
                    <p id='lacrime-hero-by'>by</p>
                    <img id='whole-logo-hero' alt='whole company logo' src={`${process.env.PUBLIC_URL}/images/whole-logo.png`}></img>
                </div>
            </div>
        </div>
    )
};

export default LacrimeHero;