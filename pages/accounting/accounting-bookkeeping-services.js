import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import { Grid } from '@material-ui/core';
import { ABS, ABSWO, WCVAFABS } from 'json/pages/accounting/accounting-bookkeeping-services';
import React from 'react'

export default function AccountingBookkeepingServices() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                        <Grid item md={9} xs={12}  >
                            {ABS.title}
                            {ABS.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    ABS.box && ABS.box.map((d, i) => {
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
                {/* ___________________________________________Why Choose Virtual Auditor for Accounting & Bookkeeping Services_______________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {WCVAFABS.title}
                            {WCVAFABS.desc}
                            <Grid container style={{ padding: "1rem 0rem ", }} >
                                {
                                    WCVAFABS.box && WCVAFABS.box.map((d, i) => {

                                        return <CImgTitlePara key={i + 1} data={d} />;
                                    })
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </div>
                {/* ________________________________ACCOUNTING & BOOKKEEPING SERVICES WE OFFER______________________________________ */}
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {ABSWO.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    ABSWO.data && ABSWO.data.map((d, i) => {
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
