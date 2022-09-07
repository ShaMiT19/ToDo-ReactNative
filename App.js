import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./componets/Tasks";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Task Title  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today's tasks </Text>
      </View>
      <View style={styles.Items}>
        <Task Text={"Task 1"} />
        <Task Text={"Task 2"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  Items: {},
});
