import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Don't forget to import the CSS

const countries = {
  India: ["Jaipur", "Delhi", "Mumbai"],
  USA: ["New York", "San Francisco", "Chicago"],
};

function Form() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    phoneCode: "+91",
    phoneNumber: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.firstName) errs.firstName = "First name is required";
    if (!form.lastName) errs.lastName = "Last name is required";
    if (!form.username) errs.username = "Username is required";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.password) errs.password = "Password is required";
    if (!form.phoneNumber || !/^\d{10}$/.test(form.phoneNumber))
      errs.phoneNumber = "Valid 10-digit number is required";
    if (!form.country) errs.country = "Country is required";
    if (!form.city) errs.city = "City is required";
    if (!form.pan || !/^\w{10}$/.test(form.pan)) errs.pan = "Valid PAN (10 chars) required";
    if (!form.aadhar || !/^\d{12}$/.test(form.aadhar))
      errs.aadhar = "Valid 12-digit Aadhar number is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/details", { state: form });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      {["firstName", "lastName", "username", "email"].map((key) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            type={key === "email" ? "email" : "text"}
            name={key}
            value={form[key]}
            onChange={handleChange}
          />
          {errors[key] && <p className="error">{errors[key]}</p>}
        </div>
      ))}

      <div>
        <label>Password</label>
        <input
          name="password"
          type={form.showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
        />
        <label className="inline">
          <input
            type="checkbox"
            name="showPassword"
            checked={form.showPassword}
            onChange={handleChange}
          />
          Show Password
        </label>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div>
        <label>Phone No.</label>
        <div className="phone-inputs">
          <input
            name="phoneCode"
            value={form.phoneCode}
            onChange={handleChange}
            type="text"
          />
          <input
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            type="text"
          />
        </div>
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>

      <div>
        <label>Country</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          {Object.keys(countries).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.country && <p className="error">{errors.country}</p>}
      </div>

      <div>
        <label>City</label>
        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          disabled={!form.country}
        >
          <option value="">Select City</option>
          {(countries[form.country] || []).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.city && <p className="error">{errors.city}</p>}
      </div>

      {["pan", "aadhar"].map((key) => (
        <div key={key}>
          <label>{key.toUpperCase()}</label>
          <input
            name={key}
            value={form[key]}
            onChange={handleChange}
            type="text"
          />
          {errors[key] && <p className="error">{errors[key]}</p>}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
