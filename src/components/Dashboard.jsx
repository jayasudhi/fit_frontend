import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DailyTasks from './DailyTasks';
import './Dashboard.css'; // Import the improved CSS

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [goalInput, setGoalInput] = useState('');
  const [goalSaved, setGoalSaved] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setGoalInput(parsedUser.fitnessGoals || '');
      setGoalSaved(!!parsedUser.fitnessGoals);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleGoalChange = (e) => setGoalInput(e.target.value);

  const handleGoalSave = () => {
    const updatedUser = { ...user, fitnessGoals: goalInput };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setGoalSaved(true);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Dashboard</h2>
          <div className="sidebar-card">
            <h3>Welcome, {user.name}!</h3>
            <div>
              <h4>Personal Information</h4>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
              <p>Weight: {user.weight} kg</p>
              <p>Height: {user.height} cm</p>
            </div>
            <div>
              <h4>Quick Stats</h4>
              <p>
                BMI:{" "}
                {(
                  user.weight /
                  ((user.height / 100) * (user.height / 100))
                ).toFixed(1)}
              </p>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {!goalSaved ? (
            <div className="goal-form">
              <h2>Set Your Fitness Goal</h2>
              <input
                type="text"
                value={goalInput}
                onChange={handleGoalChange}
                placeholder="Enter your fitness goal (e.g., Weight Loss, Muscle Gain)"
              />
              <button onClick={handleGoalSave}>Save Goal</button>
            </div>
          ) : (
            <div className="goal-display">
              <h2>Your Fitness Goal</h2>
              <p>{user.fitnessGoals}</p>
            </div>
          )}

          {goalSaved && <DailyTasks workoutType={user.fitnessGoals} />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;