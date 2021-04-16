import Header from "./Header.js";
import Search from "./Search.js";
import { Container, Box } from "@material-ui/core";
import Books from "./Books.js";

function SearchPage({ bookList, onBookShelfChange, onSearch }) {
  const handleInputChange = (event) => {
    console.log(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Container maxWidth="xl">
      <Header />

      <Search onInputChange={handleInputChange} />
      <Box margin={2.4}>
        <Books bookList={bookList} onBookShelfChange={onBookShelfChange} />
      </Box>
    </Container>
  );
}

export default SearchPage;
