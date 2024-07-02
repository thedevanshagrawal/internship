import React, { useState } from "react";
import "./RegisterStudents.css";

const RegisterStudents = () => {
  const [student, setStudent] = useState({
    name: "",
    id: "",
    course: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Student registered:", student);
    setStudent({ name: "", id: "", course: "", email: "", contact: "" });
  };

  return (
    <section className="register-students">
      <h2>Register Students</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="id"
          placeholder="Student ID"
          value={student.id}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="course"
          placeholder="Course/Program"
          value={student.course}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={student.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={student.contact}
          onChange={handleChange}
          required
          className="form-input"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegisterStudents;
