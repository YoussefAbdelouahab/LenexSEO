"use client"; 
import '../Main.scss'
import './Securite.scss';
import Navbar from "../../app/components/Header/Navbar"
import Footer from "../../app/components/Footer/Footer"
import SimpleBlueButton from '../../app/components/Button/SimpleBlueButton/SimpleBlueButton';
import Crown from "../../assets/Crown.svg"

import { useEffect } from 'react';

function Securite() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log("entry")
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".hidden")
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <>
            <div className='secu_header'>
                <Navbar />
                <section className=''>
                    <div className='secu_header_container '>
                        <h1 className='children1 '>Sécurité</h1>
                        <img src="/assets/LogoLenexAloneBright.png" alt="" />
                    </div>
                </section>
            </div>
            <div className='main_container3'>
                <ul className='little_nav'>
                    <li><a href="/services">Services</a></li>
                    <li className='little_nav_first'><a href="/services/developpement">Développement</a></li>
                    <li><a href="/services/infrastructure">Infrastructure</a></li>
                    <li className='little_nav_last'><a href="/services/securite">Sécurité</a></li>
                </ul>
                <p>La cybersécurité peut être un sujet éloigné des entreprises en particulier les PME.</p>

                <div className='secu_container'>

                    <div className='secu_container_left'>
                        <img className="secu_line1" src="/assets/SecuLine1.svg" alt="" />
                        <div className='left_box'>
                            <div className='first_circle circle'>
                                <div className='first_circle_white circle_white'>
                                    <img src="/assets/IconeCircleSecu1.svg" alt="" />
                                    <h2>Osint</h2>
                                    <p>Notre société possède un service de recherche de toutes <strong>les informations sensibles</strong> que vous avez pu laisser sur Internet. Grâce à ce service, vous pouvez par exemple connaitre votre <strong>e-réputation. </strong></p>
                                </div>
                            </div>
                        </div>
                        <div className='right_box'>
                            <img className='secu_crown1' src="/assets/Crown.svg" alt="" />

                            <div className='second_circle circle'>
                                <div className='second_circle_white circle_white'>
                                    <img src="/assets/IconeCircleSecu2.svg" alt="" />
                                    <h2>Audit</h2>
                                    <p>Si vous avez peur d’avoir un site Internet <strong>sensible aux attaques</strong> pirates ou qui possède <strong>des failles de sécurité</strong> dans son système d’information, notre societé est là pour faire tous <strong>les tests nécéssaires.</strong> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='secu_container_right'>
                        <div className='left_box'>
                            <img className='secu_crown2' src="/assets/Crown.svg" alt="" />
                            <div className='third_circle circle'>
                                <div className='third_circle_white circle_white'>
                                    <img src="/assets/IconeCircleSecu3.svg" alt="" />
                                    <h2>PCI/DSS</h2>
                                    <p>Lenex vous propose un service pour <strong>sécuriser vos transactions</strong> contenant des données bancaires. De plus, cela vous aidera à <strong>être conforme</strong> et <strong>améliorera l’image de votre entreprise.</strong> On vous accompagnera dans <strong>la certification.</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='fourth_circle circle'>
                                <div className='fourth_circle_white circle_white'>
                                    <img src="/assets/IconeCircleSecu4.svg" alt="" />
                                    <h2>Sécurité opérationnelle</h2>
                                    <p>Afin d’avoir <strong>une surveillance continue</strong> sur votre plateforme, il est possible de mettre en place, avec Lenex, un <strong>SOC</strong> (centre opérationnel de sécurité). Il sera en alerte sur toutes <strong>les interactions</strong> qui se dérouleront sur votre <strong>système d’information.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='last_button_secu'>
                        <img className='secu_crown3' src="/assets/Crown.svg" alt="" />
                        <a href="/contact"><SimpleBlueButton text="Je me lance" /></a>
                    </div>
                    <div className='center_text_secu'>
                        <p>Protégez vos données et votre entreprise !</p>
                    </div>
                    <img src="/assets/LogoLenexAloneBright.png" className='center_logo_secu' alt="" />
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Securite;
