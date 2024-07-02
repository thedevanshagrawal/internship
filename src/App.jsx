import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import CreatePapers from "./components/CreatePapers/CreatePapers";
import CreateUploadModifyQuestions from "./components/CreateUploadModifyQuestions/CreateUploadModifyQuestions";
import Footer from "./components/Footer/Footer";
import ModifyDeleteStudents from "./components/ModifyDeleteStudents/ModifyDeleteStudents";
import RegisterStudents from "./components/RegisterStudents/RegisterStudents";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register-students" element={<RegisterStudents />} />
            <Route
              path="/modify-delete-students"
              element={<ModifyDeleteStudents />}
            />
            <Route
              path="/create-upload-modify-questions"
              element={<CreateUploadModifyQuestions />}
            />
            <Route path="/create-papers" element={<CreatePapers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
