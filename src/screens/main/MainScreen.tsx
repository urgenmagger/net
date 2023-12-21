import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { useGetImage } from 'api/hooks/useGetImage';
import { ListImages } from './components/list/ListImages';

interface Props {}

export const MainScreen: FC<Props> = () => {
  const componentStyle = styles();
  const { data } = useGetImage(1, 10);
  return (
    <View style={{ ...componentStyle.container }}>
      <ListImages data={data} />
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
