import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import { Grid } from '@material-ui/core';
import { StartupCart } from 'json/pages/startup/startup-india-registration';
import React from 'react'
import { Button, makeStyles, useMediaQuery } from "@material-ui/core";
import { Fonts } from 'constant/Fonts';
import Colors from 'constant/Colors';
import { HTIPLC, HTROR, PLCROP } from 'json/pages/startup/private-limited-company-registration';

export default function PrivateLimitedCompanyRegistration() {
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
                                        How To Register A Company - OnlineCompany Registration
                                    </h1>
                                    <p style={{ color: Colors.white, fontSize: Fonts.h }}>
                                        Company Registration is the process by which corporate legal entity comes into existence and Private limited company is considered as the most secure and best options for startups as the liability of the members is limited and all investors prefer only Private limited company, lets find out how to register a private limited company online
                                    </p>
                                </div>

                                <div>
                                    <Grid container style={{ padding: "1rem 1rem" }}>
                                        {HTROR.box &&
                                            HTROR.box.map((item, index) => {
                                                return <CImgTitlePara key={index + 1} data={item} />;
                                            })}
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <div>
                                    <ConsultForm key={1} show={true} isRelative={true} bg="linear-gradient(45deg,#090d58,#3a3a3a 50%)" />
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
                            <p style={{ fontSize: Fonts.h1, marginTop: -40, }}>
                                <span style={{ color: Colors.grey }}>OUR </span>
                                <span style={{ color: Colors.green, }}>
                                    PACKAGE
                                </span>
                            </p>
                        </div>
                        <div>
                            <Grid container style={{ padding: "1rem 2rem", marginTop: 30 }}>
                                {PLCROP &&
                                    PLCROP.box.map((item, index) => {
                                        return <CImgTitlePara key={index + 1} data={item} />;
                                    })}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
            {/* ____________How To Incorporate Private Limited Company?_________ */}
            <div>
                <div className="root" style={{ padding: "5rem 0rem" }}>
                    <div>
                        <div style={{ textAlign: "center" }}>
                            <p style={{ fontSize: Fonts.h1, marginTop: -40, }}>
                                {HTIPLC.title}
                            </p>
                        </div>
                        <div>
                            <Grid container style={{ padding: "1rem 2rem", marginTop: 30 }}>
                                <CImgTitlePara key={1} data={HTIPLC.box[0]} />;

                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    bg: {
        backgroundImage: `linear-gradient(
        45deg, rgb(2, 4, 43), rgb(2, 4, 43) 50%);`,
        clipPath: `polygon(0 0,100% 0,100% 100%,0 calc(100% - 6vw))`
    },
}));