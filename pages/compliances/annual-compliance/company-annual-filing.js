import React from "react";
import CTitleSingleBulletDesc from "@components/global/CTitleSingleBulletDesc";
import { makeStyles } from "@material-ui/core";
import CTitleSummaryBPoints from "@components/global/CTitleSummaryBPoints";
import { windingUpOfCompany } from "json/pages/compliances/closure/windingUpOfCompany";
import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";
import CTitleCollapse from "@components/global/CTitleCollapse";
import { windingUpOfCompanyLlp } from "json/pages/compliances/closure/windingUpOfCompanyLlp";
import { companyAnnualFiling } from "json/pages/compliances/annualCompliance/companyAnnualFiling";
import GlobalTable from "@components/table/GlobalTable";

const CompanyAnnualFiling = () => {
  const classes = useStyles();
  return (
    <CTitleDescImagesFormLayout key={1} data={companyAnnualFiling}>
      <div className={classes.paper}>
        <CTitleSummaryBPoints
          key={1}
          data={companyAnnualFiling.processForClosure}
        />
        {companyAnnualFiling.processForClosure.sections.map(
          (section, index) => {
            CTitleCollapse;
            return (
              <>
                <CTitleSummaryBPoints key={index} data={section} />
              </>
            );
          }
        )}
        <CTitleSummaryBPoints key={1} data={companyAnnualFiling.formsToFiled} />
        <CTitleSummaryBPoints
          key={1}
          data={companyAnnualFiling.processAnnualFiling}
        />
        <CTitleSummaryBPoints key={1} data={companyAnnualFiling.formsToFiled} />
        {companyAnnualFiling.appoinmentOfAuditors.map((section, index) => {
          return (
            <>
              <CTitleSummaryBPoints key={index} data={section} />
            </>
          );
        })}
        {companyAnnualFiling.accountServices1.map((section, index) => {
          return (
            <>
              <CTitleSummaryBPoints key={index} data={section} />
            </>
          );
        })}
        {companyAnnualFiling.accountServices2.map((section, index) => {
          return (
            <>
              <CTitleSummaryBPoints key={index} data={section} />
            </>
          );
        })}
        <GlobalTable data={companyAnnualFiling.table} />
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          The penalty for non-compliance is{" "}
          <span style={{ color: "red" }}>
            The Penalty is Increased to Penalty of Rs 100 per day of default,
            subject to a maximum of Rs 5,00,00/-)
          </span>
          ensure that you do your Annual filings on time, to know more about why
          you should miss the penalties
        </p>
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

export default CompanyAnnualFiling;
