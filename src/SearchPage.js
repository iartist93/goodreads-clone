import Header from "./Header.js";
import Search from "./Search.js";
import { Container, Box } from "@material-ui/core";
import Books from "./Books.js";
import { useRef } from "react";

import { debounce } from "lodash";

function SearchPage({ bookList, onBookShelfChange, onSearch }) {
  // const [searchQuery, setSearchQuery] = useState(null);

  const requestSearch = useRef(debounce((nextQuery) => onSearch(nextQuery), 50))
    .current;

  const handleInputChange = (event) => {
    const nextQuery = event.target.value;
    // console.log(nextQuery);
    // setSearchQuery(nextQuery); // this will hurt the perfoance as it will update this component as we set state on it
    requestSearch(nextQuery);
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
