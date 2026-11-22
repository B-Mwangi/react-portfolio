import { useState } from "react";
import { profile } from "../data/profile";
import { validateForm } from "../utils/validateForm";
import "./ContactForm.css";

const emptyForm = { name: "", email: "", subject: "", message: "" };

function ContactForm() {
  const [values, setValues] = useState(emptyForm); // what the visitor has typed
  const [errors, setErrors] = useState({}); // error message for each field
  const [touched, setTouched] = useState({}); // fields the visitor has left
  const [submitted, setSubmitted] = useState(false);

  // Updates one field as the visitor types, and re-checks it
  // if they have already left it once
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    if (touched[name]) {
      setErrors(validateForm(newValues));
    }
  };

  // Checks a field when the visitor clicks or tabs out of it
  const handleBlur = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
    setErrors(validateForm(values));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the browser reloading the page

    const formErrors = validateForm(values);
    setErrors(formErrors);
    setTouched({ name: true, email: true, message: true });

    // Stop here if anything is wrong; the messages under the fields explain what
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    // There is no server, so the message is sent through the visitor's
    // own email app, already filled in
    const subject = values.subject.trim() || `Portfolio enquiry from ${values.name}`;
    const body = `${values.message}\n\nFrom: ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setValues(emptyForm);
    setTouched({});
  };

  // Only show an error once the visitor has left that field (or pressed Send)
  const showError = (field) => touched[field] && errors[field];

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <h3>Thank you!</h3>
        <p>
          Your email app should have opened with your message ready to send. If it
          didn't, you can email me directly at <strong>{profile.email}</strong>.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setSubmitted(false)}>
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError("name"))}
          aria-describedby="name-error"
          className={showError("name") ? "invalid" : ""}
        />
        <p id="name-error" className="field-error">
          {showError("name")}
        </p>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError("email"))}
          aria-describedby="email-error"
          className={showError("email") ? "invalid" : ""}
        />
        <p id="email-error" className="field-error">
          {showError("email")}
        </p>
      </div>

      <div className="form-field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(showError("message"))}
          aria-describedby="message-error"
          className={showError("message") ? "invalid" : ""}
        />
        <p id="message-error" className="field-error">
          {showError("message")}
        </p>
      </div>

      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
