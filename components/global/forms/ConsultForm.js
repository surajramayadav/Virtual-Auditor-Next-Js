import React from "react";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ContactPhoneOutlinedIcon from "@material-ui/icons/ContactPhoneOutlined";
import { Button, makeStyles, useMediaQuery } from "@material-ui/core";
import Colors from "constant/Colors";

const ConsultForm = ({ show, isRelative, bg }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className={classes.paper} >
        <div
          className={`${isRelative
              ? "consultForm-container-relative"
              : "consultForm-container-fixed"
            } ${!show && !matches && "show"}`}
          style={{ background: bg && bg }}
        // style={{ position: isAbsolute ? "absolute" : "fixed" }}
        >
          <form>
            <h3 style={{ padding: "1rem", textAlign: "center",color:bg?Colors.white :Colors.black }}>
              Personal Information
            </h3>
            <div className="consultForm-input-container">
              <PermIdentityIcon style={{ marginLeft: "10px" }} />
              <input placeholder="Name" className="consultForm-input" />
            </div>
            <div className="consultForm-input-container">
              <MailOutlineIcon style={{ marginLeft: "10px" }} />
              <input placeholder="E-mail" className="consultForm-input" />
            </div>
            <div className="consultForm-input-container">
              <ContactPhoneOutlinedIcon style={{ marginLeft: "10px" }} />
              <input
                placeholder="Mobile number"
                className="consultForm-input"
              />
            </div>
            <div
              style={{
                maxWidth: "16rem",
                margin: "0 auto",
                marginTop: "2rem",
              }}
            >
              <Button fullWidth variant="contained" color="primary">
                get free consultation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),

  },
}));

export default ConsultForm;
