import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme, { navigationTheme } from '@components/atoms/theme';
import { Routes } from '@navigation/navigation.types';
import routes from '@navigation/routes';
import { RootStackParamList } from './root.types'; // Ensure this is correctly defined
import Toast from 'react-native-toast-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { navigationRef } from '@navigation/service';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = React.memo(() => {
  // const { auth, user } = useAuth();
  // const [onboarding] = useMMKVBoolean(ONBOARDING_STORAGE);
  const { top } = useSafeAreaInsets();

  const renderItem = useCallback((val: Routes) => {
    if (Array.isArray(val.components)) {
      return (
        <Stack.Group key={val.name} screenOptions={val.options}>
          {val.components.map((child: Routes) => (
            <Stack.Screen
              key={child.name}
              name={child.name}
              options={child.options}
              component={child.components}
            />
          ))}
        </Stack.Group>
      );
    }
    return (
      <Stack.Screen
        key={val.name}
        name={val.name}
        options={val.options}
        component={val.components}
      />
    );
  }, []);

  // Sembunyikan BootSplash saat app ready (paling awal)
  const onNavigationReady = useCallback(() => {
  }, []);

  // if (auth && !user) {
  //   // If the user is authenticated but user data is not yet loaded, return null or a loading indicator
  //   return (
  //     <VStack
  //       fill
  //       items="center"
  //       justify="center"
  //       backgroundColor={theme.pallate.neutral['05']}
  //     >
  //       <ActivityIndicator size="large" color={theme.pallate.neutral['01']} />
  //     </VStack>
  //   ); // or a loading indicator
  // }

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onReady={onNavigationReady}
        onStateChange={async () => {
          // const previousRouteName = routeNameRef.current;
          // const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
          // if (previousRouteName !== currentRouteName && !!currentRouteName) {
          //   await logScreenView(currentRouteName, currentRouteName);
          // }
          // routeNameRef.current = currentRouteName;
        }}
        theme={navigationTheme}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            freezeOnBlur: true,
          }}
        >
          {routes
            .filter(
              val =>
                val.auth === false,
            )
            .map((route: Routes) => renderItem(route))}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast topOffset={top + theme.spacing.standard} />
    </>
  );
});

Root.displayName = 'RootNavigation';
export default Root;
