import {
  makeStyles,
  Grid,
  CardContent,
  Typography,
  CardMedia,
  Card,
  Box,
  Button,
  Menu,
  MenuItem,
  withStyles,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Send as SendIcon,
  Drafts as DraftsIcon,
  MoveToInbox as InboxIcon,
} from "@material-ui/icons";

import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
  },
  cover: {
    minWidth: 120,
    height: 180,
  },
  h6: {
    fontWeight: 600,
  },
  shelf: {
    color: "black",
  },
}));

function BookItem({ id, title, shelf, image, authors, onBookShelfChange }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentShelf, setCurrentShelf] = useState(shelf);
  const [shelfTitle, setShelfTitle] = useState(" ");

  useEffect(() => {
    const title =
      currentShelf === "currentlyReading"
        ? "Currently Reading"
        : currentShelf === "read"
        ? "Read"
        : currentShelf === "wantToRead"
        ? "Want To Read"
        : "No Shelf";
    setShelfTitle(title);
  }, [currentShelf]);

  const handleChange = (value) => {
    onBookShelfChange(id, value);
    setCurrentShelf(value);
    console.log(`Value = ${value}`);
    handleClose();
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.root} elevation={0}>
        <CardMedia
          className={classes.cover}
          image={image}
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" className={classes.h6}>
            {title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {authors}
          </Typography>
          <Box>
            <Button className={classes.shelf} onClick={handleOpen}>
              {shelfTitle}
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={() => handleChange("currentlyReading")}>
                <ListItemIcon>
                  <SendIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Currently Reading" />
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleChange("read")}>
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Read" />
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleChange("wantToRead")}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Want to Read" />
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleChange("none")}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="No Shelf" />
              </StyledMenuItem>
            </StyledMenu>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BookItem;
