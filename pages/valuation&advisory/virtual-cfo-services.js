import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTextImg from '@components/startup/startup-india-registration/CTextImg';
import { Grid } from '@material-ui/core';
import { VartualCFOS, Virtual_OurPack, Virtual_Start } from 'json/pages/valuation&advisory/virtual-cfo-services';
import React from 'react'
import { Button, makeStyles, useMediaQuery } from "@material-ui/core";
import Colors from 'constant/Colors';

export default function VirtualCfoServices() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.bg}>
                <div className="root" style={{ padding: "3rem 0rem 5rem 0rem" }}>
                    <div>
                        <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                            <Grid item md={9} xs={12}  >
                                {VartualCFOS.title}
                                {VartualCFOS.desc}
                                <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                    {
                                        VartualCFOS.box && VartualCFOS.box.map((d, i) => {
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
            {/*  ____________________________OUR PACKAGE_________________________________ */}
            <div className={classes.bg1}>
                <div className="root" style={{ padding: "3rem 0rem 3rem 0rem" }}>
                    <div>
                        <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                            <Grid item md={12} xs={12}  >
                                {Virtual_OurPack.title}
                                <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                    {
                                        Virtual_OurPack.box && Virtual_OurPack.box.map((d, i) => {
                                            return <CImgTitlePara key={i + 1} data={d} />;
                                        })
                                    }

                                </Grid>
                            </Grid>

                        </Grid>

                    </div>
                </div>
            </div>
            {Virtual_Start &&
                Virtual_Start.map((item, index) => {
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