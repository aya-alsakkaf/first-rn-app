import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BookCard from "./src/components/BookCard";
import books from "./src/data/books";
import BooksList from "./src/screens/Home/BooksList";
import Profile from "./src/screens/Profile/Profile";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <BooksList /> */}
      {/* <Profile /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    padding: 15,
    width: 350,
    marginTop: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#faedcd",
    // alignItems: "center",
    // justifyContent: "center",
  },
  bookCard: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    gap: 15,
  },
});
