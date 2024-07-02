import React, { useState } from "react";
import "./CreatePapers.css";

const CreatePapers = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [questions] = useState([
    // This should be fetched from your questions data
    { id: 1, subject: "Math", text: "What is 2+2?" },
    { id: 2, subject: "Science", text: "What is H2O?" }
  ]);

  const handleSelect = (question) => {
    setSelectedQuestions([...selectedQuestions, question]);
  };

  const handleRemove = (id) => {
    setSelectedQuestions(selectedQuestions.filter((q) => q.id !== id));
  };

  const handleSave = () => {
    // Handle save logic (e.g., save to a file or database)
    console.log("Paper saved with questions:", selectedQuestions);
  };

  return (
    <section className="create-papers">
      <h2>Create Papers</h2>
      <div className="question-bank">
        <h3>Question Bank</h3>
        {questions.map((question) => (
          <div className="question-item" key={question.id}>
            <p>Subject: {question.subject}</p>
            <p>Question: {question.text}</p>
            <button onClick={() => handleSelect(question)} className="form-button">Select</button>
          </div>
        ))}
      </div>
      <div className="selected-questions">
        <h3>Selected Questions</h3>
        {selectedQuestions.map((question) => (
          <div className="question-item" key={question.id}>
            <p>Subject: {question.subject}</p>
            <p>Question: {question.text}</p>
            <button onClick={() => handleRemove(question.id)} className="form-button">Remove</button>
          </div>
        ))}
      </div>
      <button onClick={handleSave} className="form-button">Save Paper</button>
    </section>
  );
};

export default CreatePapers;
