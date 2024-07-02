import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
   
      <div className="dashboard">
        <div className="student-info">
          <div className="info-section">
            <p>Enrollment ID:</p>
            <p>Name:</p>
            <p>Course:</p>
            <p>Batch:</p>
            <p>Year:</p>
          </div>
          <div className="image-section">
            <img
              src="/examstudio.png"
              alt="Student Image"
              className="student-image"
            />
          </div>
        </div>
        <div className="current-semester">
          <h2>Current Semester</h2>
          <table>
            <tr>
              <th>Name of Subject</th>
              <th>Marks obtained if attended, if not then show N/A</th>
            </tr>
            <tr>
              <td>maths</td>
              <td>maths</td>
            </tr>
            <tr>
              <td>maths</td>
              <td>maths</td>
            </tr>
            <tr>
              <td>maths</td>
              <td>maths</td>
            </tr>
            <tr>
              <td>maths</td>
              <td>maths</td>
            </tr>
            <tr>
              <td>maths</td>
              <td>maths</td>
            </tr>
            <tr>
              <td>maths</td>
              <td>maths</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
