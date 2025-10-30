import {HStack, Flex, Pressable, Text, theme} from '@components/atoms';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AddCircle} from 'iconsax-react-native';

export const BottomNavigationBar = React.memo((props: BottomTabBarProps) => {
  const {state, descriptors, navigation} = props;
  const {bottom} = useSafeAreaInsets();
  return (
    <HStack
      padding={{
        paddingHorizontal: 20,
        paddingBottom: bottom,
      }}
      position={'relative'}
      height={bottom + 70}
      justify="space-between"
      items="center"
      backgroundColor={theme.pallate.neutral['01']}
      borderColor={theme.pallate.neutral['02']}
      borderRadius={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      borderWidth={{
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
      }}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (route.name === 'Camera') {
          return (
            <Pressable
              key={route.key}
              direction="column"
              onPress={() => navigation.navigate('addpost')}
              spacing={4}
              onLongPress={onLongPress}>
              <Flex
                borderRadius={30}
                width={60}
                height={40}
                borderWidth={1}
                borderColor={theme.pallate.neutral['05']}
                items="center"
                justify="center"
                backgroundColor={theme.pallate.primary['03']}>
                <AddCircle color={theme.pallate.neutral['05']} />
              </Flex>
            </Pressable>
          );
        }
        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            spacing={2}
            items="center"
            justify="center"
            padding={{
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            direction="column"
            borderRadius={50}
            backgroundColor={isFocused ? theme.pallate.neutral['01'] : undefined}
            onLongPress={onLongPress}>
            {options.tabBarIcon?.({
              focused: isFocused,
              color: isFocused
                ? theme.pallate.primary['03']
                : theme.pallate.neutral['04'],
              size: 30,
            })}
            <Text
              type="l1"
              color={
                isFocused
                ? theme.pallate.primary['03']
                : theme.pallate.neutral['04']
              }
              weight="medium"
              text={label as string}
            />
          </Pressable>
        );
      })}
    </HStack>
  );
});

BottomNavigationBar.displayName = 'components/molecules/BottomNavigationBar';
export default BottomNavigationBar;
