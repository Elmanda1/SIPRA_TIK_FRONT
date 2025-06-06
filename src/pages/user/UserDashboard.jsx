import React, { useState } from 'react';
import { MapPin, User, Search, Filter ,History, Package, ClipboardList, Archive } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function BookingInterface() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [activeMenu, setActiveMenu] = useState('Home'); // default: home
  const navigate = useNavigate();
  const { logout } = useAuth();

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
                  <button className="text-blue-600 bg-white hover:text-blue-800 text-sm font-medium">
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
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8">
        Web Development Blog @<br />Material Tailwind
      </h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl">
        Expand your web development knowledge with our tutorials and learning articles.
      </p>
      <form
        className="flex flex-col md:flex-row items-center gap-4 mb-4"
        onSubmit={e => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="name@creative-tim.com"
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-black text-white font-bold rounded-lg shadow hover:bg-gray-800 transition"
        >
          GET STARTED
        </button>
      </form>
      <p className="text-gray-600">
        See our{" "}
        <a href="#" className="underline">
          Terms and Conditions
        </a>
      </p>
    </div>
  );

  const HistoryContent = () => (
    <div className='overflow-y-auto'>
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
      <div className="bg-white border rounded-xl shadow-sm w-full max-w-4xl p-8">
        {/* Header */}
        <div className="flex items-center border-b pb-4 mb-6">
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <User className="w-14 h-14 text-gray-400" />
          </div>
          <div>
            <div className="font-bold text-xl text-gray-900">Muhammad Rafif Dwarka</div>
            <div className="text-lg text-gray-600">2407411078</div>
            <div className="text-lg text-gray-600">TI 2C</div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="border rounded-lg p-6 mb-8">
          <div className="font-semibold text-gray-700 mb-4">Personal Information</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className='text-black'>
              <span className="font-semibold">First name</span><br />
              Muhammad Rafif
            </div>
            <div className='text-black'>
              <span className="font-semibold">Last name</span><br />
              Dwarka
            </div>
            <div className='text-black'>
              <span className="font-semibold">Phone</span><br />
              0821-1302-0861
            </div>
            <div className='text-black'>
              <span className="font-semibold">Program Studi</span><br />
              Sarjana Terapan - Teknik Informatika
            </div>
            <div className='text-black'>
              <span className="font-semibold">Role</span><br />
              Mahasiswa
            </div>
            <div className='text-black'>
              <span className="font-semibold">Alamat</span><br />
              Puri Depok mas blok L no 15
            </div>
            <div className='text-black'>
              <span className="font-semibold">Kota</span><br />
              Depok
            </div>
            <div className='text-black'>
              <span className="font-semibold">Provinsi</span><br />
              Jawa Barat
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-gray-700">Account Information</span>
            <button className="text-xs text-gray-600 border px-2 py-1 rounded hover:bg-gray-100 flex items-center gap-1 focus:outline-none bg-white">
              Change Password
            </button>
          </div>
          <div className="mb-2 text-sm text-black">
            <span className="font-semibold">Email</span><br />
            Muhammad.Rafif.Dwarka.1824@sttupnj.ac.id
          </div>
          <div className="text-sm text-black">
            <span className="font-semibold">Password</span><br />
            <span>●●●●●●●●●</span>
          </div>
        </div>
      </div>
    </div>
  );
  const PinjamContent = () => (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center text-2xl font-bold text-gray-700">
      Pinjam Page (dummy)
    </div>
  );

  return (
    <div className="min-h-screen w-[99vw] bg-gray-50">
      {/* Header */}
      <div className="bg-white/80 bg-opacity-95 backdrop-blur fixed w-screen h-20 shadow-sm border-b border-gray-200 px-72 py-4 flex items-center justify-between z-10">
        <h1 className="text-3xl pl-2 font-bold text-gray-900">SIPRATIK</h1>
        {/* menu */}
        <div className="flex items-center space-x-4 gap-10">
          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'Home' ? 'font-bold text-blue-600' : 'text-black'}`}
            onClick={() => setActiveMenu('Home')}
          >
            <ClipboardList className="w-7 h-7" />
            <p className='text-xl'>Home</p>
          </a>
          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'history' ? 'font-bold text-blue-600' : 'text-black'}`}
            onClick={() => setActiveMenu('history')}
          >
            <History className="w-7 h-7" />
            <p className='text-xl'>History</p>
          </a>
          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'profile' ? 'font-bold text-blue-600' : 'text-black'}`}
            onClick={() => setActiveMenu('profile')}
          >
            <User className="w-7 h-7" />
            <p className='text-xl'>Profile</p>
          </a>
          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'pinjam' ? 'font-bold text-blue-600' : 'text-black'}`}
            onClick={() => setActiveMenu('pinjam')}
          >
            <Package className="w-7 h-7" />
            <p className='text-xl'>Pinjam</p>
          </a>
        </div>
        {/* Tombol logout */}
        <div className="flex items-center space-x-4 pr-8">
          <button
            onClick={logout}
            className="flex items-center rounded-xl hover:bg-gray-800 bg-black focus:outline-none px-6 py-4"
          >
            <div className="text-white font-bold">
              LOGOUT
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 pt-24">
        {activeMenu === 'Home' && <HomeContent />}
        {activeMenu === 'history' && <HistoryContent />}
        {activeMenu === 'profile' && <ProfileContent />}
        {activeMenu === 'pinjam' && <PinjamContent />}
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
    </div>
  );
}