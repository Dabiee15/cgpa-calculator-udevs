// FILE: src/pages/Home.jsx

import { useState } from 'react';
import YearCard from '../components/YearCard';
import { calculateCGPA } from '../utils/gpa';

const Home = () => {
  const [years, setYears] = useState([
    { id: 1, number: 1 }
  ]);

  // Add a new year
  const handleAddYear = () => {
    const newYearNumber = years.length + 1;
    if (newYearNumber > 5) {
      alert('Maximum of 5 years allowed');
      return;
    }
    const newYear = {
      id: Date.now(),
      number: newYearNumber
    };
    setYears([...years, newYear]);
  };

  // Delete a year
  const handleDeleteYear = (yearId) => {
    if (years.length === 1) {
      alert('You must have at least one year');
      return;
    }
    setYears(years.filter((year) => year.id !== yearId));
  };

  return (
    <div className="home-container">
      <header className="app-header">
        <h1>🎓 CGPA Calculator (5.0 Scale)</h1>
        <p>Calculate your GPA and CGPA easily</p>
      </header>

      <div className="years-container">
        {years.map((year) => (
          <YearCard
            key={year.id}
            yearNumber={year.number}
            onDeleteYear={() => handleDeleteYear(year.id)}
          />
        ))}
      </div>

      {years.length < 5 && (
        <div className="add-year-container">
          <button className="btn-add-year" onClick={handleAddYear}>
            + Add Year
          </button>
        </div>
      )}

      <footer className="app-footer">
        <p>Built with React | Grade Scale: A=5, B=4, C=3, D=2, E=1, F=0</p>
      </footer>
    </div>
  );
};

export default Home;