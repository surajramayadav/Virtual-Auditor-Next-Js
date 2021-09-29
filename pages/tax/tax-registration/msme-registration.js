import FAQGst from '@components/gst/GstRegistration/FAQGst'
import TitleDesc from '@components/gst/GstRegistration/TitleDesc'
import CTitleDescImagesFormLayout from 'hoc/Layouts/CTitleDescImagesFormLayout'
import { msmeData, msmeDesc, msmeRegitrationFAQ } from 'json/pages/tax/tax-registration/msme-registration'

const Msmeregistration = () => {
    return (
        <div>
            <CTitleDescImagesFormLayout data={msmeData}>

                {msmeDesc.map((d, i) => {
                    return (
                        <>
                            <div style={{ margin: "3rem 0rem" }}>
                                <TitleDesc key={i + 1} data={d} />
                            </div>
                        </>
                    )
                })}



                <FAQGst data={msmeRegitrationFAQ} />


            </CTitleDescImagesFormLayout>
        </div>
    )
}

export default Msmeregistration
