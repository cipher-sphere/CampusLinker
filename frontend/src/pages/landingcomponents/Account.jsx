import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import axios from 'axios';

function Account() {
    const [isSignup, setIsSignup] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [department, setDepartment] = useState('');
    const [yearOfStudy, setYearOfStudy] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);
    const navigate = useNavigate();

    const benefits = [
        "Access to all campus events and resources",
        "Seamless communication with peers and faculty",
        "Real-time updates and notifications",
        "Cross-platform availability (web, iOS, Android)"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSignup) {
            try {
                const res = await axios.post('https://campuslinker.onrender.com/api/v1/user/signup', {
                // const res = await axios.post('http://localhost:5000/api/v1/user/signup', {
                    username,
                    password,
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    rollNumber,
                    department,
                    yearOfStudy,
                    dateOfBirth
                });
                console.log('Signup successful:', res.data);
                setSignupSuccess(true);
                setIsSignup(false);
                // Instead of navigating away, we'll show the signin form
                // navigate('/signin')
            } catch (err) {
                console.error('Signup failed:', err.response?.data || err.message);
                alert("Something went wrong");
            }
        } else {
            try {
                // const res = await axios.post('http://localhost:5000/api/v1/user/signin', {
                const res = await axios.post('https://campuslinker.onrender.com/api/v1/user/signin', {
                    username,
                    password
                });
                console.log('Signin successful:', res.data);
                // Store the token in localStorage or in context
                localStorage.setItem('token', res.data.token);
                // Navigate to dashboard or home page
                navigate('/dashboard');
            } catch (err) {
                console.error('Signin failed:', err.response?.data || err.message);
                alert("Invalid username or password");
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 bg-blue-600 text-white p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6">Join CampusLinker Today</h2>
                            <p className="mb-8 text-blue-100">
                                Connect with your campus community and streamline your academic journey with CampusLinker.
                            </p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-2 text-blue-300 flex-shrink-0 mt-0.5" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 p-12">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {isSignup ? 'Create Your Account' : 'Welcome Back'}
                                </h3>
                                <p className="text-gray-600">
                                    {isSignup
                                        ? 'Get started with your free account today.'
                                        : signupSuccess
                                            ? 'Your account was created successfully! Please sign in.'
                                            : 'Log in to access your CampusLinker account.'}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {isSignup ? (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                    First Name
                                                </label>
                                                <input
                                                    id="firstName"
                                                    type="text"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    placeholder="First Name"
                                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Last Name
                                                </label>
                                                <input
                                                    id="lastName"
                                                    type="text"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    placeholder="Last Name"
                                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                                Username
                                            </label>
                                            <input
                                                id="username"
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="Username"
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@university.edu"
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phoneNumber"
                                                type="tel"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                placeholder="Phone Number"
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Roll Number
                                                </label>
                                                <input
                                                    id="rollNumber"
                                                    type="text"
                                                    value={rollNumber}
                                                    onChange={(e) => setRollNumber(e.target.value)}
                                                    placeholder="Roll Number"
                                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Department
                                                </label>
                                                <input
                                                    id="department"
                                                    type="text"
                                                    value={department}
                                                    onChange={(e) => setDepartment(e.target.value)}
                                                    placeholder="Department"
                                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Year of Study
                                                </label>
                                                <input
                                                    id="yearOfStudy"
                                                    type="number"
                                                    value={yearOfStudy}
                                                    onChange={(e) => setYearOfStudy(e.target.value)}
                                                    placeholder="Year of Study"
                                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Date of Birth
                                                </label>
                                                <input
                                                    id="dateOfBirth"
                                                    type="date"
                                                    value={dateOfBirth}
                                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Sign In Form */}
                                        <div>
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                                Username
                                            </label>
                                            <input
                                                id="username"
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="Username"
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                required
                                            />
                                        </div>
                                    </>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                                >
                                    {isSignup ? 'Sign Up' : 'Log In'}
                                </button>

                                {!signupSuccess && (
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            onClick={() => setIsSignup(!isSignup)}
                                            className="text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            {isSignup
                                                ? 'Already have an account? Log in'
                                                : 'Need an account? Sign up'}
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Account;