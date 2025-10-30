import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Pressable,
  Text,
  theme,
  VStack,
} from '@components/atoms';
import { HomeType } from './home.types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ArrowCircleDown,
  Bag,
  BatteryFull,
  Box1,
  Coin1,
  Copy,
  Flash,
  Lock,
} from 'iconsax-react-native';
import { Dimensions, ScrollView } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import Image from '@components/atoms/image';
import { FasterImageView } from '@candlefinance/faster-image';

export const Home = (props: HomeType) => {
  const { navigation } = props;
  const { top } = useSafeAreaInsets();
  const screenWidth = Dimensions.get('screen').width;
  console.log(screenWidth)
  return (
    <VStack as={<ScrollView />} fill>
      <VStack
        style={{ overflow: 'hidden' }}
        borderRadius={{
          borderBottomLeftRadius: 40,
        }}
      >
        <HStack
          zIndex={1}
          position={{
            top: 0,
            left: 0,
            right: 0,
          }}
          padding={{ paddingTop: top, paddingHorizontal: theme.spacing.large }}
          justify="space-between"
          items="center"
        >
          <Text
            italic
            type="h3"
            color={theme.pallate.neutral['01']}
            weight="bold"
            text="Wuzz"
          />
          <Pressable
            padding={{
              paddingVertical: theme.spacing.small,
              paddingHorizontal: theme.spacing.standard,
            }}
            borderRadius={20}
            backgroundColor={theme.pallate.neutral['01']}
            items="center"
            spacing={theme.spacing.tiny}
          >
            <Coin1 color="#FF9500" size={24} variant="Bulk" />
            <Text type="b2" weight="bold" text="10" />
          </Pressable>
        </HStack>
        <FlashList
          data={[
            'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
            'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
            'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900',
          ]}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image
              uri={item}
              resizeMode='fill'
              style={{ width: screenWidth, height: screenWidth }}
            />
          )}
          keyExtractor={(_, index) => ['banner', index].join('-')}
        />
        <Pressable
          position={{
            bottom: 30,
            left: 20,
            right: 20,
          }}
          borderRadius={50}
          items="center"
          spacing={theme.spacing.standard}
          padding={{
            paddingHorizontal: theme.spacing.large,
            paddingVertical: theme.spacing.medium,
          }}
          backgroundColor={theme.pallate.neutral['01']}
        >
          <Bag color={theme.pallate.primary['03']} size={24} variant="Bulk" />
          <VStack fill>
            <Text type="l1" weight="semibold">
              Wuzz 2025 - Supermall Karawaci
            </Text>
            <HStack items="center" spacing={theme.spacing.tiny}>
              <BatteryFull
                size={20}
                variant="Bulk"
                color={theme.pallate.neutral['04']}
              />
              <Text type="l2" color={theme.pallate.neutral['04']}>
                Lagi Ramai Nih!
              </Text>
            </HStack>
          </VStack>
          <ArrowCircleDown
            color={theme.pallate.neutral['04']}
            size={24}
            variant="Bulk"
          />
        </Pressable>
        <HStack
          position={{
            bottom: 15,
            left: 30,
            right: 20,
          }}
          items="center"
          spacing={theme.spacing.small}
        >
          <Box
            width={25}
            height={5}
            borderRadius={20}
            backgroundColor={theme.pallate.neutral['01']}
          />
          <Box
            width={10}
            height={5}
            borderRadius={20}
            backgroundColor={theme.pallate.neutral['01']}
            opacity={0.5}
          />
          <Box
            width={10}
            height={5}
            borderRadius={20}
            backgroundColor={theme.pallate.neutral['01']}
            opacity={0.5}
          />
        </HStack>
      </VStack>

      <VStack
        spacing={theme.spacing.standard}
        margin={{ marginTop: -40 }}
        padding={{
          paddingTop: 40 + theme.spacing.large,
          paddingHorizontal: theme.spacing.large,
          paddingBottom: theme.spacing.large,
        }}
      >
        <VStack>
          <Text type="s2" weight="semibold">
            Cepat, Bersih, dan Aman!
          </Text>
          <Text type="l1" color={theme.pallate.neutral['04']}>
            Kiloan hingga premium, semua tersedia untukmu.
          </Text>
        </VStack>
        <HStack spacing={theme.spacing.standard}>
          {[
            {
              name: 'Laundry Kiloan',
              icon: 'kiloan',
            },
            {
              name: 'Laundry Satuan',
              icon: 'satuan',
            },
            {
              name: 'Sprei & Bedcover',
              icon: 'selimut',
            },
            {
              name: 'Sepatu & Tas',
              icon: 'tas_sepatu',
            },
          ].map((item, index) => (
            <Pressable
              direction="column"
              fill
              justify="center"
              items="center"
              spacing={theme.spacing.tiny}
            >
              <Flex
                borderWidth={1}
                borderColor={theme.pallate.neutral['03']}
                width={60}
                height={60}
                items="center"
                justify="center"
                borderRadius={30}
                backgroundColor={theme.pallate.neutral['02']}
              >
                <Icon
                  icon={item.icon}
                  size={32}
                  color={theme.pallate.neutral['04']}
                />
              </Flex>
              <Text type="l1" align="center">
                {item.name}
              </Text>
            </Pressable>
          ))}
        </HStack>
      </VStack>
      <VStack
        spacing={theme.spacing.standard}
        padding={{
          paddingHorizontal: theme.spacing.large,
          paddingBottom: theme.spacing.large,
        }}
      >
        <VStack>
          <Text type="s2" weight="semibold">
            Lagi diproses oleh Wuzz!
          </Text>
          <Text type="l1" color={theme.pallate.neutral['04']}>
            Kami sedang memproses pesananmu.
          </Text>
        </VStack>
      </VStack>
      <FlashList
        data={['red', 'blue', 'green']}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.large,
          paddingBottom: theme.spacing.large,
        }}
        ItemSeparatorComponent={() => (
          <Divider thickness={theme.spacing.standard} />
        )}
        renderItem={({ item }) => (
          <Pressable
            direction="column"
            width={screenWidth * 0.85}
            spacing={theme.spacing.standard}
            padding={theme.spacing.large}
            borderWidth={1}
            borderColor={theme.pallate.neutral['02']}
            borderRadius={30}
          >
            <HStack>
              <VStack>
                <Text weight="semibold">Driver Menuju Lokasimu</Text>
                <HStack spacing={theme.spacing.tiny} items="center">
                  <Text color={theme.pallate.neutral['04']} type="l1">
                    Wuzz 1090 Supermall Karawaci
                  </Text>
                  <Box
                    width={3}
                    height={3}
                    borderRadius={20}
                    backgroundColor={theme.pallate.neutral['04']}
                  />
                  <Text color={theme.pallate.neutral['04']} type="l1">
                    Delivery
                  </Text>
                </HStack>
              </VStack>
            </HStack>
            <HStack items="center" spacing={theme.spacing.small}>
              <Box
                width={25}
                height={25}
                borderRadius={20}
                backgroundColor={theme.pallate.primary['03']}
              />
              <Flex
                fill
                height={5}
                backgroundColor={theme.pallate.primary['03']}
              />
              <Box
                width={25}
                height={25}
                borderRadius={20}
                backgroundColor={theme.pallate.primary['03']}
              />
              <Flex
                fill
                height={5}
                backgroundColor={theme.pallate.primary['03']}
              />
              <Box
                width={25}
                height={25}
                borderRadius={20}
                backgroundColor={theme.pallate.primary['03']}
              />
              <Flex
                fill
                height={5}
                backgroundColor={theme.pallate.primary['03']}
              />
              <Box
                width={25}
                height={25}
                borderRadius={20}
                backgroundColor={theme.pallate.primary['03']}
              />
            </HStack>
            <HStack justify="space-between">
              <VStack>
                <Text type="b2" weight="medium">
                  Laundry Kiloan
                </Text>
                <Text color={theme.pallate.neutral['04']} type="l1">
                  3Kg Pakaian
                </Text>
              </VStack>
              <VStack items="flex-end">
                <Text type="l2" weight="medium">
                  Total Harga
                </Text>
                <Text color={theme.pallate.neutral['05']} type="b2">
                  Rp 40.000
                </Text>
              </VStack>
            </HStack>
            <HStack items="center" justify="space-between">
              <Text color={theme.pallate.neutral['04']} type="l1">
                9 Okt 2025
              </Text>
              <Pressable
                padding={{
                  paddingHorizontal: theme.spacing.standard,
                  paddingVertical: theme.spacing.small,
                }}
                items="center"
                spacing={theme.spacing.tiny}
                borderRadius={10}
                backgroundColor={theme.pallate.neutral['03']}
              >
                <Text type="l2" color={theme.pallate.neutral['04']}>
                  TRX-20251009-8F3A9C2B
                </Text>
                <Copy
                  color={theme.pallate.neutral['04']}
                  size={20}
                  variant="Bulk"
                />
              </Pressable>
            </HStack>
          </Pressable>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <VStack
        spacing={theme.spacing.standard}
        padding={{
          paddingHorizontal: theme.spacing.large,
          paddingBottom: theme.spacing.large,
        }}
      >
        <Text type="s2" weight="semibold">
          Service yang kami berikan!
        </Text>
        <HStack spacing={theme.spacing.small}>
          <Pressable
            direction="column"
            width={
              (screenWidth - theme.spacing.large * 2 - theme.spacing.small / 2) / 2
            }
            spacing={theme.spacing.small}
            onPress={() => navigation.navigate('checkout')}
            borderRadius={30}
            height={220}
            justify="flex-end"
            padding={theme.spacing.large}
            backgroundColor={theme.pallate.neutral['02']}
          >
            <Flex
              width={60}
              height={60}
              items="center"
              justify="center"
              borderRadius={20}
              backgroundColor={theme.pallate.neutral['02']}
            >
              <Icon
                icon={'reguler'}
                size={60}
                color={theme.pallate.neutral['04']}
              />
            </Flex>
            <Text width="100%" weight="semibold" type="b2">
              Reguler
            </Text>
            <Text width="100%" type="l2">
              Cuci hanya 1 - 2 hari praktis dan nyaman di kantong.
            </Text>
          </Pressable>
          <VStack
            width={
              (screenWidth - theme.spacing.large * 2 - theme.spacing.small / 2) / 2
            }
            spacing={theme.spacing.small}
          >
            <HStack items="center" spacing={theme.spacing.tiny} width="100%">
              <Flash
                size={32}
                variant="Bold"
                color={theme.pallate.neutral['04']}
              />
              <VStack fill>
                <Text weight="semibold" type="b2">
                  Express Order
                </Text>
                <Text width="100%" type="l2">
                  Laundry Super Cepat.
                </Text>
              </VStack>
            </HStack>
            <Pressable
              fill
              borderRadius={30}
              width="100%"
              items="center"
              padding={theme.spacing.medium}
              spacing={theme.spacing.small}
              onPress={() => navigation.navigate('checkout')}
              backgroundColor={theme.pallate.neutral['02']}
            >
              <Flex
                width={40}
                height={40}
                items="center"
                justify="center"
                borderRadius={20}
                backgroundColor={theme.pallate.neutral['02']}
              >
                <Icon
                  icon={'kilat'}
                  size={24}
                  color={theme.pallate.neutral['04']}
                />
              </Flex>
              <VStack>
                <Text weight="semibold" type="b2">
                  Kilat
                </Text>
                <Text type="l1">3 Jam</Text>
              </VStack>
            </Pressable>
            <Pressable
              fill
              borderRadius={30}
              width="100%"
              items="center"
              padding={theme.spacing.medium}
              spacing={theme.spacing.small}
              onPress={() => navigation.navigate('checkout')}
              backgroundColor={theme.pallate.neutral['02']}
            >
              <Flex
                width={40}
                height={40}
                items="center"
                justify="center"
                borderRadius={20}
                backgroundColor={theme.pallate.neutral['02']}
              >
                <Icon
                  icon={'express'}
                  size={34}
                  color={theme.pallate.neutral['04']}
                />
              </Flex>
              <VStack>
                <Text weight="semibold" type="b2">
                  Express
                </Text>
                <Text type="l1">3 Jam</Text>
              </VStack>
            </Pressable>
          </VStack>
        </HStack>
      </VStack>
      <VStack
        padding={{
          paddingHorizontal: theme.spacing.large,
          paddingBottom: theme.spacing.large,
        }}
        spacing={theme.spacing.large}
      >
        <VStack>
          <Text type="s2" weight="semibold">
            Privasi Cucianmu Aman 100%
          </Text>
          <Text type="l1" color={theme.pallate.neutral['04']}>
            Kami Jaga Privasimu, Seperti Jaga Pakaian Sendiri.
          </Text>
        </VStack>
        <HStack spacing={theme.spacing.small}>
          <VStack
            borderRadius={30}
            justify="space-between"
            padding={theme.spacing.large}
            backgroundColor={theme.pallate.neutral['02']}
            spacing={theme.spacing.small}
            fill
          >
            <Box1
              size={48}
              variant="Bulk"
              color={theme.pallate.neutral['04']}
            />
            <VStack
              padding={{
                paddingTop: theme.spacing.large,
              }}
            >
              <Text type="b2" weight="semibold">
                Cucian Diproses Terpisah
              </Text>
              <Text type="l2">
                Pesanan tidak dicampur dengan pelanggan lain.
              </Text>
            </VStack>
          </VStack>
          <VStack
            borderRadius={30}
            justify="space-between"
            padding={theme.spacing.large}
            backgroundColor={theme.pallate.neutral['02']}
            spacing={theme.spacing.small}
            fill
          >
            <Lock
              size={48}
              variant="Bulk"
              color={theme.pallate.neutral['04']}
            />
            <VStack
              padding={{
                paddingTop: theme.spacing.large,
              }}
            >
              <Text type="b2" weight="semibold">
                Privasi Terjaga
              </Text>
              <Text type="l2">
                Staff khusus yang menangani pakaianmu, memastikan privasi tetap
                terjaga.
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
