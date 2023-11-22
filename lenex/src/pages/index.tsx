"use client"; 
import './Home.scss';
import './Main.scss'
import Navbar from "../app/components/Header/Navbar"
import Footer from "../app/components/Footer/Footer"

import ArrowButton from '../app/components/Button/ArrowButton/ArrowButton';
import SimpleWhiteButton from '../app/components/Button/SimpleWhiteButton/SimpleWhiteButton';
import { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  useEffect(() => {
    document.title = 'Lenex Home';
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
      <div className='home_header'>
        <Navbar />

        <section className='hidden'>
          <div className='home_header_container hidden'>
            <h1 className='children1 hidden'>Lenex</h1>
            <p className='children1 hidden'>Développer • Innover • Accompagner</p>
            <p className='children1 hidden'>Accompagnement digital / Solution digitale</p>
          </div>
        </section>
      </div>

      {/* container 1 = section 1 / container 2 = section 2 ... */}
      <div className='home_container1 '>
        <p className='BackgroundTitle'>Lenex</p>
        <div className='container1_left '>
          <img className='children1 hidden' src="/assets/Section1Home.png" alt="" />
        </div>

        <div className='container1_right'>
          <h2>Une société à vos côtés<br></br>Tout le long de votre projet</h2>
          <p>Lenex vous suivra de la conception de votre projet,
            jusqu’à sa mise en production en passant par <strong>le développement,
              la gestion des infrastrucutres et la sécurité.</strong> Nous vous offrons un accompagnement complet et personnalisé.
          </p>
          <p>Notre entreprise propose une large gamme de services, avec des solutions adaptées à votre budget.
            Nous souhaitons mettre un point d’honneur sur la qualité de nos prestations avec votre satisfaction professionelle à la clé.
          </p>
          <p className='container1_right_sentence'>
            “Imaginons ensemble votre projet digital, avec notre équipe au service de votre solution. ”
          </p>
          <img src="/assets/LogoLenexAlone.png" className="LogoLenexAlone1" alt="" />
          <a href="/about"><ArrowButton text="Nous découvrir" /></a>
        </div>
      </div>

      <div className='home_container4 '>
        <p className='BackgroundTitle'>Notre centre d’activité</p>
        <h2>Notre centre d’activité</h2>
        <Swiper
          modules={[Navigation, Scrollbar, Pagination]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          initialSlide={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><a href="/contact"><img src="/assets/SliderPhoneLeft.png" alt="" /></a></SwiperSlide>
          <SwiperSlide><a href="/contact"><img src="/assets/SliderPc.png" alt="" /></a></SwiperSlide>
          <SwiperSlide className="last_phone"><a href="/contact"><img src="/assets/SliderPhoneRight.png" alt="" /></a></SwiperSlide>
        </Swiper>
      </div>


      <div className='home_container2 '>
        <p className='BackgroundTitle'>Nos services</p>
        <h2>Nos services</h2>
        <div className='container_of_container'>
          <div className='container2_left'>

            <div className='card_container' onClick={() => ""}>

              <div className='card card_dev' onClick={() => ""}>
                <div className='front'>
                  <img className='card_icone' src="/assets/IconDévelopper.png" alt="" />
                  <p>Développer</p>
                </div>
                <div className='back'>
                  <div className='back_card_head'>
                    <img className='card_icone' src="/assets/IconDévelopper.png" alt="" />
                    <p>Développer</p>
                  </div>
                  <div className='back_card_mid'>
                    <p><span className='text_blue_card'>{'>>'}</span> Site Web</p>
                    <p><span className='text_blue_card'>{'>>'}</span> Application mobile</p>
                    <p><span className='text_blue_card'>{'>>'}</span> Plugin</p>
                    <p><span className='text_blue_card'>{'>>'}</span> SEO</p>
                    <p><span className='text_blue_card'>{'>>'}</span> API</p>
                  </div>
                </div>
              </div>

              <div className='card card_securite' onClick={() => ""}>
                <div className='front'>
                  <img className='card_icone' src="/assets/IconeSécurité.png" alt="" />
                  <p>Sécuriser</p>
                </div>
                <div className='back'>
                  <div className='back_card_head'>
                    <img className='card_icone' src="/assets/IconeSécurité.png" alt="" />
                    <p>Sécuriser</p>
                  </div>
                  <div className='back_card_mid'>
                    <p><span className='text_blue_card'>{'>>'}</span> Audit</p>
                    <p><span className='text_blue_card'>{'>>'}</span> Osint</p>
                    <p><span className='text_blue_card'>{'>>'}</span> Sécurité  opérationnelle</p>
                    <p><span className='text_blue_card'>{'>>'}</span> PCI /  DSS</p>
                  </div>
                </div>
              </div>

              <div className='card card_infrastructure' onClick={() => ""}>
                <div className='front'>
                  <img className='card_icone' src="/assets/IconeInfra.png" alt="" />
                  <p>Infrastructure</p>
                </div>
                <div className='back'>
                  <div className='back_card_head'>
                    <img className='card_icone' src="/assets/IconeInfra.png" alt="" />
                    <p>Infrastructure</p>
                  </div>
                  <div className='back_card_mid'>
                    <p><span className='text_blue_card'>{'>>'}</span> Étude de coût</p>
                    <p><span className='text_blue_card'>{'>>'}</span> Administration Cloud</p>
                    <p><span className='text_blue_card'>{'>>'}</span> Hébergement</p>
                    <p><span className='text_blue_card'>{'>>'}</span> Automatisation</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='container2_right'>
            <img className='container2_right_main' src="/assets/Section2Home.png" alt="" />
            <div className='home_button_container'>
              <a href="/services"><ArrowButton text="En savoir plus" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='home_container3'>
        <h2>Vous avez un projet pour votre société ?</h2>

        <div className='home_white_button'>
          <a href="/contact"><SimpleWhiteButton text="Contactez-nous" /></a>

        </div>
      </div>
      <Footer />
    </>
  );
}