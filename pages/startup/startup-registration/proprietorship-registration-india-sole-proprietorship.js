import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import { Grid } from '@material-ui/core';
import { DRFSPR, HTPPR, PR, PRPE } from 'json/pages/startup/proprietorship-registration-india-sole-proprietorship';
import React from 'react'

export default function ProprietorshipRegistrationIndiaSoleProprietorship() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                        <Grid item md={9} xs={12}  >
                            {PR.title}
                            {PR.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    PR.box && PR.box.map((d, i) => {
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
                {/*_________________ How To Perform Proprietorship Registration?_____________________ */}

                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {HTPPR.title}
                            {HTPPR.desc}
                            <Grid container style={{ padding: "1rem 0rem ", }} >
                                {
                                    HTPPR.box && HTPPR.box.map((d, i) => {

                                        return <CImgTitlePara key={i+1} data={d} />;
                                    })
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </div>
                {/*____________________ REGISTRATION PROCEDURE EXPLAINED______________________ */}
                {/*______________________________ REGISTRATION PROCEDURE EXPLAINED _______________________*/}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {PRPE.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    PRPE.data && PRPE.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i+1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>
                    </Grid>
                </div>
                {/* ____________DOCUMENTS REQUIRED FOR SOLE PROPRIETORSHIP REGISTRATION_______________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {DRFSPR.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                <CTxtHr key={1}  data={DRFSPR.data[0]} />
                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0 }} />
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}
