import { Grid } from '@material-ui/core'
import React from 'react'

export default function CTextImg({ data }) {
    return (
        <>{
            data.right ?
                <>
                    <Grid item md={5} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <div style={{ padding: '0rem 1rem 0rem 2rem ' }}>
                            {data.title && data.title}
                            {data.desc && data.desc}

                        </div>
                    </Grid>
                    <Grid item md={7} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div >
                            {data.imageSrc && data.imageSrc}
                        </div>
                    </Grid>
                </>
                :
                <>
                    <Grid item md={5} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div >
                            {data.imageSrc && data.imageSrc}
                        </div>
                    </Grid>
                    <Grid item md={7} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <div style={{ padding: '0rem 1rem 0rem 2rem '}}>
                            {data.title && data.title}
                            {data.desc && data.desc}

                        </div>
                    </Grid>

                </>
        }

        </>
    )
}
