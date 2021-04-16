import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Menu as MenuIcon, AccountCircle, Search } from "@material-ui/icons";

import { Link, useHistory } from "react-router-dom";

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
  titleLink: {
    textDecoration: "none",
    color: "black",
    fontWeight: 600,
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();

  const handleProfile = (event) => {};
  const handleSearch = (event) => {
    history.push("/search");
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} noWrap>
          <Link to="/" className={classes.titleLink}>
            My Reads
          </Link>
        </Typography>
        <IconButton edge="end" onClick={handleSearch} color="inherit">
          <Search fontSize="large" />
        </IconButton>
        <IconButton edge="end" onClick={handleProfile} color="inherit">
          <AccountCircle fontSize="large" style={{ color: "#B994FF" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
    // </Container>
  );
}

export default Header;
