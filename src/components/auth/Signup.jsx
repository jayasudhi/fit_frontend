


// //-------------------



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Signup.css';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     age: '',
//     weight: '',
//     height: '',
//     fitnessGoals: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (formData.password !== formData.confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   try {
//     const response = await fetch('http://localhost:5000/api/auth/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         age: parseInt(formData.age),
//         weight: parseInt(formData.weight),
//         height: parseInt(formData.height),
//         fitnessGoals: formData.fitnessGoals
//       }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       console.log('User created successfully:', data);
//       navigate('/login');
//     } else {
//       alert(data.message || 'Signup failed');
//     }
//   } catch (error) {
//     console.error('Error during signup:', error);
//     alert('An error occurred during signup.');
//   }
// };


//   return (
//     <div className="signup-container"> {/* ✅ Added container */}
//       <div className="signup-box">
//         <h2 className="signup-title">Create Your Account</h2>
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <label htmlFor="name">Full Name</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             required
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//           />

//           <label htmlFor="email">Email Address</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             required
//             placeholder="Create a password"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             id="confirmPassword"
//             name="confirmPassword"
//             type="password"
//             required
//             placeholder="Confirm your password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />

//           <label htmlFor="age">Age</label>
//           <input
//             id="age"
//             name="age"
//             type="number"
//             required
//             placeholder="Enter your age"
//             value={formData.age}
//             onChange={handleChange}
//           />

//           <label htmlFor="weight">Weight (kg)</label>
//           <input
//             id="weight"
//             name="weight"
//             type="number"
//             required
//             placeholder="Enter your weight"
//             value={formData.weight}
//             onChange={handleChange}
//           />

//           <label htmlFor="height">Height (cm)</label>
//           <input
//             id="height"
//             name="height"
//             type="number"
//             required
//             placeholder="Enter your height"
//             value={formData.height}
//             onChange={handleChange}
//           />

//           <label htmlFor="fitnessGoals">Fitness Goals</label>
//           <select
//             id="fitnessGoals"
//             name="fitnessGoals"
//             required
//             value={formData.fitnessGoals}
//             onChange={handleChange}
//           >
//             <option value="">Select your fitness goal</option>
//             <option value="weight-loss">Weight Loss</option>
//             <option value="muscle-gain">Muscle Gain</option>
//             <option value="general-fitness">General Fitness</option>
//             <option value="flexibility">Flexibility</option>
//           </select>

//           <button type="submit" className="signup-button">
//             Create Account
//           </button>
//         </form>

//         <div className="signup-footer">
//           Already have an account? <Link to="/login">Sign in</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;







import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    weight: '',
    height: '',
    fitnessGoals: ''
  });

  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          age: parseInt(formData.age),
          weight: parseInt(formData.weight),
          height: parseInt(formData.height),
          fitnessGoals: formData.fitnessGoals
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User created successfully:', data);
        navigate('/login');
      } else {
        if (data.errors) {
          const messages = Object.values(data.errors)
            .map((err) => err.message)
            .join('\n');
          setErrors(messages);
        } else {
          setErrors(data.message || 'Signup failed');
        }
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrors('An error occurred during signup.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Your Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            required
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />

          <label htmlFor="weight">Weight (kg)</label>
          <input
            id="weight"
            name="weight"
            type="number"
            required
            placeholder="Enter your weight"
            value={formData.weight}
            onChange={handleChange}
          />

          <label htmlFor="height">Height (cm)</label>
          <input
            id="height"
            name="height"
            type="number"
            required
            placeholder="Enter your height"
            value={formData.height}
            onChange={handleChange}
          />

          <label htmlFor="fitnessGoals">Fitness Goals</label>
          <select
            id="fitnessGoals"
            name="fitnessGoals"
            required
            value={formData.fitnessGoals}
            onChange={handleChange}
          >
            <option value="">Select your fitness goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="general-fitness">General Fitness</option>
            {/* remove this next option if not supported in schema */}
            <option value="flexibility">Flexibility</option>
          </select>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        {/* Display server-side or validation errors */}
        {errors && <p className="error-message">{errors}</p>}

        <div className="signup-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

