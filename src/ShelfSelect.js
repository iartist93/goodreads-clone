import { Box, makeStyles, FormControl, NativeSelect } from "@material-ui/core";
import {} from "@material-ui/icons";
import { useState } from "react";

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

function ShelfSelect() {
  const classes = useStyles();
  const [shelf, setShelf] = useState("currentlyReading");
  const handleShelfChange = (e) => setShelf(e.target.value);

  return (
    <Box component="div" m={1}>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={shelf}
          onChange={handleShelfChange}
          name="age"
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "age" }}
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
