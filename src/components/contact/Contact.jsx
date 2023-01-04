import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");

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
    <div className="contact_container" id="contact">
      <div>
        Contact Form
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-6">
              <label className="form-label" htmlFor="name" name="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="name"
                required
              />
            </div>
            <div className="col-6">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              required
            />
          </div>
          <button className="btn btn-success col-2" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
