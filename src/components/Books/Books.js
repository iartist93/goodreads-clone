import {
  Box,
  makeStyles,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import BookItem from "./BookItem.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    // width: 150,
    minWidth: 120,
    height: 180,
  },
  h6: {
    // color: "red",
    fontWeight: 600,
  },
  shelfBooks: {
    marginTop: 50,
  },
  noBooks: {
    textAlign: "center",
    color: "#877F96",
  },
}));

// This component is to display the shelf books list as well as the search result
// in case of search we don't pass `currentShelf` as it is not needed
// `bookList` ia allBooks in case of shelf display or search result books in case of search display
function Books({ bookList, onBookShelfChange, currentShelf }) {
  const classes = useStyles();

  const filteredBooks = bookList
    ? currentShelf
      ? bookList.filter((book) => book.shelf === currentShelf)
      : bookList
    : [];

  return (
    <Box component="div" m={1} className={classes.shelfBooks}>
      <Grid container spacing={6}>
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <BookItem
              key={index}
              id={book.id}
              title={book.title}
              shelf={book.shelf}
              image={
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : "/assets/no-thumbnail.jpg"
              }
              authors={book.authors ? book.authors.join(",") : ""}
              onBookShelfChange={onBookShelfChange}
            />
          ))}
        {filteredBooks.length === 0 && (
          <Container>
            <Typography variant="h4" component="h4" className={classes.noBooks}>
              No Book Here Yet!
            </Typography>
          </Container>
        )}
      </Grid>
    </Box>
  );
}

export default Books;
