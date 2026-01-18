import React, { memo, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  VStack,
  Text,
  theme,
  Button,
  HStack,
  Flex,
} from '@components/atoms';
import { RootStackParamList } from '@navigation/root/root.types';
import { PaperclipSvg } from '@assets/index';
import {
  IconArrowLeft,
  IconArrowRight,
  IconX,
} from 'tabler-icons-react-native';
import { useRegisterForm, useStepNavigation } from '@features/auth/register/hooks';
import { PaginatorDot, StepForm } from '@features/auth/register/components';
import { getRegisterConfig } from '@features/auth/register/config';

const Register = memo(() => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Get registration configuration (can be from backend, env vars, or feature flags)
  const config = getRegisterConfig();

  // Form management
  const {
    control,
    errors,
    isLoading,
    trigger,
    getValues,
    handleSubmit,
    onSubmit,
    checkPasswordsMatch,
  } = useRegisterForm({ config });

  // Step navigation
  const {
    currentStep,
    scrollX,
    flatListRef,
    handleNext,
    handleBack,
    handleClose,
    steps,
  } = useStepNavigation({
    trigger,
    getValues,
    checkPasswordsMatch,
    handleSubmit,
    onSubmit,
    config,
  });

  // Render step form
  const renderStep = useCallback(
    ({ item, index }: { item: any; index: number }) => (
      <StepForm
        item={item}
        control={control}
        errors={errors}
        isLoading={isLoading}
        checkPasswordsMatch={checkPasswordsMatch}
        verificationMethod={config.verificationMethod}
        isActive={index === currentStep}
      />
    ),
    [control, errors, isLoading, checkPasswordsMatch, config.verificationMethod, currentStep],
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Top Handle */}
      <Flex
        self="center"
        width={40}
        height={7}
        borderRadius={4}
        backgroundColor={theme.pallate.neutral['05']}
      />

      {/* Header */}
      <HStack
        items="center"
        justify="space-between"
        style={{
          paddingHorizontal: theme.spacing.large,
          paddingVertical: theme.spacing.standard,
        }}
      >
        <PaperclipSvg />
        <Button variant="secondary" size="fixed" rounded onPress={handleClose}>
          <IconX size={20} color={theme.pallate.neutral['01']} />
        </Button>
      </HStack>

      {/* Progress Dots */}
      <HStack
        items="center"
        justify="center"
        gap={theme.spacing.tiny}
        style={{ paddingVertical: theme.spacing.standard }}
      >
        {steps.map((_: any, index: number) => (
          <PaginatorDot key={index} index={index} scrollX={scrollX} />
        ))}
      </HStack>

      {/* Steps FlatList */}
      <FlatList
        ref={flatListRef}
        data={steps}
        extraData={errors}
        renderItem={renderStep}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        removeClippedSubviews
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          scrollX.value = event.nativeEvent.contentOffset.x;
        }}
      />

      {/* Footer */}
      <VStack
        padding={{
          paddingHorizontal: theme.spacing.large,
          paddingBottom: theme.spacing.large,
        }}
        gap={theme.spacing.standard}
      >
        <HStack
          gap={theme.spacing.small}
          items="center"
          justify="space-between"
        >
          {currentStep !== 0 && (
            <Button
              variant="secondary"
              size="lg"
              gap={theme.spacing.small}
              rounded
              onPress={handleBack}
              disabled={isLoading}
            >
              <IconArrowLeft size={22} color={theme.pallate.neutral['01']} />
              <Text type="b2" color={theme.pallate.neutral['01']}>
                Back
              </Text>
            </Button>
          )}
          <Button
            variant="primary"
            size="lg"
            gap={theme.spacing.small}
            rounded
            fill
            onPress={handleNext}
          disabled={isLoading}
        >
          <HStack items="center" justify="center" gap={theme.spacing.small}>
            <Text
              type="b1"
              weight="medium"
              color={theme.pallate.neutral['06']}
            >
              {currentStep === steps.length - 1
                ? isLoading
                  ? 'Creating account...'
                  : 'Create account'
                : 'Next'}
            </Text>
            {currentStep < steps.length - 1 && (
              <IconArrowRight size={20} color={theme.pallate.neutral['06']} />
            )}
          </HStack>
        </Button>
        </HStack>

        {currentStep === 0 && (
          <Button
            variant="link"
            size="sm"
            onPress={() => navigation.navigate('login')}
          >
            <Text type="b2" color={theme.pallate.neutral['02']}>
              Already have an account?{' '}
              <Text
                type="b2"
                weight="semibold"
                color={theme.pallate.primary['03']}
              >
                Sign in
              </Text>
            </Text>
          </Button>
        )}
      </VStack>
    </KeyboardAvoidingView>
  );
});

Register.displayName = 'Register';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.pallate.neutral['06'],
    paddingTop: theme.spacing.standard,
  },
});

export default Register;
