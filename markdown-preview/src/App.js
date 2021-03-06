import { Container, Grid } from "@material-ui/core";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";

function App() {
  return (
    <Container component="main" className="App">
      <Grid
        container
        component="section"
        spacing={10}
        style={{ margin: "30px 0px" }}
      >
        <Grid item xs={10} md={6}>
          <MarkdownInput />
        </Grid>
        <Grid item xs={12} md={6}>
          <MarkdownOutput />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
