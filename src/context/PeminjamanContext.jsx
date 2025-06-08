import React, { createContext, useContext, useState } from 'react';

const PeminjamanContext = createContext();

export const PeminjamanProvider = ({ children }) => {
  const [peminjamanHistory, setPeminjamanHistory] = useState([
    {
      id: 10,
      room: 'Ruang GSG 207',
      building: 'Ruang Kelas',
      date: '07 Jun 2025',
      time: '13:00 - 15:00',
      status: 'Aktif',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 9,
      room: 'Ruang AA 205',
      building: 'Ruang Kelas',
      date: '25 Mei 2025',
      time: '09:00 - 11:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 8,
      room: 'Ruang AA 203',
      building: 'Ruang Kelas',
      date: '18 Mei 2025',
      time: '14:00 - 16:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 7,
      room: 'Ruang AA 208',
      building: 'Ruang Kelas',
      date: '12 Mei 2025',
      time: '10:00 - 12:00',
      status: 'Dibatalkan',
      statusColor: 'bg-red-100 text-red-800',
    },
    {
      id: 6,
      room: 'Ruang PUT 211',
      building: 'Ruang Kelas',
      date: '28 Apr 2025',
      time: '08:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 5,
      room: 'Ruang AA 203',
      building: 'Ruang Kelas',
      date: '15 Apr 2025',
      time: '13:00 - 14:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 4,
      room: 'Ruang AA 303',
      building: 'Ruang Kelas',
      date: '10 Apr 2025',
      time: '15:00 - 17:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 3,
      room: 'Ruang AA 206',
      building: 'Ruang Kelas',
      date: '05 Apr 2025',
      time: '11:00 - 13:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 2,
      room: 'Ruang AA 204',
      building: 'Ruang Kelas',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 1,
      room: 'Ruang AA 201',
      building: 'Ruang Kelas',
      date: '01 Apr 2025',
      time: '10:00 - 11:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    }
  ]);

  const addPeminjaman = (newPeminjaman) => {
    setPeminjamanHistory(prev => [
      {
        id: prev.length + 1,
        ...newPeminjaman,
        status: 'Menunggu Verifikasi',
        statusColor: 'bg-yellow-100 text-yellow-800',
        date: new Date().toLocaleDateString('id-ID', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
      },
      ...prev
    ]);
  };

  // Fungsi untuk mengupdate status peminjaman
  const updatePeminjamanStatus = (id, newStatus) => {
    setPeminjamanHistory(prev => 
      prev.map(item => {
        if (item.id === id) {
          let statusColor = '';
          switch (newStatus) {
            case 'Aktif':
              statusColor = 'bg-blue-100 text-blue-800';
              break;
            case 'Menunggu Verifikasi':
              statusColor = 'bg-yellow-100 text-yellow-800';
              break;
            case 'Selesai':
              statusColor = 'bg-green-100 text-green-800';
              break;
            case 'Dibatalkan':
              statusColor = 'bg-red-100 text-red-800';
              break;
            default:
              statusColor = 'bg-gray-100 text-gray-800';
          }
          return {
            ...item,
            status: newStatus,
            statusColor: statusColor
          };
        }
        return item;
      })
    );
  };

  return (
    <PeminjamanContext.Provider value={{ 
      peminjamanHistory, 
      addPeminjaman,
      updatePeminjamanStatus 
    }}>
      {children}
    </PeminjamanContext.Provider>
  );
};

export const usePeminjaman = () => useContext(PeminjamanContext);