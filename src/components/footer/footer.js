import React from 'react';
import './footer.scss';
import InstragramIcon from './icon/insicon.svg';
import FacebookIcon from './icon/facebookicon.svg';
import TwitterIcon from './icon/twittericon.svg';
import EwayImage from './img/verified-seal 1.png';
import CommenwealthImage from './img/adve2 1.png';

const Footer = () => {
  return (
    <div className="footer-background">
      <div className="footer-section">
        <div className="footer-container">

          <div className="footer-header">
            <div className="footer-header__nav">
              <p className="logo">vital.ly</p>
              <nav>
                <a href="https://www.vital.ly/about_us.html">About</a>
                <a href="https://www.vital.ly/contact/">Contact</a>
                <a href="https://www.vital.ly/delivery.html">Delivery</a>
                <a href="https://www.vital.ly/privacy_policy.html">Privacy</a>
                <a href="https://www.vital.ly/terms_of_use.html">Terms</a>
              </nav>
            </div>
            <div className="footer-header__social-media">
              <img src={InstragramIcon} alt=""/>
              <img src={FacebookIcon} alt=""/>
              <img src={TwitterIcon} alt=""/>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <p>Absolute Essential</p><p>Active Elements</p><p>Amazonia</p><p>Ancient Minerals</p><p>Anna's Farm</p><p>Ardeypharm</p><p>ATP Science</p><p>Australian Bush Flowers</p><p>Bach Flower Remedies</p><p>BioCeuticals</p><p>BioCeuticals Clinical</p><p>Bioclinic Naturals</p><p>BioMedica</p><p>BioResearch</p><p>Blackmores Professional</p><p>Bragg</p><p>Brauer</p><p>Cell-Logic</p><p>ChinaMed</p><p>Concept Shen</p><p>Designs For Health</p><p>DHU</p><p>Dr. Hauschka</p><p>Dr. Reckeweg</p><p>Eagle</p><p>Eden Health Foods</p><p>Enterosgel</p><p>EnzyMedica</p>
            </div>
            <div className="link-column">
              <p>Equinox Botanicals</p><p>Essential Therapeutics</p><p>Ethical Nutrients</p><p>Fem21</p><p>Floradix</p><p>Flordis</p><p>Free Spirit</p><p>Gelpro</p><p>Green Nutritionals</p><p>Harmony</p><p>Healthwise</p><p>Heel</p><p>Hemple</p><p>Henry Blooms</p><p>Herbs of Gold</p><p>Immuron</p><p>Infloran</p><p>Integra Nutritionals</p><p>InterClinical</p><p>Ketostix</p><p>Ki</p><p>Kolorex Lifestyle enzymes</p><p>Lotus</p><p>Love Oils</p><p>Love Organic</p><p>Living</p><p>Magneaseium</p><p>Martin & Pleasance</p>
            </div>
            <div className="link-column"><p>MD Nutritionals</p><p>Meadow & Marrow</p><p>Medicine Tree</p><p>MediHerb</p><p>Medlab</p><p>Melrose</p><p>Metagenics</p><p>Mim Beim Herbal Teas</p><p>Morlife</p><p>Motion Potion</p><p>MTHFR Support</p><p>MyGen Health</p><p>NatraChoice</p><p>Nature's Sunshine</p><p>NaturoBest</p><p>Nordic Naturals</p><p>NPM</p><p>Nutra Organics</p><p>Nutra-Life</p><p>Nutrition Care</p><p>Nuzest</p><p>Oriental Botanicals</p><p>Orthoplex Blue</p><p>Orthoplex Green</p><p>Orthoplex White</p><p>Ovvio</p><p>Phytality</p><p>Power Super Foods</p>
            </div>
            <div className="link-column">
              <p>Power Super Foods</p><p>Pretorius</p><p>Protein Supplies</p><p>PURE Sports Nutrition</p><p>Qiara</p><p>Rescue Remedy</p><p>RN Labs</p><p>Rosa Naturals</p><p>Rosita</p><p>Schuessler Tissue Salts</p><p>Seipel</p><p>skinB5</p><p>Spatone</p><p>Spectrumceuticals</p><p>Superfeast</p><p>Taiga</p><p>Thompson's</p><p>Thursday Plantation</p><p>TiTree Spirit</p><p>Udo's Choice</p><p>Vital</p><p>Vitality Living</p><p>Weleda</p><p>Wonderfoods</p><p>Woohoo Body</p><p>Xlear</p><p>Yummee Gluten Free</p>
            </div>
          </div>

          <footer>
            <p className="copyright">© All rights reserved</p>
            <div className="payment">
              <img src={EwayImage} alt=""/>
              <img src={CommenwealthImage} alt=""/>
              </div>
          </footer>

        </div>
      </div>
    </div>
  )
}

export default Footer;