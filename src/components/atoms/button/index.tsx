import React from 'react';
import { StyleSheet } from 'react-native';
import sv, { VariantProps } from 'style-variants';
import Pressable, { PressableProps } from '../pressable';
import theme from '../theme';
import LinearGradient from 'react-native-linear-gradient';

// Added a fixed size option
const button = sv({
  base: {
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
  },
  variants: {
    size: {
      sm: {
        paddingVertical: 10,
        paddingHorizontal: 16,
      },
      md: {
        paddingHorizontal: 22,
        height: 55,
      },
      lg: {
        height: 65,
        paddingHorizontal: 22,
      },
      // Newly added fixed size
      fixed: {
        width: 45,
        height: 45,
      },
    },
    variant: {
      primary: {
        backgroundColor: theme.pallate.primary['03'],
      },
      secondary: {
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,0.1)',
      },
      default: {
        backgroundColor: theme.pallate.neutral['05'],
      },
      outline: {
        borderColor: theme.pallate.neutral['01'],
        borderWidth: 1,
      },
      link: {
        backgroundColor: 'transparent',
      },
    },
    rounded: {
      true: {
        borderRadius: 9999,
      },
    },
    disabled: {
      true: {
        opacity: 0.2,
      },
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
    rounded: false,
  },
});

type ButtonVariantsProps = VariantProps<typeof button>;

type ButtonProps = ButtonVariantsProps &
  Omit<PressableProps, 'disabled' | 'onPress'> & {
    /** Makes the button visually disabled and not clickable (default disabled) */
    disabled?: boolean;
    /** If true, shows as disabled but is still clickable, triggers onAuxPress handler instead */
    softDisabled?: boolean;
    /** Main onPress handler (used when not disabled and not softDisabled) */
    onPress?: (() => void) | undefined;
    /** Handler to be fired when softDisabled is true */
    onAuxPress?: (() => void) | undefined;
  };

export const Button = React.memo((props: ButtonProps) => {
  const {
    disabled,
    softDisabled,
    variant,
    size,
    rounded,
    style,
    children,
    onPress,
    onAuxPress,
    ...rest
  } = props;

  /**
   * Button style: visually show as disabled if disabled or softDisabled is true
   * - If hard disabled, not clickable
   * - If softDisabled, clickable but fires onAuxPress
   */
  const buttonStyles = button({
    size,
    variant,
    rounded,
    disabled: disabled || softDisabled,
    style,
  });

  // If hard disabled, block interaction. (native disabled)
  const pressableDisabled = !!disabled && !softDisabled;

  // Choose which function to fire on press:
  // - If disabled: onPress is null (unclickable)
  // - If softDisabled: onAuxPress handler fires
  // - Else: onPress fires
  const handlePress = React.useCallback(() => {
    if (softDisabled) {
      onAuxPress?.();
    } else if (!disabled && onPress) {
      onPress();
    }
  }, [disabled, softDisabled, onPress, onAuxPress]);

  return (
    <Pressable
      {...rest}
      style={buttonStyles}
      items="center"
      justify="center"
      disabled={pressableDisabled}
      onPress={handlePress}
    >
      {variant === 'secondary' && (
        <LinearGradient
          colors={['#252525', '#181818']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[
            StyleSheet.absoluteFill,
            {
              borderRadius: rounded ? 9999 : 4,
              borderWidth: 0.5,
              borderColor: 'rgba(255,255,255,0.1)',
            },
          ]}
        />
      )}
      {children}
    </Pressable>
  );
});

export default Button;
