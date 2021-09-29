import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import CTxtHr from '@components/startup/one-person-company/CTxtHr';
import { Grid } from '@material-ui/core';
import { OurMiss, WMEDCT } from 'json/pages/contact/aboutUs';
import React from 'react'

export default function aboutUs() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" }}>
                        <Grid item md={9} xs={12}  >
                            {WMEDCT.title}
                            {WMEDCT.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    WMEDCT.box && WMEDCT.box.map((d, i) => {
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
                 {/*_____________________________ OUR MISSION _________________________________*/}
                 <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem", marginTop: 50 }}>
                        <Grid item md={9} xs={12}  >
                            {OurMiss.title}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    OurMiss.data && OurMiss.data.map((d, i) => {
                                        // console.log(";jfslfslslfs", d)
                                        return <CTxtHr key={i+1} data={d} />

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
