import FAQGst from '@components/gst/GstRegistration/FAQGst'
import TitleDesc from '@components/gst/GstRegistration/TitleDesc'
import CTitleDescImagesFormLayout from 'hoc/Layouts/CTitleDescImagesFormLayout'
import { digitalSignatureData, digitalSignatureDesc } from 'json/pages/tax/tax-registration/digital-signature'

const DigitalSignature = () => {
    return (
        <div>
            <CTitleDescImagesFormLayout data={digitalSignatureData}>

                {digitalSignatureDesc.map((d, i) => {
                    return (
                        <>
                            <div style={{ margin: "3rem 0rem" }}>
                                <TitleDesc key={i + 1} data={d} />
                            </div>
                        </>
                    )
                })}

            </CTitleDescImagesFormLayout>
        </div>
    )
}

export default DigitalSignature
