import { Input, Typography } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { searchValue, handleSearch } = useGlobalContext();
  return (
    <form style={{ margin: "5rem auto 3rem" }}>
      <Typography
        component="h2"
        variant="h4"
        style={{ fontWeight: "600" }}
        gutterBottom
        paragraph
      >
        Search Hacker News
      </Typography>
      <Input
        value={searchValue}
        style={{ padding: "0.5rem", width: "100%", maxWidth: "600px" }}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchForm;
