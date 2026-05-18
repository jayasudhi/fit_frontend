import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const workouts = [
        {
            id: 1,
            title: 'Strength Training',
            description: 'Build muscle and increase strength with these exercises',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Strength'
        },
        {
            id: 2,
            title: 'Cardio Workouts',
            description: 'Improve heart health and burn calories',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Cardio'
        },
        {
            id: 3,
            title: 'Yoga & Flexibility',
            description: 'Enhance flexibility and reduce stress',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Flexibility'
        },
        {
            id: 4,
            title: 'HIIT Training',
            description: 'High-intensity interval training for maximum results',
            image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'HIIT'
        }
    ];

    const fitnessGoals = [
        {
            id: 'weight-loss',
            title: 'Weight Loss',
            description: 'Burn calories and lose weight effectively',
            icon: '🔥',
            color: 'bg-red-500'
        },
        {
            id: 'muscle-gain',
            title: 'Muscle Gain',
            description: 'Build strength and increase muscle mass',
            icon: '💪',
            color: 'bg-blue-500'
        },
        {
            id: 'maintenance',
            title: 'Maintenance',
            description: 'Stay fit and maintain your current physique',
            icon: '⚖️',
            color: 'bg-green-500'
        },
        {
            id: 'general-fitness',
            title: 'General Fitness',
            description: 'Improve overall health and fitness',
            icon: '🌟',
            color: 'bg-purple-500'
        }
    ];

    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from localStorage or API
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    // State for fitness goal input
    const [goalInput, setGoalInput] = useState(user?.fitnessGoals || '');
    const [goalSaved, setGoalSaved] = useState(!!user?.fitnessGoals);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
                                    <span className="block">Transform Your</span>
                                    <span className="block text-indigo-400">Fitness Journey</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Choose your path to fitness. Sign up to track your progress and get personalized workouts tailored to your goals.
                                </p>
                                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            to="/signup"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link
                                            to="/login"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                        >
                                            Sign In
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            {/* Fitness Goals Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">
                    Choose Your Fitness Goal
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {fitnessGoals.map((goal) => (
                        <div
                            key={goal.id}
                            className={`${goal.color} rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105`}
                        >
                            <div className="p-6">
                                <div className="text-4xl mb-4">{goal.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {goal.title}
                                </h3>
                                <p className="text-white opacity-90">
                                    {goal.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Workouts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">
                    Explore Our Workouts
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* First Row - Horizontal Card */}
                    <div className="lg:col-span-12 bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col lg:flex-row mb-0">
                        <div className="lg:w-1/2 h-80 relative">
                            <img
                                src={workouts[0].image}
                                alt={workouts[0].title}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-2 m-4 rounded-full text-lg font-semibold">
                                {workouts[0].category}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-2xl font-bold text-white">
                                    {workouts[0].title}
                                </h3>
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-8">
                            <p className="text-gray-600 text-lg mb-6">
                                {workouts[0].description}
                            </p>
                            <div className="flex items-center justify-between">
                                <Link
                                    to={`/workout/${workouts[0].id}`}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                                >
                                    View Details
                                </Link>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-500">Difficulty:</span>
                                    <div className="flex space-x-1">
                                        {[...Array(3)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${
                                                    i < 2 ? 'bg-indigo-600' : 'bg-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row - Two Vertical Cards */}
                    <div className="lg:col-span-6 bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                        <div className="h-80 relative">
                            <img
                                src={workouts[1].image}
                                alt={workouts[1].title}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-2 m-4 rounded-full text-lg font-semibold">
                                {workouts[1].category}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-2xl font-bold text-white">
                                    {workouts[1].title}
                                </h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-600 text-lg mb-6">
                                {workouts[1].description}
                            </p>
                            <div className="flex items-center justify-between">
                                <Link
                                    to={`/workout/${workouts[1].id}`}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                                >
                                    View Details
                                </Link>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-500">Difficulty:</span>
                                    <div className="flex space-x-1">
                                        {[...Array(3)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${
                                                    i < 1 ? 'bg-indigo-600' : 'bg-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                        <div className="h-80 relative">
                            <img
                                src={workouts[2].image}
                                alt={workouts[2].title}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-2 m-4 rounded-full text-lg font-semibold">
                                {workouts[2].category}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-2xl font-bold text-white">
                                    {workouts[2].title}
                                </h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-gray-600 text-lg mb-6">
                                {workouts[2].description}
                            </p>
                            <div className="flex items-center justify-between">
                                <Link
                                    to={`/workout/${workouts[2].id}`}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                                >
                                    View Details
                                </Link>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-500">Difficulty:</span>
                                    <div className="flex space-x-1">
                                        {[...Array(3)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${
                                                    i < 3 ? 'bg-indigo-600' : 'bg-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third Row - Horizontal Card */}
                    <div className="lg:col-span-12 bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 h-80 relative">
                            <img
                                src={workouts[3].image}
                                alt={workouts[3].title}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-2 m-4 rounded-full text-lg font-semibold">
                                {workouts[3].category}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-2xl font-bold text-white">
                                    {workouts[3].title}
                                </h3>
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-8">
                            <p className="text-gray-600 text-lg mb-6">
                                {workouts[3].description}
                            </p>
                            <div className="flex items-center justify-between">
                                <Link
                                    to={`/workout/${workouts[3].id}`}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                                >
                                    View Details
                                </Link>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-500">Difficulty:</span>
                                    <div className="flex space-x-1">
                                        {[...Array(3)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${
                                                    i < 2 ? 'bg-indigo-600' : 'bg-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage; 