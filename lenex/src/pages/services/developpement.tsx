"use client"; 
import '../Main.scss'
import './Developpement.scss';
import Navbar from "../../app/components/Header/Navbar"
import Footer from "../../app/components/Footer/Footer"
import SimpleBlueButton from '../../app/components/Button/SimpleBlueButton/SimpleBlueButton';

import { useEffect } from 'react';

export default function Developpement() {

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
      <div className='dev_header'>
        <Navbar />
        <section className=''>
          <div className='dev_header_container '>
            <h1 className='children1 '>Développement</h1>
            <img src="/assets/LogoLenexAloneBright.png" alt="" />
          </div>
        </section>
      </div>
      <div className='main_container1'>
        <img className="dev_line1" src="/assets/DevLine1.svg" alt="" />
        <img className="dev_line2" src="/assets/DevLine2.svg" alt="" />
        <img className="dev_line3" src="/assets/DevLine3.svg" alt="" />
        <img className="dev_line4" src="/assets/DevLine4.svg" alt="" />
        <img className="dev_logoline1" src="/assets/LogoLenexAloneBright.png" alt="" />
        <img className="dev_logoline2" src="/assets/LogoLenexAloneBright.png" alt="" />
        <ul className='little_nav'>
          <li><a href="/services">Services</a></li>
          <li><a href="/services/developpement">Développement</a></li>
          <li><a href="/services/infrastructure">Infrastructure</a></li>
          <li><a href="/services/securite">Sécurité</a></li>
        </ul>

        <div className='dev_container'>
          <div className='dev_container_left'>
            <div className='first_circle circle'>
              <div className='first_circle_white circle_white'>
                <img src="/assets/IconeCircle1.svg" alt="" />
                <h2>Site Web</h2>
                <p>Si vous souhaitez un <strong>site web professionnel, personnalisé et abordable,</strong> Lenex vous propose ses services. Nous étudions vos problématiques et réalisons un site<strong> adapté à vos besoins.</strong></p>
              </div>
            </div>

            <h3>Démarquez-vous grâce à nos solutions !</h3>

            <div className='third_circle circle'>
              <div className='third_circle_white circle_white'>
                <img src="/assets/IconeCircle3.svg" alt="" />
                <h2>Plugin</h2>
                <p>Si vous avez déjà un site web ou une application mobille, et que <strong>vous souhaitez les améliorer</strong>, afin de les rendre <strong>plus performants et personnalisés,</strong> vous pouvez passer par Lenex pour créer un plugin.</p>
              </div>
            </div>
            <img className='dev_crown2' src="/assets/Crown.svg" alt="" />
            <div className='fifth_circle circle'>
              <div className='fifth_circle_white circle_white'>
                <img src="/assets/IconeCircle5.svg" alt="" />
                <h2>API</h2>
                <p>La société d’accompagnement digital Lenex met à votre disposition son équipe pour la création et l’intégration d’API à vos Infrastructure.
                  Cela permettra de <strong>réceptionner et d’utiliser des données extérieures. </strong></p>
              </div>
            </div>

          </div>

          <div className='dev_container_right'>
            <h3>Nos développeurs sont là pour vous !</h3>
            <img className='dev_crown1' src="/assets/Crown.svg" alt="" />

            <div className='second_circle circle'>
              <div className='second_circle_white circle_white'>
                <img src="/assets/IconeCircle2.svg" alt="" />
                <h2>Application mobile</h2>
                <p>Experts en application mobile et web, nous réalisons <strong>des solutions sur mesure</strong> centrées sur vos envies.
                  Nos applications sont accessibles sur toutes les plateformes que ce soit sur <strong>IOS</strong> ou <strong>Android.</strong></p>
              </div>
            </div>

            <h3 className='web_project'>Vous avez un projet web ? </h3>

            <div className='fourth_circle circle'>
              <div className='fourth_cirle_white circle_white'>
                <img src="/assets/IconeCircle4.svg" alt="" />
                <h2>SEO</h2>
                <p>Afin <strong>d’augmenter le référencement</strong> de vos sites web, il faut suivre des normes précises. Grâce à l’aide de nos experts, nous pouvons vous aider à <strong>améliorer votre visibilité sur Internet,</strong> et par conséquent <strong>générer plus de trafic sur vos pages.</strong></p>
              </div>
            </div>

            <div className='last_button'>
              <h3>Laissez-vous tenter !</h3>
              <img className='dev_crown3' src="/assets/Crown.svg" alt="" />
              <a href="/contact"><SimpleBlueButton text="Je créé mon projet" /></a>
            </div>

          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}
