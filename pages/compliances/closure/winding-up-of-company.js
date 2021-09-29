import React from "react";
import CTitleSingleBulletDesc from "@components/global/CTitleSingleBulletDesc";
import { makeStyles } from "@material-ui/core";
import CTitleSummaryBPoints from "@components/global/CTitleSummaryBPoints";
import { windingUpOfCompany } from "json/pages/compliances/closure/windingUpOfCompany";
import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";
import CTitleCollapse from "@components/global/CTitleCollapse";

const WindingUpOfCompany = () => {
  const classes = useStyles();
  return (
    <>
      <CTitleDescImagesFormLayout data={windingUpOfCompany}>
        <div className={classes.paper}>
          <CTitleSummaryBPoints key={1} data={windingUpOfCompany.processForClosure} />
          {windingUpOfCompany.processForClosure.sections.map(
            (section, index) => {
              return (
                <>
                  <CTitleSummaryBPoints key={index} data={section} />
                </>
              );
            }
          )}
        </div>
        <div className={classes.paper}>
          <CTitleCollapse key={1} data={windingUpOfCompany.faqClosure} />
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

export default WindingUpOfCompany;
