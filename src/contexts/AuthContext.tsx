import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isStreamer: boolean;
}

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Check local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem('stream_app_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = () => {
    const mockUser: User = {
      id: 'user_123',
      name: 'Streamer Pro',
      email: 'test@stream.com',
      avatar: 'https://github.com/shadcn.png',
      isStreamer: true,
    };
    setUser(mockUser);
    localStorage.setItem('stream_app_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('stream_app_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
