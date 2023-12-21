import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { useGetImages } from 'api/hooks/useGetImages';
import { ListImages } from './components/list/ListImages';

interface Props {}

export const MainScreen: FC<Props> = () => {
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <ListImages />
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
