import { Container, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FollowersList from "./FollowersList";

const useStyles = makeStyles({
  divider: {
    border: "2px solid #49a6e9",
    width: "100px",
    margin: "0px auto",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container className="App" component="main">
      <Typography variant="h3" component="h1" align="center">
        Pagination
      </Typography>
      <Divider className={classes.divider} />
      <FollowersList />
    </Container>
  );
}

export default App;
