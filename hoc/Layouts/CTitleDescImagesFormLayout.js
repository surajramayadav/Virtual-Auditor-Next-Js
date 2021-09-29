import React from "react";
import Head from "next/head";
import { Container, Grid, makeStyles } from "@material-ui/core";
import CTitleParaImgForm from "@components/global/CTitleParaImgForm";

const CTitleDescImagesFormLayout = ({
  children,
  data,
  bgImg = false,
  isRelative = false,
  sm = 8,
}) => {
  return (
    <>
      <Head>
        <title>{data.headTitle && data.headTitle}</title>
      </Head>
      <div
        style={{
          border: "1px solid black",
          backgroundImage:
            bgImg &&
            "url('https://www.incimages.com/uploaded_files/image/1920x1080/getty_180152187_970679970450042_64007.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container
          style={{ marginTop: "4rem", marginBottom: "4rem" }}
          maxWidth="lg"
        >
          {data.containers && (
            <CTitleParaImgForm data={data.containers} isRelative={isRelative} />
          )}

          <Grid container spacing={3}>
            <Grid item xs={12} sm={sm}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: "4rem",
    borderBottom: "1px solid lightgrey",
  },
  bg: {
    backgroundImage: `url('https://virtualauditor.in/assets/images/increasecapital.jpg')`,
  },
}));

export default CTitleDescImagesFormLayout;
