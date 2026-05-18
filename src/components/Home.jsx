// File: /src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const workoutCategories = [
    {
        id: 1,
        title: 'Strength Training',
        description: 'Build muscle and increase strength',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        title: 'Cardio Workouts',
        description: 'Improve heart health and burn calories',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        title: 'Yoga & Flexibility',
        description: 'Enhance flexibility and reduce stress',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        title: 'HIIT Training',
        description: 'High-intensity interval training for maximum results',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

const Home = () => (
    <div className="workouts-section">
        <h2 className="workouts-title">Explore Our Workouts</h2>
        <div className="workout-vertical">
            {workoutCategories.map((cat) => (
                <div className="workout-card" key={cat.id}>
                    <img src={cat.image} alt={cat.title} />
                    <div className="workout-content">
                        <div className="workout-title">{cat.title}</div>
                        <div className="workout-desc">{cat.description}</div>
                        <Link to={`/workout/${cat.id}`} className="button-complete">Explore Workouts</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Home;
