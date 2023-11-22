import "./Footer.scss";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer_head">
                    <div className="footer_logo">
                        <img src='/assets/LogoLenex.png' alt="" />
                    </div>
                    <div className="footer_data">
                        <ul className="footer_first_ul">
                            <li>Développer</li>
                            <li>Innover</li>
                            <li>Accompagner</li>
                        </ul>
                        <ul>
                        <a href="/services"><li>Services</li></a>
                        <a href="/about"><li>À propos</li></a>
                        <a href="/contact"><li>Contact</li></a>
                        </ul>
                        <ul className="footer_last_ul">
                            <li>01 . 64 . 72 . 02 . 66</li>
                            <li>contact@lenex.fr</li>
                            <li>1 rue Emile Cohl, 77200 Torcy</li>
                        </ul>
                    </div>
                </div>

                <div className="footer_middle">
                    <hr />
                </div>

                <div className="footer_foot">
                    <ul>
                        <a href="https://www.instagram.com/lenex.fr/"  target="_blank" className="ul_img" ><img  src="/assets/instagram 1.svg" alt="" /></a>
                        <a href="https://www.facebook.com/Lenex.fr/"  target="_blank" className="ul_img" ><img  src="/assets/facebook 1.svg" alt="" /></a>
                        <a href="https://www.linkedin.com/company/lenex-fr"  target="_blank" className="ul_img" ><img  src="/assets/linkedin 1.svg" alt="" /></a>
                    </ul>
                </div>
                <p><a href="/mentions">Mentions légales et politiques de confidentialité</a></p>
            </div>
        </>
    );
}