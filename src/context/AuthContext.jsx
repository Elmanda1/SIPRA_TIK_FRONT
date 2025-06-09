import React, { useState, useEffect, createContext, useContext } from 'react';
import { Eye, EyeOff, Mail, Lock, CheckCircle, AlertCircle, X } from 'lucide-react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [credentials, setCredentials] = useState([
    { 
      username: 'admin',
      password: 'admin123',
      role: 'admin',
      email: 'admin@pnj.ac.id',
      name: 'Administrator'
    },
    { 
      username: 'RafifArka',
      password: 'user123',
      role: 'user',
      email: 'Muhammad.Rafif.Dwarka.tik24@stu.pnj.ac.id',
      name: 'Muhammad Rafif Dwarka',
      nim: '2407411078',
      class: 'TI 2C',
      phone: '0821-1302-0861',
      programStudi: 'Sarjana Terapan - Teknik Informatika',
      alamat: 'Puri Depok mas blok L no 15',
      kota: 'Depok',
      provinsi: 'Jawa Barat'
    }
  ]);

  const [user, setUser] = useState(() => {
    // Set default user for demo purposes
    const defaultUser = credentials.find(cred => cred.role === 'user');
    return defaultUser;
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set true for demo

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const updatePassword = (email, newPassword, selectedRole = null) => {
    // Log untuk debugging
    console.log('Updating password:', { email, newPassword, selectedRole });
    
    setCredentials(prev => {
      const updated = prev.map(cred => {
        if (selectedRole) {
          return (cred.email === email && cred.role === selectedRole) 
            ? { ...cred, password: newPassword } 
            : cred;
        } else {
          return cred.email === email ? { ...cred, password: newPassword } : cred;
        }
      });
      
      console.log('Updated credentials:', updated);
      return updated;
    });

    // Update current user jika yang diubah adalah password user yang sedang login
    if (user && user.email === email) {
      console.log('Updating current user password');
      setUser(prev => ({ ...prev, password: newPassword }));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user,
      isAuthenticated,
      login,
      logout,
      credentials, // Pastikan credentials diexpose
      updatePassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };