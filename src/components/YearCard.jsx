// FILE: src/components/YearCard.jsx

import { useState } from 'react';
import SemesterCard from './SemesterCard';
import { calculateCGPA } from '../utils/gpa';

const YearCard = ({ yearNumber, onDeleteYear }) => {
  const [semesters, setSemesters] = useState([
    { id: 1, number: 1, courses: [] }
  ]);

  // Add a new semester to this year
  const handleAddSemester = () => {
    const newSemesterNumber = semesters.length + 1;
    const newSemester = {
      id: Date.now(),
      number: newSemesterNumber,
      courses: []
    };
    setSemesters([...semesters, newSemester]);
  };

  // Delete a semester from this year
  const handleDeleteSemester = (semesterId) => {
    if (semesters.length === 1) {
      alert('You must have at least one semester per year');
      return;
    }
    setSemesters(semesters.filter((semester) => semester.id !== semesterId));
  };

  // Get all courses from all semesters for CGPA calculation
  const getAllSemesters = () => {
    return semesters.map((semester) => ({
      courses: semester.courses || []
    }));
  };

  // Calculate year CGPA
  const yearCGPA = calculateCGPA(getAllSemesters());

  return (
    <div className="year-card">
      <div className="year-header">
        <h1>Year {yearNumber}</h1>
        <button
          className="btn-delete-year"
          onClick={onDeleteYear}
          title="Delete year"
        >
          Delete Year
        </button>
      </div>

      <div className="year-cgpa">
        <strong>Year CGPA:</strong> {yearCGPA.toFixed(2)}
      </div>

      <div className="semesters-container">
        {semesters.map((semester, index) => (
          <SemesterCard
            key={semester.id}
            semesterNumber={semester.number}
            onDeleteSemester={() => handleDeleteSemester(semester.id)}
          />
        ))}
      </div>

      <button className="btn-add-semester" onClick={handleAddSemester}>
        + Add Semester
      </button>
    </div>
  );
};

export default YearCard;