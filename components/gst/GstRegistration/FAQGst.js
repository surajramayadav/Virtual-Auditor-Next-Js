import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {},
});
const FAQGst = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {data &&
          data.map((d, index) => {
            return (
              <>
                <div key={index} style={{ paddingBottom: "1.5rem" }}>
                  <TreeItem nodeId={d.nodeId} label={d.question}>
                    <div style={{ paddingTop: "1rem " }}>
                      <TreeItem nodeId={d.aid} label={d.answer} />
                    </div>
                  </TreeItem>
                </div>
              </>
            );
          })}
      </TreeView>
    </>
  );
};

export default FAQGst;
