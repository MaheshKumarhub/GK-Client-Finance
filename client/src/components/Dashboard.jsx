import React, { useState } from 'react';
import { FaHome, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // To handle navigation

// Define the gradient animation using Tailwind CSS classes
const gradientAnimation = 'bg-gradient-to-r from-cyan-700 to-cyan-500 bg-[length:400%_400%] animate-gradient-x';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('overview');
  const navigate = useNavigate(); // Use the navigate hook to programmatically navigate

  // Handle menu item click
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className={`flex min-h-screen ${gradientAnimation} relative`}>
      {/* Sidebar */}
      <aside className="w-64 bg-cyan-900 text-white flex-shrink-0 shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-10">
          <ul>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-cyan-600 transition-colors duration-300 ${
                  activeMenu === 'overview' ? 'bg-cyan-500' : ''
                }`}
                onClick={() => handleMenuClick('overview')}
              >
                <FaHome className="inline-block mr-2" />
                Overview
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-cyan-500 transition-colors duration-300 ${
                  activeMenu === 'analytics' ? 'bg-cyan-500' : ''
                }`}
                onClick={() => handleMenuClick('analytics')}
              >
                <FaChartBar className="inline-block mr-2" />
                Analytics
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-cyan-500 transition-colors duration-300 ${
                  activeMenu === 'settings' ? 'bg-cyan-500' : ''
                }`}
                onClick={() => handleMenuClick('settings')}
              >
                <FaCog className="inline-block mr-2" />
                Settings
              </button>
            </li>
            {/* Logout Button */}
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-cyan-500 transition-colors duration-300"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="inline-block mr-2" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {activeMenu === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold">Total Sales</h3>
                <p className="text-2xl">$15,000</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold">New Users</h3>
                <p className="text-2xl">120</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold">Revenue</h3>
                <p className="text-2xl">$20,000</p>
              </div>
            </div>
          </div>
        )}

        {activeMenu === 'analytics' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Analytics</h2>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p>Analytics Content...</p>
            </div>
          </div>
        )}

        {activeMenu === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p>Settings Content...</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
