import CImgTitlePara from "@components/global/CImgTitlePara";
import ConsultForm from "@components/global/forms/ConsultForm";
import FAQGst from "@components/gst/GstRegistration/FAQGst";
import CTxtHr from "@components/startup/one-person-company/CTxtHr";
import { Grid } from "@material-ui/core";
import {
  DRFSCR,
  FAQSCRII,
  FDIII,
  HTISC,
  IA,
  MRTRPLSC,
  PFISRII,
  SCRII,
} from "json/pages/startup/indian-subsidiary";
import React from "react";

export default function IndianSubsidiary() {
  return (
    <div>
      <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
        <div>
          <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
            <Grid item md={9} xs={12}>
              {SCRII.title}
              {SCRII.desc}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                {SCRII.box &&
                  SCRII.box.map((d, i) => {
                    return <CImgTitlePara key={i + 1} data={d} />;
                  })}
              </Grid>
            </Grid>
            <Grid item md={3} xs={12}>
              <div>
                <ConsultForm key={1} show={true} isRelative={false} />
              </div>
            </Grid>
          </Grid>
        </div>
        {/* ___________________________________________How To Incorporate Subsidiary Company?________________________________ */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {HTISC.title}
              {HTISC.desc}
              <Grid container style={{ padding: "1rem 0rem " }}>
                {HTISC.box &&
                  HTISC.box.map((d, i) => {
                    return <CImgTitlePara key={i + 1} data={d} />;
                  })}
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* ________________________________MINIMUM REQUIREMENTS TO REGISTER A PVT. LTD. SUBSIDIARY COMPANY______________________________________ */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {MRTRPLSC.title}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                <CTxtHr key={1} data={MRTRPLSC.data[0]} />
              </Grid>
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>
        {/* ________________________________PROCEDURE FOR INDIAN SUBSIDIARY REGISTRATION IN INDIA______________________________________ */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {PFISRII.title}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                {PFISRII.data &&
                  PFISRII.data.map((d, i) => {
                    // console.log(";jfslfslslfs", d)
                    return <CTxtHr key={i + 1} data={d} />;
                  })}
              </Grid>
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>
        {/* ________________________________DOCUMENTS REQUIRED FOR SUBSIDIARY COMPANY REGISTRATION______________________________________ */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {DRFSCR.title}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                {DRFSCR.data &&
                  DRFSCR.data.map((d, i) => {
                    // console.log(";jfslfslslfs", d)
                    return <CTxtHr key={i + 1} data={d} />;
                  })}
              </Grid>
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>
        {/* ________________________________INCORPORATION APPLICATION______________________________________ */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {IA.title}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                <CTxtHr key={1} data={IA.data[0]} />
              </Grid>
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>
        {/* ________________________________FOREIGN DIRECT INVESTMENT IN INDIA______________________________________ */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {FDIII.title}
              <Grid container style={{ padding: "1rem 0rem 0rem 0rem" }}>
                {FDIII.data &&
                  FDIII.data.map((d, i) => {
                    // console.log(";jfslfslslfs", d)
                    return <CTxtHr key={i + 1} data={d} />;
                  })}
              </Grid>
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>
        {/* ____________FAQ ON Subsidiary Company Registration IN INDIA_______ */}
        <div>
          <Grid
            container
            style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}
          >
            <Grid item md={9} xs={12}>
              {FAQSCRII.title}
              <FAQGst key={1} data={FAQSCRII.data} />
              <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
