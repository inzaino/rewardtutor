import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'STUDENT' as 'STUDENT' | 'PARENT' | 'TEACHER',
    gradeLevel: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="smartcoin-gradient w-16 h-16 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RT</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white">Join Reward Tutor</h2>
          <p className="mt-2 text-gray-400">Start your learning journey today</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                required
                className="px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                name="lastName"
                type="text"
                required
                className="px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            
            <input
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            
            <select
              name="role"
              required
              className="w-full px-3 py-2 border border-gray-600 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="STUDENT">Student</option>
              <option value="PARENT">Parent</option>
              <option value="TEACHER">Teacher</option>
            </select>

            {formData.role === 'STUDENT' && (
              <select
                name="gradeLevel"
                required
                className="w-full px-3 py-2 border border-gray-600 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={formData.gradeLevel}
                onChange={handleChange}
              >
                <option value="">Select Grade Level</option>
                <option value="K">Kindergarten</option>
                <option value="GRADE_1">1st Grade</option>
                <option value="GRADE_2">2nd Grade</option>
                <option value="GRADE_3">3rd Grade</option>
                <option value="GRADE_4">4th Grade</option>
                <option value="GRADE_5">5th Grade</option>
                <option value="GRADE_6">6th Grade</option>
                <option value="GRADE_7">7th Grade</option>
                <option value="GRADE_8">8th Grade</option>
                <option value="GRADE_9">9th Grade</option>
                <option value="GRADE_10">10th Grade</option>
                <option value="GRADE_11">11th Grade</option>
                <option value="GRADE_12">12th Grade</option>
              </select>
            )}
            
            <input
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            
            <input
              name="confirmPassword"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-slate-800 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Sign up
            </button>
          </div>

          <div className="text-center">
            <Link to="/login" className="text-primary-400 hover:text-primary-300">
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;