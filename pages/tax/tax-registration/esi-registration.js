import FAQGst from '@components/gst/GstRegistration/FAQGst'
import TitleDesc from '@components/gst/GstRegistration/TitleDesc'
import CTitleDescImagesFormLayout from 'hoc/Layouts/CTitleDescImagesFormLayout'
import { EsiRegistrationData, EsiRegistrationDesc } from 'json/pages/tax/tax-registration/EsiRegistrationData'


const EsiRegistration = () => {
    return (
        <div>
            <CTitleDescImagesFormLayout data={EsiRegistrationData}>

                {EsiRegistrationDesc.map((d, i) => {
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

export default EsiRegistration
