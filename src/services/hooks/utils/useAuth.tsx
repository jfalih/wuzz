import { Auth } from '@services/contexts/auth/auth.context';
import { useContext } from 'react';

export const useAuth = () => {
    const context = useContext(Auth.Context);
    if (!context) {
      throw new Error('useHighlight must be used within a HighlightProvider');
    }
    return context;
  };
