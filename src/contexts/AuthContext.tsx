import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'admin' | 'bank_manager' | 'relationship_manager' | 'support_agent' | 'customer';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  branch?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, role: UserRole): boolean => {
    // Mock authentication - in real app, this would call an API
    if (email && password) {
      const mockUsers: Record<UserRole, User> = {
        admin: {
          id: '1',
          name: 'Admin User',
          email: 'admin@bank.com',
          role: 'admin',
          avatar: 'AU'
        },
        bank_manager: {
          id: '2',
          name: 'John Manager',
          email: 'john.manager@bank.com',
          role: 'bank_manager',
          branch: 'Downtown Branch',
          avatar: 'JM'
        },
        relationship_manager: {
          id: '3',
          name: 'Sarah Wilson',
          email: 'sarah.wilson@bank.com',
          role: 'relationship_manager',
          branch: 'Downtown Branch',
          avatar: 'SW'
        },
        support_agent: {
          id: '4',
          name: 'Mike Support',
          email: 'mike.support@bank.com',
          role: 'support_agent',
          avatar: 'MS'
        },
        customer: {
          id: '5',
          name: 'Alice Customer',
          email: 'alice@email.com',
          role: 'customer',
          avatar: 'AC'
        }
      };

      setUser(mockUsers[role]);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};