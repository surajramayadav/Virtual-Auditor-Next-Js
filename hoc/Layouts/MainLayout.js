import React from "react";
import Navbar from "@components/global/Navbar";
import { makeStyles } from "@material-ui/core";
import Footer from "@components/global/Footer";

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: "white",
    width: "100%",
  },
}));

export default MainLayout;
