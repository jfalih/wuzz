import React, { memo, useCallback } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  VStack,
  Text,
  theme,
  Input,
  Button,
  HStack,
  Flex,
} from '@components/atoms';
import { RootStackParamList } from '@navigation/root/root.types';
import { useHapticFeedback } from '@services/hooks/utils';
import { useLogin } from '@hooks/apis/auth';
import {
  loginSchema,
  LoginFormData,
} from '@features/auth/login/schemas';
import { PaperclipSvg } from '@assets/index';
import { IconX } from 'tabler-icons-react-native';

const Login = memo(() => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { triggerHaptic } = useHapticFeedback();
  const loginMutation = useLogin();

  const {
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleForgotPassword = useCallback(() => {
    triggerHaptic('light');
    navigation.navigate('forgot-password');
  }, [navigation, triggerHaptic]);

  const handleClose = useCallback(() => {
    triggerHaptic('light');
    navigation.goBack();
  }, [navigation, triggerHaptic]);

  const isLoading = isSubmitting || loginMutation.isPending;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Divider */}
      <Flex
        self="center"
        width={40}
        height={7}
        borderRadius={4}
        backgroundColor={theme.pallate.neutral['05']}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <HStack items="center" justify="space-between">
          <PaperclipSvg />
          <Button
            variant="secondary"
            size="fixed"
            rounded
            onPress={handleClose}
          >
            <IconX size={20} color={theme.pallate.neutral['01']} />
          </Button>
        </HStack>
        <VStack spacing={theme.spacing.tiny}>
          <Text type="h2" weight="medium" color={theme.pallate.neutral['01']}>
            Welcome back!
          </Text>
          <Text type="b2" color={theme.pallate.neutral['02']}>
            Your story always inspires others to follow in your footsteps.
          </Text>
        </VStack>
        {/* X Close Icon */}
        {/* Form Section */}
        <VStack gap={theme.spacing.standard}>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Username"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                rounded
                leftIcon={
                  <Text
                    type="b1"
                    weight="medium"
                    color={theme.pallate.neutral['01']}
                  >
                    paplip.com/
                  </Text>
                }
                spacing="none"
                error={errors.username?.message}
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoading}
                variant="filled"
                size="md"
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.password?.message}
                type="password"
                editable={!isLoading}
                variant="filled"
                spacing="none"
                size="md"
              />
            )}
          />

          {/* Forgot Password Link */}
          <Button
            variant="link"
            size="sm"
            onPress={handleForgotPassword}
            disabled={isLoading}
          >
            <Text type="b2" color={theme.pallate.neutral['02']}>
              Forgot password?
            </Text>
          </Button>

          {/* Login Button */}
          <Button
            variant="primary"
            size="lg"
            rounded
            onPress={() => {
              navigation.replace('bottom');
            }}
            disabled={isLoading}
            style={{ marginTop: theme.spacing.standard }}
          >
            <Text type="b1" weight="medium" color={theme.pallate.neutral['06']}>
              {isLoading
                ? 'Signing into your account...'
                : 'Sign in to your account'}
            </Text>
          </Button>
        </VStack>

        {/* Register Link */}
        <HStack self="center" items="baseline" gap={theme.spacing.small}>
          <Text type="b2" color={theme.pallate.neutral['02']}>
            Don't have an account?
          </Text>
          <Text type="b1" weight="bold" color={theme.pallate.primary['03']}>
            Sign up
          </Text>
        </HStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

Login.displayName = 'Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.pallate.neutral['06'],
    paddingTop: theme.spacing.standard,
  },
  scrollContent: {
    flexGrow: 1,
    padding: theme.spacing.large,
    gap: theme.spacing.large,
  },
});

export default Login;
