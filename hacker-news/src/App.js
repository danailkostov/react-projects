import { CircularProgress, Container, Grid } from "@material-ui/core";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
import Article from "./Article";
import { useGlobalContext } from "./context";

function App() {
  const { isLoading, articles } = useGlobalContext();

  return (
    <Container component="main" className="App">
      <SearchForm />
      <Pagination />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container component="section" spacing={4}>
          {articles.map((article) => {
            return (
              <Grid item xs={12} sm={6}>
                <Article {...article} key={article.objectID} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}

export default App;
