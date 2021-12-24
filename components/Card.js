import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = (props) => {
  const { children, style: propStyles } = props;
  return <View style={{ ...styles.card, ...propStyles }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default Card;
