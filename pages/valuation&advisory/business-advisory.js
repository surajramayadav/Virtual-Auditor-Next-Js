import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import { Grid } from '@material-ui/core';
import { BAS, BA_BAS, BA_DOOBA, WCBAFVA } from 'json/pages/valuation&advisory/business-advisory';
import React from 'react'

export default function BusinessAdvisory() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                        <Grid item md={9} xs={12}  >
                            {BAS.title}
                            {BAS.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    BAS.box && BAS.box.map((d, i) => {
                                        return <CImgTitlePara key={i + 1} data={d} />;
                                    })
                                }

                            </Grid>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <div>
                                <ConsultForm key={1} show={true} isRelative={false} />
                            </div>
                        </Grid>

                    </Grid>

                </div>
                {/* ____________________Who Choose Business Advisory From Virtual Auditor___________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {WCBAFVA.title}
                            {WCBAFVA.desc}
                            <Grid container style={{ padding: "1rem 0rem ", }} >
                                {
                                    WCBAFVA.box && WCBAFVA.box.map((d, i) => {

                                        return <CImgTitlePara key={i+1} data={d} />;
                                    })
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________BUSINESS ADVISORY SERVICES______________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {BA_BAS.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    BA_BAS.data && BA_BAS.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i + 1} data={d} />

                                    })
                                }

                            </Grid>
                            {/* <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} /> */}
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________DETAILED OVERVIEW OF BUSINESS ADVISORY_____________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {BA_DOOBA.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    BA_DOOBA.data && BA_DOOBA.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i + 1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
            </div>
        </div>
    )
}
