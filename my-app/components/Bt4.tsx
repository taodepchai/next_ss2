"use client";

import React, { useState } from "react";
import styles from "./FormLogin.module.css";

const FormLogin: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    skills: {
      html: false,
      javascript: false,
      uxDesign: false,
      reactJs: false,
      css: false,
      java: false,
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        skills: { ...formData.skills, [name]: checked },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Form Sign up</h1>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
        />
      </label>
      <label className={styles.label}>
        Phone number
        <input
          type="tel"
          name="phone"
          className={styles.input}
          value={formData.phone}
          onChange={handleChange}
          placeholder="+84 (123) 456-789"
        />
      </label>
      <label className={styles.label}>
        Address
        <textarea
          name="address"
          className={styles.input}
          value={formData.address}
          onChange={handleChange}
          placeholder="Tell us a little about the project..."
        />
      </label>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Skills</legend>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="html"
            checked={formData.skills.html}
            onChange={handleChange}
          />
          HTML
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="javascript"
            checked={formData.skills.javascript}
            onChange={handleChange}
          />
          JavaScript
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="uxDesign"
            checked={formData.skills.uxDesign}
            onChange={handleChange}
          />
          UX design
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="reactJs"
            checked={formData.skills.reactJs}
            onChange={handleChange}
          />
          ReactJS
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="css"
            checked={formData.skills.css}
            onChange={handleChange}
          />
          CSS
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="java"
            checked={formData.skills.java}
            onChange={handleChange}
          />
          Java
        </label>
      </fieldset>
      <button type="submit" className={styles.button}>
        Sign up
      </button>
    </form>
  );
};

export default FormLogin;
