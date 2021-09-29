import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import { Grid } from '@material-ui/core'
import { DRFCR, IOPC, OnePcr, OPCO, RegPE, RPCROPC } from 'json/pages/startup/one-person-company'
import React from 'react'

export default function OnePersonCompany() {


    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                        <Grid item md={9} xs={12}  >
                            {OnePcr.title}
                            {OnePcr.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    OnePcr.box && OnePcr.box.map((d, i) => {
                                        return <CImgTitlePara key={i+1} data={d} />;
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
                {/* ___________________________________________How To Incorporate One Person Company________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {IOPC.title}
                            {IOPC.desc}
                            <Grid container style={{ padding: "1rem 0rem ", }} >
                                {
                                    IOPC.box && IOPC.box.map((d, i) => {

                                        return <CImgTitlePara key={i+1} data={d} />;
                                    })
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </div>

                {/* ________________________________REGISTRATION PROCEDURE EXPLAINED______________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {RegPE.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    RegPE.data && RegPE.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i+1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
                {/* ____________________________________REGISTRATION PROCEDURE EXPLAINED ___________________________*/}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {DRFCR.title}
                            {DRFCR.subtitle}
                            <hr style={{ marginRight: 20, marginTop: 10, opacity: 0.2 }} />
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    DRFCR.data && DRFCR.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i+1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
                {/* ___________________________________ONE PERSON COMPANY REGISTRATION OVERVIEW____________________________________
                                                      ( OVERVIEW FOR OPC) */}


                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {OPCO.title}
                            {/* {DRFCR.subtitle} */}
                            {/* <hr style={{ marginRight: 20, marginTop:10, opacity: 0.2 }} /> */}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    OPCO.data && OPCO.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i+1} data={d} />

                                    })
                                }

                            </Grid>
                            {/* <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} /> */}
                        </Grid>


                    </Grid>
                </div>
                {/* ______________REASONS TO PERFORM COMPANY REGISTRATION AS A ONE PERSON COMPANY ____________*/}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {RPCROPC.title}
                            {/* {DRFCR.subtitle} */}
                            {/* <hr style={{ marginRight: 20, marginTop:10, opacity: 0.2 }} /> */}
                            {RPCROPC.desc}
                        </Grid>


                    </Grid>
                </div>
            </div>
        </div>
    )
}