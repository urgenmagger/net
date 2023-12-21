import { QueryClientProvider } from '@tanstack/react-query';
import { AppNavigation } from './src/navigation/AppNavigation';
import { queryClient } from './src/utils/queryClient';
import React from 'react';

export default (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
};
