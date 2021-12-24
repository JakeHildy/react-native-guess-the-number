import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = (props) => {
  const { children } = props;
  return <Text style={{ ...styles.title, ...props.style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default TitleText;
