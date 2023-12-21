import { FC } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import { useGetImages } from 'api/hooks/useGetImages';
import { Photo } from 'common/types';

const { width } = Dimensions.get('window');
const itemMargin = 10;

export const ListImages: FC = () => {
  const componentStyle = styles();
  const { data, fetchNextPage, isFetchingNextPage } = useGetImages();
  const flatData = data?.pages?.flatMap(page => page?.data || []);

  const renderItem = ({ item }: { item: Photo }) => {
    return (
      <View style={{ ...componentStyle.itemContainer }}>
        <Image
          source={{ uri: item?.image }}
          style={{ ...componentStyle.image }}
        />
      </View>
    );
  };
  return (
    <View style={{ ...componentStyle.container }}>
      <FlatList
        data={flatData?.flatMap(item => item || []) || []}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item?.id?.toString()}
        columnWrapperStyle={{ ...componentStyle.columnWrapper }}
        showsHorizontalScrollIndicator={false}
        onEndReached={fetchNextPage}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          isFetchingNextPage ? (
            <ActivityIndicator size="small" color="red" />
          ) : null
        }
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
