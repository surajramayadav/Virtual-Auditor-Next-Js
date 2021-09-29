import FAQGst from '@components/gst/GstRegistration/FAQGst'
import TitleDesc from '@components/gst/GstRegistration/TitleDesc'
import CTitleDescImagesFormLayout from 'hoc/Layouts/CTitleDescImagesFormLayout'
import { importExportCodeData, importExportCodeDesc } from 'json/pages/tax/tax-registration/import-export-code'
const ImportExportCode = () => {
    return (
        <div>
            <CTitleDescImagesFormLayout data={importExportCodeData}>

                {importExportCodeDesc.map((d, i) => {
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

export default ImportExportCode
