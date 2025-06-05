// src/pages/user/UserDashboard.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Users, Bell, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (
    // Container utama seluruh halaman dashboard admin
    <div className="min-h-screen w-full flex flex-row bg-gray-50 overflow-x-hidden">
      {/* Header - Baris atas berisi judul aplikasi dan ikon notifikasi/user */}
      <div className="bg-gray-100/50 bg-opacity-95 backdrop-blur fixed w-screen h-20 shadow-sm border-b border-gray-200 px-20 py-4 flex items-center justify-between z-10">
        <h1 className="text-xl font-bold text-gray-900">SIPRA TIK</h1>
          {/* Tombol user */}
          <button className="p-2 rounded-full hover:bg-gray-100 bg-white focus:outline-none">
            <Users className="w-5 h-5 text-gray-600" />
          </button>
        
      </div>

      {/* Main Content - Isi utama dashboard */}
      <main className="w-[99vw] min-h-screen bg-gray-50 pt-20 overflow-x-hidden">
        {/* Wrapper konten utama, membatasi lebar dan memberi padding */}
        <div className="max-w-4xl bg-red-600 mx-auto p-6">
          {/* Card utama dashboard admin */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            {/* Header card: sapaan admin */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {user?.name}!
              </h1>
            </div>
            {/* Deskripsi singkat */}
            <p className="text-gray-600 mb-4">This is the user dashboard.</p>
            {/* Tombol logout */}
            <button
              onClick={logout}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 px-4 py-2 rounded-md bg-red-50 hover:bg-red-100"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
          {/* Section statistik peminjaman hari ini */}
          <div className="py-6">
            <h1 className="text-black font-bold text-3xl">Peminjaman Hari ini</h1>
          </div>
          {/* Statistik ringkas: Menunggu Validasi, Pinjaman Aktif, Pinjaman Selesai */}
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
          {/* Daftar detail peminjaman hari ini */}
          <div className="max-w-4xl mx-auto">
            {[...Array(5)].map((_, i) => (
              // Card untuk setiap peminjaman
              <div key={i} className="flex items-center justify-between bg-white rounded-lg shadow p-4 mb-4">
                {/* Info ruang dan peminjam */}
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
                {/* Status peminjaman */}
                <h3 className="text-yellow-600 font-semibold mt-4">Menunggu Validasi</h3>
                {/* Info waktu dan aksi */}
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

export default AdminDashboard;
