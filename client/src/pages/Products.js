import { Link } from 'react-router-dom';
import Testimonial from "../components/Testimonial";

const Products = () => {
    return (
        <>
            <div id='products-cont'>
                <div id='serum-coming-soon-cont'>
                    <img alt='lacrime serum bottle' src={`${process.env.PUBLIC_URL}/images/bottle-w-shadow.png`} id='product-serum'></img>
                    <div id='product-intro-cont'>
                        <img alt='lacrime logo' src={`${process.env.PUBLIC_URL}/images/lacrime-logo.png`} id='lacrime-logo-product-intro'></img>
                        <div id='product-intro-msg-cont'>
                            <p id='product-intro-msg'> <span className='bold'>Whole Co. presents Lacrimé serum:</span> a pioneer in beauty and science that seeks to reenvision the established capabilities of skincare.
                            </p>
                        </div>
                    </div>
                    <div className='mobile-color-bar' id='serum-color-bar'></div>
                </div>
                {/* MOBILE ONLY */}
                <div id='product-intro-cont-mobile'>
                    <img alt='lacrime logo' src={`${process.env.PUBLIC_URL}/images/lacrime-logo.png`} id='lacrime-logo-product-intro-mobile'></img>
                    <div id='product-intro-msg-cont-mobile'>
                        <p id='product-intro-msg'> <span className='bold'>Whole Co. presents Lacrimé serum:</span>a pioneer in beauty and science that seeks to reenvision the established capabilities of skincare.
                        </p>
                    </div>
                    <div className='mobile-color-bar' id='product-intro-color-bar'></div>
                </div>
                {/* ---------- */}
                <div id='coming-soon-banner'>
                    <p id='available-soon-msg'>Available soon!</p>
                    <Link to={'/contact'}>
                        <button id='mailing-list-btn'>Join Our <span id='mailing-list'>Mailing List!</span></button>
                    </Link>
                    <div className='color-bar'></div>
                    <div className='mobile-color-bar' id='coming-soon-color-bar'></div>
                </div>
                <div id='product-more-cont'>
                    <div className='product-more-inner-cont'>
                        <p id='product-desc'><span className='bold'>What sets this serum apart is one key ingredient: </span>naturally occurring anti-bacterial enzymes derived from human tears. whole set out to bridge the gap in the beauty industry between physical and emotional wellness. The novel blend of ethically-sourced bioelements and standard natural extracts repair the skin and the emotional terrain beneath it.
                            Developed by researchers, dermatologists, and somatic therapists, the serum is intended as a daily ritual  for the body and mind. When applied, the skin barrier is gradually restored, sun damage is reversed through accelerated cellular turnover, and the lacrimation fluid supports compassion. Its hormone-balancing, somatic qualities regulate emotional distress. That’s why Lacrimé’s ingredients are sourced from the body, for the body.
                        </p>
                    </div>
                    <div className='product-more-inner-cont'>
                        <div id='product-formula-cont'>
                            <h4 id='product-formula-title'>Formula & Benefits</h4>
                            <p id='product-formula'>
                                The serum is formulated with certified organic ingredients like Leucine Enkephalin, electrolytes, and mucin. These groundbreaking bioactive compounds are paired with a clinical blend of collagen peptides, mandelic acid, hyaluronic acid, vitamin C, B5, and niacinamide.
                                Every ingredient in Lacrimé has been selected for its ability to restore, regulate, and rejuvenate both physiologically and emotionally.
                            </p>
                        </div>
                    </div>
                    <div className='product-more-inner-cont'>
                        <p className='ingredient-name'>Mucin (MUC5AC)</p>
                        <p className='ingredient-desc'>
                            A mucopolysaccharide compound known for its advanced hydration retention and anti-inflammatory properties. Helps restore barrier function while soothing stressed tissue.
                        </p>
                        <p className='ingredient-name'>Leucine Enkephalin (Leucine Enkephalin)</p>
                        <p className='ingredient-desc'>
                            Leucine enkephalin is an endogenous opioid peptide, meaning it's naturally produced in the body, and balances pain, mood, and stress. When applied topically, it supports dermal renewal and energetic resilience.
                        </p>
                        <p className='ingredient-name'>Juvenile Tears</p>
                        <p className='ingredient-desc'>
                            Harvested through an ethical, non-invasive method, these natural biofluids contain antibacterial peptides and oxytocin analogues, promoting compassion and cellular harmony.
                        </p>
                        <p className='ingredient-name'>Vitamin B5 (Pantothenic Acid - organic, added)</p>
                        <p className='ingredient-desc'>
                            Boosts skin elasticity and reduces transepidermal water loss, while assisting in coenzyme-A production for tissue repair.
                        </p>
                    </div>
                </div>
                <div id='product-together-cont'>
                    <div id='together-copy-cont'>
                        <p id='together-copy'>
                            <span className='bold'>Together, these ingredients support visible improvements</span> in fine lines, blemishes, and tone, while subtly activating the body's own emotional intelligence. In clinical studies, 94% of participants reported overall emotional and dermal improvement within the hour.
                        </p>
                    </div>
                    <p id='together-slogan'>Designed for the skin. Capable of more.</p>
                </div>
                <div id='application-guide-cont'>
                    <div id='application-guide-inner-cont'>
                        <p id='application-guide-title'>Application Guide</p>
                        <p id='application-guide-intro'>Our skin serum is best administered as a self-soothing and revitalizing ritual each morning.</p>
                        <ol id='application-guide-instructions'>
                            <li className='application-instruction'>Tilt the Lacrimé serum tincture once for the best blend of physical and emotional renewal.</li>
                            <li className='application-instruction'> Apply two to three drops below each eye.</li>
                            <li className='application-instruction'>Locate your hands’ energy meridians - the flat area where your thumb and index knuckle join in a fist - and pat the serum until spread evenly.</li>
                            <li className='application-instruction'>Feel the balance of Lacrimé.</li>
                        </ol>
                    </div>
                </div>
                <Testimonial />
            </div>
        </>
    )
}
export default Products;