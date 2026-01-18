/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Root from '@navigation/root';
import Mapbox from '@rnmapbox/maps';
import { ScrollProvider, AuthProvider } from '@services/contexts';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Initialize MirageJS mock server in development
if (__DEV__) {
  require('./src/mocks');
}

// Initialize Mapbox with access token
Mapbox.setAccessToken(
  'pk.eyJ1Ijoia29vYmFtIiwiYSI6ImNtZWxtajNncjBmeWMyd3FyM3V3NzUwMzUifQ.eusnZIscj38jvv9zmm1tHA',
);

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
    mutations: {
      retry: false,
    },
  },
});

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* Move Toast to be the last child so it's not hidden behind overlays */}
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BottomSheetModalProvider>
            <ScrollProvider>
              <Root />
            </ScrollProvider>
          </BottomSheetModalProvider>
        </AuthProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
