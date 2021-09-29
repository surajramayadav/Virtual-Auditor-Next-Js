import CImgTitlePara from "@components/global/CImgTitlePara";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React from "react";

const CTitleParaImages = ({ data }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div
      style={{ borderBottom: "1px solid lightgrey", paddingBottom: "1.8rem" }}
    >
      <div className={classes.paper}>
        <h1>{data.title}</h1>
        <p
          style={{
            marginTop: ".5rem",
            lineHeight: "1.6rem",
            fontSize: "1.1rem",
          }}
        >
          {data.summary}
        </p>
      </div>

      <Grid container>
        {data.cards &&
          data.cards.map((item, index) => {
            return <CImgTitlePara key={index + 1} classes={classes} data={item} />;
          })}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

export default CTitleParaImages;
