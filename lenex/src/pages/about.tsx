"use client"; 
import './Main.scss'
import './About.scss';
import Navbar from "../app/components/Header/Navbar"
import Footer from "../app/components/Footer/Footer"

import Crown from "/assets/Crown.svg"
import { useEffect } from 'react';

function About() {

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
        <div className='AboutPage'>
            <div className='about_header'>
                <Navbar />
                <section className='hidden'>
                    <div className='about_header_container hidden'>
                        <h1 className='children1 hidden'>À propos de nous</h1>
                        <img src="/assets/LogoLenexAloneBright.png" alt="" />
                    </div>
                </section>
            </div>

            <div className='about_container1'>
                <img className='AboutLine1' src="/assets/AboutLine1.svg" alt="" />
                <p className='BackgroundTitle'>Notre histoire</p>

                <div className='container1_left'>
                    <h2>Notre histoire</h2>
                    <div className='story_card'>
                        <p>“Je souhaite donner à tous l’occasion d’évoluer, grâce à notre accompagnement digital personnalisé, et accessible à la totalité des sociétés.”</p>
                        <img className="AboutTik" src="/assets/AboutTik.svg" alt="" />
                    </div>
                    <p className='pdg_name'>Aaditya Khand</p>
                </div>

                <div className='container1_right'>
                    <img src="/assets/PhotoAdi.png" alt="" />
                </div>
            </div>

            <div className='Line_container'>
                <hr />
            </div>

            <div className='background_container'>

                <div className='about_container2'>
                    <p className='BackgroundTitle'>Lenex</p>
                    <div className='container2_left'>
                        <img className='children1 hidden' src="/assets/Section2About.png" alt="" />
                    </div>

                    <div className='container2_right'>
                        <p>Aaditya Khand est intéressé par l’informatique depuis petit, et a décidé de faire de sa passion son métier. En effet, après 8 ans d’expérience et de nombreux stages,  durant lesquels il a pu arborer plusieurs casquettes, il a décidé d’ouvrir <strong>Lenex</strong>, une société dynamique avec une vision innovante. </p>
                        <p>“À la suite de mes nombreuses années d’expérience, j’ai conclu que les TPE-PME manquent souvent de budget pour faire leurs transformations digitales. C’est pourquoi, j’ai décidé de créer une société avec des <strong>solutions fiables</strong> qui s’adaptera à tout budget. De plus, je voulais proposer un <strong>service approprié</strong>, et un <strong>accompagnement personnalisé</strong> afin de permettre à tous d’évoluer. ”</p>
                        <img className='LogoLenexAlone1' src="/assets/LogoLenexAlone.png" alt="" />
                    </div>
                </div>

                <div className='about_container3'>
                    <img className='container3_crown' src="/assets/Crown.svg" alt="" />
                    <p className='BackgroundTitle'>Nos pilliers</p>
                    <h2>Nos pilliers</h2>

                    <div className='card_container'>
                        <img className="card_line1" src="/assets/AboutLine2.svg" alt="" />

                        <div className='card_dev'>
                            <p className='card_dev_title'>DE</p>
                            <img src="/assets/IconeDévelopper2.svg" alt="" />
                            <p className='front-text'>Développer</p>
                            <div className='back'>
                                <p>Nous développons  selon vos besoins et à votre rythme, une solution qui vous convient. Notre but est d’atteindre votre satisfaction professionnelle.</p>
                            </div>
                        </div>
                        <div className='card_inno'>
                            {/* <img className="card_inno_crown" src="" alt="" /> */}
                            <p className='card_inno_title'>VI</p>
                            <img src="/assets/IconeInnover.svg" alt="" />
                            <p className='front-text'>Innover</p>
                            <div className='back'>
                                <p>Nous apportons une touche d’innovation à vos projets digitaux pour vous aider à vous démarquer, gagner en visibilité et en notoriété.</p>
                            </div>
                        </div>
                        <div className='card_accompagner'>
                            <p className='card_accompagner_title'>SE</p>
                            <img src="/assets/IconeAccompagner.svg" alt="" />
                            <p className='front-text'>Accompagner</p>
                            <div className='back'>
                                <p>Nous vous accompagnons du début à la fin de votre projet, en vous aidant dans toutes les étapes clés et en vous tenant informé.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className='about_container4'>
                    <img className='container4_crown' src="/assets/Crown.svg" alt="" />
                    <p className='container4_title'>Nos valeurs</p>
                    <div className='first_card_line'>
                        <img className='line_head' src="/assets/AboutLine3.svg" alt="" />
                        <div className='card card_conf'>
                            <div className='card_head'>
                                <img src="/assets/IconeConfianceAbout.svg" alt="" />
                                <h3>Confiance</h3>
                            </div>
                            <p>Nous portons beaucoup d’intérêt à la relation que nous avons avec nos clients. On vous fait confiance, alors pourquoi pas vous aussi !</p>
                        </div>

                        <div className='card card_team'>
                            <div className='card_head'>
                                <img src="/assets/IconeEquipeAbout.svg" alt="" />
                                <h3>Esprit d’équipe</h3>
                            </div>
                            <p>Selon nous, le dynamisme et la bonne entente sont nécessaires ! Notre esprit d’équipe est donc synonyme de travail efficace.</p>
                        </div>
                    </div>

                    <div className='second_card_line'>
                        <img className='line_bottom' src="/assets/AboutLine4.svg" alt="" />
                        <div className='card card_efficacité'>
                            <div className='card_head'>
                                <img src="/assets/IconeEficacitéAbout.svg" alt="" />
                                <h3>Efficacité</h3>
                            </div>
                            <p>Nous avons à coeur d’être performant et productif, pour cela nous optimisons notre organisation et notre temps de travail.</p>
                        </div>

                        <div className='card card_ambition'>
                            <div className='card_head'>
                                <img src="/assets/IconeAmbitionAbout.svg" alt="" />
                                <h3>Ambition</h3>
                            </div>
                            <p> Faire grandir nos clients et mener à bien leurs projets est une de nos ambitions principales. Nous nous développons, et vous avec !</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default About;
