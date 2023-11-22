"use client"; 
import '../Main.scss'
import './Infrastructure.scss';
import Navbar from "../../app/components/Header/Navbar"
import Footer from "../../app/components/Footer/Footer"
import SimpleBlueButton from '../../app/components/Button/SimpleBlueButton/SimpleBlueButton';

import { useEffect } from 'react';

function Infrastructure() {

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
            <div className='infra_header'>
                <Navbar />
                <section className=''>
                    <div className='infra_header_container '>
                        <h1 className='children1 '>Infrastructure</h1>
                        <img src="/assets/LogoLenexAloneBright.png" alt="" />
                    </div>
                </section>
            </div>
            <div className='main_container2'>
                <img className="infra_line1" src="/assets/InfraLine1.svg" alt="" />
                <img className="infra_line2" src="/assets/InfraLine2.svg" alt="" />
                <img className="infra_logoline1" src="/assets/LogoLenexAloneBright.png" alt="" />
                <img className="infra_logoline2" src="/assets/LogoLenexAloneBright.png" alt="" />
                <ul className='little_nav'>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/services/developpement">Développement</a></li>
                    <li><a href="/services/infrastructure">Infrastructure</a></li>
                    <li><a href="/services/securite">Sécurité</a></li>
                </ul>

                <div className='infra_container'>
                    <div className='infra_container_left'>
                        <h3>Notre équipe est à l’écoute de vos besoins numériques !</h3>
                        <div className='second_circle circle'>
                            <div className='second_circle_white circle_white'>
                                <img src="/assets/IconeCircleInfra2.svg" alt="" />
                                <h2>Administration Cloud</h2>
                                <p>Notre société est spécialisée dans <strong>la gestion et la maintenance des clouds,</strong> ce qui permet  de rendre vos données disponibles partout et à tout moment.</p>
                            </div>
                        </div>

                        <div className='last_button_infra'>
                            <h3>Ne cherchez plus !</h3>
                            <img className='dev_crown3' src="/assets/Crown.svg" alt="" />
                            <a href="/contact"><SimpleBlueButton text="Contactez-nous" /></a>
                        </div>
                    </div>

                    <div className='infra_container_right'>
                        <img className='infra_crown1' src="/assets/Crown.svg" alt="" />
                        <div className='first_circle circle'>
                            <div className='first_circle_white circle_white'>
                                <img src="/assets/IconeCircleInfra1.svg" alt="" />
                                <h2>Automatisation</h2>
                                <p>Notre société propose un service de <strong>développement de solutions,</strong> afin de vous faire <strong>gagner du temps</strong> mais également <strong>réduire le nombre d’erreurs.</strong></p>
                            </div>
                        </div>

                        <h3>Nous vous accompagnons à chaque étape</h3>

                        <img className='infra_crown2' src="/assets/Crown.svg" alt="" />
                        <div className='third_circle circle'>
                            <div className='third_circle_white circle_white'>
                                <img src="/assets/IconeCircleInfra3.svg" alt="" />
                                <h2>Hébergement</h2>
                                <p>Lenex fournit l'hébergement sur Internet de <strong>systèmes informatiques divers,</strong> tels que sites web, stockage d'information...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Infrastructure;
