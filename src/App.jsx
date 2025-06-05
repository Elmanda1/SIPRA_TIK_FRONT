import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './components/auth/LoginPage';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';
import LoadingSpinner from './components/common/LoadingSpinner';

// Simple Auth Check Component
const AuthChecker = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  
  console.log('=== AUTH CHECKER DEBUG ===');
  console.log('isLoading:', isLoading);
  console.log('isAuthenticated:', isAuthenticated);
  console.log('user:', user);
  console.log('========================');

  // Tampilkan loading spinner saat checking auth
  if (isLoading) {
    console.log('Showing loading spinner...');
    return <LoadingSpinner />;
  }

  // Jika belum authenticated, redirect ke login
  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login...');
    return <Navigate to="/login" replace />;
  }

  // Jika sudah authenticated, redirect sesuai role
  console.log('Authenticated, redirecting based on role...');
  if (user?.role === 'admin') {
    console.log('Redirecting to admin dashboard...');
    return <Navigate to="/admin/dashboard" replace />;
  } else {
    console.log('Redirecting to user dashboard...');
    return <Navigate to="/user/dashboard" replace />;
  }
};

// Public Route - untuk halaman yang hanya bisa diakses jika belum login
const PublicRoute = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isAuthenticated) {
    console.log('Already authenticated, redirecting from public route...');
    // Jika sudah login, redirect ke dashboard sesuai role
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/user/dashboard" replace />;
    }
  }

  return children;
};

// Protected Route - untuk halaman yang perlu authentication
const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login from protected route...');
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    console.log(`Role mismatch. Required: ${requiredRole}, Got: ${user?.role}`);
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppContent = () => {
  return (
    <Router>
      <Routes>
        {/* Root route - selalu cek authentication dulu */}
        <Route path="/" element={<AuthChecker />} />
        
        {/* Login route - hanya bisa diakses jika belum login */}
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } 
        />
        
        {/* Admin routes - protected dan require admin role */}
        <Route 
          path="/admin/*" 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminRoutes />
            </ProtectedRoute>
          } 
        />
        
        {/* User routes - protected dan require user role */}
        <Route 
          path="/user/*" 
          element={
            <ProtectedRoute requiredRole="user">
              <UserRoutes />
            </ProtectedRoute>
          } 
        />
        
        {/* Catch all - redirect ke root */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;