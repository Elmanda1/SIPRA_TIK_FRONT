import React, { useRef, useState } from 'react';
import { MapPin, User, Search, Filter, History, Package, ClipboardList, Building2, Monitor, Network, Video, Zap, MoreHorizontal, Boxes } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { usePeminjaman } from '../../context/PeminjamanContext';
import logoImg from '../../assets/SIPRATIK.png';
import LogoutModal from '../../components/common/LogoutModal';
import profileImg from '../../assets/profile.jpg';
import HomeContent from './HomeContent';
import ProfileContent from './ProfileContent';
import BarangContent from './BarangContent';
import HistoryContent from './HistoryContent';
import PinjamContent from './PinjamContent';
import KetentuanContent from './KetentuanContent';

export default function UserDashboard() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [activeMenu, setActiveMenu] = useState('Home'); // default: home
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { updatePeminjamanStatus } = usePeminjaman(); // Tambahkan ini
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

  // Fungsi untuk membatalkan peminjaman
  const handleCancelBooking = (bookingId) => {
    updatePeminjamanStatus(bookingId, 'Dibatalkan');
    setSelectedBooking(null);
    console.log('Peminjaman dibatalkan');
  };

  // Fungsi untuk menyelesaikan peminjaman
  const handleCompleteBooking = (bookingId, status, penaltyData = null) => {
    const finalStatus = penaltyData?.amount > 0 ? 'Penalty' : 'Selesai';
    
    if (penaltyData) {
      // Update dengan status penalty jika ada denda
      updatePeminjamanStatus(bookingId, finalStatus, {
        penaltyAmount: penaltyData.amount,
        penaltyPhoto: penaltyData.photo,
        penaltyNotes: penaltyData.notes,
        totalDenda: penaltyData.totalPenalty
      });
      console.log('Peminjaman selesai dengan penalty:', penaltyData);
    } else {
      // Update dengan status selesai jika tidak ada denda
      updatePeminjamanStatus(bookingId, finalStatus);
      console.log('Peminjaman selesai normal');
    }
    setSelectedBooking(null);
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
        background: "linear-gradient(180deg, rgb(210, 250, 255) 0px, #EAF1F8 1000px)"
      }}
    >
      {/* Header */}
      <div className="bg-white/30 bg-opacity-50 backdrop-blur-sm fixed top-4 left-1/2 transform -translate-x-1/2 min-w-[1800px] max-w-[95vw] w-[1200px] h-30 rounded-full shadow-lg px-20 py-4 flex items-center justify-between z-10">
        <a className="text-3xl pl-2 font-bold text-gray-900 cursor-pointer hover:text-black"
          onClick={() => setActiveMenu('Home')}
        >
         <img
              src={logoImg}
              alt="Logo"
              className="w-70 h-10"
         />
        </a>
        {/* menu */}
        <div className="flex items-center space-x-4 gap-10">
          <h2 className='opacity-0'>............</h2>

          <a
            className={`flex flex-row gap-2 cursor-pointer hover:text-cyan-600 ${activeMenu === 'pinjam' ? 'font-bold text-cyan-600' : 'text-black hover:text-gray-600' }`}
            onClick={() => setActiveMenu('pinjam')}
          >
            <Package className="w-7 h-7" />
            <p className='text-xl'>Pinjam</p>
          </a>

          <a
            className={`flex flex-row gap-2 cursor-pointer hover:text-cyan-600 ${activeMenu === 'Barang' ? 'font-bold text-cyan-600' : 'text-black hover:text-gray-600'}`}
            onClick={() => setActiveMenu('Barang')}
          >
            <Boxes className="w-7 h-7" />
            <p className='text-xl'>Barang</p>
          </a>
          
          <a
            className={`flex flex-row gap-2 cursor-pointer hover:text-cyan-600 ${activeMenu === 'history' ? 'font-bold text-cyan-600' : 'text-black hover:text-gray-600'}`}
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
            className="flex items-center rounded-xl transition-all hover:bg-sky-600 hover:bg-opacity-20 duration-200 focus:outline-none px-6 py-4 hover:shadow-lg"
          >
            <div className="text-black font-bold">
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
          <HistoryContent 
            handleBookingClick={handleBookingClick}
            selectedBooking={selectedBooking}
            setSelectedBooking={setSelectedBooking}
            handleCancelBooking={handleCancelBooking}
            handleCompleteBooking={handleCompleteBooking}
          />
        )}
        {activeMenu === 'pinjam' && <PinjamContent />}
        {activeMenu === 'profile' && <ProfileContent />}
        {activeMenu === 'ketentuan' && <KetentuanContent />}
      </div>

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