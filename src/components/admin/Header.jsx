import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

const Header = ({ onMenuClick, sidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">SIPRA TIK</h1>
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
  );
};

export default Header;