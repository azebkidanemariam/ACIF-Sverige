import React, { useState } from "react";
import { Toast, Form, Button } from "react-bootstrap";
import { BsFillEnvelopeFill, BsPersonFill } from "react-icons/bs";

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
    <div className="container mt-5">
      <div className="contact-form shadow-lg p-5 bg-light rounded">
        <h1 className="text-center mb-4" style={{ color: "#146356" }}>
          Get in Touch!
        </h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              <BsPersonFill className="icon" style={{ color: "#146356" }} />{" "}
              Your Name
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <BsFillEnvelopeFill
                className="icon"
                style={{ color: "#146356" }}
              />{" "}
              Your Email
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            variant="link-button w-100 mt-4"
            type="submit"
            style={{ backgroundColor: "#146356", color: "#fff" }}
          >
            Send Message
          </Button>
        </Form>

        <div className="mt-4 text-center">
          <Toast
            show={formStatus.submitted && formStatus.success}
            onClose={() => setFormStatus({ ...formStatus, success: false })}
            className="glassy-toast success"
          >
            <Toast.Body>Message sent successfully!</Toast.Body>
          </Toast>
          <Toast
            show={formStatus.submitted && formStatus.error}
            onClose={() => setFormStatus({ ...formStatus, error: false })}
            className="glassy-toast error"
          >
            <Toast.Body>
              Error sending message. Please try again later.
            </Toast.Body>
          </Toast>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
