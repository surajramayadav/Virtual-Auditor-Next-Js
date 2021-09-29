import FAQGst from '@components/gst/GstRegistration/FAQGst'
import TitleDesc from '@components/gst/GstRegistration/TitleDesc'
import CTitleDescImagesFormLayout from 'hoc/Layouts/CTitleDescImagesFormLayout'
import { tanRegistrationData, tanRegistrationDesc, tanRegistrationnFAQ } from 'json/pages/tax/tax-registration/TanRegistrationData'


const UdyamRegistration = () => {
    return (
        <div>
            <CTitleDescImagesFormLayout data={tanRegistrationData}>

                {tanRegistrationDesc.map((d, i) => {
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

export default UdyamRegistration
