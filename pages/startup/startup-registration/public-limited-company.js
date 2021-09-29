import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import { Grid } from '@material-ui/core';
import { DRFPCR, HTIPLC, PLCR, PLRPE } from 'json/pages/startup/public-limited-company';
import React from 'react'

export default function PublicLimitedCompany() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                        <Grid item md={9} xs={12}  >
                            {PLCR.title}
                            {PLCR.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    PLCR.box && PLCR.box.map((d, i) => {
                                        return <CImgTitlePara key={i+1} data={d} />;
                                    })
                                }

                            </Grid>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <ConsultForm  key={1} show={true} isRelative={false} />
                        </Grid>

                    </Grid>

                </div>
                {/* __________________________How To Incorporate Public Limited Company?__________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {HTIPLC.title}
                            {HTIPLC.desc}
                            <Grid container style={{ padding: "1rem 0rem ", }} >
                                {
                                    HTIPLC.box && HTIPLC.box.map((d, i) => {

                                        return <CImgTitlePara key={i+1} data={d} />;
                                    })
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </div>

                {/*______________________________ PUBLIC LIMITED REGISTRATION PROCEDURE EXPLAINED _______________________*/}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {PLRPE.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    PLRPE.data && PLRPE.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i+1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>
                    </Grid>
                </div>

                {/* ____________DOCUMENTS REQUIRED FOR PUBLIC COMPANY REGISTRATION_______________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {DRFPCR.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    DRFPCR.data && DRFPCR.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr  key={i+1} data={d} />

                                    })
                                }
                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0 }} />
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}
