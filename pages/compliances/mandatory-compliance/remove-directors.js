import CImgTitlePara from "@components/global/CImgTitlePara";
import CTxtHr from "@components/startup/one-person-company/CTxtHr";
import CTextImg from "@components/startup/startup-india-registration/CTextImg";
import { makeStyles, Grid } from "@material-ui/core";
import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";
import { removeDirectors } from "json/pages/compliances/mandatoryCompliance/removeDirectors";
import { HTISC, MRTRPLSC } from "json/pages/startup/indian-subsidiary";
import {
  StartupourPackage,
  StartupReg,
} from "json/pages/startup/startup-india-registration";
import React from "react";

const RemoveDirectors = () => {
  const classes = useStyles();
  return (
    <>
      <CTitleDescImagesFormLayout
        bgImg={true}
        key={1}
        data={removeDirectors}
        isRelative={true}
        sm={12}
      />
      <div style={{ marginTop: "6rem", padding: "5rem 0rem" }}>
        <div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: Fonts.h1, marginTop: -40 }}>
              OUR{" "}
              <span style={{ color: Colors.heading, fontWeight: "bold" }}>
                PACKAGE
              </span>
            </p>
          </div>
          <div>
            <Grid container style={{ padding: "1rem 2rem", marginTop: 30 }}>
              {StartupourPackage &&
                StartupourPackage.cards.map((item, index) => {
                  return <CImgTitlePara key={index + 1} data={item} />;
                })}
            </Grid>
          </div>
        </div>
      </div>
      {StartupReg &&
        StartupReg.map((item, index) => {
          return (
            <>
              <div
                key={index}
                style={{
                  backgroundColor:
                    item.id == 1 ? Colors.statupbg : Colors.white,
                }}
              >
                <div className="root" style={{ padding: "5rem 0rem" }}>
                  <Grid container style={{ padding: "1rem 2rem" }}>
                    <CTextImg key={index + 1} data={item} />
                  </Grid>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    // marginTop: "4rem",
    borderBottom: "1px solid lightgrey",
  },
  bg: {
    backgroundImage: `url('https://virtualauditor.in/assets/images/increasecapital.jpg')`,
  },
}));

export default RemoveDirectors;
