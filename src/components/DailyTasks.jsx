
// import React, { useEffect, useState } from 'react';
// import './DailyTasks.css';

// const TASKS_BY_GOAL = {
//   "weight-loss": [
//     "Walk 10,000 steps",
//     "Drink 2L of water",
//     "30-minute cardio session",
//     "Avoid sugar",
//   ],
//   "muscle-gain": [
//     "Eat 150g protein",
//     "45-minute strength training",
//     "Stretch 10 minutes",
//   ],
//   "general-fitness": [
//     "Do 15 push-ups",
//     "Stretch for 15 minutes",
//     "Walk for 30 minutes",
//   ],
//   "flexibility": [
//     "15-minute yoga",
//     "Stretch hamstrings",
//     "Stretch back and shoulders",
//   ],
// };

// const DailyTasks = ({ workoutType }) => {
//   const [taskStatuses, setTaskStatuses] = useState({});
//   const [loading, setLoading] = useState(true);
//   const user = JSON.parse(localStorage.getItem('user')) || {};
//   const token = localStorage.getItem('token');
//   const userId = user.email;
//   const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
//   const tasks = TASKS_BY_GOAL[workoutType] || [];

//   // Fetch today's tasks from the backend
//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch(`/api/tasks/today?userId=${userId}&date=${today}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setTaskStatuses(data.tasks || {});
//         } else {
//           console.warn("No tasks from server, using localStorage");
//           const saved = localStorage.getItem(`${userId}-tasks`);
//           setTaskStatuses(saved ? JSON.parse(saved) : {});
//         }
//       } catch (err) {
//         console.error('Error fetching tasks:', err);
//         const saved = localStorage.getItem(`${userId}-tasks`);
//         setTaskStatuses(saved ? JSON.parse(saved) : {});
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [userId, today, token]);

//   // Handle task status change and save to DB
//   const handleStatusChange = async (task, status) => {
//     const updated = { ...taskStatuses, [task]: status };
//     setTaskStatuses(updated);
//     localStorage.setItem(`${userId}-tasks`, JSON.stringify(updated)); // fallback

//     try {
//       const response = await fetch('/api/tasks/today', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           userId,
//           date: today,
//           tasks: updated,
//         }),
//       });

//       if (!response.ok) {
//         console.warn('Failed to save to DB');
//       }
//     } catch (error) {
//       console.error('Error saving tasks to DB:', error);
//     }
//   };

//   if (!tasks.length) return <p>No tasks defined for this goal.</p>;
//   if (loading) return <p>Loading today's tasks...</p>;

//   return (
//     <div className="daily-tasks">
//       <h3>Today's Tasks</h3>
//       {tasks.map((task) => (
//         <div key={task} className="task-item">
//           <p>{task}</p>
//           <select
//             value={taskStatuses[task] || ''}
//             onChange={(e) => handleStatusChange(task, e.target.value)}
//           >
//             <option value="">Not Started</option>
//             <option value="in-progress">In Progress</option>
//             <option value="completed">Completed</option>
//           </select>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DailyTasks;

// src/components/DailyTasks.js
import React, { useEffect, useState } from 'react';
import './DailyTasks.css';

const TASKS_BY_GOAL = {
  "weight-loss": [
    "Walk 10,000 steps",
    "Drink 2L of water",
    "30-minute cardio session",
    "Avoid sugar",
  ],
  "muscle-gain": [
    "Eat 150g protein",
    "45-minute strength training",
    "Stretch 10 minutes",
  ],
  "general-fitness": [
    "Do 15 push-ups",
    "Stretch for 15 minutes",
    "Walk for 30 minutes",
  ],
  "flexibility": [
    "15-minute yoga",
    "Stretch hamstrings",
    "Stretch back and shoulders",
  ],
};

const DailyTasks = ({ workoutType }) => {
  const [taskStatuses, setTaskStatuses] = useState({});
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem('user')) || {};
  const token = localStorage.getItem('token');
  const userId = user.email;
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const tasks = TASKS_BY_GOAL[workoutType] || [];

  // Fetch today's tasks from the backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`/api/tasks/today?userId=${userId}&date=${today}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTaskStatuses(data.tasks || {});
        } else {
          console.warn("No tasks from server, using localStorage");
          const saved = localStorage.getItem(`${userId}-tasks`);
          setTaskStatuses(saved ? JSON.parse(saved) : {});
        }
      } catch (err) {
        console.error('Error fetching tasks:', err);
        const saved = localStorage.getItem(`${userId}-tasks`);
        setTaskStatuses(saved ? JSON.parse(saved) : {});
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [userId, today, token]);

  // Handle task status change and save to DB
  const handleStatusChange = async (task, status) => {
    const updated = { ...taskStatuses, [task]: status };
    setTaskStatuses(updated);
    localStorage.setItem(`${userId}-tasks`, JSON.stringify(updated)); // fallback

    try {
      const response = await fetch('/api/tasks/today', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          date: today,
          tasks: updated,
        }),
      });

      if (!response.ok) {
        console.warn('Failed to save to DB');
      }
    } catch (error) {
      console.error('Error saving tasks to DB:', error);
    }
  };

  if (!tasks.length) return <p>No tasks defined for this goal.</p>;
  if (loading) return <p>Loading today's tasks...</p>;

  return (
    <div className="daily-tasks">
      <h3>Today's Tasks</h3>
     {tasks.map((task) => (
  <div key={task} className="task-item">
    <p>{task}</p>

    <select
      value={taskStatuses[task] || ''}
      onChange={(e) => handleStatusChange(task, e.target.value)}
    >
      <option value="">Not Started</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>

    <button
      className="done-button"
      onClick={() => handleStatusChange(task, 'completed')}
      disabled={taskStatuses[task] === 'completed'}
    >
      {taskStatuses[task] === 'completed' ? '✓ Done' : 'Mark as Done'}
    </button>
  </div>
))}

    </div>

  );
};

export default DailyTasks;
