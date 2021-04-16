import {
  Box,
  makeStyles,
  Grid,
  Paper,
  CardContent,
  Typography,
  CardMedia,
  Card,
} from "@material-ui/core";
import { useState } from "react";

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
}));

function ShelfBooks() {
  const classes = useStyles();
  const [shelf, setShelf] = useState("currentlyReading");
  const handleShelfChange = (e) => setShelf(e.target.value);

  return (
    <Box component="div" m={1}>
      <Grid container spacing={4}>
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </Grid>
    </Box>
  );
}

export default ShelfBooks;
