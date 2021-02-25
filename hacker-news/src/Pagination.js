import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const {
    numPages,
    currPage,
    prevPage,
    nextPage,
    isLoading,
  } = useGlobalContext();
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0 auto 1.5rem",
      }}
    >
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={prevPage}
        disabled={isLoading ? true : false}
      >
        Prev
      </Button>
      <Typography
        variant="h6"
        component="p"
        style={{ margin: "0 20px", fontWeight: "600" }}
      >
        {currPage + 1} of {numPages}
      </Typography>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={nextPage}
        disabled={isLoading ? true : false}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
