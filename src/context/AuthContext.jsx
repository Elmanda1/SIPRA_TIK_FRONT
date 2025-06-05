import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log('=== AUTH PROVIDER STATE ===');
  console.log('user:', user);
  console.log('isAuthenticated:', isAuthenticated);
  console.log('isLoading:', isLoading);
  console.log('==========================');

  // Initial load - CHECK localStorage untuk persistent login
  useEffect(() => {
    console.log('AuthProvider useEffect - Starting...');
    
    // Check localStorage untuk token dan user data
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    console.log('Checking localStorage:', { token, userData });
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        console.log('Found existing auth data, restoring session:', parsedUser);
        
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        // Clear corrupted data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    
    // Set loading to false
    setTimeout(() => {
      console.log('AuthProvider useEffect - Setting isLoading to false');
      setIsLoading(false);
    }, 100);
    
  }, []);

  const login = async (credentials) => {
    console.log('Login attempt with:', credentials);
    
    try {
      // Simulasi API call
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        const userData = {
          id: 1,
          username: 'admin',
          role: 'admin',
          name: 'Administrator'
        };
        
        console.log('Login successful - setting user data:', userData);
        
        // Set state
        setUser(userData);
        setIsAuthenticated(true);
        
        // Save to localStorage
        localStorage.setItem('token', 'dummy-admin-token');
        localStorage.setItem('user', JSON.stringify(userData));
        
        return { success: true, user: userData };
        
      } else if (credentials.username === 'user' && credentials.password === 'user123') {
        const userData = {
          id: 2,
          username: 'user',
          role: 'user',
          name: 'Regular User'
        };
        
        console.log('Login successful - setting user data:', userData);
        
        // Set state
        setUser(userData);
        setIsAuthenticated(true);
        
        // Save to localStorage
        localStorage.setItem('token', 'dummy-user-token');
        localStorage.setItem('user', JSON.stringify(userData));
        
        return { success: true, user: userData };
        
      } else {
        console.log('Login failed - invalid credentials');
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed' };
    }
  };

  const logout = () => {
    console.log('Logout - clearing all data');
    
    // Clear state
    setUser(null);
    setIsAuthenticated(false);
    
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    console.log('Logout completed');
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};