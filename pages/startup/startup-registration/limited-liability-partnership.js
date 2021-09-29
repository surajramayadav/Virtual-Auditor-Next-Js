import CImgTitlePara from "@components/global/CImgTitlePara";
import ConsultForm from "@components/global/forms/ConsultForm";
import CTxtHr from "@components/startup/one-person-company/CTxtHr";
import { Grid } from "@material-ui/core";
import {
  DCRP,
  DRCRLLP,
  HILLP,
  LLPREG,
  LLPRO,
  LLPRPE,
} from "json/pages/startup/limited-liability-partnership";
import React from "react";

export default function LimitedLiabilityPartnership() {
  console.log("this pae");
  return (
    <div>
      <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
        <div>
          <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
            <Grid item md={9} xs={12}>
              {LLPREG.title}
              {LLPREG.desc}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                {LLPREG.box &&
                  LLPREG.box.map((d, index) => {
                    return (
                      <div key={index}>
                        <CImgTitlePara data={d} />
                      </div>
                    );
                  })}
              </Grid>
            </Grid>
            <Grid item md={3} xs={12}>
              <ConsultForm show={true} isRelative={false} />
            </Grid>
          </Grid>
        </div>
        {/* _______________________________How To Incorporate LLP? ___________________________*/}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {HILLP.title}
              {HILLP.desc}
              <Grid container style={{ padding: "1rem 0rem " }}>
                {HILLP.box &&
                  HILLP.box.map((d, index) => {
                    return (
                      <div key={index}>
                        <CImgTitlePara data={d} />
                      </div>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/*_____________________________ LLP REGISTRATION PROCEDURE EXPLAINED _________________________________*/}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {LLPRPE.title}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                {LLPRPE.data &&
                  LLPRPE.data.map((d, index) => {
                    // console.log(";jfslfslslfs", d)
                    return (
                      <div key={index}>
                        <CTxtHr data={d} />
                      </div>
                    );
                  })}
              </Grid>
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>
        {/* DOCUMENTS REQUIRED FOR COMPANY REGISTRATIONDOCUMENTS REQUIRED FOR LLP REGISTRATION THROUGH FORM LLP FILLIP */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {DRCRLLP.title}
              {DRCRLLP.subtitle}
              <hr style={{ marginRight: 20, marginTop: 10, opacity: 0.2 }} />
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                <CTxtHr data={DRCRLLP.data[0]} />
              </Grid>
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>

        {/* DOCUMENTS REQUIRED FOR COMPANY REGISTRATIONDOCUMENTS REQUIRED FOR LLP REGISTRATION THROUGH FORM LLP FILLIP */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {LLPRO.title}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                {LLPRO.data &&
                  LLPRO.data.map((d, index) => {
                    // console.log(";jfslfslslfs", d)
                    return (
                      <div key={index}>
                        <CTxtHr data={d} />
                      </div>
                    );
                  })}
              </Grid>
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>
        {/* __________________________________ LLP REGISTRATION PROCESS AMENDED ____________________________________*/}

        {/* table */}

        {/* __________________________DETAILS OF COMPANY REGISTRATION AND ITS PROCEDURES_________________________ */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {DCRP.title}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                <CTxtHr data={DCRP.data[0]} />
              </Grid>
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
