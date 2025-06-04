import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/Dashboard';

const AdminRoutes = () => (
  <Routes>
    <Route path="/admin" element={<AdminDashboard />} />
    {/* Tambahkan route admin lain di sini */}
  </Routes>
);

export default AdminRoutes;