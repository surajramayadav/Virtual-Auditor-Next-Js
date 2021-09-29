import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import { Grid } from '@material-ui/core';
import { AADOS8CR, AOTEFS8CR, DTAWI12, HTISC, MRTRPLSC, S8CRC, S8CRO } from 'json/pages/startup/online-section-8-company-registration';
import React from 'react'

export default function OnlineSection8CompanyRegistration() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                        <Grid item md={9} xs={12}  >
                            {S8CRO.title}
                            {S8CRO.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    S8CRO.box && S8CRO.box.map((d, i) => {
                                        return <CImgTitlePara  key={i+1} data={d} />;
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
                {/* ___________________________________________How To Incorporate Section 8 Company?________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {HTISC.title}
                            {HTISC.desc}
                            <Grid container style={{ padding: "1rem 0rem ", }} >
                                {
                                    HTISC.box && HTISC.box.map((d, i) => {

                                        return <CImgTitlePara key={i+1} data={d} />;
                                    })
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________REGISTRATION PROCESS OF SECTION 8 COMPANY______________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {MRTRPLSC.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    MRTRPLSC.data && MRTRPLSC.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i + 1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________DOCUMENTS TO ATTACH WITH INC-12:______________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {DTAWI12.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    DTAWI12.data && DTAWI12.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i + 1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________SECTION 8 COMPANY REGISTRATION COST______________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {S8CRC.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                <CTxtHr key={1} data={S8CRC.data[0]} />
                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________ADVANTAGES AND DISADVANTAGES OF SECTION 8 COMPANY REGISTRATION_____________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {AADOS8CR.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    AADOS8CR.data && AADOS8CR.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i + 1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
                  {/* ________________________________APPLICABILITY OF TAX EXEMPTION FOR SECTION 8 COMPANY REGISTRATION_____________________________________ */}
                  <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {AOTEFS8CR.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    AOTEFS8CR.data && AOTEFS8CR.data.map((d, i) => {
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
