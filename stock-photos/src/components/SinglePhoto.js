import { Avatar, Box, Link, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  photoInfo: {
    position: "absolute",
    width: "100%",
    padding: "1rem",
    bottom: "0",
    left: "0",
    background: "rgba(0, 0, 0, 0.4)",
    color: "white",
    transform: "translateY(0)",
    transition: "var(--transition)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  article: {
    position: "relative",
    overflow: "hidden",
  },
});

const SinglePhoto = ({
  id,
  urls: { regular },
  alt_description,
  user: {
    name,
    profile_image: { small },
    portfolio_url,
  },
  likes,
}) => {
  const classes = useStyles();
  return (
    <Box component="article" className={classes.article}>
      <img
        src={regular}
        alt={alt_description}
        style={{ width: "100%", height: "280px", objectFit: 'cover' }}
      />
      <Box className={classes.photoInfo}>
        <Box>
          <Typography variant="h6" component="h4">
            {name}
          </Typography>
          <Typography variant="body1" component="p">
            {likes} likes
          </Typography>
        </Box>
        <Link href={portfolio_url}>
          <Avatar src={small} />
        </Link>
      </Box>
    </Box>
  );
};

export default SinglePhoto;
