import { FC } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Photo } from 'common/types';
import { useGetImages } from 'api/hooks/useGetImages';
import { RootStackNavigationProp, Screens } from 'navigation/types';

export const ListImages: FC = () => {
  const componentStyle = styles();
  const { data, fetchNextPage, isFetchingNextPage, isLoading } = useGetImages();
  const flatData = data?.pages?.flatMap(page => page?.data || []);

  const navigation = useNavigation<RootStackNavigationProp<Screens.Details>>();

  const handleGoDetails = (id: string) => {
    navigation.navigate(Screens.Details, { photoId: id });
  };

  const renderItem = ({ item }: { item: Photo }) => {
    return (
      <>
        {isLoading ? (
          <View style={{ ...componentStyle.itemContainer }}>
            <ActivityIndicator size="small" color="red" />
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => handleGoDetails(item?.id)}
            style={{ ...componentStyle.itemContainer }}
          >
            <Image
              source={{ uri: item?.image }}
              style={{ ...componentStyle.image }}
            />
          </TouchableOpacity>
        )}
      </>
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
        onEndReachedThreshold={0.9}
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
      margin: 10,
    },
    image: {
      height: 200,
      borderRadius: 8,
      resizeMode: 'cover',
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
  });
