// src/pages/admin/AdminDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  User, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';

// Import components
import DashboardContent from '../../components/admin/DashboardContent';
import UsersManagement from '../../components/admin/UsersManagement';
import AdminSettings from '../../components/admin/AdminSettings';
import SalesChart from '../../components/admin/Charts/SalesChart';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardContent />;
      case 'analytics':
        return (
          <div className="space-y-4 lg:space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
                <p className="text-gray-600">Analisis dan laporan sistem perpustakaan.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Chart</h3>
              <SalesChart />
            </div>
          </div>
        );
      case 'users':
        return <UsersManagement />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <DashboardContent />;
    }
  };

  const handleLogout = () => {
    if (window.confirm('Apakah Anda yakin ingin logout?')) {
      logout();
      alert('Logout berhasil!');
    }
  };

  return (
    <div className="h-screen w-screen flex bg-gray-50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Fixed position */}
      <aside className="fixed top-0 left-0 z-50 w-64 h-screen bg-white shadow-lg border-r border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900">SIPRATIK</h1>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-lg hover:bg-gray-100 lg:hidden focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors focus:outline-none ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-700 bg-white hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Footer - Tombol Logout */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center bg-white space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-red-600 hover:bg-red-50 hover:text-red-700 focus:outline-none hover:outline-none"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      
      {/* Main Content Area dengan margin left untuk sidebar */}
      <div className="flex-1 flex flex-col min-h-screen ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg bg-white hover:bg-gray-100 lg:hidden focus:outline-none"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                {menuItems.find(item => item.id === currentPage)?.label || 'Dashboard'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg bg-white hover:bg-gray-100 relative focus:outline-none">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 bg-white focus:outline-none">
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          <div className="p-4 lg:p-6 h-full w-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;