// FILE: src/utils/gpa.js

/**
 * Grade to point conversion for 5.0 scale
 */
export const gradeToPoint = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

/**
 * Calculate GPA for a single semester
 * @param {Array} courses - Array of course objects with { title, unit, grade }
 * @returns {number} - Calculated GPA (rounded to 2 decimal places)
 */
export const calculateSemesterGPA = (courses) => {
  if (!courses || courses.length === 0) {
    return 0.0;
  }

  let totalPoints = 0;
  let totalUnits = 0;

  courses.forEach((course) => {
    const gradePoint = gradeToPoint[course.grade] || 0;
    const unit = parseFloat(course.unit) || 0;
    
    totalPoints += gradePoint * unit;
    totalUnits += unit;
  });

  if (totalUnits === 0) {
    return 0.0;
  }

  const gpa = totalPoints / totalUnits;
  return Math.round(gpa * 100) / 100; // Round to 2 decimal places
};

/**
 * Calculate CGPA for multiple semesters
 * @param {Array} semesters - Array of semester objects with courses
 * @returns {number} - Calculated CGPA (rounded to 2 decimal places)
 */
export const calculateCGPA = (semesters) => {
  if (!semesters || semesters.length === 0) {
    return 0.0;
  }

  let totalPoints = 0;
  let totalUnits = 0;

  semesters.forEach((semester) => {
    if (semester.courses && semester.courses.length > 0) {
      semester.courses.forEach((course) => {
        const gradePoint = gradeToPoint[course.grade] || 0;
        const unit = parseFloat(course.unit) || 0;
        
        totalPoints += gradePoint * unit;
        totalUnits += unit;
      });
    }
  });

  if (totalUnits === 0) {
    return 0.0;
  }

  const cgpa = totalPoints / totalUnits;
  return Math.round(cgpa * 100) / 100; // Round to 2 decimal places
};

/**
 * Get all available grades
 * @returns {Array} - Array of grade options
 */
export const getGradeOptions = () => {
  return ['A', 'B', 'C', 'D', 'E', 'F'];
};