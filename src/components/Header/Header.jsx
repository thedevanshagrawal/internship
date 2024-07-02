import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Exam Portal</div>
      <nav className="nav">
        <Link to="/">Login</Link>
        <Link to="/register-students">Register Students</Link>
        <Link to="/modify-delete-students">Modify/Delete Students</Link>
        <Link to="/create-upload-modify-questions">Create/Upload/Modify Questions</Link>
        <Link to="/create-papers">Create Papers</Link>
      </nav>
    </header>
  );
};

export default Header;
