import { useContext } from 'react';
import { AuthStateContext, AuthActionsContext } from '@services/contexts/auth/auth.context';

/**
 * Hook to access auth state (user, tokens, isAuthenticated)
 * Components using ONLY this hook will re-render when auth state changes
 * 
 * @example
 * const { user, isAuthenticated } = useAuthState();
 */
export const useAuthState = () => {
  const context = useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error('useAuthState must be used within an AuthProvider');
  }

  return context;
};

/**
 * Hook to access auth actions (login, logout, updateUser)
 * Components using ONLY this hook will NEVER re-render when auth state changes
 * Perfect for components that only need to trigger auth actions
 * 
 * @example
 * const { login, logout } = useAuthActions();
 */
export const useAuthActions = () => {
  const context = useContext(AuthActionsContext);

  if (context === undefined) {
    throw new Error('useAuthActions must be used within an AuthProvider');
  }

  return context;
};

/**
 * Hook to access both auth state and actions
 * Components using this will re-render when auth state changes
 * Use this for convenience when you need both state and actions
 * 
 * @example
 * const { user, isAuthenticated, login, logout } = useAuth();
 */
export const useAuth = () => {
  const state = useAuthState();
  const actions = useAuthActions();

  return {
    ...state,
    ...actions,
  };
};
