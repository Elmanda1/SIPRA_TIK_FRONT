import React, { useState } from 'react';
import { MapPin, User, Search, Filter ,History, Package, ClipboardList, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LogoutModal from '../../components/common/LogoutModal';

export default function UserDashboard() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [activeMenu, setActiveMenu] = useState('Home'); // default: home
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

   const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setShowLogoutModal(false);
    // Optional: Show success message or toast notification
    console.log('User logged out successfully');
  };

  const activeBookings = [
    {
      id: 1,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '06 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Aktif',
      statusColor: 'bg-blue-100 text-blue-800'
    }
  ];

  const historyBookings = [
    {
      id: 2,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 3,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Dibatalkan',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: 4,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 5,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 6,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Dibatalkan',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: 7,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 8,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 9,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 10,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 11,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 12,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 13,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 14,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 15,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 16,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 17,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800'
    },
  ];

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
  };

  // Table reusable component
  const BookingTable = ({ title, bookings }) => (
    <div className="bg-white rounded-xl shadow-sm mb-8">
      <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <button className="p-2 text-gray-400 bg-white hover:text-gray-600">
          <Filter className="w-5 h-5" />
        </button>
      </div>
      <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-700">
          <div>Nama Ruang</div>
          <div>Tanggal Peminjaman</div>
          <div>Durasi Peminjaman</div>
          <div>Lokasi</div>
          <div>Status</div>
          <div>Aksi</div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 overflow-y-auto ">
        {bookings.length === 0 && (
          <div className="px-6 py-8 text-center text-gray-400">Tidak ada data</div>
        )}
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => handleBookingClick(booking)}
          >
            <div className="grid grid-cols-6 gap-4 items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{booking.room}</div>
                  <div className="text-sm text-gray-500">Ruang</div>
                </div>
              </div>
              <div className="text-gray-900">{booking.date}</div>
              <div className="text-gray-900">{booking.time}</div>
              <div className="text-gray-900">{booking.building}</div>
              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${booking.statusColor}`}>
                  {booking.status}
                </span>
              </div>
              <div className="flex space-x-2">
                {booking.status === 'Aktif' && (
                  <button className="text-blue-900 bg-white hover:text-blue-900 text-sm font-medium">
                    Detail
                  </button>
                )}
                {booking.status === 'Dibatalkan' && (
                  <button className="text-red-600 bg-white hover:text-red-800 text-sm font-medium">
                    Pinjam Barang
                  </button>
                )}
                {booking.status === 'Selesai' && (
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Dummy content untuk home
  const HomeContent = () => (
    <div className=" flex flex-col items-center justify-center min-h-[60vh] mt-10">
      <div className=' flex flex-col items-center justify-center'>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8">
          Selamat Datang di SIPRATIK!
        </h1>
        <p className="text-2xl text-gray-600 text-center mb-12 max-w-2xl">
          Sistem Peminjaman Sarana Prasarana Kampus untuk Mahasiswa dan Dosen
        </p>
          <button
            onClick={() => setActiveMenu('pinjam')}
            className="px-8 py-3 bg-black text-white font-bold rounded-lg shadow hover:bg-gray-800 transition"
          >
            PINJAM BARANG
          </button>
          <br/>
        <p className="text-gray-600">
          Lihat{" "}
          <a href="#" className="underline">
            Ketentuan
          </a>
        </p>
      </div>
      <div>
        
      </div>
    </div>

  );

  const HistoryContent = () => (
    <div className='mt-10'>
          <BookingTable title="Pinjaman Aktif" bookings={activeBookings} />
          <BookingTable title="History" bookings={historyBookings} />
    </div>
  );
  const ProfileContent = () => (
    <div className="flex flex-col items-center w-full min-h-[80vh] py-10 overflow-y-auto">
      <div className='flex flex-row items-start justify-start w-full max-w-4xl'>
      {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-gray-800">My Profile</h2>
      </div>
      <div className="bg-white/30 bg-opacity-50 backdrop-blur-sm border rounded-xl shadow-sm w-full max-w-4xl p-8 ">
        {/* Header */}
        <div className="flex items-center border-b pb-4 mb-6 ml-6">
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <User className="w-14 h-14 text-gray-400" />
          </div>
          <div>
            <div className="font-bold text-2xl text-gray-900">Muhammad Rafif Dwarka</div>
            <div className="text-lg text-gray-600">2407411078</div>
            <div className="text-lg text-gray-600">TI 2C</div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="border rounded-xl p-6 mb-8 bg-white">
          <div className=" text-xl font-semibold text-gray-700 mb-4">Personal Information
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8">
            <div className='text-lg text-black'>
              <span className=" font-semibold">First name</span><br />
              Muhammad Rafif
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Last name</span><br />
              Dwiarka
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Phone</span><br />
              0821-1302-0861
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Program Studi</span><br />
              Sarjana Terapan - Teknik Informatika
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Role</span><br />
              Mahasiswa
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Alamat</span><br />
              Puri Depok mas blok L no 15
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Kota</span><br />
              Depok
            </div>
            <div className='text-lg text-black'>
              <span className="font-semibold">Provinsi</span><br />
              Jawa Barat
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="border rounded-xl p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className=" text-xl font-semibold text-gray-700">Account Information</span>
            <button className="text-sm text-gray-600 border mr-3 px-2 py-1 rounded hover:bg-gray-100 flex items-center gap-1 focus:outline-none bg-white">
              Change Password
            </button>
          </div>
          <div className='grid gap-x-5 gap-y-8'>
          <div className="text-lg mb-2 text-black">
            <span className="font-semibold">Email</span><br />
            Muhammad.Rafif.Dwarka.1824@sttupnj.ac.id
          </div>
          <div className="text-lg text-black">
            <span className="font-semibold">Password</span><br />
            <span>●●●●●●●●●</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
  const PinjamContent = () => (
    <div className="flex flex-col items-center w-full  min-h-[80vh] py-10 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Form Peminjaman Barang</h2>
      <div className="bg-white/30 bg-opacity-50 backdrop-blur-sm rounded-xl rounded-xl w-full max-w-2xl p-12">
        {/* Form */}
        <form className="flex flex-col gap-5 items-start">
          {/* Barang yang Dipinjam */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Barang yang Dipinjam</label>
            <input
              type="text"
              className="border rounded px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
            />
          </div>
          {/* Durasi Peminjaman */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Durasi peminjaman</label>
            <div className="flex gap-2">
              <input
                type="date"
                className="border rounded px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-36"
              />
              <span className="self-center font-medium text-gray-700">Sampai</span>
              <input
                type="date"
                className="border rounded px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-36"
              />
            </div>
          </div>
          {/* Nama Lengkap */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              className="border rounded px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              value="Muhammad Rafif Dwarka"
              readOnly
            />
          </div>
          {/* NIM */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">NIM</label>
            <input
              type="text"
              className="border rounded px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              value="2407411078"
              readOnly
            />
          </div>
          {/* Kelas */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Kelas</label>
            <input
              type="text"
              className="border rounded px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              value="TI 2C"
              readOnly
            />
          </div>
          {/* No Hp */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">No.Hp</label>
            <input
              type="text"
              className="border rounded px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              value="081213020861"
              readOnly
            />
          </div>
          {/* Keterangan */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Keterangan</label>
            <textarea
              className="border rounded px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-96"
              rows={2}
            />
          </div>
          {/* Tombol */}
          <div className="flex justify-end w-full mt-6">
            <button
              type="submit"
              className="flex items-center rounded-xl hover:bg-gray-800 bg-black focus:outline-none px-6 py-4"
            >
              <div className="text-white font-bold">
                SUBMIT
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen w-[99vw]"
      style={{
        background: "linear-gradient(0deg, #EAF1F8 65%,rgb(210, 250, 255) 100%)"
      }}
    >
      {/* Header */}
      <div className="bg-white/30 bg-opacity-50 backdrop-blur-sm fixed top-4 left-1/2 transform -translate-x-1/2 min-w-[1800px] max-w-[95vw] w-[1200px] h-30 rounded-full shadow-lg px-20 py-4 flex items-center justify-between z-10">
        <a className="text-3xl pl-2 font-bold text-gray-900 cursor-pointer hover:text-black"
          onClick={() => setActiveMenu('Home')}

        >
          SIPRATIK</a>
        {/* menu */}
        <div className="flex items-center space-x-4 gap-10">
          <h2>............</h2>
          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'Home' ? 'font-bold text-blue-900' : 'text-black hover:text-gray-600'}`}
            onClick={() => setActiveMenu('Home')}
          >
            <ClipboardList className="w-7 h-7" />
            <p className='text-xl'>Home</p>
          </a>
          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'history' ? 'font-bold text-blue-900' : 'text-black hover:text-gray-600'}`}
            onClick={() => setActiveMenu('history')}
          >
            <History className="w-7 h-7" />
            <p className='text-xl'>History</p>
          </a>
          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'pinjam' ? 'font-bold text-blue-900' : 'text-black hover:text-gray-600'}`}
            onClick={() => setActiveMenu('pinjam')}
          >
            <Package className="w-7 h-7" />
            <p className='text-xl'>Pinjam</p>
          </a>
        </div>
        {/* Tombol logout */}
        <div className="flex items-center space-x-8 pr-8">
          <button
            onClick={handleLogout}
            className="flex items-center rounded-xl hover:bg-gray-800 bg-black focus:outline-none px-6 py-4"
          >
            <div className="text-white font-bold">
              LOGOUT
            </div>
          </button>

          <button
            onClick={() => setActiveMenu('profile')}
            className="flex items-center rounded-full hover:bg-gray-200 bg-white outline outline-1 outline-gray-200 focus:outline-none px-3 py-3"
          >
            <User className="w-8 h-8 text-black" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 pt-24">
        {activeMenu === 'Home' && <HomeContent />}
        {activeMenu === 'history' && <HistoryContent />}
        {activeMenu === 'pinjam' && <PinjamContent />}
        {activeMenu === 'profile' && <ProfileContent />}
      </div>

      {/* Modal untuk detail booking */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Detail Peminjaman</h3>
            <div className="text-black space-y-3">
              <div>
                <span className="font-medium">Ruang:</span> {selectedBooking.room}
              </div>
              <div>
                <span className="font-medium">Tanggal:</span> {selectedBooking.date}
              </div>
              <div>
                <span className="font-medium">Waktu:</span> {selectedBooking.time}
              </div>
              <div>
                <span className="font-medium">Lokasi:</span> {selectedBooking.building}
              </div>
              <div>
                <span className="font-medium">Status:</span>
                <span className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${selectedBooking.statusColor}`}>
                  {selectedBooking.status}
                </span>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setSelectedBooking(null)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Tutup
              </button>
              {selectedBooking.status === 'Aktif' && (
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  Batalkan
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleConfirmLogout}
        userRole="User"
      />
    </div>
  );
}