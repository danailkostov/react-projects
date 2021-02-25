import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

const Header = ({ setDarkMode, darkMode }) => {
  return (
    <AppBar position="static" color="transparent" style={{ boxShadow: "none" }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem 0",
        }}
      >
        <Typography variant="h3" component="h1" style={{ fontWeight: "800" }}>
          Overreacted
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          style={{ textTransform: "none" }}
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
