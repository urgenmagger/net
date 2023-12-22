import { FC } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import { ListImages } from './components/list/ListImages';

export const MainScreen: FC = () => {
  const componentStyle = styles();
  return (
    <View style={{ ...componentStyle.container }}>
      <StatusBar translucent backgroundColor="transparent" />
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
