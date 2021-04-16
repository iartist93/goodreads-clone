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
import {} from "@material-ui/icons";

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

function BookItem() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.root} elevation={0}>
        <CardMedia
          className={classes.cover}
          image="http://books.google.com/books/content?id=PKpPCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" className={classes.h6}>
            Live From Space
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BookItem;
