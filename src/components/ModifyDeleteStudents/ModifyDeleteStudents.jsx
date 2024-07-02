import React, { useState } from "react";
import "./ModifyDeleteStudents.css";

const ModifyDeleteStudents = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editableStudent, setEditableStudent] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (student) => {
    setEditableStudent(student);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableStudent({ ...editableStudent, [name]: value });
  };

  const handleUpdate = () => {
    setStudents(
      students.map((student) =>
        student.id === editableStudent.id ? editableStudent : student
      )
    );
    setEditableStudent(null);
  };

  return (
    <section className="modify-delete-students">
      <h2>Modify/Delete Students</h2>
      <input
        type="text"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="student-list">
        {students
          .filter(
            (student) =>
              student.name.includes(searchTerm) || student.id.includes(searchTerm)
          )
          .map((student) => (
            <div className="student-item" key={student.id}>
              {editableStudent && editableStudent.id === student.id ? (
                <div className="editable-student">
                  <input
                    type="text"
                    name="name"
                    value={editableStudent.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="id"
                    value={editableStudent.id}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="course"
                    value={editableStudent.course}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    value={editableStudent.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="contact"
                    value={editableStudent.contact}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <button onClick={handleUpdate} className="form-button">Update</button>
                </div>
              ) : (
                <div className="student-details">
                  <p>{student.name}</p>
                  <p>{student.id}</p>
                  <p>{student.course}</p>
                  <p>{student.email}</p>
                  <p>{student.contact}</p>
                  <button onClick={() => handleEdit(student)} className="form-button">Edit</button>
                  <button onClick={() => handleDelete(student.id)} className="form-button">Delete</button>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default ModifyDeleteStudents;
