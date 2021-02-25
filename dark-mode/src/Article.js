import { Typography } from "@material-ui/core";
import React from "react";
import moment from "moment";

const Article = ({ title, desc, date, length }) => {
  return (
    <article style={{marginBottom: '3rem'}}>
      <Typography
        variant="h4"
        compoennt="h2"
        color="secondary"
        style={{ fontWeight: "600" }}
        gutterBottom
      >
        {title}
      </Typography>
      <Typography gutterBottom paragraph>
        {moment(date).format("dddd Do, YYYY")} {length} min read
      </Typography>
      <Typography component="p" gutterBottom>
        {desc}
      </Typography>
    </article>
  );
};

export default Article;
