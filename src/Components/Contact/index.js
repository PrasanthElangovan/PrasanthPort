import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./index.css"
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f715mco', 'template_q3xjjrm', form.current, {
        publicKey: 'u4rpK7OPwdRuQjSvi',
      })
      e.target.reset();
  };
    return (
        <section data-aos="fade-up" data-aos-duration="2000" className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">

                        <div className="contact__card contact__card_bg1">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">prasanthe008@gmail.com</span>

                            <a href="mailto:prasanthe008@gmail.com" className="contact__button">Write me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card contact__card_bg2">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+91- 8220444922</span>

                            <a href="" className="contact__button">Write me{" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>



                <div className="contact__content">
                    <h3 className="contact__title">Fill Your thoughts</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your Name" />

                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" />
                            
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Description</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="write here"></textarea> 
                        </div>
                        <button className="button button--flex">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
);
};

export default Contact