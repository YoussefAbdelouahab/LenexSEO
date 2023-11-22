import "./NavbarBlack.scss"
import { useEffect, useState } from "react";

export default function Navbar() {
    const [burgerstate, setBurgerstate] = useState(false);
    async function showBurger() {
        setBurgerstate(true);
        console.log(burgerstate)
    }
    async function closeBurger() {
        setBurgerstate(false);
        console.log(burgerstate)
    }

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar != null) {
                console.log(window.scrollY);
                if (window.scrollY > 971) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        })
    }, []);

    return (
        <>
            <div className="navbarBlack">
                <div className="nav_left">
                    <img src="/assets/LogoLenex.png" alt="" />
                </div>
                <div className="nav_right">
                    <ul className="nav_list">
                        <li><a href="/">Accueil</a></li>
                        <li className="dropdown_li">
                            <a className="services_a" href="/services">Services</a>
                            <img className="down_arrow" src="/assets/down_arrow.svg" alt="" />
                            <ul className="dropdown_menu">
                                <li><a href="/services/developpement">Développement</a></li>
                                <li><a href="/services/infrastructure">Infrastructure</a></li>
                                <li><a href="/services/securite">Sécurité</a></li>
                            </ul>
                        </li>
                        <li><a href="/about">À propos</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="nav_right_responsive">
                    <button onClick={() => showBurger()}><img src="/assets/burger-bar.png" alt="" /></button>
                    <div className="burgerMenu hidden" style={{ transform: burgerstate ? 'translateX(0)' : ' translateX(-200%)' }}>
                        <img onClick={() => closeBurger()} className="icone_close" src="/assets/IconeClose.png" alt="" />
                        <a href="/">Accueil</a>
                        <a href="/services" className="burger_services">Services</a>
                        <div className="burger_dropdown">
                            <ul>
                                <li>
                                    <a href="/services/developpement">Développement</a>
                                    <a href="/services/infrastructure">Infrastructure</a>
                                    <a href="/services/securite">Sécurité</a>
                                </li>
                            </ul>
                        </div>
                        <a href="/about">À propos</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </>
    );
}