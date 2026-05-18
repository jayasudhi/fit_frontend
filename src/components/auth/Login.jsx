// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.setItem('user', JSON.stringify({ email: formData.email }));
//         navigate('/dashboard');
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
//             <div className="max-w-md w-full mx-4">
//                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                     <div className="px-8 pt-8 pb-6">
//                         <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
//                             Welcome Back
//                         </h2>
//                         <form className="space-y-6" onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                                     Email address
//                                 </label>
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     required
//                                     className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                     placeholder="Enter your email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                                     Password
//                                 </label>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     required
//                                     className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                     placeholder="Enter your password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div>
//                                 <button
//                                     type="submit"
//                                     className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
//                                     style={{ display: 'block', minHeight: '40px', minWidth: '100px' }}
//                                 >
//                                     Sign in
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
//                         <p className="text-center text-sm text-gray-600">
//                             Don't have an account?{' '}
//                             <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
//                                 Sign up
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login; 




// ///-------------------

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('user', JSON.stringify({ email: formData.email }));
//     navigate('/dashboard');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 px-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl">
//           <div className="px-10 pt-10 pb-6">
//             <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
//               Welcome Back 
//             </h2>
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition sm:text-sm"
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition sm:text-sm"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
//               >
//                 Sign in
//               </button>
//             </form>
//           </div>
//           <div className="px-10 py-6 bg-gray-50 border-t border-gray-200 rounded-b-3xl">
//             <p className="text-center text-sm text-gray-600">
//               Don’t have an account?{' '}
//               <Link
//                 to="/signup"
//                 className="font-semibold text-indigo-600 hover:text-indigo-500 transition"
//               >
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// ///----------------------------
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('user', JSON.stringify({ email: formData.email }));
//     navigate('/dashboard');
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-title">Welcome Back</h2>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <label htmlFor="email">Email address</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             placeholder="you@example.com"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             required
//             placeholder="••••••••"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <button type="submit" className="login-button">Sign in</button>
//         </form>

//         <div className="login-footer">
//           Don’t have an account? <Link to="/signup">Sign up</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



//-----------------------



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
  `${process.env.REACT_APP_API_URL}/api/auth/login`,
{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Save token and user info
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="login-button">Sign in</button>
        </form>

        <div className="login-footer">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
