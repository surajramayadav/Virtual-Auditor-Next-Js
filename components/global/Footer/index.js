import { FooterList } from "@components/home/FooterList/FooterList";
import { Grid } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className={"root"}>
        <div className={"footer-section"}>
          <Grid container className={`footer-list`}>
            <FooterList />
            <FooterList />
            <FooterList />
            <FooterList />
          </Grid>

          <Grid container className={`footer-address`}>
            <Grid item md={3} sm={12}>
              <div style={{ marginInline: "0rem 2rem" }}>
                <p
                  style={{
                    borderBottom: "1px solid white",
                    padding: "1rem 0.5rem",
                  }}
                >
                  Top Services
                </p>
                <div style={{ padding: "1rem 0rem" }}>
                  <p style={{ fontSize: 18 }}>
                    Virtual Auditor Pvt Ltd Workafella Business Centre Office NO 15
                    , Ground Floor AK Estate, Off Veer Savarkar Flyover, SV Rd,
                    Goregaon West, Mumbai, Maharashtra 400062 Call Us : +91
                    7700089597
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item md={3} sm={12}>
              <div style={{ marginInline: "0rem 2rem" }}>
                <p
                  style={{
                    borderBottom: "1px solid white",
                    padding: "1rem 0.5rem",
                  }}
                >
                  Top Services
                </p>
                <div style={{ padding: "2rem 0rem" }}>
                  <p>
                    Virtual Auditor Pvt Ltd Workafella Business Centre Office NO 15
                    , Ground Floor AK Estate, Off Veer Savarkar Flyover, SV Rd,
                    Goregaon West, Mumbai, Maharashtra 400062 Call Us : +91
                    7700089597
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item md={3} sm={12}>
              <div style={{ marginInline: "0rem 2rem" }}>
                <p
                  style={{
                    borderBottom: "1px solid white",
                    padding: "1rem 0.5rem",
                  }}
                >
                  Top Services
                </p>
                <div style={{ padding: "2rem 0rem" }}>
                  <p>
                    Virtual Auditor Pvt Ltd Workafella Business Centre Office NO 15
                    , Ground Floor AK Estate, Off Veer Savarkar Flyover, SV Rd,
                    Goregaon West, Mumbai, Maharashtra 400062 Call Us : +91
                    7700089597
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item md={12} sm={12}>
              <div style={{
                marginInline: "0rem 2rem",
              }}>

                <div style={{
                  padding: "2rem 0rem",
                  borderBottom: "1px solid gray"
                }}>
                  <p >Top Services</p>
                  <p>
                    Virtual Auditor Pvt Ltd Workafella Business Centre Office NO 15
                    , Ground Floor AK Estate, Off Veer Savarkar Flyover, SV Rd,
                    Goregaon West, Mumbai, Maharashtra 400062 Call Us : +91
                    7700089597
                  </p>
                </div>
                <div style={{
                  padding: "2rem 0rem",
                  borderBottom: "1px solid gray"
                }}>
                  <p >Top Services</p>
                  <p>
                    Virtual Auditor Pvt Ltd Workafella Business Centre Office NO 15
                    , Ground Floor AK Estate, Off Veer Savarkar Flyover, SV Rd,
                    Goregaon West, Mumbai, Maharashtra 400062 Call Us : +91
                    7700089597
                  </p>
                </div>


              </div>
            </Grid>


          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Footer;
