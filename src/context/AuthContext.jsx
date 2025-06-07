import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [credentials, setCredentials] = useState([
    { 
      username: 'admin',
      password: 'admin123',
      role: 'admin',
      email: 'admin@example.com',
      name: 'Administrator'
    },
    { 
      username: 'user',
      password: 'user123',
      role: 'mahasiswa',
      email: 'user@example.com',
      name: 'User Mahasiswa'
    }
  ]);

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load credentials dari localStorage saat aplikasi dimuat
  useEffect(() => {
    const storedCredentials = localStorage.getItem('credentials');
    if (storedCredentials) {
      setCredentials(JSON.parse(storedCredentials));
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  // Update fungsi updatePassword untuk memeriksa role
  const updatePassword = (email, newPassword, selectedRole) => {
    const updatedCredentials = credentials.map(cred => 
      (cred.email === email && cred.role === selectedRole) 
        ? { ...cred, password: newPassword }
        : cred
    );
    setCredentials(updatedCredentials);
    localStorage.setItem('credentials', JSON.stringify(updatedCredentials));
  };

  return (
    <AuthContext.Provider value={{ 
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      credentials,
      updatePassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

