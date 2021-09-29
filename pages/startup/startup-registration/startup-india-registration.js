import CImgTitlePara from "@components/global/CImgTitlePara";
import ConsultForm from "@components/global/forms/ConsultForm";
import { Grid } from "@material-ui/core";
import { ourPackage, sigCards } from "json/pages/home/home";
import { Button, makeStyles, useMediaQuery } from "@material-ui/core";
import bg from "@images/startup/bg.jpg";
import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import {
  StartupCart,
  StartupourPackage,
  StartupReg,
} from "json/pages/startup/startup-india-registration";
import CTextImg from "@components/startup/startup-india-registration/CTextImg";

const StartupIndiaRegistration = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.bg}>
        <div className="root" style={{ padding: "5rem 0rem" }}>
          <div>
            <Grid container>
              <Grid item md={9} xs={12}>
                <div style={{ padding: "1rem 2rem", lineHeight: 1.5 }}>
                  <h1 style={{ color: Colors.white, fontSize: Fonts.h1 }}>
                    Startup India Registration
                  </h1>
                  <p style={{ color: Colors.white, fontSize: Fonts.h3 }}>
                    Startup India is essentially an initiative taken by the
                    Indian government that aims at promoting and encouraging the
                    entrepreneurial spirit amongst its citizens.
                  </p>
                </div>

                <div>
                  <Grid container style={{ padding: "1rem 1rem" }}>
                    {StartupCart &&
                      StartupCart.cards.map((item, index) => {
                        return <CImgTitlePara key={index + 1} data={item} />;
                      })}
                  </Grid>
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <div>
                  <ConsultForm
                    key={1}
                    show={true}
                    isRelative={true}
                    bg="linear-gradient(45deg,#090d58,#3a3a3a 50%)"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      {/* ________________________________________________Our Package_________________________________________________________________ */}
      <div>
        <div className="root" style={{ padding: "5rem 0rem" }}>
          <div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: Fonts.h1, marginTop: -40 }}>
                OUR{" "}
                <span style={{ color: Colors.heading, fontWeight: "bold" }}>
                  PACKAGE
                </span>
              </p>
            </div>
            <div>
              <Grid container style={{ padding: "1rem 2rem", marginTop: 30 }}>
                {StartupourPackage &&
                  StartupourPackage.cards.map((item, index) => {
                    return <CImgTitlePara key={index + 1} data={item} />;
                  })}
              </Grid>
            </div>
          </div>
        </div>
      </div>
      {/* ______________________________________________________________Startup India Registration Texts ___________________________________________*/}
      {StartupReg &&
        StartupReg.map((item, index) => {
          return (
            <>
              <div
                key={index}
                style={{
                  backgroundColor:
                    item.id == 1 ? Colors.statupbg : Colors.white,
                }}
              >
                <div className="root" style={{ padding: "5rem 0rem" }}>
                  <Grid container style={{ padding: "1rem 2rem" }}>
                    <CTextImg key={index + 1} data={item} />
                  </Grid>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `url('https://virtualauditor.in/assets/images/increasecapital.jpg')`,
  },
}));

export default StartupIndiaRegistration;
