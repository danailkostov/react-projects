import { Button, Link, Paper, Typography } from "@material-ui/core";
import { useGlobalContext } from "./context";
import React from "react";

const Article = ({ title, points, author, num_comments, url, objectID }) => {
  const { removeArticle } = useGlobalContext();
  return (
    <Paper component="article" style={{ padding: "1rem 2rem", height: '150px' }}>
      <Typography
        variant="subtitle1"
        component="h4"
        style={{ fontWeight: "700" }}
        gutterBottom
      >
        {title}
      </Typography>
      <Typography component="p">
        {points} points by {author} | {num_comments} comments
      </Typography>
      <Link href={url} target="_blank" underline="none">
        Read More
      </Link>
      <Button
        style={{ textTransform: "none" }}
        color="secondary"
        onClick={() => removeArticle(objectID)}
      >
        Remove
      </Button>
    </Paper>
  );
};

export default Article;
