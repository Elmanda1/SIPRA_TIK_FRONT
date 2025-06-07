import React, { useState } from 'react';

const barangPerKategori = {
  'ruang-kelas': [
    { id: 'meja', nama: 'Meja', jumlah: 20 },
    { id: 'kursi', nama: 'Kursi', jumlah: 40 },
    { id: 'papan-tulis', nama: 'Papan Tulis', jumlah: 2 }
  ],
  'peralatan-av': [
    { id: 'proyektor', nama: 'Proyektor', jumlah: 5 },
    { id: 'speaker', nama: 'Speaker', jumlah: 3 },
    { id: 'microphone', nama: 'Microphone', jumlah: 4 }
  ],
  'perangkat-komputer': [
    { id: 'pc', nama: 'PC', jumlah: 10 },
    { id: 'monitor', nama: 'Monitor', jumlah: 10 },
    { id: 'keyboard-mouse', nama: 'Keyboard & Mouse', jumlah: 10 }
  ],
  'peralatan-jaringan': [
    { id: 'router', nama: 'Router', jumlah: 3 },
    { id: 'switch', nama: 'Switch', jumlah: 2 },
    { id: 'kabel-utp', nama: 'Kabel UTP', jumlah: 100 }
  ],
  'peralatan-listrik': [
    { id: 'stop-kontak', nama: 'Stop Kontak', jumlah: 8 },
    { id: 'kabel-roll', nama: 'Kabel Roll', jumlah: 4 },
    { id: 'lampu', nama: 'Lampu', jumlah: 10 }
  ],
  'lainnya': [
    { id: 'papan-pengumuman', nama: 'Papan Pengumuman', jumlah: 2 },
    { id: 'dispenser', nama: 'Dispenser', jumlah: 1 },
    { id: 'lain-lain', nama: 'Lain-lain', jumlah: 0 }
  ]
};

const PinjamContent = () => {
  const [selectedKategori, setSelectedKategori] = useState('');
  const [selectedBarang, setSelectedBarang] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...logic submit kamu di sini...
    setShowAlert(true);
  };

  return (
    <div className="flex flex-col items-center w-full  min-h-[80vh] py-10 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Form Peminjaman Barang</h2>
      <div className="bg-white/30 bg-opacity-50 backdrop-blur-sm rounded-xl w-full max-w-2xl p-12">
        {/* Alert Modal */}
        {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <span className="text-xl font-bold mb-4 text-green-700">Peminjaman berhasil disubmit</span>
              <button
                className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setShowAlert(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
        {/* Form */}
        <form
          className="flex flex-col gap-5 items-start"
          onSubmit={handleSubmit}
        >
          {/* Dropdown Kategori */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Kategori Barang</label>
            <select
              className="border rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              defaultValue=""
              onChange={e => {
                setSelectedKategori(e.target.value);
                setSelectedBarang('');
              }}
            >
              <option value="" disabled>Pilih Kategori</option>
              <option value="ruang-kelas">Ruang Kelas</option>
              <option value="peralatan-av">Peralatan AV</option>
              <option value="perangkat-komputer">Perangkat Komputer</option>
              <option value="peralatan-jaringan">Peralatan Jaringan</option>
              <option value="peralatan-listrik">Peralatan Listrik</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
          {/* Barang yang Dipinjam */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Barang yang Dipinjam</label>
            <select
              className="border rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              value={selectedBarang}
              onChange={e => setSelectedBarang(e.target.value)}
              disabled={!selectedKategori}
            >
              <option value="" disabled>
                {selectedKategori ? 'Pilih Barang' : 'Pilih kategori dulu'}
              </option>
              {selectedKategori &&
                barangPerKategori[selectedKategori]?.map(barang => (
                  <option key={barang.id} value={barang.id}>
                    {barang.nama}
                  </option>
                ))}
            </select>
            {/* Tampilkan jumlah barang jika sudah dipilih */}
            {selectedBarang && (
              <div className="mt-2 text-gray-700 text-sm">
                Jumlah tersedia:{' '}
                <span className="font-semibold">
                  {barangPerKategori[selectedKategori].find(b => b.id === selectedBarang)?.jumlah ?? '-'}
                </span>
              </div>
            )}
          </div>
          {/* Durasi Peminjaman */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Durasi peminjaman</label>
            <div className="flex gap-2">
              <select
                className="border rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-36"
                defaultValue="08:00"
              >
                <option value="08:00">08.00</option>
                <option value="09:00">09.00</option>
                <option value="10:00">10.00</option>
                <option value="11:00">11.00</option>
                <option value="12:00">12.00</option>
                <option value="13:00">13.00</option>
                <option value="14:00">14.00</option>
                <option value="15:00">15.00</option>
                <option value="16:00">16.00</option>
                <option value="17:00">17.00</option>
                <option value="18:00">18.00</option>
              </select>
              <span className="self-center font-medium text-gray-700">Sampai</span>
              <select
                className="border rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-36"
                defaultValue="09:00"
              >
                <option value="08:00">08.00</option>
                <option value="09:00">09.00</option>
                <option value="10:00">10.00</option>
                <option value="11:00">11.00</option>
                <option value="12:00">12.00</option>
                <option value="13:00">13.00</option>
                <option value="14:00">14.00</option>
                <option value="15:00">15.00</option>
                <option value="16:00">16.00</option>
                <option value="17:00">17.00</option>
                <option value="18:00">18.00</option>
              </select>
            </div>
          </div>
          {/* Nama Lengkap */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              className="border rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              value="Muhammad Rafif Dwarka"
              readOnly
            />
          </div>
          {/* NIM */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">NIM</label>
            <input
              type="text"
              className="border rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              value="2407411078"
              readOnly
            />
          </div>
          {/* Kelas */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Kelas</label>
            <input
              type="text"
              className="border rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              value="TI 2C"
              readOnly
            />
          </div>
          {/* No Hp */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">No.Hp</label>
            <input
              type="text"
              className="border rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
              value="081213020861"
              readOnly
            />
          </div>
          {/* Keterangan */}
          <div className="w-full flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700">Keterangan</label>
            <textarea
              className="border rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400 w-96"
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
};

export default PinjamContent;