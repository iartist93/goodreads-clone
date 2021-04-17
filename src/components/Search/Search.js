import React from "react";

import {
  Container,
  Paper,
  IconButton,
  InputBase,
  makeStyles,
} from "@material-ui/core";

import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 72,
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
    height: 60,
  },
  topPaper: {
    backgroundColor: "#ECECEC",
    height: 100,
    width: "100%",
    position: "absolute",
    top: 70,
    left: 0,
    zIndex: -100,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const areEqual = (prevProps, nextProps) => true;

function Search({ onInputChange }) {
  console.log("Search is rendering .......................................");

  const classes = useStyles();
  return (
    <div>
      <Container className={classes.root}>
        <div className={classes.topPaper}></div>
        <Paper component="form" className={classes.search}>
          <IconButton type="submit" className={classes.iconButton}>
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search Books"
            onChange={onInputChange}
          />
        </Paper>
      </Container>
    </div>
  );
}

export default React.memo(Search, areEqual);
