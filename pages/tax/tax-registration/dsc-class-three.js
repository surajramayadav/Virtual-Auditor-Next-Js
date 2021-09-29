import FAQGst from '@components/gst/GstRegistration/FAQGst'
import TitleDesc from '@components/gst/GstRegistration/TitleDesc'
import CTitleDescImagesFormLayout from 'hoc/Layouts/CTitleDescImagesFormLayout'
import { dscClass3FAQ, dscClassThreeData, dscClassThreeDesc } from 'json/pages/tax/tax-registration/dsc-class-three'

const DscClassThree = () => {
    return (
        <div>
            <CTitleDescImagesFormLayout data={dscClassThreeData}>

                {dscClassThreeDesc.map((d, i) => {
                    return (
                        <>
                            <div style={{ margin: "3rem 0rem" }}>
                                <TitleDesc key={i + 1} data={d} />
                            </div>
                        </>
                    )
                })}

                <FAQGst data={dscClass3FAQ} />
            </CTitleDescImagesFormLayout>
        </div>
    )
}

export default DscClassThree
