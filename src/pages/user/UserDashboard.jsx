import React, { useRef, useState } from 'react';
import { MapPin, User, Search, Filter, History, Package, ClipboardList, Building2, Monitor, Network, Video, Zap, MoreHorizontal, Boxes } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LogoutModal from '../../components/common/LogoutModal';
import profileImg from '../../assets/profile.jpg';
import HomeContent from './HomeContent';
import ProfileContent from './ProfileContent';
import BarangContent from './BarangContent';
import HistoryContent from './HistoryContent';
import PinjamContent from './PinjamContent';

export default function UserDashboard() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [activeMenu, setActiveMenu] = useState('Home'); // default: home
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const blueContainerRef = useRef(null);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setShowLogoutModal(false);
    // Optional: Show success message or toast notification
    console.log('User logged out successfully');
  };

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
  };

    // Fungsi untuk menangani klik pada kategori di homepage
  const handleKategoriClick = (id) => {
    // Ubah menu aktif menjadi Barang (menampilkan BarangContent)
    setActiveMenu('Barang');
    // Tunggu 100ms agar konten BarangContent sudah dirender
    setTimeout(() => {
      // Cari elemen dengan id sesuai kategori (misal: 'ruang-kelas')
      const barang = document.getElementById(id);
      if (barang) {
        // Hitung posisi scroll agar elemen berada di tengah layar
        const y = barang.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (barang.offsetHeight / 2);
        // Scroll ke posisi tersebut dengan animasi smooth
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div
      className="min-h-screen w-[99vw]"
      style={{
        background: "linear-gradient(0deg, #EAF1F8 40%,rgb(210, 250, 255) 100%)"
      }}
    >
      {/* Header */}
      <div className="bg-white/30 bg-opacity-50 backdrop-blur-sm fixed top-4 left-1/2 transform -translate-x-1/2 min-w-[1800px] max-w-[95vw] w-[1200px] h-30 rounded-full shadow-lg px-20 py-4 flex items-center justify-between z-10">
        <a className="text-3xl pl-2 font-bold text-gray-900 cursor-pointer hover:text-black"
          onClick={() => setActiveMenu('Home')}

        >
          SIPRATIK
        </a>
        {/* menu */}
        <div className="flex items-center space-x-4 gap-10">
          <h2 className='opacity-0'>............</h2>

          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'pinjam' ? 'font-bold text-blue-900' : 'text-black hover:text-gray-600'}`}
            onClick={() => setActiveMenu('pinjam')}
          >
            <Package className="w-7 h-7" />
            <p className='text-xl'>Pinjam</p>
          </a>

          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'Barang' ? 'font-bold text-blue-900' : 'text-black hover:text-gray-600'}`}
            onClick={() => setActiveMenu('Barang')}
          >
            <Boxes className="w-7 h-7" />
            <p className='text-xl'>Barang</p>
          </a>
          
          <a
            className={`flex flex-row gap-2 cursor-pointer ${activeMenu === 'history' ? 'font-bold text-blue-900' : 'text-black hover:text-gray-600'}`}
            onClick={() => setActiveMenu('history')}
          >
            <History className="w-7 h-7" />
            <p className='text-xl'>History</p>
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
            className="flex items-center rounded-full hover:ring-2 hover:ring-blue-400 bg-white outline outline-1 outline-gray-200 focus:outline-none p-0"
            style={{ width: 48, height: 48, overflow: 'hidden' }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-12 h-12 object-cover rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 pt-24">
        {activeMenu === 'Home' && (
          <HomeContent
            setActiveMenu={setActiveMenu}
            blueContainerRef={blueContainerRef}
            handleKategoriClick={handleKategoriClick}
          />
        )}
        {activeMenu === 'Barang' && <BarangContent />}
        {activeMenu === 'history' && (
          <HistoryContent handleBookingClick={handleBookingClick} />
        )}
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