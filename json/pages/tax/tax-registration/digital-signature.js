import Image from "next/image";
import Valuation from "@images/home/valuation.png";
import Coin from "@images/gst/gst-registration/coin.png";
import Cost from "@images/gst/gst-registration/cost.png";
import Archive from "@images/gst/gst-registration-for-foreigners/archive.png";
import Name from "@images/gst/gst-registration-for-foreigners/name.png";
import Owner from "@images/gst/gst-registration-for-foreigners/owner.png";




export const digitalSignatureData = {
    headTitle: "",
    containers: [
        {
            id: 1,
            container: {
                title: "Digital Signature Certificate DSC",
                summary: (
                    <>
                        You applying for a tender or trying to file your Income tax/GST/PF and you auditor asks for your Digital Signature Certificate or DSC , lets first under what is a a Digital Signature.
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Coin} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Starting at Rs.780/-</p>,
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
                title: "How To apply for Digital Signature?",
                summary: (
                    <>
                        <div style={{ margin: "2rem 0rem" }}>
                            <p>Instantly apply for digital signature online through Virtual Auditor. Pay after approval of the application. Get same-day service in most cities in India.</p>

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
                        title: <p style={{ fontSize: 13 }}>Submit Documents</p>,
                    },
                    {
                        id: 2,
                        imageSrc: (
                            <Image src={Name} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Verify Via Video Call</p>,
                    },
                    {
                        id: 3,
                        imageSrc: (
                            <Image src={Archive} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Get Your DSC</p>,
                    },

                ],
            },
        },
    ],
}


export const digitalSignatureDesc = [
    {
        id: 1,
        desc:
            <>
                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>DOCUMENTS REQUIRED FOR COMPANY REGISTRATION</h1>
                    <div style={{ margin: "1rem 0rem" }}>
                        <ol style={{ margin: "1rem 2rem" }}>
                            <li>Submission of Application form duly filled in by the applicant in the form/paperless</li>
                            <li>Producing Photo ID proof (PAN Card Compulsory)</li>
                            <li>Producing  Address proof ( AADHAR , Driving Licence / Password)</li>
                            <li>For Foreign Nations ( Passport Copy is mandatory )</li>
                            <li>Complete the Video Verification ( Link will be share)</li>
                            <li>Download</li>
                        </ol>
                    </div>
                </div>



                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>DIGITAL SIGNATURE (DSC) OVERVIEW</h1>


                    <div style={{ margin: "2rem 0rem" }}>
                        <h2>What is a Digital Signature Certificate ( DSC) ?</h2>
                        <p><a style={{ color: "blue", fontWeight: "bold" }} href="https://www.wikipedia.org/" target="_blabk">Wikipedia</a> Defines <a style={{ color: "blue", fontWeight: "bold" }} href="https://en.wikipedia.org/wiki/Digital_signature" target="_blabk">Digital Signature </a>Certificate (DSC ) as A digital signature is a mathematical scheme for verifying the authenticity of digital messages or documents. A valid digital signature, where the prerequisites are satisfied, gives a recipient very strong reason to believe that the message was created by a known sender (authentication), and that the message was not altered in transit (integrity). Digital signatures are a standard element of most cryptographic protocol suites, and are commonly used for software distribution, financial transactions, contract management software, and in other cases where it is important to detect forgery or tampering. Now that we have known what a digital signature certificate is lets find out its uses</p>
                    </div>


                    <div style={{ margin: "2rem 0rem" }}>
                        <h2>What is the purpose of Digital Signature Certificates (DSC) ?</h2>
                        <p>Digital Signature Certificates or DSC or <a style={{ color: "blue", fontWeight: "bold" }} href="https://en.wikipedia.org/wiki/Digital_signature" target="_blabk">Digital Signature </a> are being adopted by various government agencies and now is a statutory requirement in various applications. DSC is physical signature of the person in an electronic format. Digital Signatures which is used widely in India for government filing transactions such as Filing Annual Return (RoC Returns), <a style={{ color: "blue", fontWeight: "bold" }} href="https://virtualauditor.in/private-limited-company-registration" target="_blabk">Company Registration </a>, LLP Registration, Income Tax E-Filing, E-Tenders with PSU (Public Sector Undertaking)</p>
                    </div>


                    <div style={{ margin: "2rem 0rem" }}>
                        <h2>What are the Types Digital Signature Certificates (DSC) ?</h2>
                        <p>There are 3 types of Digital Signatures</p>
                        <ul style={{ margin: "2rem" }}>
                            <li>Class I DSC</li>
                            <li>Class II DSC</li>
                            <li>Class III Digital Signatures.</li>
                        </ul>
                    </div>


                    <div style={{ margin: "2rem 0rem" }}>
                        <h2>DSC Class I Digital Signature</h2>
                        <p>This is used for securing email communications, this certificates is low security digital signature certificates used for very rare cases and many Government Sites does not permit CLASS 1 DSC Digital Signature</p>

                    </div>


                    <div style={{ margin: "2rem 0rem" }}>
                        <h2>Class II DSC digital signature</h2>
                        <p>This This level is applicable to environments where risks and consequences pertaining to data compromise are moderate and this many utilized for many government wise a few of the purposes are  company registrations, Income Tax filing, Obtaining Director identification number, for PF Registration and GST Filing for Companies</p>

                    </div>


                    <div style={{ margin: "2rem 0rem" }}>
                        <h2>Class III digital signature</h2>
                        <p>This certificate is issued to individuals and organizations. Unlike Class 1 certificates, both class 2 and class 3 digital signatures certificates are applicable in environments with significant risks. However, <strong>Class 3 Digital Signature</strong> Certificate is applicable to environments where threats to data and consequences of failure of security services are high, for instance, high value transactions or high levels of fraud risk.</p>
                        <ul style={{ margin: "2rem" }}>
                            <li>Class I DSC</li>
                            <li>Class II DSC</li>
                            <li>Class III Digital Signatures.</li>
                        </ul>
                    </div>


                    <div style={{ margin: "2rem 0rem" }}>
                        <h2>What are further further classification of DSC based on the Signing ?</h2>

                        <ul style={{ margin: "2rem" }}>
                            <li style={{ color: "blue" }}>Only Signing
                                <p style={{ color: "black" }}>Signing digital Signature certificate can only be used for signing documents. The most popular usage of is signing the PDF file for Tax Returns, MCA and other websites. Signing via DSC gives the assurance of not only the integrity of the signer but also the data. It is proof of untampered and unaltered data.</p>
                            </li>
                            <li style={{ color: "blue" }}>Encrypt
                                <p style={{ color: "black" }}>Encrypt DSC can only be used to encrypt a document, it is popularly used in the tender portal, to help companies encrypt the documents and upload. You could also use the certificate to encrypt and send classified information. Encrypt Digital signature certificate is fit for e-commerce documents, legal documentation and sharing documents that are highly confidential and contains information that needs to be protected. We are selling Encrypt certificate as a standalone product as well.</p>
                            </li>
                            <li style={{ color: "blue" }}>Sign & Encrypt ( For Financial Bids and Used in Tenders)
                                <p style={{ color: "black" }}>Our Sign & Encrypt DSC can be used for both signing and encrypting. It is convenient for users who need to authenticate and maintain the confidentiality of the information shared. Its usage includes filing government form and application.</p>
                            </li>
                        </ul>
                    </div>


                    <div style={{ margin: "2rem 0rem" }}>
                        <h2 style={{ textAlign: "center" }}>VALIDITY OF DIGITAL SIGNATURE CERTIFICATE</h2>
                        <div style={{ margin: "2rem 0rem" }}>
                            <p>Typically the DSC validity range form 1 year to 3 years , the most preferred DSC validity is 2 years </p>
                        </div>
                    </div>
                </div>

            </>
    }
];

