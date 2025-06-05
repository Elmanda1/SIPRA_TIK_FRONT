// src/pages/user/UserDashboard.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Bell, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (
    // Container utama seluruh halaman dashboard admin
    <div className="min-h-screen w-full flex flex-row bg-gray-50 overflow-x-hidden">
      {/* Header - Baris atas berisi judul aplikasi dan ikon notifikasi/user */}
      <div className="bg-white/80 bg-opacity-95 backdrop-blur fixed w-screen h-20 shadow-sm border-b border-gray-200 px-72 py-4 flex items-center justify-between z-10">
        <h1 className="text-xl pl-2 font-bold text-gray-900">SIPRA TIK</h1>
          {/* Tombol user */}
        <div className="flex items-center space-x-4 pr-8">
            <button className="flex items-center rounded-xl hover:bg-gray-200 bg-white focus:outline-none px-6 py-4">
              <div className="text-black font-bold">
              PROFILE
              </div>
            </button>
            <button onClick={logout} 
            className="flex items-center rounded-xl hover:bg-gray-800 bg-black focus:outline-none px-6 py-4">
            <div className="text-white font-bold">
              LOGOUT
            </div>
          </button>
        </div>
      </div>

      {/* Main Content - Isi utama dashboard */}
      <main className="w-[99vw] min-h-screen bg-amber-50 pt-20 overflow-x-hidden">
        {/* Wrapper konten utama, membatasi lebar dan memberi padding */}
        <div className="max-w-full bg-amber-50 mx-auto p-10">
          {/* Card utama dashboard admin */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            {/* Header card: sapaan admin */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {user?.name}
              </h1>
            </div>
          </div>
          {/* Section statistik peminjaman hari ini */}
          <div className="py-6 px-64">
            <h1 className="text-black font-bold text-3xl">Peminjaman Hari ini</h1>
          </div>

          {/* Statistik ringkas: Menunggu Validasi, Pinjaman Aktif, Pinjaman Selesai */}
          <div className="flex flex-row gap-5 max-w-6xl w-full  mx-auto px-4 py-10">
            <button className="flex-1 min-w-[180px] bg-white/80 bg-opacity-95 backdrop-blur shadow-xl focus:outline-none rounded-xl p-6 text-center shadow hover:bg-white hover:backdrop-blur transition-colors">
              <h2 className="text-black text-lg font-semibold">Menunggu Validasi</h2>
              <h1 className="text-black text-3xl font-bold">50</h1>
            </button>
            <button className="flex-1 min-w-[180px] bg-white/80 bg-opacity-95 backdrop-blur shadow-xl focus:outline-none rounded-xl p-6 text-center shadow hover:bg-white hover:backdrop-blur transition-colors">
              <h2 className="text-black text-lg font-semibold">Pinjaman Aktif</h2>
              <h1 className="text-black text-3xl font-bold">50</h1>
            </button>
            <button className="flex-1 min-w-[180px] bg-white/80 bg-opacity-95 backdrop-blur shadow-xl focus:outline-none rounded-xl p-6 text-center shadow hover:bg-white gray-200 hover:backdrop-blur hover:decoration-none hover:ring-0 transition-colors">
              <h2 className="text-black text-lg font-semibold">Pinjaman Selesai</h2>
              <h1 className="text-black text-3xl font-bold">50</h1>
            </button>
          </div>
          {/* Daftar detail peminjaman hari ini */}
          <div className="max-w-full mx-auto px-64">
            {[...Array(5)].map((_, i) => (
              // Card untuk setiap peminjaman
              <div key={i} className="min-h-[180px] flex items-center justify-between bg-white shadow-xl rounded-xl shadow p-4 mb-4">
                {/* Info ruang dan peminjam */}
                <div className="flex items-center gap-4 pl-8">
                  <div>
                    <h2 className="text-4xl font-bold text-black">Ruang AA</h2>
                    <h3 className="text-2xl text-black">Peminjam</h3>
                    <h3 className="text-2xl text-black">TI 2C</h3>
                    <div className="flex gap-2 mt-2">
                      <h3 className="text-2xl text-black">I</h3>
                      <h3 className="text-2xl text-black">Gedung AA</h3>
                    </div>
                  </div>
                </div>
                {/* Status peminjaman */}
                <div className='flex flex-row justify-start'>
                  <h3>..................</h3>
                  <h3 className="text-yellow-600 text-2xl font-semibold mt-4 mb-32">Menunggu Validasi</h3>
                </div>
                {/* Info waktu and aksi */}
                <div className="flex flex-col items-end gap-5 ">
                  <div className="flex gap-4 lex justify-between items-center  w-full">
                    <h2>......</h2>
                    <h2 className="text-4xl font-semibold text-black">09.00 - 10.00</h2>
                    <h2 className="text-4xl font-semibold text-black pr-12">I</h2>
                  </div>
                  <div className="flex justify-between items-center gap-4 w-auto pr-8">
                    <button className="min-w-40 min-h-16 bg-green-500 text-white px-3 py-1 rounded-xl hover:bg-green-600">Validasi</button>
                    <button className="min-w-40 min-h-16 bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600">Batalkan</button>
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
