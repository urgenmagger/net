import { QueryClientProvider } from '@tanstack/react-query';
import { AppNavigation } from './src/navigation/AppNavigation';
import { queryClient } from './src/utils/queryClient';
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import { NO_CONNECT } from 'common/C';

export default (): React.JSX.Element => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isConnected) {
      Toast.show({
        type: 'error',
        text1: NO_CONNECT,
      });
    }
  }, [isConnected]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppNavigation />
      </QueryClientProvider>
      <Toast />
    </>
  );
};
