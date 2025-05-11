import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [userData, setUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    rollNumber: '',
    department: '',
    yearOfStudy: '',
    dateOfBirth: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      
      if (!token) {
        // Redirect to login if no token found
        navigate('/login');
        return;
      }
      
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/v1/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        console.log("API Response:", response.data);
        
        // Extract user data from the nested structure
        // Based on your backend code, the user data is in response.data.user
        const profileData = response.data.user;
        
        if (profileData) {
          setUserData({
            username: profileData.username || '',
            firstName: profileData.firstName || '',
            lastName: profileData.lastName || '',
            email: profileData.email || '',
            phoneNumber: profileData.phoneNumber || '',
            rollNumber: profileData.rollNumber || '',
            department: profileData.department || '',
            yearOfStudy: profileData.yearOfStudy || '',
            dateOfBirth: profileData.dateOfBirth || ''
          });
        } else {
          console.error("User data not found in response:", response.data);
          setError("User profile data not found");
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        
        if (error.response) {
          console.log("Error response:", error.response.data);
          console.log("Status code:", error.response.status);
        }
        
        setError("Failed to load profile data");
        setLoading(false);
        
        // Redirect to login if token is invalid/expired
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          localStorage.removeItem("token");
          navigate('/');
        }
      }
    };
    
    fetchData();
  }, [navigate]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold">Loading profile data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">User Dashboard</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">User Profile</h2>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => navigate('/edit-profile')}
          >
            Edit Profile
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-500">Username</h3>
              <p className="text-lg font-medium">{userData.username || 'Not provided'}</p>
            </div>
            
            <div>
              <h3 className="text-gray-500">Name</h3>
              <p className="text-lg font-medium">
                {userData.firstName && userData.lastName 
                  ? `${userData.firstName} ${userData.lastName}`
                  : 'Not provided'}
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-500">Email</h3>
              <p className="text-lg font-medium">{userData.email || 'Not provided'}</p>
            </div>
            
            <div>
              <h3 className="text-gray-500">Phone Number</h3>
              <p className="text-lg font-medium">{userData.phoneNumber || 'Not provided'}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-500">Roll Number</h3>
              <p className="text-lg font-medium">{userData.rollNumber || 'Not provided'}</p>
            </div>
            
            <div>
              <h3 className="text-gray-500">Department</h3>
              <p className="text-lg font-medium">{userData.department || 'Not provided'}</p>
            </div>
            
            <div>
              <h3 className="text-gray-500">Year of Study</h3>
              <p className="text-lg font-medium">{userData.yearOfStudy || 'Not provided'}</p>
            </div>
            
            <div>
              <h3 className="text-gray-500">Date of Birth</h3>
              <p className="text-lg font-medium">
                {userData.dateOfBirth ? formatDate(userData.dateOfBirth) : 'Not provided'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;