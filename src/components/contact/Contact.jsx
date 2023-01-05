import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  // const [formStatus, setFormStatus] = useState("Send");

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setFormStatus("Submitting...");
  //   const { name, email, message } = e.target.elements;
  //   let conForm = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   console.log(conForm);
  // };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gju68ss",
        "template_f3gzata",
        form.current,
        "5GwZGGohrPXzi2ED0"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <section className="text-zone">
          <h2> Contact Me </h2>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <div className="cols">
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                </div>

                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
