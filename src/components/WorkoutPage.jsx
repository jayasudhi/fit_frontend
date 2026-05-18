


// // File: /src/components/WorkoutPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import DailyTasks from './DailyTasks';
// import './WorkoutPage.css';

// const WorkoutPage = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [workout, setWorkout] = useState(null);
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const workoutData = {
//         1: {
//             title: 'Strength Training',
//             description: 'Build muscle and increase strength with these exercises',
//             category: 'Strength',
//             exercises: [
//                 { name: 'Bench Press', sets: 3, reps: 10, rest: '90 seconds', description: 'Lie on a flat bench and press the barbell up and down' },
//                 { name: 'Squats', sets: 4, reps: 12, rest: '120 seconds', description: 'Stand with feet shoulder-width apart and squat down' },
//                 { name: 'Deadlifts', sets: 3, reps: 8, rest: '120 seconds', description: 'Lift the barbell from the ground to hip level' }
//             ]
//         },
//         2: {
//             title: 'Cardio Workouts',
//             description: 'Improve heart health and burn calories',
//             category: 'Cardio',
//             exercises: [
//                 { name: 'Running', duration: '30 minutes', intensity: 'Moderate', description: 'Run at a pace where you can maintain a conversation' },
//                 { name: 'Jump Rope', duration: '15 minutes', intensity: 'High', description: 'Jump rope continuously with proper form' },
//                 { name: 'Cycling', duration: '45 minutes', intensity: 'Moderate', description: 'Cycle at a steady pace on a stationary bike' }
//             ]
//         },
//         3: {
//             title: 'Yoga & Flexibility',
//             description: 'Enhance flexibility and reduce stress',
//             category: 'Flexibility',
//             exercises: [
//                 { name: 'Sun Salutation', duration: '10 minutes', description: 'A sequence of yoga poses to warm up the body' },
//                 { name: 'Warrior Poses', duration: '15 minutes', description: 'Strengthen legs and improve balance' },
//                 { name: 'Forward Folds', duration: '10 minutes', description: 'Stretch hamstrings and lower back' }
//             ]
//         },
//         4: {
//             title: 'HIIT Training',
//             description: 'High-intensity interval training for maximum results',
//             category: 'HIIT',
//             exercises: [
//                 { name: 'Burpees', duration: '30 seconds', rest: '30 seconds', rounds: 4, description: 'Full body exercise combining squat, push-up, and jump' },
//                 { name: 'Mountain Climbers', duration: '45 seconds', rest: '15 seconds', rounds: 4, description: 'Alternate bringing knees to chest in plank position' },
//                 { name: 'Jump Squats', duration: '30 seconds', rest: '30 seconds', rounds: 4, description: 'Squat down and explode upward into a jump' }
//             ]
//         }
//     };

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) setUser(JSON.parse(storedUser));
//         setWorkout(workoutData[id]);
//         setLoading(false);
//     }, [id]);

//     if (loading) return <div className="workout-loading"><div className="spinner"></div></div>;

//     if (!workout) {
//         return (
//             <div className="workout-loading">
//                 <div className="text-center">
//                     <h2 className="not-found-title">Workout Not Found</h2>
//                     <button onClick={() => navigate('/')} className="btn-return">Return Home</button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="workout-container">
//             <div className="workout-header">
//                 <span className="workout-category">{workout.category}</span>
//                 <h1 className="workout-title">{workout.title}</h1>
//                 <p className="workout-description">{workout.description}</p>
//             </div>

//             <div className="workout-content">
//                 {user && (
//                     <div className="user-progress">
//                         <h2>Your Progress</h2>
//                         <p>Based on your fitness goal: <strong>{user.fitnessGoals}</strong></p>
//                     </div>
//                 )}

//                 <div className="exercise-grid">
//                     {workout.exercises.map((exercise, index) => (
//                         <div key={index} className="exercise-card">
//                             <div className="exercise-header">
//                                 <h3>{exercise.name}</h3>
//                                 <span>Exercise {index + 1}</span>
//                             </div>
//                             <p className="exercise-description">{exercise.description}</p>
//                             <div className="exercise-details">
//                                 {exercise.sets && <p><strong>Sets:</strong> {exercise.sets}</p>}
//                                 {exercise.reps && <p><strong>Reps:</strong> {exercise.reps}</p>}
//                                 {exercise.duration && <p><strong>Duration:</strong> {exercise.duration}</p>}
//                                 {exercise.rest && <p><strong>Rest:</strong> {exercise.rest}</p>}
//                                 {exercise.intensity && <p><strong>Intensity:</strong> {exercise.intensity}</p>}
//                                 {exercise.rounds && <p><strong>Rounds:</strong> {exercise.rounds}</p>}
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {user && (
//                     <DailyTasks 
//                         workoutId={id} 
//                         workoutType={workout.category} 
//                     />
//                 )}

//                 <div className="workout-buttons">
//                     <button onClick={() => navigate('/dashboard')} className="btn-primary">Back to Dashboard</button>
//                     {!user && (
//                         <button onClick={() => navigate('/signup')} className="btn-secondary">
//                             Sign Up to Track Progress
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WorkoutPage;


// File: /src/components/WorkoutPage.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DailyTasks from './DailyTasks';
import './WorkoutPage.css';

/* Move workoutData OUTSIDE component */
const workoutData = {
    1: {
        title: 'Strength Training',
        description: 'Build muscle and increase strength with these exercises',
        category: 'Strength',
        exercises: [
            {
                name: 'Bench Press',
                sets: 3,
                reps: 10,
                rest: '90 seconds',
                description: 'Lie on a flat bench and press the barbell up and down'
            },
            {
                name: 'Squats',
                sets: 4,
                reps: 12,
                rest: '120 seconds',
                description: 'Stand with feet shoulder-width apart and squat down'
            },
            {
                name: 'Deadlifts',
                sets: 3,
                reps: 8,
                rest: '120 seconds',
                description: 'Lift the barbell from the ground to hip level'
            }
        ]
    },

    2: {
        title: 'Cardio Workouts',
        description: 'Improve heart health and burn calories',
        category: 'Cardio',
        exercises: [
            {
                name: 'Running',
                duration: '30 minutes',
                intensity: 'Moderate',
                description: 'Run at a pace where you can maintain a conversation'
            },
            {
                name: 'Jump Rope',
                duration: '15 minutes',
                intensity: 'High',
                description: 'Jump rope continuously with proper form'
            },
            {
                name: 'Cycling',
                duration: '45 minutes',
                intensity: 'Moderate',
                description: 'Cycle at a steady pace on a stationary bike'
            }
        ]
    },

    3: {
        title: 'Yoga & Flexibility',
        description: 'Enhance flexibility and reduce stress',
        category: 'Flexibility',
        exercises: [
            {
                name: 'Sun Salutation',
                duration: '10 minutes',
                description: 'A sequence of yoga poses to warm up the body'
            },
            {
                name: 'Warrior Poses',
                duration: '15 minutes',
                description: 'Strengthen legs and improve balance'
            },
            {
                name: 'Forward Folds',
                duration: '10 minutes',
                description: 'Stretch hamstrings and lower back'
            }
        ]
    },

    4: {
        title: 'HIIT Training',
        description: 'High-intensity interval training for maximum results',
        category: 'HIIT',
        exercises: [
            {
                name: 'Burpees',
                duration: '30 seconds',
                rest: '30 seconds',
                rounds: 4,
                description: 'Full body exercise combining squat, push-up, and jump'
            },
            {
                name: 'Mountain Climbers',
                duration: '45 seconds',
                rest: '15 seconds',
                rounds: 4,
                description: 'Alternate bringing knees to chest in plank position'
            },
            {
                name: 'Jump Squats',
                duration: '30 seconds',
                rest: '30 seconds',
                rounds: 4,
                description: 'Squat down and explode upward into a jump'
            }
        ]
    }
};

const WorkoutPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [workout, setWorkout] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setWorkout(workoutData[id]);
        setLoading(false);

    }, [id]);

    if (loading) {
        return (
            <div className="workout-loading">
                <div className="spinner"></div>
            </div>
        );
    }

    if (!workout) {
        return (
            <div className="workout-loading">
                <div className="text-center">
                    <h2 className="not-found-title">
                        Workout Not Found
                    </h2>

                    <button
                        onClick={() => navigate('/')}
                        className="btn-return"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="workout-container">

            <div className="workout-header">
                <span className="workout-category">
                    {workout.category}
                </span>

                <h1 className="workout-title">
                    {workout.title}
                </h1>

                <p className="workout-description">
                    {workout.description}
                </p>
            </div>

            <div className="workout-content">

                {user && (
                    <div className="user-progress">
                        <h2>Your Progress</h2>

                        <p>
                            Based on your fitness goal:
                            <strong> {user.fitnessGoals}</strong>
                        </p>
                    </div>
                )}

                <div className="exercise-grid">

                    {workout.exercises.map((exercise, index) => (

                        <div
                            key={index}
                            className="exercise-card"
                        >

                            <div className="exercise-header">
                                <h3>{exercise.name}</h3>

                                <span>
                                    Exercise {index + 1}
                                </span>
                            </div>

                            <p className="exercise-description">
                                {exercise.description}
                            </p>

                            <div className="exercise-details">

                                {exercise.sets && (
                                    <p>
                                        <strong>Sets:</strong> {exercise.sets}
                                    </p>
                                )}

                                {exercise.reps && (
                                    <p>
                                        <strong>Reps:</strong> {exercise.reps}
                                    </p>
                                )}

                                {exercise.duration && (
                                    <p>
                                        <strong>Duration:</strong> {exercise.duration}
                                    </p>
                                )}

                                {exercise.rest && (
                                    <p>
                                        <strong>Rest:</strong> {exercise.rest}
                                    </p>
                                )}

                                {exercise.intensity && (
                                    <p>
                                        <strong>Intensity:</strong> {exercise.intensity}
                                    </p>
                                )}

                                {exercise.rounds && (
                                    <p>
                                        <strong>Rounds:</strong> {exercise.rounds}
                                    </p>
                                )}

                            </div>

                        </div>

                    ))}

                </div>

                {user && (
                    <DailyTasks
                        workoutId={id}
                        workoutType={workout.category}
                    />
                )}

                <div className="workout-buttons">

                    <button
                        onClick={() => navigate('/dashboard')}
                        className="btn-primary"
                    >
                        Back to Dashboard
                    </button>

                    {!user && (
                        <button
                            onClick={() => navigate('/signup')}
                            className="btn-secondary"
                        >
                            Sign Up to Track Progress
                        </button>
                    )}

                </div>

            </div>

        </div>
    );
};

export default WorkoutPage;
