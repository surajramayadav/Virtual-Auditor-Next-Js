import FAQGst from '@components/gst/GstRegistration/FAQGst'
import TitleDesc from '@components/gst/GstRegistration/TitleDesc'
import CTitleDescImagesFormLayout from 'hoc/Layouts/CTitleDescImagesFormLayout'
import { shopActRegMumbaiData, shopActRegMumbaiDesc } from 'json/pages/tax/tax-registration/ShopActRegistrationMumbaiData'


const ShopActRegistrationMumbai = () => {
    return (
        <div>
            <CTitleDescImagesFormLayout data={shopActRegMumbaiData}>

                {shopActRegMumbaiDesc.map((d, i) => {
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

export default ShopActRegistrationMumbai
