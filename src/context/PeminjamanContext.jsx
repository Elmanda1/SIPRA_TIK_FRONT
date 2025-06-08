import React, { createContext, useContext, useState } from 'react';

const PeminjamanContext = createContext();

export const PeminjamanProvider = ({ children }) => {
  const [peminjamanHistory, setPeminjamanHistory] = useState([
    {
      id: 14,
      room: 'Proyektor',
      building: 'Peralatan AV',
      date: '07 Jun 2025',
      time: '12:00 - 15:00',
      status: 'Aktif',
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 13,
      room: 'Laptop',
      building: 'Perangkat Komputer',
      date: '07 Jun 2025',
      time: '14:00 - 16:00',
      status: 'Menunggu Verifikasi',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 12,
      room: 'Switch',
      building: 'Peralatan Jaringan',
      date: '07 Jun 2025',
      time: '09:00 - 10:00',
      status: 'Aktif',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 11,
      room: 'Microphone',
      building: 'Peralatan AV',
      date: '07 Jun 2025',
      time: '13:00 - 15:00',
      status: 'Aktif',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 10,
      room: 'PC Desktop',
      building: 'Perangkat Komputer',
      date: '07 Jun 2025',
      time: '13:00 - 15:00',
      status: 'Aktif',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 9,
      room: 'Router',
      building: 'Peralatan Jaringan',
      date: '25 Mei 2025',
      time: '09:00 - 11:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 8,
      room: 'Speaker',
      building: 'Peralatan AV',
      date: '18 Mei 2025',
      time: '14:00 - 16:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 7,
      room: 'Access Point',
      building: 'Peralatan Jaringan',
      date: '12 Mei 2025',
      time: '10:00 - 12:00',
      status: 'Dibatalkan',
      statusColor: 'bg-red-100 text-red-800',
    },
    {
      id: 6,
      room: 'Monitor LED',
      building: 'Perangkat Komputer',
      date: '28 Apr 2025',
      time: '08:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 5,
      room: 'Kamera DSLR',
      building: 'Peralatan AV',
      date: '15 Apr 2025',
      time: '13:00 - 14:00',
      status: 'Penalty',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 4,
      room: 'Keyboard Mechanical',
      building: 'Perangkat Komputer',
      date: '10 Apr 2025',
      time: '15:00 - 17:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 3,
      room: 'Patch Panel',
      building: 'Peralatan Jaringan',
      date: '05 Apr 2025',
      time: '11:00 - 13:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 2,
      room: 'Video Camera',
      building: 'Peralatan AV',
      date: '02 Apr 2025',
      time: '09:00 - 10:00',
      status: 'Selesai',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 1,
      room: 'Ruangan AA 204',
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
    setPeminjamanHistory(prev => {
      const updatedItem = prev.find(item => item.id === id);
      const otherItems = prev.filter(item => item.id !== id);
      
      if (updatedItem) {
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
          case 'Penalty':
            statusColor = 'bg-yellow-100 text-yellow-800';
            break;
          default:
            statusColor = 'bg-gray-100 text-gray-800';
        }
        
        // Put the updated item at the top of the list
        return [
          {
            ...updatedItem,
            status: newStatus,
            statusColor: statusColor
          },
          ...otherItems
        ];
      }
      
      return prev;
    });
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