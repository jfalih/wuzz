import React, { Fragment, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme, { navigationTheme } from '@components/atoms/theme';
import { Routes } from '@navigation/navigation.types';
import { RootStackParamList } from './root.types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { navigationRef } from '@navigation/service';
import RNBootSplash from 'react-native-bootsplash';
import { rootNavigationConfigs, rootRoutes } from './_config';
import Toast from 'react-native-toast-message';

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
    if (val.options?.presentation === 'transparentModal') {
      return (
        <Stack.Group
          key={val.name}
          screenOptions={{
            presentation: 'transparentModal',
            animation: val.options?.animation ?? 'fade',
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={val.name}
            options={val.options}
            component={val.components}
          />
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
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
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
    <Fragment>
      <NavigationContainer
        ref={navigationRef}
        onReady={onNavigationReady}
        theme={navigationTheme}
      >
        <Stack.Navigator {...rootNavigationConfigs.default}>
          {rootRoutes.map((route: Routes) => renderItem(route))}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast topOffset={top + theme.spacing.standard} />
    </Fragment>
  );
});

Root.displayName = 'RootNavigation';
export default Root;
