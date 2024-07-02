import React, { useState } from "react";
import "./CreateUploadModifyQuestions.css";

const CreateUploadModifyQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ subject: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  const handleCreate = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ subject: "", text: "" });
  };

  const handleUpload = (e) => {
    // Handle file upload logic
  };

  const handleEdit = (index) => {
    setNewQuestion(questions[index]);
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <section className="create-upload-modify-questions">
      <h2>Create/Upload/Modify Questions</h2>
      <div className="create-question">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={newQuestion.subject}
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          name="text"
          placeholder="Subject code"
          value={newQuestion.text}
          onChange={handleChange}
          className="form-textarea"
        />
        <button onClick={handleCreate} className="form-button">
          Create Question
        </button>
      </div>
      <div className="upload-questions">
        <input type="file" onChange={handleUpload} className="form-input" />
        <button className="form-button">Upload Questions</button>
      </div>
      <div className="question-list">
        {questions.map((question, index) => (
          <div className="question-item" key={index}>
            <p>Subject: {question.subject}</p>
            <p>Subject Code: {question.text}</p>
            <button onClick={() => handleEdit(index)} className="form-button editBtn">
              Edit
            </button>
            <button onClick={() => handleDelete(index)} className="form-button deletBtn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreateUploadModifyQuestions;
