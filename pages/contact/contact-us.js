import CImgTitlePara from '@components/global/CImgTitlePara';
import ConsultForm from '@components/global/forms/ConsultForm';
import { Grid } from '@material-ui/core';
import { CVA } from 'json/pages/contact/Contact';
import React from 'react'

export default function contactUs() {
    return (
        <div>
            <div className="root" style={{ padding: "3rem 0rem 0rem 0rem" }}>
                <div>
                    <Grid container style={{ padding: "1rem 1rem 0rem 2rem" ,marginBottom:30}}>
                        <Grid item md={9} xs={12}  >
                            {CVA.title}
                            {CVA.desc}
                            <Grid container style={{ padding: "1rem 0rem 0rem 0rem", }} >
                                {
                                    CVA.box && CVA.box.map((d, i) => {
                                        return <CImgTitlePara key={i + 1} data={d} />;
                                    })
                                }

                            </Grid>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <div>
                                <ConsultForm key={1} show={true} isRelative={true} />
                            </div>
                        </Grid>

                    </Grid>

                </div>
            </div>
        </div>
    )
}
