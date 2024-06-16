import React, { useState } from 'react';
import "./Contactform.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Simple validation
    switch (name) {
      case 'name':
        setErrors({ ...errors, name: value ? '' : 'Name is required' });
        break;
      case 'email':
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setErrors({ ...errors, email: emailValid ? '' : 'Invalid email address' });
        break;
      case 'message':
        setErrors({ ...errors, message: value ? '' : 'Message is required' });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic, e.g., send data to an API
    alert('Form submitted successfully!');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <button type="submit" disabled={Object.values(errors).some(error => error)}>Submit</button>
    </form>
  );
};

export default ContactForm;

