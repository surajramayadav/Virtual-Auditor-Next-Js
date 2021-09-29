import FAQGst from '@components/gst/GstRegistration/FAQGst'
import TitleDesc from '@components/gst/GstRegistration/TitleDesc'
import CTitleDescImagesFormLayout from 'hoc/Layouts/CTitleDescImagesFormLayout'
import { shopActRegBangloreData, shopActRegBangloreDesc } from 'json/pages/tax/tax-registration/ShopActRegistrationBangaloreData'

const ShopActRegistrationBangalore = () => {
    return (
        <div>
            <CTitleDescImagesFormLayout data={shopActRegBangloreData}>

                {shopActRegBangloreDesc.map((d, i) => {
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

export default ShopActRegistrationBangalore
