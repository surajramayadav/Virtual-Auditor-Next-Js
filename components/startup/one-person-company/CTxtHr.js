import { Grid } from '@material-ui/core'
import Colors from 'constant/Colors'
import React from 'react'

export default function CTxtHr({ data }) {
    // console.log(">>>>>>>>>>>", data)
    return (
        <>
            <Grid item md={12} xs={12}>
                <div style={{ marginRight: 20 }}>
                    {data.subtitle && data.subtitle}
                    {data.underline && <hr style={{ borderWidth: 0.2, marginTop: 10, marginBottom: 10, opacity: 0.4 }} />}
                    {data.desc && data.desc}
                    {data.btdesc && data.btdesc}
                    {data.hr && <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />}
                </div>
            </Grid>

        </>
    )
}
