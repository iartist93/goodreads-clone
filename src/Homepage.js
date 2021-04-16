import { useEffect, useState } from "react";

import { Container, Box } from "@material-ui/core";

import * as BookAPI from "./services/BooksAPI.js";
import Header from "./Header.js";
import ShelfSelect from "./ShelfSelect.js";
import Books from "./Books";

import "fontsource-roboto";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Homepage({
  currentShelf,
  setCurrentShelf,
  bookList,
  onBookShelfChange,
}) {
  return (
    <Container className="App" maxWidth="xl">
      <Header />
      <Box margin={2.4}>
        <ShelfSelect
          currentShelf={currentShelf}
          onShelfChange={setCurrentShelf}
        />
        <Books
          currentShelf={currentShelf}
          bookList={bookList}
          onBookShelfChange={onBookShelfChange}
        />
      </Box>
    </Container>
  );
}

export default Homepage;
