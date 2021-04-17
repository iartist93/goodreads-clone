import { useEffect, useState } from "react";
import {
  makeStyles,
  Grid,
  CardContent,
  Typography,
  CardMedia,
  Card,
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    maxWidth: 190,
  },
  cover: {
    minWidth: 120,
    height: 180,
  },
  title: {
    fontWeight: 600,
    // color: "#183A37",
    color: "#2F2542",
    // width: "85%",
  },
  shelf: {
    color: "#3B1D6E",
    fontWeight: 600,
  },
  bookDetails: {
    flex: 1,
  },
}));

const shelfTitle = {
  currentlyReading: "Currently Reading",
  read: "Read",
  wantToRead: "Want to Read",
};

function BookItem({ id, title, shelf, image, authors, onBookShelfChange }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentShelf, setCurrentShelf] = useState(null);

  useEffect(() => {
    // console.log(`{${title}} is {${shelf}}`);
    setCurrentShelf(shelf);
  }, [shelf, title]);

  const handleChange = (value) => {
    onBookShelfChange(id, value);
    setCurrentShelf(value);
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
        <CardMedia className={classes.cover} image={image} title={title} />
        <CardContent className={classes.content}>
          <div className={classes.bookDetails}>
            <Typography
              variant="subtitle1"
              className={classes.title}
              gutterBottom
            >
              {title.split(" ").slice(0, 7).join(" ")}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              {authors}
            </Typography>
          </div>
          <div>
            <Button
              className={classes.shelf}
              onClick={handleOpen}
              variant="text"
            >
              {shelfTitle[currentShelf] || "No Shelf"}
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
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BookItem;
