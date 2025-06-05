// src/pages/user/UserDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Home, Users, BarChart3, Settings, LogOut, X, Menu, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Sidebar Component
const Sidebar = ({ isOpen, onClose, activeMenu, setActiveMenu }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
    onClose && onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside className="
        fixed top-0 left-0 z-50 w-64 h-screen bg-white shadow-lg border-r border-gray-200
        flex flex-col
      ">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveMenu(item.id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors focus:outline-none
                    ${activeMenu === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 bg-white hover:bg-gray-100'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center bg-white space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-red-600 hover:bg-red-50 hover:text-red-700 focus:outline-none"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="h-screen w-screen flex bg-gray-50">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <div className="flex-1 flex flex-col min-h-screen ml-64">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">SIPRA TIK</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg bg-white hover:bg-gray-100 relative focus:outline-none">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 bg-white focus:outline-none">
              <Users className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome, {user?.name}!
                </h1>
              </div>
              <p className="text-gray-600 mb-4">This is the user dashboard.</p>
            </div>
            {/* Tambahkan konten dashboard user lain di sini */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;