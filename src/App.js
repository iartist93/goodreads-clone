import logo from "./logo.svg";
import "./App.css";

import { useEffect } from "react";
import * as BookAPI from "./services/BooksAPI.js";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
