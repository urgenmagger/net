import { useGetImageById } from 'api/hooks/useGetImageById';
import { SERVER_ERROR } from 'common/C';
import { AlertCustom } from 'common/components/AlertCustom';
import { FullScreenLoader } from 'common/components/FullScreenLoader';
import { FC, useEffect, useRef } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Toast from 'react-native-toast-message';

interface Props {
  route: {
    params: {
      photoId: string;
    };
  };
}

export const Details: FC<Props> = ({ route }) => {
  const { photoId } = route.params;
  const alertRef = useRef();
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
          source={{ uri: data?.image }}
          style={{ ...componentStyle.imageBackground }}
        >
          {/* Ваше содержимое, которое будет отображаться поверх изображения */}
        </ImageBackground>
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
