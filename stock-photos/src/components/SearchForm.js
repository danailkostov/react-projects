import { Box, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  icon: {
    fontSize: "1.5rem",
  },
  form: {
    borderBottom: "3px solid #104e7a",
    maxWidth: "600px",
    display: "flex",
    justifyContent: "space-between",
  },
  section: {
    paddingTop: "5rem",
  },
  search: {
    fontSize: "1.5rem",
  },
});

const SearchForm = ({ value, setValue, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.section}>
      <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
        <InputBase
          className={classes.search}
          placeholder="Search"
          inputProps={{ "aria-label": "search photos" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IconButton type="submit" className={classes.icon} aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    </Box>
  );
};

export default SearchForm;
