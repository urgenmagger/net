import React, { FC, useRef } from 'react';
import { Notifier, Easing, NotifierComponents } from 'react-native-notifier';

interface AlertCustomProps {
  title: string;
  description: string;
  duration?: number;
  showAnimationDuration?: number;
  alertType?: 'error' | 'success' | 'warn' | 'info';
  onHidden?: () => void;
  onPress?: () => void;
  hideOnPress?: boolean;
}

export const AlertCustom: FC<AlertCustomProps> = ({
  title,
  description,
  duration = 3000,
  showAnimationDuration = 800,
  alertType = 'error',
  onHidden,
  onPress,
  hideOnPress = false,
}) => {
  const showAlert = () => {
    Notifier.showNotification({
      title,
      description,
      duration,
      showAnimationDuration,
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType,
      },
      onHidden: () => {
        if (onHidden) {
          onHidden();
        }
        console.log('Hidden');
      },
      onPress: () => {
        if (onPress) {
          onPress();
        }
        console.log('Press');
      },
      hideOnPress,
    });
  };

  const showNotificationRef = useRef(showAlert);

  // Expose the showNotification function to the parent component
  const exposeFunction = () => {
    showNotificationRef.current();
  };

  return <></>;
};
