import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const BookCard = ({ title, image, price }) => {
  return (
    <View style={styles.bookCard}>
      <Image
        source={{
          uri: image,
        }}
        width={150}
        height={250}
      />
      <Text>Title: {title}</Text>
      <Text>Price: {price}</Text>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  bookCard: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    gap: 15,
    backgroundColor: "white",
  },
});
