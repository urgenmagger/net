import { useGetImageById } from 'api/hooks/useGetImageById';
import { FullScreenLoader } from 'common/components/FullScreenLoader';
import { FC } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';

interface Props {
  route: {
    params: {
      photoId: string;
    };
  };
}

export const Details: FC<Props> = ({ route }) => {
  const { photoId } = route.params;
  const { data, isLoading } = useGetImageById(photoId);
  const componentStyle = styles();
  return (
    <>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <View style={{ ...componentStyle.container }}>
          <StatusBar translucent backgroundColor="transparent" />
          <ImageBackground
            source={{ uri: data?.image }}
            style={{ ...componentStyle.imageBackground }}
          >
            {/* Ваше содержимое, которое будет отображаться поверх изображения */}
          </ImageBackground>
        </View>
      )}
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
