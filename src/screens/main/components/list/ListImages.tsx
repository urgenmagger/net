import { FC } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

import { Photo } from 'common/types';

interface Props {
  data: Photo[] | undefined;
}

const { width } = Dimensions.get('window');
const itemMargin = 10;

export const ListImages: FC<Props> = ({ data }) => {
  const componentStyle = styles();

  const renderItem = ({ item }: { item: Photo }) => {
    return (
      <View style={{ ...componentStyle.itemContainer }}>
        <Image
          source={{ uri: item?.urls?.small }}
          style={{ ...componentStyle.image }}
        />
      </View>
    );
  };
  return (
    <View style={{ ...componentStyle.container }}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={{ ...componentStyle.columnWrapper }}
      />
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    itemContainer: {
      flex: 1,
      margin: itemMargin,
    },
    image: {
      height: 200,
      borderRadius: 8,
      resizeMode: 'cover',
      width: (width - (2 + 1) * itemMargin) / 2,
    },
    columnWrapper: {
      margin: itemMargin / 2,
      justifyContent: 'space-between',
    },
  });
