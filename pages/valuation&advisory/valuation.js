
import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import GlobalTable from '@components/table/GlobalTable';
import { Grid } from '@material-ui/core';
import { BottomTable, MSVBVARV, Uptable, ValStartupReg, VALSVD, ValTableData, Val_TCV, WCVA } from 'json/pages/valuation&advisory/valuation';
import React from 'react'

export default function valuation() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
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
                            <ConsultForm key={1} show={true} isRelative={false} />
                        </Grid>

                    </Grid>

                </div>
                {/* _______________________________Why is Company Valuation Needed? ___________________________*/}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {WCVA.title}
                            
                            <Grid container style={{ padding: "1rem 0rem ", }} >
                                {
                                    WCVA.box && WCVA.box.map((d, i) => {

                                        return <CImgTitlePara key={i + 1} data={d} />;
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                {/*_____________________________WHO IS A REGISTERED VALUER, PERSONS HOW CAN YOU PROVIDE BUSINESS VALUATION SERVICES? _________________________________*/}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {VALSVD.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                <CTxtHr key={1} data={VALSVD.data[0]} />
                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0 }} />
                        </Grid>


                    </Grid>
                </div>
                {/*_____________________________TYPES OF COMPANY VALUATION_________________________________*/}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {Val_TCV.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                <CTxtHr key={1} data={Val_TCV.data[0]} />
                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0 }} />
                        </Grid>


                    </Grid>
                </div>
                {/*_____________________________TMERCHANT BANKER CERTIFICATE FOR BUSINESS VALUATION SERVICES IS A DILEMMA AND A PROCEDURAL CONFUSION LETS FIND OUT HOW CAN ISSUE THE VALUATION CERTIFICATES (VALUATION SERVICES) TO STARTUPS ( REGISTERED VALUERS)_________________________________*/}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {Uptable.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                <CTxtHr key={1} data={Uptable.data[0]} />
                            </Grid>
                            {/* <hr style={{ marginRight: 20, marginTop: 50, opacity: 0 }} /> */}
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container style={{ padding: "0rem 1rem 0rem 2rem", }}>
                        <Grid item md={9} xs={12}  >
                            <GlobalTable key={1} data={ValTableData} />
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <Grid container style={{ padding: "0rem 1rem 0rem 2rem", }}>
                        <Grid item md={9} xs={12}  >
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                <CTxtHr key={1} data={BottomTable.data[0]} />
                            </Grid>
                            {/* <hr style={{ marginRight: 20, marginTop: 50, opacity: 0 }} /> */}
                        </Grid>
                    </Grid>
                </div>
                {/*_________ Methods of Startup Valuation / Business Valuation to be applied by Registered Valuer___________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {MSVBVARV.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    MSVBVARV.data && MSVBVARV.data.map((d, i) => {
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
        </div >
    )
}
