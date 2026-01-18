import { createContext } from 'react';

export interface AuthUser {
  id: number;
  username: string;
  full_name: string;
  phone: number;
  countryCode: number;
  birth_date: string;
}

// Split into STATE and ACTIONS contexts to prevent unnecessary re-renders
// State context - components that only need to read auth state
export interface AuthStateContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
}

// Actions context - stable functions that never change, no re-renders
export interface AuthActionsContextType {
  login: (accessToken: string, refreshToken: string, user: AuthUser) => void;
  logout: () => void;
  updateUser: (user: Partial<AuthUser>) => void;
}

export const AuthStateContext = createContext<AuthStateContextType | undefined>(undefined);
export const AuthActionsContext = createContext<AuthActionsContextType | undefined>(undefined);

// For backward compatibility
export const AuthContext = AuthStateContext;

