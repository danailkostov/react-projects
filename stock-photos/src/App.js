import { Container, Box, Grid } from "@material-ui/core";
import SearchForm from "./components/SearchForm";
import SinglePhoto from "./components/SinglePhoto";
import React, { useState, useEffect } from "react";

const initUrl =
  "https://api.unsplash.com/photos/?client_id=611-PQxVIVebPploDGtIbqFeZgZy1vIfBC-tCXHq6PM";

const searchUrl =
  "https://api.unsplash.com/search/photos/?client_id=611-PQxVIVebPploDGtIbqFeZgZy1vIfBC-tCXHq6PM&page=1&query=";

function App() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState("");
  const [photos, setPhotos] = useState([]);

  const getPhotosFromInitUrl = async () => {
    setIsLoading(true);
    if (!isSearching) {
      const response = await fetch(`${initUrl}&page=${page}`);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        return [...oldPhotos, ...data];
      });
    } else {
      const response = await fetch(`${searchUrl}${searchValue}`);
      const data = await response.json();
      setPhotos(data.results);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setSearchValue(value);
  };

  useEffect(() => {
    getPhotosFromInitUrl();
  }, [searchValue, page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", (event) => {
      if (
        (!isLoading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  return (
    <Container component="main" className="App">
      <SearchForm
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      <Box component="section" style={{ marginTop: "50px" }}>
        {isLoading && <h2>Loading...</h2>}
        <Grid container spacing={5}>
          {photos.map((photo) => {
            return (
              <Grid item xs={12} md={6} lg={4}>
                <SinglePhoto {...photo} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
