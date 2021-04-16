import "./App.css";

import { useEffect } from "react";

import { Container } from "@material-ui/core";

import * as BookAPI from "./services/BooksAPI.js";
import Header from "./Header.js";
import ShelfSelect from "./ShelfSelect.js";
import ShelfBooks from "./ShelfBooks";

import "fontsource-roboto";

function App() {
  useEffect(() => {
    const fetchAllBooks = async () => {
      const result = await BookAPI.getAll();
      console.log(result);
    };
    const searchReact = async () => {
      const result = await BookAPI.search("React");
      console.log(result);
    };

    // this will update the state of the book
    // and return object with 3 arrays for currently reading, read, want to read
    const updateProReact = async () => {
      const proReactBook = await BookAPI.get("PKpPCwAAQBAJ");
      console.log(proReactBook);
      const result = await BookAPI.update(proReactBook, "currentlyReading");
      console.log(result);
    };

    updateProReact();
    searchReact();
    fetchAllBooks();
  }, []);

  return (
    <Container className="App" maxWidth="xl">
      <Header />
      <ShelfSelect />
      <ShelfBooks />
    </Container>
  );
}

export default App;
