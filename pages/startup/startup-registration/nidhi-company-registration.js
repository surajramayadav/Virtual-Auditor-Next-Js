import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import FAQGst from '@components/gst/GstRegistration/FAQGst';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import { Grid } from '@material-ui/core';
import { gstReturnFAQ } from 'json/pages/gst/gstReturn';
import { HTINC, NCR, NCRPE, DRFNCR, NCRAI, FAQNC } from 'json/pages/startup/nidhi-company-registration';
import React from 'react'

export default function NidhiCompanyRegistration() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                        <Grid item md={9} xs={12}  >
                            {NCR.title}
                            {NCR.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    NCR.box && NCR.box.map((d, i) => {
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
                {/* ___________________________________________How To Incorporate Nidhi Company?________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {HTINC.title}
                            {HTINC.desc}
                            <Grid container style={{ padding: "1rem 0rem ", }} >
                                {
                                    HTINC.box && HTINC.box.map((d, i) => {

                                        return <CImgTitlePara key={i+1} data={d} />;
                                    })
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________NIDHI COMPANY REGISTRATION PROCEDURE EXPLAINED______________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {NCRPE.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    NCRPE.data && NCRPE.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i + 1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________DOCUMENTS REQUIRED FOR NIDHI COMPANY REGISTRATIO______________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {DRFNCR.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    DRFNCR.data && DRFNCR.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i + 1} data={d} />

                                    })
                                }

                            </Grid>
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________NIDHI COMPANY REGISTRATION AN INSIGHT______________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {NCRAI.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    NCRAI.data && NCRAI.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i + 1} data={d} />

                                    })
                                }

                            </Grid>
                            {/* <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} /> */}
                        </Grid>


                    </Grid>
                </div>
                {/* ____________FAQ ON NIDHI COMPANY REGISTRATION________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                        {FAQNC.title}
                        <FAQGst key={1} data={FAQNC.data} />
                            <hr style={{ marginRight: 20, marginTop: 50, opacity: 0.5 }} />
                        </Grid>


                    </Grid>
                </div>
            </div>
        </div>
    )
}
