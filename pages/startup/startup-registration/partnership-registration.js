import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import { Grid } from '@material-ui/core';
import { DRFPR, HTFPF, PFR, RPE } from 'json/pages/startup/partnership-registration';
import React from 'react'

export default function partnershipRegistration() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                        <Grid item md={9} xs={12}  >
                            {PFR.title}
                            {PFR.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    PFR.box && PFR.box.map((d, i) => {
                                        return <CImgTitlePara key={i+1} data={d} />;
                                    })
                                }

                            </Grid>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <ConsultForm key={1} show={true} isRelative={false} />
                        </Grid>

                    </Grid>

                </div>
                {/* __________________________How To Form Partnerhip Firm?__________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {HTFPF.title}
                            {HTFPF.desc}
                            <Grid container style={{ padding: "1rem 0rem ", }} >
                                {
                                    HTFPF.box && HTFPF.box.map((d, i) => {

                                        return <CImgTitlePara key={i+1} data={d} />;
                                    })
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </div>

                {/*______________________________ REGISTRATION PROCEDURE EXPLAINED _______________________*/}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {RPE.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    RPE.data && RPE.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i+1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>
                    </Grid>
                </div>

                {/* ____________DOCUMENTS REQUIRED FOR PARTNERSHIP REGISTRATION_______________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {DRFPR.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                <CTxtHr key={1} data={DRFPR.data[0]} />
                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0 }} />
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}
