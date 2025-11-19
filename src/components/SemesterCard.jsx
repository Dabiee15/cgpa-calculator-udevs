// FILE: src/components/SemesterCard.jsx

import { useState } from 'react';
import CourseForm from './CourseForm';
import CourseTable from './CourseTable';
import { calculateSemesterGPA } from '../utils/gpa';

const SemesterCard = ({ semesterNumber, onDeleteSemester }) => {
  const [courses, setCourses] = useState([]);

  // Add a new course to this semester
  const handleAddCourse = (course) => {
    setCourses([...courses, course]);
  };

  // Delete a course from this semester
  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  // Calculate GPA for this semester
  const semesterGPA = calculateSemesterGPA(courses);

  // Calculate total units
  const totalUnits = courses.reduce((sum, course) => sum + course.unit, 0);

  return (
    <div className="semester-card">
      <div className="semester-header">
        <h2>Semester {semesterNumber}</h2>
        <button
          className="btn-delete-semester"
          onClick={onDeleteSemester}
          title="Delete semester"
        >
          Delete Semester
        </button>
      </div>

      <CourseForm onAddCourse={handleAddCourse} />

      <CourseTable courses={courses} onDeleteCourse={handleDeleteCourse} />

      <div className="semester-summary">
        <div className="summary-item">
          <strong>Total Units:</strong> {totalUnits}
        </div>
        <div className="summary-item">
          <strong>Semester GPA:</strong> {semesterGPA.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default SemesterCard;