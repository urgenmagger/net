import React, { FC } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import { screenHeight, screenWidth } from "../../utils/widthScreen";

//  loader с затемнением на весь экран
export const FullScreenLoader: FC = () => {
  const width = screenWidth;
  const height = screenHeight;
  const componentStyle = styles(width, height);
  return (
    <View style={{ ...componentStyle.container }}>
      <ActivityIndicator size="small" color={"#E41E4E"} />
    </View>
  );
};

const styles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      zIndex: 2,
      width: width,
      height: height,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
  });
