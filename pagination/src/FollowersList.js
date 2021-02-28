import { Avatar, Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import pagination from "./pagination";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
  },
  article: {
    textAlign: "-webkit-center",
  },
  avatar: {
    height: "120px",
    width: "120px",
    marginBottom: "5px",
  },
  paper: {
    height: "260px",
    padding: "30px",
  },
  button: {
    borderRadius: "10px",
  },
  pagination: {
    width: "350px",
    margin: "30px auto",
    [theme.breakpoints.only("xs")]: {
      maxWidth: "200px",
    },
  },
}));

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const FollowersList = () => {
  const classes = useStyles();
  const [followers, setFollowers] = useState(null);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const getFollowers = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setFollowers(pagination(data));
    setIsLoading(false);
    setNumberOfPages(Math.ceil(data.length / 10));
  };
  useEffect(() => {
    getFollowers();
  }, []);

  if (isLoading) {
    return (
      <Typography variant="h3" component="h1" align="center">
        Followers still loading...
      </Typography>
    );
  } else {
    return (
      <>
        <Grid
          container
          spacing={3}
          className={classes.root}
          component="section"
        >
          {followers[page - 1].map((follower) => {
            const { avatar_url, login, html_url } = follower;
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                component="article"
                className={classes.article}
              >
                <Paper elevation={3} className={classes.paper}>
                  <Avatar className={classes.avatar} src={avatar_url} />
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    paragraph
                  >
                    {login}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    href={html_url}
                  >
                    VIEW PROFILE
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          count={numberOfPages}
          page={page}
          onChange={handleChange}
          className={classes.pagination}
        />
      </>
    );
  }
};

export default FollowersList;
