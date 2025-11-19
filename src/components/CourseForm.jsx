// FILE: src/components/CourseForm.jsx

import { useState } from 'react';
import { getGradeOptions } from '../utils/gpa';

const CourseForm = ({ onAddCourse }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [unit, setUnit] = useState('');
  const [grade, setGrade] = useState('A');

  const grades = getGradeOptions();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!courseTitle.trim()) {
      alert('Please enter a course title');
      return;
    }

    if (!unit || parseFloat(unit) <= 0) {
      alert('Please enter a valid unit/credit');
      return;
    }

    // Create course object
    const newCourse = {
      id: Date.now(), // Simple unique ID
      title: courseTitle.trim(),
      unit: parseFloat(unit),
      grade: grade,
    };

    // Pass course to parent component
    onAddCourse(newCourse);

    // Reset form
    setCourseTitle('');
    setUnit('');
    setGrade('A');
  };

  return (
    <div className="course-form">
      <h3>Add Course</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseTitle">Course Title:</label>
          <input
            type="text"
            id="courseTitle"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="e.g., Introduction to Computer Science"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="unit">Unit/Credit:</label>
          <input
            type="number"
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="e.g., 3"
            min="1"
            max="10"
            step="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <select
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          >
            {grades.map((gradeOption) => (
              <option key={gradeOption} value={gradeOption}>
                {gradeOption}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-primary">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CourseForm;