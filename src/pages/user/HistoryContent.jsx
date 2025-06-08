import React, { useState } from 'react';
import { MapPin, Filter, AlertCircle } from 'lucide-react';
import { usePeminjaman } from '../../context/PeminjamanContext';

const BookingTable = ({ title, bookings, handleBookingClick }) => (
  <div className="bg-white rounded-xl shadow-sm mb-8">
    <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <button className="p-2 text-gray-400 bg-white hover:text-gray-600">
        <Filter className="w-5 h-5" />
      </button>
    </div>
    <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
      <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-700">
        <div>Nama Barang</div>
        <div>Tanggal Peminjaman</div>
        <div>Durasi Peminjaman</div>
        <div>Kategori</div>
        <div>Status</div>
        <div className='ml-5'>Aksi</div>
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
          <div className="grid grid-cols-6 gap-4 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{booking.room}</div>
              </div>
            </div>
            <div className="text-gray-900">{booking.date}</div>
            <div className="text-gray-900">{booking.time}</div>
            <div className="text-gray-900">{booking.building}</div>
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                booking.status === 'Aktif' ? 'bg-blue-100 text-blue-800' :
                booking.status === 'Menunggu Verifikasi' ? 'bg-yellow-100 text-yellow-800' :
                booking.status === 'Dibatalkan' ? 'bg-red-100 text-red-800' :
                booking.status === 'Selesai' ? 'bg-green-100 text-green-800' :
                booking.status === 'Penalty' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {booking.status}
              </span>
            </div>
            <div className="flex space-x-2">
              {booking.status === 'Aktif' && (
                <button className="text-blue-900 bg-white shadow-lg hover:text-blue-900 text-sm font-medium">
                  Detail
                </button>
              )}
              {booking.status === 'Menunggu Verifikasi' && (
                <button className="text-blue-900 bg-white shadow-lg hover:text-blue-900 text-sm font-medium">
                  Detail
                </button>
              )}
              {booking.status === 'Dibatalkan' && (
                <button className="text-blue-900 bg-white shadow-lg hover:text-blue-900 text-sm font-medium">
                  Detail
                </button>
              )}
              {booking.status === 'Selesai' && (
                <button className="text-blue-900 bg-white shadow-lg hover:text-blue-900 text-sm font-medium">
                  Detail
                </button>
              )}
              {booking.status === 'Penalty' && (
                <button className="text-blue-900 bg-white shadow-lg hover:text-blue-900 text-sm font-medium">
                  Detail
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HistoryContent = ({ 
  handleBookingClick, 
  selectedBooking, 
  setSelectedBooking,
  handleCancelBooking,
  handleCompleteBooking 
}) => {
  const { peminjamanHistory } = usePeminjaman();
  const [showPenaltyModal, setShowPenaltyModal] = useState(false);
  const [bookingToComplete, setBookingToComplete] = useState(null);
  const [penaltyData, setPenaltyData] = useState({
    photo: null,
    amount: '',
    notes: ''
  });

  const activeBookings = peminjamanHistory.filter(booking => booking.status === 'Aktif' || booking.status === 'Menunggu Verifikasi');
  const historyBookings = peminjamanHistory.filter(booking => booking.status !== 'Aktif' && booking.status !== 'Menunggu Verifikasi');

  const handlePenaltyInput = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setPenaltyData(prev => ({
        ...prev,
        photo: files[0]
      }));
    } else {
      setPenaltyData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePenaltyConfirm = (e) => {
    e.preventDefault();
    if (bookingToComplete) {
      const amount = parseInt(penaltyData.amount);
      const hasPenalty = amount > 0;
      const newStatus = hasPenalty ? 'Penalty' : 'Selesai';
      
      // Debug logs
      console.log('Amount:', amount);
      console.log('Has Penalty:', hasPenalty);
      console.log('New Status:', newStatus);
      
      if (hasPenalty && !penaltyData.photo) {
        alert('Foto kerusakan wajib diupload jika ada denda');
        return;
      }

      handleCompleteBooking(
        bookingToComplete.id, 
        newStatus,
        hasPenalty ? penaltyData : null
      );
      
      // Reset states
      setShowPenaltyModal(false);
      setBookingToComplete(null);
      setSelectedBooking(null);
      setPenaltyData({ photo: null, amount: '', notes: '' });
    }
  };

  const initiateCompletion = (booking) => {
    setBookingToComplete(booking);
    setShowPenaltyModal(true);
  };

  return (
    <div className='mt-10'>
      <BookingTable title="Pinjaman Aktif" bookings={activeBookings} handleBookingClick={handleBookingClick} />
      <BookingTable title="History Peminjaman" bookings={historyBookings} handleBookingClick={handleBookingClick} />

      {/* Modal untuk detail booking */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg text-black font-bold mb-4">Detail Peminjaman</h3>
            <div className="text-black space-y-3">
              <div>
                <span className="font-medium">Nama Barang: </span> {selectedBooking.room}
              </div>
              <div>
                <span className="font-medium">Tanggal:</span> {selectedBooking.date}
              </div>
              <div>
                <span className="font-medium">Waktu:</span> {selectedBooking.time}
              </div>
              <div>
                <span className="font-medium">Kategori:</span> {selectedBooking.building}
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
                className="px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Tutup
              </button>
              {selectedBooking.status === 'Menunggu Verifikasi' && (
                <button 
                  onClick={() => handleCancelBooking(selectedBooking.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Batalkan
                </button>
              )}
              {selectedBooking.status === 'Aktif' && (
                <button 
                  onClick={() => initiateCompletion(selectedBooking)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Selesai Peminjaman
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Penalty Confirmation Modal */}
      {showPenaltyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Form Pengembalian dengan Denda</h3>
            </div>

            <form onSubmit={handlePenaltyConfirm} className="space-y-6">
              {/* Detail Peminjaman - Readonly */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Detail Peminjaman:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Nama Barang:</p>
                    <p className="font-medium text-black">{bookingToComplete?.room}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Tanggal Peminjaman:</p>
                    <p className="font-medium text-black">{bookingToComplete?.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Durasi:</p>
                    <p className="font-medium text-black">{bookingToComplete?.time}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Kategori:</p>
                    <p className="font-medium text-black">{bookingToComplete?.building}</p>
                  </div>
                </div>
              </div>

              {/* Form Denda */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Foto Pengembalian
                  </label>
                  <input
                    type="file"
                    name="photo"
                    onChange={handlePenaltyInput}
                    accept="image/*"
                    className=" py-2 px-3 text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Telat (dalam jam)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={penaltyData.amount}
                    onChange={handlePenaltyInput}
                    className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black focus:outline-none"
                    placeholder="isi 0 jika tepat waktu"
                    required
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800"
                >
                  Simpan & Selesaikan
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPenaltyModal(false);
                    setBookingToComplete(null);
                    setPenaltyData({ photo: null, amount: '', notes: '' });
                  }}
                  className="px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryContent;