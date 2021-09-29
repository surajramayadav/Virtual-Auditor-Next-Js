import Image from "next/image";
import Valuation from "@images/home/valuation.png";
import Coin from "@images/gst/gst-registration/coin.png";
import Cost from "@images/gst/gst-registration/cost.png";
import Archive from "@images/gst/gst-registration-for-foreigners/archive.png";
import Name from "@images/gst/gst-registration-for-foreigners/name.png";
import Owner from "@images/gst/gst-registration-for-foreigners/owner.png";
import FAQGst from "@components/gst/GstRegistration/FAQGst";
// import GlobalTable from "@components/table/GlobalTable";

 


export const importExportCodeData = {
    headTitle: "",
    containers: [
        {
            id: 1,
            container: {
                title: "Import Export Code Registration IE Code Registration",
                summary: (
                    <>
                        Individuals who intend to import and export goods and services in India need to register for the Importer Exporter (IE) Code. The Directorate General of Foreign Trade (DGFT) is responsible for issuing the IE Code, Government of India and the Ministry of Commerce and Industry. Applying for the IE Code requires necessary documents that should be made to the Directorate of Foreign Trade. The DGFT then issues the IE Code that would last for about 1 to 2 working days after submitting the application.
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Coin} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Starting at Rs. 3,999/-</p>,
                    },
                    {
                        id: 2,
                        imageSrc: (
                            <Image src={Cost} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>EMI Available</p>,
                    },
                ],
            },
        },
        {
            id: 2,
            container: {
                title: "How To Register For IE Code?",
                summary: (
                    <>
                        <div style={{ margin: "2rem 0rem" }}>
                            <p>Import Export Code (IE Code) registration should be obtained by all businesses involved in the import of export of goods and services.</p>

                        </div>
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Owner} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Form ANF 2A</p>,
                    },
                    {
                        id: 2,
                        imageSrc: (
                            <Image src={Name} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Submit Documents</p>,
                    },
                    {
                        id: 3,
                        imageSrc: (
                            <Image src={Archive} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Obtain Certificate</p>,
                    },

                ],
            },
        },
    ],
}


export const importExportCodeDesc = [
    {
        id: 1,
        desc:
            <>
                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>IE CODE  REGISTRATION APPLICATION</h1>
                </div>
                <div style={{ margin: "4rem 0rem" }}>
                    <div style={{ margin: "1rem 0rem" }}>
                        <p style={{ textAlign: "left" }}>The provisions that cover the application of the IE Code can be found in the Handbook of Provisions at Paragraph 2.08. The Vide general notice no 27/2015 – 2020 on the 08/08/2018, where the indicated para was modified and the modifications can be applied with reference to IEC application is provided as: An online application in the form ANF 2A must be submitted by the importer/exporter. Only two documents are required to be submitted by the applicant which are the bank certificate or a printed cheque and evidence of address.</p>
                    </div>

                    <div style={{ margin: "3rem 0rem" }}>
                        <h3 style={{ textAlign: "left" }}>Evidence of Address</h3>
                        <ol style={{ margin: "1rem 2rem" }}>
                            <li>The deed on the property where the business premises are owned by the business.</li>
                            <li>An agreement of rent/lease for rented properties.</li>
                            <li>Current utility bills such as electricity, landline or mobile bearing the name of the applicant.</li>
                            <li>A certificate on GST registration.</li>
                            <li>These pieces of evidence are valid for businesses that are owned personally.</li>
                            <li>Voters Identity, Aadhar Card and Passport.</li>
                        </ol>
                    </div>

                    <div style={{ margin: "3rem 0rem" }}>
                        <p>The documents that are listed above used to support the evidence of address must bear the name of the company, but self-owned businesses require the evidence of address to be in the name of the individual (the owner of the business) to be valid (Trade notice No. 39/2018-19 dated 12th December 2018).</p>
                    </div>

                    <div style={{ margin: "3rem 0rem" }}>
                        <p><strong>The IE Code Validity</strong> Applying for the IE Code does not require a regular update, submission, and modification as it is a once in a lifetime registration. The IE Code remains valid until the registration is canceled, rescinded or the business no longer exists. The individual carrying out the importation or exportation is not required to submit any document or follow a particular policy as opposed to PF or GST registration. As a result of its once in a lifetime registration, LLPs and companies are expected to submit an application after it has been incorporated.</p>
                    </div>

                    <div style={{ margin: "3rem 0rem" }}>
                        <p><strong>Exemption from IE Code</strong> Any business intending to import or export any kind of goods and service is required to obtain an Import/Export Code. But there are specific individuals who carry out importation or exportation without the IE Code. Import or Exports performed by the Central Government, Companies or Corporate bodies which are meant for national defense or other purposes that are specified in the 1993 Foreign Trade Order (in most cases, exemption from the application of rules). Importation and Exportation meant for personal purposes.</p>
                    </div>

                </div>


                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>IE CODE REGISTRATION DOCUMENTS</h1>



                    <div style={{ margin: "3rem 0rem" }}>
                        <p style={{ textAlign: "left" }}>The documents required for applying for an IE Code in India are: <strong>Proprietorship</strong></p>
                        <ol style={{ margin: "1rem 2rem" }}>
                            <li>A digital passport photograph of the proprietor that is about 3cm by 3cm.</li>
                            <li>A copy of the proprietor’s PAN card.</li>
                            <li>A copy of the voter’s identity, driver’s license and first and last page of the passport, all belonging to the proprietor.</li>
                            <li>A deed of the property for business premises owned by the business or a rental/lease agreement for rented properties.</li>
                            <li>Recent utility bill for electricity and telephone.</li>
                            <li>A certificate from the bank on ANF 2A(1), a cancelled cheque with the name of the applicant alongside the account number.</li>
                        </ol>
                    </div>



                    <div style={{ margin: "3rem 0rem" }}>
                        <h3 style={{ textAlign: "left" }}> Partnership Organization</h3>
                        <ul style={{ margin: "1rem 2rem" }}>
                            <li>Digital Passport-sized photograph of the managing partners about 3cm by 3cm.</li>
                            <li>A copy of the PAN card portraying the applicant entity.</li>
                            <li>A copy of the voter’s identity, driver’s license or PAN and first and last page of the passport of all partners.</li>
                            <li>A copy of the partnership agreement.</li>
                            <li>A deed of the property for business premises owned by the business or a rental/lease agreement for rented properties.</li>
                            <li>Recent utility bill for electricity and telephone.</li>
                            <li>A  certificate from the bank on ANF 2A(1), a cancelled cheque with the name of the applicant, together with the account number.</li>
                        </ul>
                    </div>


                    <div style={{ margin: "3rem 0rem" }}>
                        <h3 style={{ textAlign: "left" }}>LLP, Private Limited Company, or Section 8 Organization.</h3>
                        <ul style={{ margin: "1rem 2rem" }}>
                            <li>Digital Passport Photograph of the Director/Assigned Partner that would sign the application</li>
                            <li>A copy of the voter’s identity, driver’s license or PAN and first and last page of the passport of the Partner/Director that would sign the application.</li>
                            <li>An RoC issued Certificate of Incorporation.</li>
                            <li>A deed of the property for business premises owned by the business or a rental/lease agreement for rented properties.</li>
                            <li>Recent Utility bill for electricity and telephone.</li>
                            <li>A certificate from the bank on ANF 2A(1), a cancelled cheque with the company name together with the account number.</li>
                        </ul>
                    </div>


                    <div style={{ margin: "3rem 0rem" }}>
                        <h3 style={{ textAlign: "left" }}>Society/Trust.</h3>
                        <ul style={{ margin: "1rem 2rem" }}>
                            <li>Digital photographs of the Secretary, Chief executive or applicants that are signatory.</li>
                            <li>A copy of the PAN card of the applicant.</li>
                            <li>A copy of the voter’s Identity or UID, driver’s license or PAN and first and last page of the passport of the Managing Trustee, Secretary or Chief Executive that would sign the application.</li>
                            <li>A deed of the property for business premises owned by the business or a rental/lease agreement for rented properties.</li>
                            <li>Recent Utility bill for electricity and telephone.</li>
                            <li>The Society’s Certificate of Registration or the trust agreement.</li>
                            <li>A certificate from the bank on ANF 2A(1), a cancelled cheque showing the Society or Trust name together with the account number.</li>
                        </ul>
                    </div>


                    <div style={{ margin: "3rem 0rem" }}>
                        <h3 style={{ textAlign: "left" }}>HUF</h3>
                        <ol style={{ margin: "1rem 2rem" }}>
                            <li>The Digital Photo of the Karta.</li>
                            <li>A copy of the Karta’s PAN card.</li>
                            <li>A copy of the voter’s Identity or UID, driver’s license or PAN and first and last page of the passport of the Karta.</li>
                            <li>A deed of the property for business premises owned by the business or a rental/lease agreement for rented properties.</li>
                            <li>Recent Utility bill for electricity and telephone.</li>
                            <li>A certificate from the bank on ANF 2A(1), a cancelled cheque showing the applicant’s name together with the account number.</li>
                        </ol>
                    </div>


                    <div style={{ margin: "3rem 0rem" }}>
                        <h2 style={{ textAlign: "left" }}>Evidence from the bank for IEC Code Registrtion</h2>
                        <p>Vide Trade Notice No 39/2018-19 as from 12th December 2018 indicated that cheques without the preprinted name of the owner of the account will no longer be accepted. The preprinted cheque can be of both current and savings accounts. The most important thing to note is that the document described above must be uploaded in either JPEG or GIF format online and should not be more than 5MB.</p>
                    </div>


                    <div style={{ margin: "3rem 0rem" }}>
                        <h2 style={{ textAlign: "left" }}>Issuing the Import Export Code Registration Certificate</h2>
                        <p>The IEC is usually generated automatically after submitting the online application together with the required documents and the charges, The applicant will be notified via SMS and Email that will provide the link to the online IEC document that can be easily printed or downloaded.  The digital format of the IE Code certificate is usually made available through the link provided. After the release of the IEC document, the applicant is required to immediately update his profile. This profile update is required to be done every year in a situation where there is a modification of the information provided as related to the Handbook of Procedure, 2015 to 2020 para 2.15. Although the IE Code is usually generated automatically, a post-verification with reference to the IEC policies will be carried out by the Regional Authority. A criminal action will be filed against the applicant in a situation where incomplete or incorrect information is provided which could result in the cancellation or suspension of the IEC.</p>
                    </div>


                    <div style={{ margin: "3rem 0rem" }}>
                        <h2 style={{ textAlign: "left" }}>Application for RCMC</h2>
                        <p>An application for RCMC can be submitted by individuals with IEC. RCMC otherwise known as Registration-Cum Membership Certificate is a certificate that verifies that an exporter has been registered under a company and has the approval of the Indian Government. The Export promotional Council or the Commodity board issues the certificate for about five years in India. The mainstream business of an exporter who intends to acquire the RCMC must be fully stated in the application process. The Export Promotion Council or Commodity that is in relation to this business line will submit the application.</p>
                    </div>


                </div>

            </>
    }
];

 