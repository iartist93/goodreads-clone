import { Box, makeStyles, Grid } from "@material-ui/core";
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
}));

function ShelfBooks({ allBooks, onBookShelfChange }) {
  const classes = useStyles();

  return (
    <Box component="div" m={1} className={classes.shelfBooks}>
      <Grid container spacing={6}>
        {allBooks.map((book, index) => (
          <BookItem
            key={index}
            id={book.id}
            title={book.title}
            shelf={book.shelf}
            image={book.imageLinks.thumbnail}
            authors={book.authors.join(",")}
            onBookShelfChange={onBookShelfChange}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default ShelfBooks;
