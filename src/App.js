import "./App.css";

import { useEffect, useState } from "react";

import { Container, Box } from "@material-ui/core";

import * as BookAPI from "./services/BooksAPI.js";
import Header from "./Header.js";
import ShelfSelect from "./ShelfSelect.js";
import ShelfBooks from "./ShelfBooks";

import "fontsource-roboto";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [currentlyReadingShelf, setCurrentlyReadingShelf] = useState([]);
  const [readShelf, setReadShelf] = useState([]);
  const [wantToReadShelf, setWantToReadShelf] = useState([]);

  const fetchAllBooks = async () => {
    const allBooks = await BookAPI.getAll();
    console.log(allBooks);
    setAllBooks(allBooks);
  };

  const handleBookShelfChange = async (bookID, shelf) => {
    const book = await BookAPI.get(bookID);
    const shelves = await BookAPI.update(book, shelf);
    await fetchAllBooks();
  };

  const searchReact = async () => {
    const result = await BookAPI.search("React");
    console.log(result);
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <Container className="App" maxWidth="xl">
      <Header />
      <Box margin={2.4}>
        <ShelfSelect />
        <ShelfBooks
          allBooks={allBooks}
          onBookShelfChange={handleBookShelfChange}
        />
      </Box>
    </Container>
  );
}

export default App;
