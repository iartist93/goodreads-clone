import "./styles/App.css";
import "fontsource-roboto";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Homepage from "./pages/Homepage.js";
import SearchPage from "./pages/SearchPage.js";
import * as BookAPI from "./services/BooksAPI.js";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [currentShelf, setCurrentShelf] = useState("currentlyReading");

  const fetchAllBooks = async () => {
    const allBooks = await BookAPI.getAll();
    // console.log(allBooks);
    setAllBooks(allBooks);
  };

  const handleBookShelfChange = async (bookID, shelf) => {
    const book = await BookAPI.get(bookID);
    await BookAPI.update(book, shelf);
    await fetchAllBooks();
  };

  const searchBook = async (query) => {
    const result = await BookAPI.search(query);
    // console.log("---------------> Search Results");
    // console.log(result);
    if (result && Array.isArray(result)) {
      const modifiedResult = result.map((currentBook) => {
        const found = allBooks.find((book) => book.id === currentBook.id);
        if (found) currentBook.shelf = found.shelf;
        return currentBook;
      });
      setSearchResult(modifiedResult);
      // console.log(modifiedResult);
    } else {
      setSearchResult([]);
    }
  };

  // can't add the function as dep. here as it `useState` will cause re-render
  // and `useEffect` will run each re-render
  useEffect(() => {
    fetchAllBooks();
    searchBook();
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <Homepage
          currentShelf={currentShelf}
          setCurrentShelf={setCurrentShelf}
          bookList={allBooks}
          onBookShelfChange={handleBookShelfChange}
        />
      </Route>
      <Route exact path="/search">
        <SearchPage
          bookList={searchResult}
          onSearch={searchBook}
          onBookShelfChange={handleBookShelfChange}
        />
      </Route>
    </Router>
  );
}

export default App;
