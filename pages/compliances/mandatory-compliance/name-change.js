// import CWID from "@components/global/CImgDesc";
import CTitleSingleBulletDesc from "@components/global/CTitleSingleBulletDesc";
import CTitleParaImg from "@components/global/CTitleParaImages";
import CTitleParaImgForm from "@components/global/CTitleParaImgForm";
// import ConsultForm from "@components/global/forms/ConsultForm";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { companyNameData } from "json/pages/compliances/mandatoryCompliance/nameChange";
import Head from "next/head";
import React from "react";

const NameChange = () => {
  const classes = useStyles();
  return (
    <>
      <Container
        style={{ marginTop: "4rem", marginBottom: "4rem" }}
        maxWidth="lg"
      >
        {companyNameData.containers && (
          <CTitleParaImgForm key={1} data={companyNameData.containers} />
        )}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <div className={classes.paper}>
              <div
                style={{
                  borderBottom: "1px solid lightgrey",
                  paddingBottom: "1rem",
                }}
              >
                <h1
                  style={{
                    fontWeight: 500,
                    textAlign: "center",
                    paddingBottom: "2rem",
                  }}
                >
                  NAME CHANGE PROCEDURE EXPLAINED
                </h1>
                <p style={{ lineHeight: 1.6, fontSize: "1.1rem" }}>
                  Change of company name has required the passing of board
                  resolution, obtaining name approval from MCA, and passing of a
                  special resolution and applying for approval of new company
                  name to the MCA. If the MCA accepts the application, a new
                  certificate of incorporation is issued, and after obtaining
                  the new certificate of incorporation for the changing name of
                  the company. Hence, the changes must be made to incorporate
                  and change the MOA and AOA of the company as well. Virtual
                  Auditor is the leading services platform in India, offering a
                  variety of services like the company name change, trademark
                  registration, GST registration, LLP registration and more.
                  Virtual Auditor can help you to file for a change of company
                  or LLP name in India. Here, an average time is taken to
                  complete the name change process about 90 working days, and
                  subject to government processing time and client document
                  submission on an appointment with a Virtual Auditor advisor.
                </p>
              </div>
              <div
                style={{
                  paddingTop: "2rem",
                  borderBottom: "1px solid lightgrey",
                  paddingBottom: "1rem",
                }}
              >
                <h1>Applying to Registrar</h1>
                <p
                  style={{
                    paddingTop: "1rem",
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                  }}
                >
                  A special resolution has filed with ROC within 30 days of
                  passing the resolution with it. Form MGT-14 has also filed,
                  which contain the details about the special resolution. Here,
                  the following documents have submitted with MGT-14 are :-
                </p>
                <ul
                  style={{
                    paddingLeft: "2rem",
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                  }}
                >
                  <li>Certified copy of a special resolution</li>
                  <li>Notice of EGM</li>
                  <li>The explanatory statement to EGM</li>
                  <li>Altered Memorandum of Association</li>
                  <li>Altered Articles of Association</li>
                </ul>

                <p
                  style={{
                    paddingTop: "1rem",
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                  }}
                >
                  Once MGT-14 has filed. The company needs to file INC-24, with
                  the ROC for taking the approval of the central government for
                  a name change along with the prescribed fee. INC-24 will be
                  filed after MGT-14 has filed since INC-24 specifically asks
                  for SRN of MGT-14 filed with ROC. SRN of INC-1 also needs to
                  mention in INC-24. Along with INC-24, a copy of the minutes of
                  an extraordinary general meeting where the special resolution
                  was passed, and also needs to be submitted.
                </p>
              </div>

              <div style={{ paddingTop: "2rem" }}>
                <h1>Procedure for changing the company name</h1>
                {companyNameData.bulletPoints &&
                  companyNameData.bulletPoints.map((content, index) => {
                    return <CTitleSingleBulletDesc key={index} data={content} />;
                  })}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: "4rem",
  },
}));

export default NameChange;
