import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Task = (props) => {
  return (
    <View>
      <Text>{props.Text}</Text>
    </View>
  );
};

const styles = () => {};
export default Task;
