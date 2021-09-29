import React from 'react'

const TitleDesc = ({ data }) => {
    return (
        <>
            {
                data &&
                <>
                    <div style={{ margin: "2rem 0rem" }}>
                        {data.title && data.title}
                        {data.desc && data.desc}
                    </div>
                </>
            }
        </>
    )
}

export default TitleDesc
