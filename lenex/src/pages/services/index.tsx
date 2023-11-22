"use client"; 
import '../Main.scss'
import './Services.scss';
import Navbar from "../../app/components/Header/Navbar"
import Footer from "../../app/components/Footer/Footer"
import SimpleArrowButton from '../../app/components/Button/SimpleArrowButton/SimpleArrowButton';

import ArrowButton from '../../app/components/Button/ArrowButton/ArrowButton';
import { useEffect } from 'react';

export default function Services() {
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
      <div className='services_header'>
        <Navbar />
        <section className='hidden'>
          <div className='services_header_container hidden'>
            <h1 className='children1 hidden'>Services</h1>
            <img src="/assets/LogoLenexAloneBright.png" alt="" />
          </div>
        </section>
      </div>

      <div className='services_container1'>
        <p className='BackgroundTitle'>Lenex</p>

        <div className='container1_left'>
          <h2>Une solution fiable</h2>
          <p className='container1_right_sentence'>
            Nous concevons, innovons, et accompagnons votre solution digitale.
          </p>
          <p><strong>Lenex</strong> est spécialisée dans le développement, la gestion d’infrastrucure et la cybersécurité. Partant de ces domaines, nous pouvons vous proposer plusieurs solutions comme  :</p>
          <ul>
            <li>Développement et maintenance de votre site Internet</li>
            <li>Mise en place d’une sécurité fiable</li>
            <li>Gestion de votre infrastructure</li>
            <li>Gestion du SEO pour le référencement</li>
          </ul>

          <img src="/assets/LogoLenexAlone.png" className="LogoLenexAlone1" alt="" />
          <div className='arrowbutton_marge'>
            <a href="/contact"><ArrowButton text="Je me lance" /></a>
          </div>
        </div>

        <div className='container1_right'>
          <img className='children1 hidden' src="/assets/Section1Services.png" alt="" />
        </div>
      </div>

      <div className='services_container2'>
        <div className='container2_first'>
          <div className='container2_first_1'>
            <img className="Circle1" src="/assets/ServicesCircle1.png" alt="" />
            <img className="Line1" src="/assets/ServicesLine1.svg" alt="" />
          </div>

          <div className='container2_first_2'>
            <h3>Développement</h3>
            <p className='BackgroundTitle'>Développement</p>
            <p>Notre équipe possède de nombreuses qualités dans le domaine du développement pour vous permettre d’avancer sur votre projet, afin d’augmenter votre visibilité, attirer de nouveaux clients et ainsi développer votre chiffre d’affaires.</p>
            <p> De ce fait, nous vous proposons un large panel de solutions comme la création d’un <strong>site vitrine</strong> ou encore la création d’une <strong>application mobile.</strong>
            </p>
            <div className='container2_SimpleArrowButton'>
              <a href="/services/developpement"><SimpleArrowButton /></a>
            </div>
            <img src="/assets/LogoLenexAlone.png" className="LogoLenexAlone1" alt="" />
          </div>
        </div>

        <div className='container2_second'>
          <div className='container2_second_1'>
            <h3>Gestion des Infrastructure</h3>
            <p className='BackgroundTitle'>Gestion des Infrastructure</p>
            <p>
              L`&apos;`infrastructure d`&apos;`entreprise est le squelette de votre organisation informatique. D`&apos;`elle, dépend le bon fonctionnement de votre parc informatique, ainsi il est primordial de bien penser et paramétrer celle-ci.
            </p>
            <p>
              Lenex est donc là pour assurer un avenir durable, résilient et équitable à votre société.<br></br>
              Par conséquent, nous vous proposons plusieurs solutions comme la <strong>gestion d’un hébergement</strong>, ou encore <strong>l’administration d’un cloud</strong>.
            </p>
            <div className='container2_SimpleArrowButton'>
              <a href="/services/infrastructure"><SimpleArrowButton /></a>
            </div>
            <img src="/assets/LogoLenexAlone.png" className="LogoLenexAlone1" alt="" />
          </div>

          <div className='container2_second_2'>
            <img className="Circle2" src="/assets/ServicesCircle2.png" alt="" />
            <img className='Line2' src="/assets/ServicesLine2.svg" alt="" />
          </div>
        </div>

        <div className='container2_third'>
          <div className='container2_third_1'>
            <img className="Circle3" src="/assets/ServicesCircle3.png" alt="" />
            <img className="Line3" src="/assets/ServicesLine1.svg" alt="" />
          </div>

          <div className='container2_third_2'>
            <h3>Cybersécurité</h3>
            <p className='BackgroundTitle'>Cybersécurité</p>
            <p><strong>Lenex</strong> possède également un pôle de sécurité web avec un personnel qualifié. Ainsi, nous pouvons vous aider à assurer une gestion de votre data dans des conditions optimales et sécurisées.</p>
            <p>
              De ce fait, nous vous proposons divers solutions comme de la <strong>sécurité opérationnelle</strong>, ou encore de <strong>l’audit</strong>.
            </p>
            <div className='container2_SimpleArrowButton'>
              <a href="/services/securite"><SimpleArrowButton /></a>
            </div>
            <img src="/assets/LogoLenexAlone.png" className="LogoLenexAlone1" alt="" />
          </div>
        </div>
      </div >

      <Footer />
    </>
  );
}

