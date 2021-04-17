import "fontsource-roboto";

import { Container, Box } from "@material-ui/core";

import Header from "../components/Header/Header.js";
import ShelfSelect from "../components/Shelf/ShelfSelect.js";
import Books from "../components/Books/Books.js";

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
