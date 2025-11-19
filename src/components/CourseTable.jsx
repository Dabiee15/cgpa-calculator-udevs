// FILE: src/components/CourseTable.jsx

import { gradeToPoint } from '../utils/gpa';

const CourseTable = ({ courses, onDeleteCourse }) => {
  if (!courses || courses.length === 0) {
    return (
      <div className="course-table-empty">
        <p>No courses added yet. Add a course to get started!</p>
      </div>
    );
  }

  return (
    <div className="course-table">
      <h3>Course List</h3>
      <table>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Unit</th>
            <th>Grade</th>
            <th>Points</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.unit}</td>
              <td>{course.grade}</td>
              <td>{gradeToPoint[course.grade]}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => onDeleteCourse(course.id)}
                  title="Delete course"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;