

const Home = () => {
  return (
    <div id='home-cont'>
      <div id='mission-stmnt-cont'>
        <img alt='whatever' src='/images/whole-w-slogan.png' id='home-intro-logo'></img>
        <p id='mission-stmnt'><span className='bold'>At whole, we believe the human body already contains every answer to its healing.</span> Our mission is to work within those limits, nothing synthetic, nothing unnecessary. Our first product, Lacrimé Serum, embodies this ethos.
        </p>
        <div className='color-bar'></div>
      </div>
      <div id='home-product-cont'>
        <img alt='lacrime serum bottles' src='/images/serum-both.png' id='home-product-both'></img>
        <div id='home-product-logo-cont'>
          <img alt='lacrime logo' src='/images/lacrime-logo.png' id='home-product-logo'></img>
          <p id='home-product-logo-slogan'>Empathetic Stem Cell Supportive Serum</p>
        </div>
        <p id='home-product-copy'><span className='bold'>Lacrimé is a pioneering anti-aging serum</span> that draws on ethically-sourced human bioelements and potent natural extracts to support not just the skin, but the emotional terrain beneath it. Developed by researchers, dermatologists, and somatic therapists, the serum is a daily ritual for those navigating high-pressure environments with integrity and care.</p>
      </div>
    </div>
  )
}

export default Home;