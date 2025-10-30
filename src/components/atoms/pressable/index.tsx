import React, { Ref } from 'react';
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  View,
  ViewStyle,
} from 'react-native';
import { StackProps } from '../layouts/stack/stack.types';
import { Stack } from '../layouts';
import Reanimated from 'react-native-reanimated';

type PressableContainer = Omit<StackProps, 'as'> & RNPressableProps;

export interface PressableProps extends PressableContainer {
  ref?: Ref<View>;
  androidRipple?: PressableProps['android_ripple'];
  androidDisableSound?: boolean;
  shrink?: boolean;
  opacity?: number;
  containerStyle?: ViewStyle;
}

export const Pressable: React.FC<PressableProps> = React.memo(props => {
  const {
    androidRipple,
    androidDisableSound,
    shrink = true,
    opacity = true,
    containerStyle,
    style,
    ref,
    ...rest
  } = props;
  return (
    <Stack
      ref={ref}
      direction="row"
      style={containerStyle}
      as={
        <RNPressable
          android_disableSound={androidDisableSound}
          android_ripple={androidRipple}
          style={({ pressed }) => [
            {
              opacity: pressed && opacity ? 0.6 : 1,
              transform: [{ scale: pressed && shrink ? 0.98 : 1 }],
            },
            style as ViewStyle,
          ]}
        />
      }
      {...rest}
    />
  );
});

export default Pressable;

export const PressableAnimated = Reanimated.createAnimatedComponent(Pressable);
