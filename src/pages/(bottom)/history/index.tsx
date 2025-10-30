import {
  Box,
  Divider,
  HStack,
  Pressable,
  Text,
  VStack,
  theme,
} from '@components/atoms';
import { CommonActions } from '@react-navigation/native';
import { ArrowLeft } from 'iconsax-react-native';
import React, { useCallback } from 'react';
import { memo } from 'react';
import {
  MaterialTabBar,
  TabBarProps,
  Tabs,
} from 'react-native-collapsible-tab-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useOnLayout from '@hooks/utils/useOnLayout';

export const History = memo((props: any) => {
  const { navigation } = props;
  const { top } = useSafeAreaInsets();
  const [layout, onLayout] = useOnLayout();

  const handleBack = useCallback(
    () => navigation.dispatch(CommonActions.goBack()),
    [navigation],
  );

  const Header = useCallback(
    () => (
      <VStack
        onLayout={onLayout}
        borderColor={theme.pallate.neutral['04']}
        padding={{
          paddingTop: top + theme.spacing.standard,
          paddingBottom: theme.spacing.standard,
          paddingHorizontal: theme.spacing.large,
        }}
      >
        <Text weight="semibold" type="s1" text="Riwayat Order" />
        <Text type="l1" text="Choose your addiction to start using the app." />
      </VStack>
    ),
    [onLayout, top],
  );

  const renderTabBar = useCallback(
    (props: TabBarProps<string>) => (
      <MaterialTabBar
        {...props}
        indicatorStyle={{
          backgroundColor: theme.pallate.primary['03'],
        }}
        contentContainerStyle={{
          borderBottomWidth: 1,
          borderColor: theme.pallate.neutral['04'],
        }}
        activeColor={theme.pallate.primary['03']}
        inactiveColor={theme.pallate.neutral['05']}
      />
    ),
    [],
  );

  const renderItem = useCallback(({ item }) => {
    if (typeof item === 'string') {
      return (
        <Text
          weight="bold"
          margin={{ marginHorizontal: theme.spacing.standard }}
          color={theme.pallate.neutral['01']}
          text={item}
        />
      );
    }

    return (
      <Pressable
        borderRadius={14}
        spacing={theme.spacing.standard}
        backgroundColor={theme.pallate.neutral['04']}
        padding={theme.spacing.large}
      >
        <Box
          backgroundColor={theme.pallate.neutral['03']}
          width={50}
          height={50}
          borderRadius={25}
        />
        <VStack fill>
          <Text weight="bold" type="b2" color={theme.pallate.neutral['01']}>
            Lorem ipsum dolor sit amet.
          </Text>
          <Text type="l1" color={theme.pallate.neutral['01']}>
            Lorem ipsum dolor sit amet, consectetur cupidatat.
          </Text>
        </VStack>
      </Pressable>
    );
  }, []);

  return (
    <Tabs.Container
      renderHeader={Header}
      minHeaderHeight={layout.height}
      renderTabBar={renderTabBar}
    >
      <Tabs.Tab name="Inbox">
        <Tabs.FlashList
          data={[
            'Today',
            2,
            3,
            4,
            5,
            'Yesterday',
            2,
            3,
            4,
            5,
            2,
            3,
            4,
            5,
            'Yesterday',
          ]}
          contentContainerStyle={{
            paddingVertical: theme.spacing.large,
            paddingHorizontal: theme.spacing.standard,
          }}
          estimatedItemSize={120}
          ItemSeparatorComponent={() => (
            <Divider thickness={theme.spacing.standard} />
          )}
          renderItem={renderItem}
        />
      </Tabs.Tab>
      <Tabs.Tab name="Promotion">
        <Tabs.FlashList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          contentContainerStyle={{
            paddingVertical: theme.spacing.large,
            paddingHorizontal: theme.spacing.standard,
          }}
          ItemSeparatorComponent={() => (
            <Divider thickness={theme.spacing.standard} />
          )}
          renderItem={renderItem}
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
});

export default History;
