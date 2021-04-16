import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Menu as MenuIcon, AccountCircle } from "@material-ui/icons";

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

function Header() {
  const classes = useStyles();

  const handleProfile = (event) => {};

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} noWrap>
          My Reads
        </Typography>
        <IconButton edge="end" onClick={handleProfile} color="inherit">
          <AccountCircle fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
    // </Container>
  );
}

export default Header;
