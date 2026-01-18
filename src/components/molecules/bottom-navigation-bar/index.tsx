import {
  HStack,
  Flex,
  Pressable,
  Text,
  theme,
  VStack,
  Box,
} from '@components/atoms';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React, { Fragment, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconPlus } from 'tabler-icons-react-native';
import MomentActionSheet from '@features/moment/bottom-sheet/moment-action-sheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export const BottomNavigationBar = React.memo((props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props;
  const { bottom } = useSafeAreaInsets();
  const navigationTheme = useTheme();
  const momentActionSheetRef = useRef<BottomSheetModal>(null);
  if(state.index === 2) return;
  return (
    <Fragment>
    <VStack
      margin={{
        marginTop: -20,
      }}
      borderRadius={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
      backgroundColor={navigationTheme.colors.card}
    >
      {/* {state.index === 0 && (
      <HStack
        padding={{
          paddingHorizontal: theme.spacing.large,
          paddingVertical: theme.spacing.large,
        }}
        items="center"
        spacing={theme.spacing.standard}
      >
        <HStack>
          {['red', 'blue', 'green', 'yellow'].map((color, index) => (
            <Box
              width={40}
              height={40}
              borderWidth={1}
              margin={{
                marginLeft: index !== 0 ? -20 : 0,
              }}
              borderRadius={999}
              backgroundColor={color}
            />
          ))}
        </HStack>
        <VStack fill>
          <Text type="b2" weight="semibold" color={theme.pallate.neutral['06']}>
            Yang bisa kamu lihat
          </Text>
          <Text numberOfLines={1} type="l2" color={theme.pallate.neutral['06']}>
            Farhan, Nia, Dimas, Rina, Budi
          </Text>
        </VStack>
        <Pressable
          onPress={() => navigation.navigate('friendList')}
          padding={{
            paddingHorizontal: theme.spacing.large,
            paddingVertical: theme.spacing.standard,
          }}
          borderRadius={999}
          backgroundColor={theme.pallate.neutral['06']}
        >
          <Text type="l1" color={theme.pallate.neutral['01']} weight="semibold">
            Edit
          </Text>
        </Pressable>
      </HStack>
      )} */}
      <HStack
        padding={{
          paddingHorizontal: 10,
          paddingBottom: bottom,
        }}
        position={'relative'}
        height={bottom + 70}
        justify="space-between"
        items="center"
        backgroundColor={navigationTheme.colors.background}
        borderRadius={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
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

          if (route.name === 'moment') {
            return (
              <Pressable
                key={route.key}
                direction="column"
                onPress={() => momentActionSheetRef.current?.present()}
                spacing={4}
                margin={{
                  marginTop: -40,
                  marginHorizontal: 10,
                }}
                items="center"
                onLongPress={onLongPress}
              >
                <Flex
                  borderRadius={30}
                  width={60}
                  height={60}
                  borderWidth={1}
                  borderColor={theme.pallate.neutral['05']}
                  items="center"
                  justify="center"
                  backgroundColor={navigationTheme.colors.primary}
                >
                  <IconPlus size={20} color={navigationTheme.colors.background} />
                </Flex>
                <Text
                  type="l2"
                  color={theme.pallate.neutral['01']}
                  weight="semibold"
                >
                  Moment
                </Text>
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
              fill
              direction="column"
              onLongPress={onLongPress}
            >
              {options.tabBarIcon?.({
                focused: isFocused,
                color: isFocused
                  ? theme.pallate.primary['03']
                  : theme.pallate.neutral['03'],
                size: 30,
              })}
              <Text
                type="l1"
                color={
                  isFocused
                    ? theme.pallate.primary['03']
                    : theme.pallate.neutral['03']
                }
                weight="medium"
                text={label as string}
              />
            </Pressable>
          );
        })}
      </HStack>
    </VStack>
    <MomentActionSheet ref={momentActionSheetRef} />
    </Fragment>
  );
});

BottomNavigationBar.displayName = 'components/molecules/BottomNavigationBar';
export default BottomNavigationBar;
