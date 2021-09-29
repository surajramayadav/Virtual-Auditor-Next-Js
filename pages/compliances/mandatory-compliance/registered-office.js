import React from "react";

import { Container, Grid, makeStyles } from "@material-ui/core";
import CTitleSingleBulletDesc from "@components/global/CTitleSingleBulletDesc";
import CTitleParaImgForm from "@components/global/CTitleParaImgForm";
import { registeredOfficeData } from "json/pages/compliances/mandatoryCompliance/registeredOffice";
import CTitleSummaryBPoints from "@components/global/CTitleSummaryBPoints";
import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";

const RegisteredOffice = () => {
  const classes = useStyles();
  return (
    <>
      {/* Starts with  HOC  */}
      <CTitleDescImagesFormLayout data={registeredOfficeData}>
        <div className={classes.paper}>
          <CTitleSummaryBPoints key={1}
            data={registeredOfficeData.companyAddressChangeExp}
          />

          {registeredOfficeData.steps &&
            registeredOfficeData.steps.map((content, index) => {
              return (
                <>
                  {/* Steps */}
                  <div style={{ marginTop: "1.2rem" }}>
                    <CTitleSummaryBPoints key={index} data={content} />

                    {content.importantMessage && content.importantMessage}
                  </div>
                </>
              );
            })}
        </div>

        <div className={classes.paper}>
          <h1 style={{ textAlign: "center", fontWeight: 500 }}>
            DOCUMENTS REQUIRED FOR COMPANY REGISTRATION
          </h1>

          {registeredOfficeData.docReqPoints.bulletPoints &&
            registeredOfficeData.docReqPoints.bulletPoints.map(
              (points, index) => {
                return (
                  <>
                    {/* bullet points */}
                    <div key={index}>
                      <CTitleSingleBulletDesc data={points} />
                    </div>
                  </>
                );
              }
            )}
        </div>
        <div className={classes.paper}>
          <CTitleSummaryBPoints  key={1} data={registeredOfficeData.changeOffice} />
        </div>
        <div className={classes.paper}>
          <CTitleSummaryBPoints key={1}
            data={registeredOfficeData.changeOfficeBetTwoStates}
          />
        </div>
      </CTitleDescImagesFormLayout>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: "4rem",
    borderBottom: "1px solid lightgrey",
  },
}));

export default RegisteredOffice;
