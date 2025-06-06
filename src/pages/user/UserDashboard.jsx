import React, { useState } from 'react';
import { MapPin, User, Search, Filter ,History, Package, ClipboardList, Archive } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function BookingInterface() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [activeMenu, setActiveMenu] = useState('history'); // default: history
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
    }
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
      <div className="divide-y divide-gray-200">
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

  // Dummy content untuk Profile dan Pinjam
  const ProfileContent = () => (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center text-2xl font-bold text-gray-700">
      Profile Page (dummy)
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
          {activeMenu === 'history' && (
          <>
            <BookingTable title="Pinjaman Aktif" bookings={activeBookings} />
            <BookingTable title="History" bookings={historyBookings} />
          </>
        )}
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