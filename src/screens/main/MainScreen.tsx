import { useGetImage } from 'api/hooks/useGetImage';
import React, { FC } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {}

export const MainScreen: FC<Props> = () => {
  const componentStyle = styles();
  const { data } = useGetImage(1, 10);
  console.log(
    'urgen data',
    data?.map(i => i?.id),
  );
  return (
    <View style={{ ...componentStyle.container }}>
      <Text>Main</Text>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {},
  });
