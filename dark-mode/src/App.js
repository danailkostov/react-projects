import { Container, Paper } from "@material-ui/core";
import Header from "./Header";
import data from "./data";
import Article from "./Article";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Container component="main" className="App" maxWidth="md">
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <section style={{ padding: "5rem 0" }}>
            {data.map((item) => {
              return <Article {...item} key={item.id} />;
            })}
          </section>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
