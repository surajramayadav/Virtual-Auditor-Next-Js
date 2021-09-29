import FAQGst from '@components/gst/GstRegistration/FAQGst'
import TitleDesc from '@components/gst/GstRegistration/TitleDesc'
import CTitleDescImagesFormLayout from 'hoc/Layouts/CTitleDescImagesFormLayout'
import { dscClass2FAQ, dscClassTwoData, dscClassTwoDesc } from 'json/pages/tax/tax-registration/dsc-class-two'

const DscClassTwo = () => {
    return (
        <div>
            <CTitleDescImagesFormLayout data={dscClassTwoData}>

                {dscClassTwoDesc.map((d, i) => {
                    return (
                        <>
                            <div style={{ margin: "3rem 0rem" }}>
                                <TitleDesc key={i + 1} data={d} />
                            </div>
                        </>
                    )
                })}

                <FAQGst data={dscClass2FAQ} />
            </CTitleDescImagesFormLayout>
        </div>
    )
}

export default DscClassTwo
