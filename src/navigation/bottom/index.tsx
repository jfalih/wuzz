/* eslint-disable react/no-unstable-nested-components */
import BottomNavigationBar from '@components/molecules/bottom-navigation-bar';
import {BottomNavigationParamList} from '@navigation/root/root.types';
import {
  Home,
  History
} from '@pages/(bottom)';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NavigatorScreenParams,
  StaticScreenProps,
} from '@react-navigation/native';
import {
  BoxTime,
  Home as HomeIcon,
  ProfileCircle,
  Sms,
} from 'iconsax-react-native';
import React from 'react';

const Tab = createBottomTabNavigator<BottomNavigationParamList>();

type BottomTabsProps = StaticScreenProps<
  NavigatorScreenParams<BottomNavigationParamList>
>;

export const Bottom = React.memo((_: BottomTabsProps) => {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <BottomNavigationBar {...props} />}
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true, // Enable freeze on blur for better performance
      }}>
      <Tab.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <HomeIcon color={color} size={size} variant="Bulk" />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="history"
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <BoxTime color={color} size={size} variant="Bulk" />
          ),
        }}
        component={History}
      />
      <Tab.Screen
        name="notification"
        options={{
          tabBarLabel: 'Pesan',
          tabBarIcon: ({color, size}) => (
            <Sms color={color} size={size} variant="Bulk" />
          ),
        }}
        component={History}
      />
      <Tab.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <ProfileCircle color={color} size={size} variant="Bulk" />
          ),
        }}
        component={History}
      />
    </Tab.Navigator>
  );
});

Bottom.displayName = 'BottomNavigation';
export default Bottom;
