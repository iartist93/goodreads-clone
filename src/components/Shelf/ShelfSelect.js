import { Box, makeStyles, FormControl, NativeSelect } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ShelfSelect({ currentShelf, onShelfChange }) {
  const classes = useStyles();
  const handleShelfChange = (e) => onShelfChange(e.target.value);

  return (
    <Box component="div" m={1}>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={currentShelf}
          onChange={handleShelfChange}
          name="shelf"
          className={classes.selectEmpty}
        >
          <option value={"currentlyReading"}>Currently Reading</option>
          <option value={"read"}>Read</option>
          <option value={"wantToRead"}>Want to Read</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default ShelfSelect;
