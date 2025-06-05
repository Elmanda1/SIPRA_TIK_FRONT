// src/pages/user/UserDashboard.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Users, Bell, LogOut } from 'lucide-react';

const UserDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen w-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">SIPRA TIK</h1>
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
            <button
              onClick={logout}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 px-4 py-2 rounded-md bg-red-50 hover:bg-red-100"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
          {/* Add more dashboard content here */}
          <div className="py-6">
            <h1 className="text-black font-bold text-3xl">Peminjaman Hari ini</h1>
          </div>
          <div className="flex gap-4 justify-center mb-8">
            <button className="flex-1 min-w-[180px] bg-blue-600 rounded-lg p-6 text-center shadow hover:bg-blue-700 transition-colors">
              <h2 className="text-white text-lg font-semibold">Menunggu Validasi</h2>
              <h1 className="text-white text-3xl font-bold">50</h1>
            </button>
            <button className="flex-1 min-w-[180px] bg-green-600 rounded-lg p-6 text-center shadow hover:bg-green-700 transition-colors">
              <h2 className="text-white text-lg font-semibold">Pinjaman Aktif</h2>
              <h1 className="text-white text-3xl font-bold">50</h1>
            </button>
            <button className="flex-1 min-w-[180px] bg-gray-600 rounded-lg p-6 text-center shadow hover:bg-gray-700 transition-colors">
              <h2 className="text-white text-lg font-semibold">Pinjaman Selesai</h2>
              <h1 className="text-white text-3xl font-bold">50</h1>
            </button>
          </div>
          <div className="max-w-4xl mx-auto">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-lg shadow p-4 mb-4">
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-black">Ruang AA</h2>
                    <h3 className="text-sm text-black">Peminjam</h3>
                    <h3 className="text-sm text-black">TI 2C</h3>
                    <div className="flex gap-2 mt-2">
                      <h3 className="text-sm text-black">I</h3>
                      <h3 className="text-sm text-black">Gedung AA</h3>
                    </div>
                  </div>
                </div>
                <h3 className="text-yellow-600 font-semibold mt-4">Menunggu Validasi</h3>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex gap-4">
                    <h2 className="text-base font-semibold text-black">09.00 - 10.00</h2>
                    <h2 className="text-base font-semibold text-black">I</h2>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Validasi</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Batalkan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
