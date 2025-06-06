import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, User, Mail, Calendar } from 'lucide-react';

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
const [users] = useState([
  {
    id: 1,
    name: 'Rizky Maulana',
    email: 'rizky.maulana.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-10',
    totalBorrowings: 7
  },
  {
    id: 2,
    name: 'Nadira Putri',
    email: 'nadira.putri.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-02-14',
    totalBorrowings: 5
  },
  {
    id: 3,
    name: 'Fajar Nugraha',
    email: 'fajar.nugraha.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'inactive',
    joinDate: '2024-01-20',
    totalBorrowings: 3
  },
  {
    id: 4,
    name: 'Salsa Khairunnisa',
    email: 'salsa.khairunnisa.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-03-01',
    totalBorrowings: 9
  },
  {
    id: 5,
    name: 'Andi Saputra',
    email: 'andi.saputra.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-02-01',
    totalBorrowings: 6
  },
  {
    id: 6,
    name: 'Zahra Ayuningtyas',
    email: 'zahra.ayuningtyas.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'inactive',
    joinDate: '2024-01-29',
    totalBorrowings: 2
  },
  {
    id: 7,
    name: 'Ilham Pratama',
    email: 'ilham.pratama.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-03-10',
    totalBorrowings: 10
  },
  {
    id: 8,
    name: 'Putri Aulia',
    email: 'putri.aulia.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-02-28',
    totalBorrowings: 4
  },
  {
    id: 9,
    name: 'Rama Dwiandika',
    email: 'rama.dwiandika.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'inactive',
    joinDate: '2024-01-18',
    totalBorrowings: 1
  },
  {
    id: 10,
    name: 'Melani Oktaviani',
    email: 'melani.oktaviani.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-03-05',
    totalBorrowings: 7
  },
  {
    id: 11,
    name: 'Yoga Firmansyah',
    email: 'yoga.firmansyah.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-25',
    totalBorrowings: 6
  },
  {
    id: 12,
    name: 'Dewi Maharani',
    email: 'dewi.maharani.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'inactive',
    joinDate: '2024-02-02',
    totalBorrowings: 2
  },
  {
    id: 13,
    name: 'Galang Yudha',
    email: 'galang.yudha.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-03-12',
    totalBorrowings: 8
  },
  {
    id: 14,
    name: 'Citra Anggraini',
    email: 'citra.anggraini.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-11',
    totalBorrowings: 5
  },
  {
    id: 15,
    name: 'Fikri Hidayat',
    email: 'fikri.hidayat.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'inactive',
    joinDate: '2024-02-21',
    totalBorrowings: 3
  },
  {
    id: 16,
    name: 'Shinta Wulandari',
    email: 'shinta.wulandari.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-22',
    totalBorrowings: 9
  },
  {
    id: 17,
    name: 'Rizal Fauzan',
    email: 'rizal.fauzan.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-03-09',
    totalBorrowings: 6
  },
  {
    id: 18,
    name: 'Anisa Rahmawati',
    email: 'anisa.rahmawati.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'inactive',
    joinDate: '2024-02-05',
    totalBorrowings: 2
  },
  {
    id: 19,
    name: 'Bayu Alfian',
    email: 'bayu.alfian.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-30',
    totalBorrowings: 5
  },
  {
    id: 20,
    name: 'Nabila Kurnia',
    email: 'nabila.kurnia.tik24@stu.pnj.ac.id',
    role: 'user',
    status: 'active',
    joinDate: '2024-03-06',
    totalBorrowings: 7
  }
]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (userId) => {
    console.log('Edit user:', userId);
    // Add edit logic here
  };

  const handleDelete = (userId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
      console.log('Delete user:', userId);
      alert('Pengguna berhasil dihapus!');
      // Add delete logic here
    }
  };

  const handleAddUser = () => {
    console.log('Add new user');
    // Add new user logic here
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Users Management</h1>
        <p className="text-xl text-gray-600">Kelola pengguna sistem</p>
      </div>

      {/* Search and Add User */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Cari pengguna..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
            />
          </div>
          
          <button
            onClick={handleAddUser}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus className="h-5 w-5" />
            Tambah Pengguna
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Pengguna</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Bergabung</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Peminjaman</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{user.name}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.role === 'admin' 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role === 'admin' ? 'Administrator' : 'Pengguna'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {new Date(user.joinDate).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-800">
                      {user.totalBorrowings} kali
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="p-2 text-blue-600 bg-white hover:bg-blue-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        title="Edit pengguna"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="p-2 text-red-600 bg-white hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                        title="Hapus pengguna"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <User className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>Tidak ada pengguna ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersManagement;