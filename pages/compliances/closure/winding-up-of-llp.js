import React from "react";
import CTitleSingleBulletDesc from "@components/global/CTitleSingleBulletDesc";
import { makeStyles } from "@material-ui/core";
import CTitleSummaryBPoints from "@components/global/CTitleSummaryBPoints";
import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";
import CTitleCollapse from "@components/global/CTitleCollapse";
import { windingUpOfCompanyLlp } from "json/pages/compliances/closure/windingUpOfCompanyLlp";

const WindingUpOfLlp = () => {
  const classes = useStyles();
  return (
    <CTitleDescImagesFormLayout key={1} data={windingUpOfCompanyLlp}>
      <div className={classes.paper}>
        <CTitleSummaryBPoints key={1} data={windingUpOfCompanyLlp.llpWound} />
        {windingUpOfCompanyLlp.llpWound.sections.map((section, index) => {
          return (
            <>
              <CTitleSummaryBPoints key={index} data={section} />
            </>
          );
        })}
      </div>
    </CTitleDescImagesFormLayout>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: "4rem",
    borderBottom: "1px solid lightgrey",
  },
}));

export default WindingUpOfLlp;
