import React, { useState } from 'react';
import { MapPin, User, Search, Filter } from 'lucide-react';

export default function BookingInterface() {
  const [selectedBooking, setSelectedBooking] = useState(null);

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
        <button className="p-2 text-gray-400 hover:text-gray-600">
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
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Detail
                  </button>
                )}
                {booking.status === 'Dibatalkan' && (
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-indigo-600">Spratik</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari peminjaman..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Pinjaman Aktif di atas, History di bawah */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        <BookingTable title="Pinjaman Aktif" bookings={activeBookings} />
        <BookingTable title="History" bookings={historyBookings} />
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