import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
  });

  const formEndpoint = "https://formspree.io/f/mrgnbejj";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormStatus({ submitted: false, success: false, error: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitted: true, success: true, error: false });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({ submitted: true, success: false, error: true });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({ submitted: true, success: false, error: true });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Get in Touch!</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="link-button">
          Send Message
        </button>
      </form>
      <div className="d-flex w-100 mt-4">
        {formStatus.submitted && formStatus.success && (
          <p className="glassy-text shadow-lg">Message sent successfully!</p>
        )}
        {formStatus.submitted && formStatus.error && (
          <p className="glassy-text shadow-lg">
            Error sending message. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
