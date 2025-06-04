import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/user/Home';

const UserRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* Tambahkan route user lain di sini */}
  </Routes>
);

export default UserRoutes;
