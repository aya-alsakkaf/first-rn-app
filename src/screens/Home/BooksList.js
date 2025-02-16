import { StyleSheet, Text, View } from "react-native";
import React from "react";
import books from "../../data/books";
import BookCard from "../../components/BookCard";

const BooksList = () => {
  const allHPBooks = books.map((book) => {
    return (
      <BookCard title={book.title} price={book.price} image={book.image} />
    );
  });
  return <View>{allHPBooks}</View>;
};

export default BooksList;

const styles = StyleSheet.create({});
