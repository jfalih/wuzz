import React, { Fragment, memo, useCallback, useMemo } from 'react';
import {
  Box,
  Divider,
  Flex,
  HStack,
  HStackAnimated,
  Pressable,
  Text,
  theme,
  VStack,
} from '@components/atoms';
import {
  IconChevronDown,
  IconDots,
  IconPencil,
  IconShare2,
} from 'tabler-icons-react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Heart, Repeat, Send2, Setting, Setting2 } from 'iconsax-react-native';
import { FlashList } from '@shopify/flash-list';
import MaskedView from '@react-native-masked-view/masked-view';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Image from '@components/atoms/image';
import Navbar from '@components/molecules/navbar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
  const navigationTheme = useTheme();

  const renderStoryItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const STORY_WIDTH = 95;
      const STORY_HEIGHT = (STORY_WIDTH * 4) / 3;
      const BORDER_WIDTH = 1.2;
      const BORDER_RADIUS = 20;
      const CONTAINER_PADDING = 3;
      const showBorder = index === 0;

      // Use consistent container dimensions for all items to maintain alignment
      const containerWidth =
        STORY_WIDTH + BORDER_WIDTH * 2 + CONTAINER_PADDING * 2;
      const containerHeight =
        STORY_HEIGHT + BORDER_WIDTH * 2 + CONTAINER_PADDING * 2;

      // Gradient colors based on showBorder
      const gradientColors = showBorder
        ? ['#E0FF63', '#FF8102']
        : [theme.pallate.neutral['03'], theme.pallate.neutral['04']];

      return (
        <Pressable direction="column" items="center">
          <View
            style={{
              width: containerWidth,
              height: containerHeight,
              borderRadius: BORDER_RADIUS + BORDER_WIDTH + CONTAINER_PADDING,
              padding: CONTAINER_PADDING,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaskedView
              maskElement={
                <View
                  pointerEvents="none"
                  style={[
                    StyleSheet.absoluteFill,
                    {
                      borderWidth: BORDER_WIDTH,
                      borderRadius: BORDER_RADIUS + 3,
                    },
                  ]}
                />
              }
              style={[StyleSheet.absoluteFill]}
            >
              <LinearGradient
                colors={gradientColors}
                pointerEvents="none"
                style={StyleSheet.absoluteFill}
              />
            </MaskedView>
            <View
              style={{
                position: 'absolute',
                top: BORDER_WIDTH + CONTAINER_PADDING,
                left: BORDER_WIDTH + CONTAINER_PADDING,
                width: STORY_WIDTH,
                height: STORY_HEIGHT,
                borderRadius: BORDER_RADIUS,
                overflow: 'hidden',
              }}
            >
              <Image
                uri={`https://picsum.photos/seed/${item || index}/200/300`}
                resizeMode="cover"
                style={{
                  width: STORY_WIDTH,
                  height: STORY_HEIGHT,
                  borderRadius: BORDER_RADIUS,
                }}
              />
            </View>
          </View>
          <VStack
            justify="center"
            items="center"
            margin={{
              marginTop: -40,
            }}
            spacing={theme.spacing.small}
          >
            <Text type="l1" color={theme.pallate.neutral['01']} weight="bold">
              {item}
            </Text>
            <HStack
              items="center"
              justify="center"
              spacing={theme.spacing.small}
            >
              {[1, 2, 3].map((y, i) => (
                <Box
                  margin={{
                    marginLeft: i !== 0 ? -10 : 0,
                  }}
                  borderWidth={1}
                  borderColor={theme.pallate.neutral['06']}
                  width={25}
                  height={25}
                  backgroundColor={theme.pallate.neutral['05']}
                  borderRadius={15}
                />
              ))}
            </HStack>
          </VStack>
        </Pressable>
      );
    },
    [],
  );

  return (
    <VStack
      spacing={theme.spacing.large}
      padding={{
        paddingBottom: theme.spacing.large,
      }}
      margin={{
        marginBottom: theme.spacing.large,
      }}
      borderWidth={{
        borderBottomWidth: 1,
      }}
      borderColor={theme.pallate.neutral['05']}
      pointerEvents="box-none"
      style={{
        ...theme.elevations['10'],
      }}
    >
      <VStack
        padding={{
          paddingHorizontal: theme.spacing.large,
          paddingVertical: theme.spacing.medium,
        }}
        margin={{
          marginHorizontal: theme.spacing.large,
        }}
        borderRadius={18}
        borderColor={theme.pallate.neutral['01']}
        spacing={theme.spacing.standard}
        backgroundColor={theme.pallate.neutral['05']}
        pointerEvents="none"
      >
        <Text
          numberOfLines={2}
          type="b2"
          italic
          color={theme.pallate.neutral['01']}
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </Text>
        {/* Dash */}
        {/* <Dash
          dashGap={4}
          dashColor={theme.pallate.neutral['01']}
          dashLength={6}
          dashThickness={0.5}
          style={{ width: '100%' }}
        />
        <HStack justify="center" items="center" spacing={theme.spacing.small}>
          <Box width={25} height={25} backgroundColor={theme.pallate.neutral['01']} borderRadius={999} />
          <Text
            type="b2"
            color={theme.pallate.neutral['01']}
            weight="medium"
          >
            Bronze
          </Text>
          <VStack
            fill
            height={5}
            borderRadius={5}
            backgroundColor={theme.pallate.neutral['01']}
          />
        </HStack> */}
      </VStack>
      {/* <VStackAnimated
        entering={FadeIn.duration(1500).easing(Easing.inOut(Easing.ease))}
        padding={{
          paddingBottom: theme.spacing.standard,
        }}
        margin={{
          marginTop: -120,
        }}
        borderRadius={18}
        borderWidth={1}
        borderColor={theme.pallate.neutral['06']}
        backgroundColor={theme.pallate.neutral['06']}
      >
      </VStackAnimated> */}
      <VStack
        spacing={theme.spacing.standard}
        padding={{
          paddingHorizontal: theme.spacing.large,
        }}
        pointerEvents="box-none"
      >
        <HStack
          items="center"
          spacing={theme.spacing.standard}
          pointerEvents="box-none"
        >
          <Image
            uri="https://i.pravatar.cc/150?img=3"
            resizeMode="cover"
            style={{
              width: 60,
              height: 60,
              borderWidth: 1,
              borderColor: theme.pallate.neutral['04'],
              borderRadius: 18,
              overflow: 'hidden',
            }}
          />
          <VStack pointerEvents="none" fill>
            <Text color={theme.pallate.neutral['01']} weight="bold" type="s3">
              Jan Falih Fadhillah
            </Text>
            <Text type="l1" color={theme.pallate.neutral['01']}>
              @janfalih
            </Text>
          </VStack>
          <Pressable
            height={50}
            width={50}
            padding={{
              paddingHorizontal: theme.spacing.medium,
              paddingVertical: theme.spacing.standard,
            }}
            borderRadius={20}
            borderColor={theme.pallate.neutral['01']}
            backgroundColor={theme.pallate.neutral['05']}
            items="center"
            justify="center"
            onPress={() => {
              console.log('✅ Send button PRESSED');
              // Your actual action
            }}
          >
            <Send2
              color={theme.pallate.neutral['01']}
              variant="Bulk"
              size={24}
            />
          </Pressable>
        </HStack>
        <HStack
          items="center"
          spacing={theme.spacing.standard}
          pointerEvents="box-none"
        >
          <Pressable
            items="baseline"
            spacing={theme.spacing.small}
            onPress={() => console.log('✅ Followers PRESSED')}
          >
            <Text weight="bold" color={navigationTheme.colors.text}>
              10
            </Text>
            <Text type="l1" color={navigationTheme.colors.text}>
              Followers
            </Text>
          </Pressable>
          <Pressable
            items="baseline"
            spacing={theme.spacing.small}
            onPress={() => console.log('✅ Following PRESSED')}
          >
            <Text weight="bold" color={navigationTheme.colors.text}>
              2
            </Text>
            <Text type="l1" color={navigationTheme.colors.text}>
              Following
            </Text>
          </Pressable>
          <Pressable
            items="baseline"
            spacing={theme.spacing.small}
            onPress={() => console.log('✅ Moments PRESSED')}
          >
            <Text weight="bold" color={navigationTheme.colors.text}>
              3
            </Text>
            <Text type="l1" color={navigationTheme.colors.text}>
              Moments
            </Text>
          </Pressable>
        </HStack>

        <HStack spacing={theme.spacing.standard} pointerEvents="box-none">
          <Pressable
            items="center"
            spacing={theme.spacing.small}
            padding={{
              paddingHorizontal: theme.spacing.medium,
              paddingVertical: theme.spacing.standard,
            }}
            fill
            borderRadius={15}
            borderColor={theme.pallate.neutral['01']}
            backgroundColor={theme.pallate.neutral['05']}
            justify="center"
            onPress={() => console.log('✅ Edit Profile PRESSED')}
          >
            <IconPencil color={theme.pallate.neutral['01']} size={20} />
            <Text type="l1" weight="medium" color={theme.pallate.neutral['01']}>
              Edit Profile
            </Text>
          </Pressable>
          <Pressable
            fill
            items="center"
            spacing={theme.spacing.small}
            padding={{
              paddingHorizontal: theme.spacing.medium,
              paddingVertical: theme.spacing.standard,
            }}
            borderRadius={15}
            borderColor={theme.pallate.neutral['01']}
            backgroundColor={theme.pallate.neutral['05']}
            justify="center"
            onPress={() => console.log('✅ Share Profile PRESSED')}
          >
            <IconShare2 color={theme.pallate.neutral['01']} size={20} />
            <Text type="l1" weight="medium" color={theme.pallate.neutral['01']}>
              Share Profile
            </Text>
          </Pressable>
        </HStack>
      </VStack>
      <FlashList
        data={[
          'Jakarta',
          'Bandung',
          'Surabaya',
          'Malang',
          'Semarang',
          'Denpasar',
          'Balikpapan',
          'Makassar',
          'Pontianak',
          'Manado',
        ]}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.large,
        }}
        renderItem={renderStoryItem}
        ItemSeparatorComponent={() => <Box width={theme.spacing.small} />}
      />
    </VStack>
  );
};

const Profile: React.FC = memo(() => {
  const navigationTheme = useTheme();
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const renderPostItem = ({ item }: { item: any }) => {
    const POST_WIDTH = 250;
    const POST_HEIGHT = (POST_WIDTH * 4) / 3;
    return (
      <VStack spacing={theme.spacing.standard}>
        <HStack
          items="center"
          justify="center"
          padding={{ paddingHorizontal: theme.spacing.large }}
        >
          <Pressable
            fill
            items="center"
            spacing={theme.spacing.small}
          >
            <Box
              width={40}
              height={40}
              borderRadius={999}
              borderWidth={1}
              borderColor={theme.pallate.neutral['05']}
              style={{
                overflow: 'hidden',
              }}
            >
              <Image
                uri={`https://picsum.photos/seed/avatar/200/300`}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                resizeMode="cover"
              />
            </Box>
            <Text weight="medium" color={navigationTheme.colors.text}>
              loremipsum
            </Text>
          </Pressable>
          <Pressable onPress={() => {}}>
            <IconDots size={24} color={navigationTheme.colors.text} />
          </Pressable>
        </HStack>
        <FlashList
          horizontal
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.large,
          }}
          data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          ItemSeparatorComponent={() => (
            <Divider thickness={theme.spacing.tiny} />
          )}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate('clip-detail' as never)}
            >
              <Box
                width={POST_WIDTH}
                height={POST_HEIGHT}
                borderWidth={1}
                borderColor={theme.pallate.neutral['05']}
                borderRadius={30}
                style={{
                  overflow: 'hidden',
                }}
              >
                <Image
                  uri={`https://picsum.photos/seed/${item}/200/300`}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
            </Pressable>
          )}
        />
        {/* Action Buttons Love, Repost, Reply, Share */}
        <HStack
          items="center"
          spacing={theme.spacing.medium}
          padding={{ paddingHorizontal: theme.spacing.large }}
        >
          <Pressable items="center" spacing={theme.spacing.small}>
            <Heart
              size={26}
              fill={theme.pallate.neutral['01']}
              color={navigationTheme.colors.text}
            />
            <Text type="b2" color={navigationTheme.colors.text}>
              12
            </Text>
          </Pressable>
          <Pressable items="center" spacing={theme.spacing.small}>
            <Repeat
              size={26}
              fill={theme.pallate.neutral['01']}
              color={navigationTheme.colors.text}
            />
            <Text type="b2" color={navigationTheme.colors.text}>
              12
            </Text>
          </Pressable>
          <Pressable items="center" spacing={theme.spacing.small}>
            <Send2
              size={26}
              fill={theme.pallate.neutral['01']}
              color={navigationTheme.colors.text}
            />
            <Text type="b2" color={navigationTheme.colors.text}>
              12
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    );
  };

  const ItemSeparatorComponent = useCallback(() => {
    return (
      <Fragment>
        <Divider thickness={theme.spacing.large} />
        <Box
          width="100%"
          height={1}
          backgroundColor={theme.pallate.neutral['05']}
        />
        <Divider thickness={theme.spacing.large} />
      </Fragment>
    );
  }, []);

  // Generate mock data for each tab
  const postsData = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: `post-${i}`,
        type: 'posts',
        color: theme.pallate.neutral['05'],
      })),
    [],
  );

  const reelsData = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: `reel-${i}`,
        type: 'reels',
        color: theme.pallate.neutral['04'],
      })),
    [],
  );

  const taggedData = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: `tagged-${i}`,
        type: 'tagged',
        color: theme.pallate.neutral['03'],
      })),
    [],
  );

  return (
    <VStack fill>
      <HStackAnimated
        padding={{
          paddingTop: top + theme.spacing.standard,
          paddingHorizontal: theme.spacing.large,
          paddingBottom: theme.spacing.standard,
        }}
        items="center"
        spacing={theme.spacing.standard}
      >
        <Pressable
          onPress={() => {}}
          items="center"
          spacing={theme.spacing.small}
        >
          <Text weight="bold" color={theme.pallate.neutral['01']}>
            janfalih_
          </Text>
          <IconChevronDown color={theme.pallate.neutral['01']} size={20} />
        </Pressable>
        <Flex fill />
        <Pressable
          height={50}
          padding={{
            paddingHorizontal: theme.spacing.medium,
            paddingVertical: theme.spacing.standard,
          }}
          items="center"
          spacing={theme.spacing.tiny}
          style={{
            ...theme.elevations[5],
          }}
          backgroundColor={theme.pallate.neutral['05']}
          borderRadius={999}
        >
          <Setting size={24} color={theme.pallate.neutral['01']} />
          <Text type="l1" weight="bold" color={theme.pallate.neutral['01']}>
            Avatar
          </Text>
        </Pressable>
        <Pressable
          height={50}
          width={50}
          padding={{
            paddingHorizontal: theme.spacing.medium,
            paddingVertical: theme.spacing.standard,
          }}
          items="center"
          justify="center"
          spacing={theme.spacing.tiny}
          style={{
            ...theme.elevations[5],
          }}
          backgroundColor={theme.pallate.neutral['05']}
          borderRadius={999}
        >
          <Setting2
            variant="Bulk"
            size={24}
            color={theme.pallate.neutral['01']}
          />
        </Pressable>
      </HStackAnimated>
      <FlashList
        ListHeaderComponent={Header}
        data={postsData}
        renderItem={renderPostItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </VStack>
  );
});

export default Profile;
