import './Contact.scss';
import './Main.scss'
import NavbarBlack from "../app/components/Header/NavbarBlack"
import Footer from "../app/components/Footer/Footer"
import ContactPlane from "../../assets/ContactPlane.svg"
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

function Contact() {
  const form = useRef(null);

  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: ""
  })

  async function sendContact(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    emailjs.sendForm('service_rfy6oko', 'template_ans4iuj', form.current!, 'FypTfWVDEuz4iPR4H')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
        window.location.reload();
      }, (error) => {
        console.log(error.text);
      });
  }

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
      <div className='ContactPage'>
        <NavbarBlack />
        <div className='contact_container'>
          <div className='container_left'>
            <h1>Commençons votre projet !<br></br>N’hésitez plus !</h1>
            <hr />
            <div className='contact_card_container'>
              <div className='card card_mail'>
                <div className='card_head'>
                  <p>Email</p>
                  <img src="/assets/IconeEmail.svg" alt="" />
                </div>
                <div className='card_body'>
                  <p>gestion@lenex.com</p>
                </div>
              </div>
              <div className='card card_phone'>
                <div className='card_head'>
                  <p>Téléphone</p>
                  <img className="IconePhone" src="/assets/IconePhone.svg" alt="" />
                </div>
                <div className='card_body'>
                  <p>01 . 64 . 72 . 02 . 66</p>
                </div>
              </div>
              <div className='card card_address'>
                <div className='card_head'>
                  <p>Adresse</p>
                  <img className="IconeAddress" src="/assets/IconeAddress.svg" alt="" />
                </div>
                <div className='card_body'>
                  <p>1 rue Emile Cohl, 77200 Torcy</p>
                </div>
              </div>
            </div>
          </div>

          <div className='container_right'>
            <img className='container_right_crown' src="/assets/Crown.svg" alt="" />
            <h2>Contact</h2>
            <div className='form_container'>
              <form ref={form} onSubmit={(e) => sendContact}>
                <input type="text" placeholder="Nom" className='Nom' name="lastname" value={data.nom}
                  onChange={e => setData({ ...data, nom: e.target.value })} required />
                <input type="text" placeholder="Prénom" className='Prénom' name="firstname" value={data.prenom}
                  onChange={e => setData({ ...data, prenom: e.target.value })} required />
                <input type="text" placeholder="Email" className='Email' name="email" value={data.email}
                  onChange={e => setData({ ...data, email: e.target.value })} required />
                <input type="text" placeholder="Téléphone" className='Téléphone' name="phone" value={data.telephone}
                  onChange={e => setData({ ...data, telephone: e.target.value })} required />
                <textarea className='area' placeholder='Écrivez votre message...' name="message" cols={43} rows={10} value={data.message}
                  onChange={e => setData({ ...data, message: e.target.value })} required />
                <button className='submit_button' type='submit'>Contactez-nous</button>
                <img className="ContactPlane" src="/assets/ContactPlane.svg" alt="" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
