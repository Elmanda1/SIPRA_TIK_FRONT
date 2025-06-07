import React, { useState } from 'react';
import { MapPin, Filter } from 'lucide-react';

const BookingTable = ({ title, bookings, handleBookingClick }) => (
  <div className="bg-white rounded-xl shadow-sm mb-8">
    <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <button className="p-2 text-gray-400 bg-white hover:text-gray-600">
        <Filter className="w-5 h-5" />
      </button>
    </div>
    <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
      <div className="grid grid-cols-7 gap-4 text-sm font-medium text-gray-700">
        <div>Nama Ruang</div>
        <div>Tanggal Peminjaman</div>
        <div>Durasi Peminjaman</div>
        <div>Lokasi</div>
        <div>Barang</div>
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
          onClick={() => handleBookingClick && handleBookingClick(booking)}
        >
          <div className="grid grid-cols-7 gap-4 items-center">
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
            <div className="text-gray-900">{booking.barang || '-'}</div>
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

const HistoryContent = ({ handleBookingClick }) => {
  const [activeBookings] = useState([
    {
      id: 1,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '06 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Aktif',
      statusColor: 'bg-blue-100 text-blue-800'
    }
  ]);

  const [historyBookings] = useState([
    {
      id: 2,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
      barang: 'Proyektor'
    },
    {
      id: 3,
      room: 'Ruang AA 204',
      building: 'Gedung AA',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Dibatalkan',
      statusColor: 'bg-red-100 text-red-800',
      barang: 'Meja'
    },
    {
      id: 4,
      room: 'Lab Komputer',
      building: 'Gedung BB',
      date: '10 Apr 2025',
      time: '13:00 - 15:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
      barang: 'PC'
    },
    {
      id: 5,
      room: 'Ruang Rapat',
      building: 'Gedung CC',
      date: '12 Apr 2025',
      time: '08:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
      barang: 'Speaker'
    }
  ]);

  return (
    <div className='mt-10'>
      <BookingTable title="Pinjaman Aktif" bookings={activeBookings} handleBookingClick={handleBookingClick} />
      <BookingTable title="History" bookings={historyBookings} handleBookingClick={handleBookingClick} />
    </div>
  );
};

export default HistoryContent;