import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import { Grid } from '@material-ui/core';
import { DRFV, MOSV, ValSecure, ValStart, ValStart2, ValStartupReg, VALSVD, WCVA } from 'json/pages/valuation&advisory/startup-valuation';
import React from 'react'
import { Button, makeStyles, useMediaQuery } from "@material-ui/core";
import Colors from 'constant/Colors';
import CTextImg from '@components/startup/startup-india-registration/CTextImg';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
export default function StartupValuation() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.bg}>
                <div className="root" style={{ padding: "3rem 0rem 5rem 0rem" }}>
                    <div>
                        <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                            <Grid item md={9} xs={12}  >
                                {ValStartupReg.title}
                                {ValStartupReg.desc}
                                <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                    {
                                        ValStartupReg.box && ValStartupReg.box.map((d, i) => {
                                            return <CImgTitlePara key={i + 1} data={d} />;
                                        })
                                    }

                                </Grid>
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
            {/*  ____________________________WHY CHOOSE VIRTUAL AUDITOR__________________________________ */}
            <div className={classes.bg1}>
                <div className="root" style={{ padding: "3rem 0rem 3rem 0rem" }}>
                    <div>
                        <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                            <Grid item md={12} xs={12}  >
                                {WCVA.title}
                                <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                    {
                                        WCVA.box && WCVA.box.map((d, i) => {
                                            return <CImgTitlePara key={i + 1} data={d} />;
                                        })
                                    }

                                </Grid>
                            </Grid>

                        </Grid>

                    </div>
                </div>
            </div>
            {/* ______________________________DOCUMENTS REQUIRED FOR VALUATION____________________________________        */}
            <div className={classes.bg2}>
                <div className="root" style={{ padding: "3rem 0rem 3rem 0rem" }}>
                    <div>
                        <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                            <Grid item md={12} xs={12}  >
                                {DRFV.title}
                                <Grid container style={{ padding: "1rem 0rem 0rem 0rem", marginTop: 20 }} >
                                    {
                                        DRFV.box && DRFV.box.map((d, i) => {
                                            return <CImgTitlePara key={i + 1} data={d} />;
                                        })
                                    }

                                </Grid>
                            </Grid>

                        </Grid>

                    </div>
                </div>
            </div>

            {ValStart &&
                ValStart.map((item, index) => {
                    return (
                        <>
                            <div
                                style={{
                                    backgroundColor:
                                        item.id == 1 ? Colors.statupbg : Colors.white,
                                }}
                            >
                                <div className="root" style={{ padding: "3rem 0rem" }}>
                                    <Grid container style={{ padding: "1rem 1rem" }}>
                                        <CTextImg key={index + 1} data={item} />
                                    </Grid>
                                </div>
                            </div>
                        </>
                    );
                })}
            {/* ________________________STARTUP VALUATION DEFINITION_______________________ */}
            <div
                style={{
                    backgroundColor: Colors.statupbg
                }}
            >
                <div className="root" style={{ padding: "3rem 0rem 4rem 0rem" }}>
                    <div>
                        <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                            <Grid item md={12} xs={12}  >
                                {VALSVD.title}
                                <Grid container style={{ padding: "1rem 0rem 0rem 0rem", marginTop: 20 }} >
                                    {
                                        VALSVD.box && VALSVD.box.map((d, i) => {
                                            return <CImgTitlePara key={i + 1} data={d} />;
                                        })
                                    }

                                </Grid>
                            </Grid>

                        </Grid>

                    </div>
                </div>
            </div>

            {/* ________________________________________________ */}
            {ValSecure &&
                ValSecure.map((item, index) => {
                    return (
                        <>
                            <div
                                style={{
                                    backgroundColor:
                                        item.id == 2 ? Colors.statupbg : Colors.white,
                                }}
                            >
                                <div className="root" style={{ padding: "3rem 0rem" }}>
                                    <Grid container style={{ padding: "1rem 1rem" }}>
                                        <CTextImg key={index + 1} data={item} />
                                    </Grid>
                                </div>
                            </div>
                        </>
                    );
                })}
            {/* _________________METHODS OF STARTUP VALUATION______________________ */}
            <div>
                <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                    <Grid item md={9} xs={12}  >
                        {MOSV.title}
                        <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                            {
                                MOSV.data && MOSV.data.map((d, i) => {
                                    // console.log(";jfslfslslfs", d)
                                    return <CTxtHr key={i + 1} data={d} />

                                })
                            }

                        </Grid>
                        {/* <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} /> */}
                    </Grid>


                </Grid>
            </div>
            {/* __________________________________________________________ */}

            {ValStart2 &&
                ValStart2.map((item, index) => {
                    return (
                        <>
                            <div
                                style={{
                                    backgroundColor:
                                        item.id == 1 ? Colors.statupbg : Colors.white,
                                }}
                            >
                                <div className="root" style={{ padding: "3rem 0rem" }}>
                                    <Grid container style={{ padding: "1rem 1rem" }}>
                                        <CTextImg key={index + 1} data={item} />
                                    </Grid>
                                </div>
                            </div>
                        </>
                    );
                })}

        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    bg: {
        backgroundImage: `url('https://virtualauditor.in/assets/images/banner.jpg')`,
    },
    bg1: {
        backgroundColor: Colors.white,
    },
    bg2: {
        backgroundColor: Colors.heading,
    },
}));