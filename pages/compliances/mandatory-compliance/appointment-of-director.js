import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";
import { addDirectors } from "json/pages/compliances/mandatoryCompliance/addDirectors";
import React from "react";
import CTitleSingleBulletDesc from "@components/global/CTitleSingleBulletDesc";
import { makeStyles } from "@material-ui/core";
import CTitleSummaryBPoints from "@components/global/CTitleSummaryBPoints";

const AppointmentOfDirector = () => {
  const classes = useStyles();
  return (
    <>
      <CTitleDescImagesFormLayout data={addDirectors}>
        <div className={classes.paper}>
          <CTitleSummaryBPoints key={1} data={addDirectors.directorAddExp} />
        </div>
        <div className={classes.paper}>
          <CTitleSummaryBPoints key={1} data={addDirectors.directorTypes} />
          <CTitleSummaryBPoints key={1} data={addDirectors.rulesRelation} />

          {addDirectors.sections.map((section, index) => {
            return (
              <>
                <CTitleSummaryBPoints key={1} data={section} />
              </>
            );
          })}
          <h2 style={{ paddingTop: "2rem", paddingBottom: " 2rem" }}>
            DUE DATE TO FILE APPOINTMENT OF DIRECTOR
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Existing company is required to file an eForm DIR-12 for particulars
            of its directors of the company with the Registrar, within 30 days
            from the date of appointment/ resignation and of any change taking
            place in their designations with the ministry of corporate affairs
          </p>
          <h2 style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            Conclusion
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            The incoming director and the company needs to make the documents
            and process very clear. To avoid future litigations and issues, file
            all the documents and keep the records clean to avoid regrets later
          </p>
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

export default AppointmentOfDirector;
