import React from 'react';
import { Building2, Video, Monitor, Network, Zap, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeContent = ({ setActiveMenu, blueContainerRef, handleKategoriClick }) => {
  const navigate = useNavigate();
  
  return (
    <div className=" flex flex-col items-center justify-center min-h-[60vh] mt-20">
      <div className=' flex flex-col w-full items-center justify-center pb-20 bg-opacity-80 backdrop-blur-sm rounded-xl pt-20'>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-12">
          Selamat Datang di SIPRATIK!
        </h1>
        <p className="text-2xl text-gray-600 text-center mb-12 max-w-2xl">
          Sistem Peminjaman Sarana Prasarana Kampus untuk Mahasiswa dan Dosen
        </p>
        <div className='flex flex-row items-center justify-center gap-4 mb-5'>
          <button
            onClick={() => setActiveMenu('pinjam')}
            className="px-8 py-3 bg-[#00A8E8] hover:bg-[#33BBF3] text-white font-bold rounded-lg shadow transition"
          >
            PINJAM SEKARANG
          </button>

          <button
            onClick={() => {
              if (blueContainerRef.current) {
                blueContainerRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-[#00A8E8] hover:bg-[#33BBF3] text-white font-bold rounded-lg shadow transition"
          >
            LIHAT SARPRAS
          </button>
        </div>
        <p className="text-gray-600 pl-4">
          Lihat{" "}
          <a 
            onClick={() => setActiveMenu('ketentuan')} 
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
          >
            Syarat & Ketentuan
          </a>
          {" "} Disini
        </p>
      </div>
      
      <div className=' flex flex-col items-center justify-center  w-[80vw] h-[100vh] p-12 mt-10'>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          Politeknik Negeri Jakarta
        </h1>
        <iframe className='w-full h-full rounded-xl' src="https://www.youtube.com/embed/Im00a5ZL46I?si=UjdkRQsGxlySgfqp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <div
        ref={blueContainerRef}
        className=' flex flex-col items-center justify-start rounded-[30px] w-[80vw] min-h-[80vh] p-12 mt-10'
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8">
          Kategori Sarana Prasarana
        </h1>
        <p className="text-2xl text-gray-600 text-center mb-12 max-w-2xl">
          Pilih kategori sarana prasarana yang Anda butuhkan
        </p>

        <div className="w-full max-w-7xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="transition hover:scale-[1.03] duration-400 cursor-pointer bg-white bg-opacity-50 rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center"
            onClick={() => handleKategoriClick('ruang-kelas')}
          >
            <Building2 className="w-14 h-14 text-gray-800 mb-8" />
            <span className="text-3xl font-bold text-sky-600 mb-2">Ruang Kelas</span>
            <p className="text-gray-600 text-center">Peminjaman ruang kelas untuk kegiatan belajar mengajar.</p>
          </div>
          <div
            className="transition hover:scale-[1.03] duration-400 cursor-pointer bg-white bg-opacity-50 rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center"
            onClick={() => handleKategoriClick('peralatan-av')}
          >
            <Video className="w-14 h-14 text-gray-800 mb-8" />
            <span className="text-3xl font-bold text-sky-600 mb-2">Peralatan AV</span>
            <p className="text-gray-600 text-center">Peminjaman laboratorium komputer dan alat praktikum.</p>
          </div>
          <div
            className="transition hover:scale-[1.03] duration-400 cursor-pointer bg-white bg-opacity-50 rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center"
            onClick={() => handleKategoriClick('perangkat-komputer')}
          >
            <Monitor className="w-14 h-14 text-gray-800 mb-8" />
            <span className="text-3xl font-bold text-sky-600 mb-2">Perangkat Komputer</span>
            <p className="text-gray-600 text-center">Peminjaman alat elektronik, proyektor, dan lainnya.</p>
          </div>
          <div
            className="transition hover:scale-[1.03] duration-400 cursor-pointer bg-white bg-opacity-50 rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center"
            onClick={() => handleKategoriClick('peralatan-jaringan')}
          >
            <Network className="w-14 h-14 text-gray-800 mb-8" />
            <span className="text-3xl font-bold text-sky-600 mb-2">Peralatan Jaringan</span>
            <p className="text-gray-600 text-center">Router, switch, kabel UTP, tester, dan alat jaringan lainnya.</p>
          </div>
          <div
            className="transition hover:scale-[1.03] duration-400 cursor-pointer bg-white bg-opacity-50 rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center"
            onClick={() => handleKategoriClick('peralatan-listrik')}
          >
            <Zap className="w-14 h-14 text-gray-800 mb-8" />
            <span className="text-3xl font-bold text-sky-600 mb-2">Peralatan Listrik</span>
            <p className="text-gray-600 text-center">Peralatan listrik seperti kabel, stop kontak, dan lainnya.</p>
          </div>
          <div
            className="transition hover:scale-[1.03] duration-400 cursor-pointer bg-white bg-opacity-50 rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center"
            onClick={() => handleKategoriClick('lainnya')}
          >
            <MoreHorizontal className="w-14 h-14 text-gray-800 mb-8" />
            <span className="text-3xl font-bold text-sky-600 mb-2">Lainnya</span>
            <p className="text-gray-600 text-center">Kategori sarana prasarana lainnya sesuai kebutuhan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;