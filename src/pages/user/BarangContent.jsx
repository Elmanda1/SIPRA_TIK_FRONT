import React from 'react';
import { Building2, Video, Monitor, Network, Zap, MoreHorizontal, MapPin, Filter } from 'lucide-react';

const BarangTable = ({ title, Icon, items }) => (
  <div className="bg-white rounded-xl shadow-sm mb-8">
    <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Icon className="w-7 h-7 text-blue-700" />
        <h2 className="text-2xl font-bold text-blue-700">{title}</h2>
      </div>
      <button className="p-2 text-gray-400 bg-white hover:text-gray-600">
        <Filter className="w-5 h-5" />
      </button>
    </div>
    
    <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
      <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700">
        <div>Foto</div>        
        <div>Nama Barang</div>
        <div className="text-center">Jumlah</div>
        <div>Keterangan</div>
      </div>
    </div>

    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
          <div className="grid grid-cols-4 gap-4 items-center">
            {/* Foto dipindah ke awal */}
            <div className="w-24 h-18 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={item.image || "/src/assets/dummy-barang.png"}
                alt={`Foto ${item.name}`}
                className="object-cover w-full h-full"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
            {/* Nama barang dengan icon */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="font-medium text-gray-900">{item.name}</div>
            </div>
            <div className="text-gray-900 text-center">{item.quantity}</div>
            <div className="text-gray-900">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BarangContent = () => {
  const ruangKelas = [
    { name: 'Ruangan AA 204', quantity: 1, description: 'Ruang belajar Gedung AA', image: '/src/assets/STIK.png' },
    { name: 'Ruangan AA 205', quantity: 1, description: 'Ruang belajar Gedung AA' },
    { name: 'Ruangan AA 206', quantity: 1, description: 'Ruang belajar Gedung AA' },
    { name: 'Ruangan AA 207', quantity: 1, description: 'Ruang belajar Gedung AA' },
    { name: 'Ruangan AA 210', quantity: 1, description: 'Ruang belajar Gedung AA' },
    { name: 'Ruangan AA 211', quantity: 1, description: 'Ruang belajar Gedung AA' },
    { name: 'Ruangan AA 213', quantity: 1, description: 'Ruang belajar Gedung AA' },
    { name: 'Ruangan GSG 301', quantity: 1, description: 'Ruang belajar Gedung GSG' },
    { name: 'Ruangan GSG 302', quantity: 1, description: 'Ruang belajar Gedung GSG' },
    { name: 'Ruangan GSG 303', quantity: 1, description: 'Ruang belajar Gedung GSG' },
    { name: 'Ruangan GSG 304', quantity: 1, description: 'Ruang belajar Gedung GSG' },
    { name: 'Ruangan GSG 305', quantity: 1, description: 'Ruang belajar Gedung GSG' },
    { name: 'Ruangan GSG 306', quantity: 1, description: 'Ruang belajar Gedung GSG' },
    { name: 'Ruangan GSG 307', quantity: 1, description: 'Ruang belajar Gedung GSG' },
  ];

  const peralatanAV = [
    { name: 'Proyektor', quantity: 5, description: 'Proyektor Epson' },
    { name: 'Speaker', quantity: 3, description: 'Speaker portable' },
    { name: 'Microphone', quantity: 4, description: 'Mic wireless' },
    { name: 'Layar Proyektor', quantity: 3, description: 'Screen portable 100"' },
    { name: 'Kamera DSLR', quantity: 2, description: 'Canon EOS + Lensa Kit' },
    { name: 'Video Camera', quantity: 2, description: 'Handycam Sony + Tripod' },
    { name: 'Lighting Kit', quantity: 1, description: 'Set lampu studio + stand' },
    { name: 'Audio Interface', quantity: 2, description: 'Focusrite Scarlett' },
    { name: 'Green Screen', quantity: 1, description: 'Backdrop chroma key' },
    { name: 'Wireless Presenter', quantity: 5, description: 'Logitech R400' },
    { name: 'Extension HDMI', quantity: 8, description: 'Kabel HDMI 5m' },
    { name: 'Microphone Stand', quantity: 6, description: 'Stand mic adjustable' },
    { name: 'Mixer Audio', quantity: 2, description: 'Behringer Xenyx 8 channel' },
    { name: 'Webcam HD', quantity: 4, description: 'Logitech C920 1080p' },
    { name: 'Stabilizer Gimbal', quantity: 1, description: 'DJI Osmo Mobile 3' },
    { name: 'VGA to HDMI Converter', quantity: 3, description: 'Adapter + Audio' },
    { name: 'Wireless Microphone Set', quantity: 2, description: '2.4GHz Dual Channel' },
    { name: 'Backdrop Stand', quantity: 2, description: 'Adjustable background stand' },
  ];

  const perangkatKomputer = [
    { name: 'PC Desktop', quantity: 25, description: 'Intel i5, 8GB RAM, SSD 256GB' },
    { name: 'Laptop', quantity: 15, description: 'ASUS VivoBook i5, 8GB RAM' },
    { name: 'Monitor LED', quantity: 30, description: '24 inch Full HD 1920x1080' },
    { name: 'Keyboard Mechanical', quantity: 30, description: 'Logitech K380 Wireless' },
    { name: 'Mouse Optical', quantity: 35, description: 'Logitech M100 USB' },
  ];

  const peralatanJaringan = [
    { name: 'Router', quantity: 3, description: 'Router Mikrotik' },
    { name: 'Switch', quantity: 2, description: 'Switch 24 port' },
    { name: 'Kabel UTP', quantity: 3, description: 'Kabel jaringan' },
    { name: 'Access Point', quantity: 4, description: 'WiFi Access Point TP-Link' },
    { name: 'Hub', quantity: 1, description: 'Hub 8 port' },
    { name: 'Patch Panel', quantity: 2, description: 'Patch panel 24 port' },
    { name: 'Firewall', quantity: 1, description: 'Sophos Firewall' },
    { name: 'Modem', quantity: 2, description: 'Modem ADSL' },
  ];

  const peralatanListrik = [
    { name: 'Stop Kontak', quantity: 8, description: 'Stop kontak panjang' },
    { name: 'Kabel Roll', quantity: 4, description: 'Kabel roll 10 meter' },
    { name: 'Lampu', quantity: 10, description: 'Lampu LED' },
    { name: 'UPS', quantity: 3, description: 'UPS 1000VA APC' },
    { name: 'MCB', quantity: 6, description: 'MCB 10A Schneider' },
    { name: 'Stabilizer', quantity: 2, description: 'Stabilizer 1000W' },
    { name: 'Konektor Listrik', quantity: 15, description: 'Konektor T Cabang 3' },
    { name: 'Multimeter', quantity: 1, description: 'Multimeter Digital' },
  ];

  const lainnya = [
    { name: 'Papan Pengumuman', quantity: 2, description: 'Papan pengumuman umum' },
    { name: 'Dispenser', quantity: 1, description: 'Dispenser air minum' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full mt-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Daftar Barang per Kategori</h2>
      <div className="w-full max-w-7xl space-y-12">
        <BarangTable title="Ruang Kelas" Icon={Building2} items={ruangKelas} />
        <BarangTable title="Peralatan AV" Icon={Video} items={peralatanAV} />
        <BarangTable title="Perangkat Komputer" Icon={Monitor} items={perangkatKomputer} />
        <BarangTable title="Peralatan Jaringan" Icon={Network} items={peralatanJaringan} />
        <BarangTable title="Peralatan Listrik" Icon={Zap} items={peralatanListrik} />
        <BarangTable title="Lainnya" Icon={MoreHorizontal} items={lainnya} />
      </div>
    </div>
  );
};

export default BarangContent;