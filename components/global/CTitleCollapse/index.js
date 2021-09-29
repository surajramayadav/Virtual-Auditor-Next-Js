// import React from "react";

// const CTitleCollapse = ({ data }) => {
//   return <div style={{ paddingTop: "1rem" }}>

//   </div>;
// };

// export default CTitleCollapse;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingBottom: "1rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CTitleCollapse({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.title}
      <div style={{ paddingTop: "1rem" }}>
        {data.accordions.map((accordion, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
              >
                <Typography className={classes.heading}>
                  {accordion.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{accordion.desc && accordion.desc}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
