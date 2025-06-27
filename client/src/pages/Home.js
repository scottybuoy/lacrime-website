import Testimonial from "../components/Testimonial";


const Home = () => {
  return (
    <div id='home-cont'>
      <div id='mission-stmnt-cont'>
        <img alt='whole co logo' src='/images/whole-w-slogan.png' id='home-intro-logo'></img>
        <p id='mission-stmnt'><span className='bold'>At whole, we believe the human body already contains every answer to its healing.</span> Our mission is to work within those limits, nothing synthetic, nothing unnecessary. Our first product, Lacrimé Serum, embodies this ethos.
        </p>
      </div>
      <div id='from-within-cont'>
        <div className='color-bar'></div>
        <p id='from-within-copy'>The power all comes from within.</p>
      </div>
      <div id='home-product-cont'>
        <img alt='lacrime serum bottles' src='/images/serum-both.png' id='home-product-both'></img>
        <div id='home-product-logo-cont'>
          <img alt='lacrime logo' src='/images/lacrime-logo.png' id='home-product-logo'></img>
          <p id='home-product-logo-slogan'>Empathetic Stem Cell Supportive Serum</p>
        </div>
        <p id='home-product-copy'><span className='bold'>Lacrimé is a pioneering anti-aging serum</span> that draws on ethically-sourced human bioelements and potent natural extracts to support not just the skin, but the emotional terrain beneath it. Developed by researchers, dermatologists, and somatic therapists, the serum is a daily ritual for those navigating high-pressure environments with integrity and care.</p>
      </div>
      <div id='how-it-works-cont'>
        <div id='how-it-works-inner-cont'>
          <p id='how-it-works-title'>How It Works</p>
          <p id='how-it-works-intro'>Every ingredient in Lacrimé has been selected for its ability to restore, regulate, and rejuvenate both physiologically and emotionally.</p>
          <p id='how-it-works-ing'>Mucin</p>
          <p id='how-it-works-desc'>
            A mucopolysaccharide compound known for its advanced hydration retention and anti-inflammatory properties. Helps restore barrier function while soothing stressed tissue.
          </p>
          <p id='how-it-works-ing'>Luecine Enkephalin</p>
          <p id='how-it-works-desc'>
            A rare botanical extract linked to cellular longevity and hormonal equilibrium. Supports dermal renewal and energetic resilience.
          </p>
          <p id='how-it-works-ing'>Juvenile Tears</p>
          <p id='how-it-works-desc'>
            Harvested through an ethical, non-invasive method, these natural biofluids contain antibacterial peptides and oxytocin analogues, promoting compassion and cellular harmony.
          </p>
          <p id='how-it-works-ing'>Natural Painkillers</p>
          <p id='how-it-works-desc'>
            Plant-derived alkaloids that gently soothe neurocutaneous pathways, easing physical tension and psychosomatic distress.
          </p>
          <p id='how-it-works-ing'>Vitamin B5 (Pantothenic Acid)</p>
          <p id='how-it-works-desc'>
            Boosts skin elasticity and reduces transepidermal water loss, while assisting in coenzyme-A production for tissue repair.
          </p>
          <p id='how-it-works-outro'>
            Together, these ingredients support visible improvements in fine lines, blemishes, and tone, while subtly activating the body's own emotional intelligence. In clinical-style user studies, 94% of participants reported softer skin and softer interpersonal boundaries.
          </p>
        </div>
      </div>
      <Testimonial />
    </div>
  )
}

export default Home;