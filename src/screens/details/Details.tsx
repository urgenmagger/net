import { FC } from 'react';
import Toast from 'react-native-toast-message';
import { View, StatusBar, StyleSheet, ImageBackground } from 'react-native';

import { useGetImageById } from 'api/hooks/useGetImageById';
import { MOCK_PHOTO_DETAILS, SERVER_ERROR } from 'common/C';
import { FullScreenLoader } from 'common/components/FullScreenLoader';

interface Props {
  route: {
    params: {
      photoId: string;
    };
  };
}

export const Details: FC<Props> = ({ route }) => {
  const { photoId } = route.params;
  const { data, isLoading, error, isError } = useGetImageById(photoId);

  if (isError) {
    Toast.show({
      type: 'error',
      text1: SERVER_ERROR,
    });
  }

  const componentStyle = styles();
  return (
    <>
      {isLoading && <FullScreenLoader />}
      <View style={{ ...componentStyle.container }}>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground
          source={{ uri: isLoading ? MOCK_PHOTO_DETAILS : data?.image }}
          style={{ ...componentStyle.imageBackground }}
        ></ImageBackground>
      </View>
      <Toast />
    </>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'contain',
      justifyContent: 'center',
    },
  });
