import { useRef } from "react";
import { Container, Box } from "@material-ui/core";

import Header from "../components/Header/Header.js";
import Search from "../components/Search/Search.js";
import Books from "../components/Books/Books.js";

import { throttle } from "lodash";

function SearchPage({ bookList, onBookShelfChange, onSearch }) {
  // const [searchQuery, setSearchQuery] = useState(null);

  const requestSearch = useRef(
    throttle((nextQuery) => onSearch(nextQuery), 500)
  ).current;

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
