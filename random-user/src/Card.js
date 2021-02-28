import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, Container, Paper } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import EventBusyIcon from "@material-ui/icons/EventBusy";
import HomeIcon from "@material-ui/icons/Home";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles({
  root: {
    width: "90vw",
    maxWidth: "730px",
    position: "relative",
    bottom: "200px",
  },
  title: {
    fontSize: 14,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const [randomUser, setRandomUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("My Name is ");
  const [subtitle, setSubtitle] = useState("");
  const onHover = (title, subtitle) => {
    setTitle(title);
    setSubtitle(subtitle);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://randomuser.me/api/");
    const user = await response.json();
    console.log(user.results[0]);
    setRandomUser(user.results[0]);
    setSubtitle(`${user.results[0].name.first} ${user.results[0].name.last}`);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!loading) {
    return (
      <Container style={{ textAlign: "-webkit-center" }}>
        <Paper elevation="5" className={classes.root}>
          <Box style={{ backgroundColor: "grey", height: "130px" }} />
          <Box style={{ position: "relative", bottom: "90px" }}>
            <Avatar
              style={{
                backgroundColor: "black",
                width: "150px",
                height: "150px",
                marginBottom: "32px",
              }}
              src={randomUser.picture.large}
            />
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                align="center"
              >
                {title}
              </Typography>
              <Typography variant="h5" component="h2" align="center">
                {subtitle}
              </Typography>
            </CardContent>
            <Typography align="center" gutterBottom paragraph>
              <Button
                size="small"
                onMouseEnter={() =>
                  onHover(
                    "My name is",
                    `${randomUser.name.first} ${randomUser.name.last}`
                  )
                }
              >
                <PersonIcon />
              </Button>
              <Button
                size="small"
                onMouseEnter={() => onHover("My email is", randomUser.email)}
              >
                <EmailIcon />
              </Button>
              <Button
                size="small"
                onMouseEnter={() => onHover("My age is", randomUser.dob.age)}
              >
                <EventBusyIcon />
              </Button>
              <Button
                size="small"
                onMouseEnter={() =>
                  onHover(
                    "My street is",
                    `${randomUser.location.street.number} ${randomUser.location.street.name}`
                  )
                }
              >
                <HomeIcon />
              </Button>
              <Button
                size="small"
                onMouseEnter={() => onHover("My phone is", randomUser.phone)}
              >
                <PhoneEnabledIcon />
              </Button>
              <Button
                size="small"
                onMouseEnter={() =>
                  onHover("My password is", randomUser.login.password)
                }
              >
                <LockIcon />
              </Button>
            </Typography>
            <Button
              size="small"
              onClick={() => fetchData()}
              variant="contained"
              color="primary"
            >
              Random User
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  } else {
    return <div>Loading</div>;
  }
}
