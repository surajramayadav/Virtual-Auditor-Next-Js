import Image from "next/image";
import Valuation from "@images/home/valuation.png";
import Coin from "@images/gst/gst-registration/coin.png";
import Cost from "@images/gst/gst-registration/cost.png";
import Archive from "@images/gst/gst-registration-for-foreigners/archive.png";
import Name from "@images/gst/gst-registration-for-foreigners/name.png";
import Owner from "@images/gst/gst-registration-for-foreigners/owner.png";



export const gstForeigners = {
    headTitle: "",
    containers: [
        {
            id: 1,
            container: {
                title: "GST REGISTRATION FOR FOREIGNER",
                summary: (
                    <>
                        As all of us know, India is a highly attractive market for the non-residents to invest in and do their business. And if they are a non-resident and they plan to set up a business here. Then you must register under GST. In this article, we will discuss the process of GST for non-residents and the applicable forms for it.
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Coin} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Starting at Rs. 18899/-</p>,
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
                title: "DEFINITION OF NON-RESIDENT TAXPAYER UNDER GST LAWS",
                summary: (
                    <>
                        <div style={{ margin: "2rem 0rem" }}>
                            <p>Section 2(77) of the Central Goods and Services Act, 2017 (‘CGST Act’) defines Non Resident Taxpayer</p>
                            <ul style={{ margin: "2rem" }}>
                                <li>“non-resident taxable person” means any person who occasionally undertakes transactions involving supply of goods or services or both,</li>
                                <li>whether as principal or agent or in any other capacity,</li>
                                <li>but who has no fixed place of business or residence in India;”</li>
                            </ul>
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
                        title: <p style={{ fontSize: 13 }}>Provisional Registration</p>,
                    },
                    {
                        id: 2,
                        imageSrc: (
                            <Image src={Name} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Final Registration</p>,
                    },
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Archive} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Get GSTIN Number</p>,
                    },
                ],
            },
        },
    ],
}


export const gstForeignersDesc = [
    {
        id: 1,
        desc:
            <div>
                <h1 style={{ textAlign: "center" }}>PROVISIONAL REGISTRATION (GST REG FOR FOREIGNERS)</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <h3>Step 1: Obtain DIN</h3>
                    <ul style={{ margin: "3 rem 2rem" }}>
                        <li>The non-resident taxable person will file electronically an application for registration using the Form GST REG-09 along with a copy of his valid passport.</li>
                        <li>Provided that, This application have to duly signed or get verified through EVC.</li>
                        <li>It has to submit at least five days prior to the commencement of business.</li>
                        <li>In case, if it is a foreign business entity that is either incorporate or establish outside India. Then the application for registration have to submit along with its (TIN) tax identification number of that country (similar To PAN) or its PAN (if he has its own )</li>
                        <li>As based on the estimation- An advance deposit of tax has to submit along with the application</li>
                    </ul>
                </div>
            </div>
    },
    {
        id: 2,
        desc:
            <div>
                <h1>FINAL REGISTRATION</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <p>It will be made in the same way as in the case for resident taxpayers which are as follows:-</p>
                    <ul style={{ margin: "3rem 2rem" }}>
                        <li>As and so If the person wishes to register under GST, then he have to submit an application electronically using the FORM GST REG 26.Any information have to be  furnish within a period of three months.</li>
                        <li>So If the given information is correct and its complete. Then the final GST registration has to given in FORM GST REG-06</li>
                        <li>BUT, If the given information is not correct, then the officer have to issue a show-cause notice using FORM GST REG-27.</li>
                        <li>And also a reasonable opportunity of being heard Has to given after. Which the provisional registration has to get cancelled through the FORM GST REG-28</li>
                        <li>And If the applicant’s reply is satisfactory. Then the show cause notice issue has to nullified by issuing an order via the FORM GST REG- 20</li>
                        <li>Furthermore, The application for registration made by a non-resident have to signed by his authorized signatory who must be a person resident in India with a valid PAN.</li>
                    </ul>
                </div>
            </div>
    },
    {
        id: 3,
        desc:
            <div>
                <h1>APPLICATION PROCEDURE FOR UNDER GST LAWS OF NON-RESIDENT TAXPAYER UNDER GST LAWS</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <h3>Option 1: APPLY PAN FOR NON-RESIDENT TAXPAYER</h3>
                    <ul style={{ margin: "1rem 2rem" }}>
                        <li>Obtain PAN Card (Permanent Account Number) for Foreign Non-Resident Taxpayer</li>
                        <li>Identify and Appoint an Authorized Signatory
                            <ol style={{ margin: "1rem 2rem" }}>
                                <li>Authorized signatory must be Resident of India</li>
                                <li>Authorized signatory must hold a valid PAN card</li>
                            </ol>
                        </li>
                        <li>Prepare and Submit application in FORM GST REG-09</li>
                        <li>FORM GST REG-09 must be signed by the Authorized Signatory</li>
                    </ul>
                </div>
                <div style={{ margin: "1rem 0rem" }}>
                    <h3> Option 2 : WITHOUT PAN FOR NON-RESIDENT TAXPAYER  </h3>
                    <ul style={{ margin: "1rem 2rem" }}>
                        <li>Identify and Appoint an Authorized Signatory
                            <ol style={{ margin: "1rem 2rem" }}>
                                <li>Authorized signatory must be Resident of India</li>
                                <li>Authorized signatory must hold a valid PAN card</li>
                            </ol>
                        </li>
                        <li>Prepare and Submit application in FORM GST REG-09</li>
                        <li>FORM GST REG-09 must be signed by the Authorized Signatory</li>
                    </ul>
                </div>
                <div>
                    <p>Section-24 of the Central Goods and Services Act, 2017 (‘CGST Act’) deals with Special Provisions relating to Casual Taxable Person and Non-Resident Taxable Person</p>
                    <div style={{ margin: "1rem 0rem" }}>
                        <ol style={{ margin: "1rem 2rem" }}>
                            <li>Registration is valid for 90 days from date of issue (Section 24(1) ) </li>
                            <li>Advance payment of Tax Along with the application (Section 24(2)</li>
                            <li>at the time of submission of application for registration under subsection (1) of section 23, make an advance deposit of tax in an amount equivalent to the estimated tax liability of such person for the period for which the registration is sought  <span style={{ fontWeight: "bold" }}> Note the above process does not apply to OIDAR(Online Information and Database Access or Retrieval ) Services </span></li>
                        </ol>
                    </div>
                </div>
                <p></p>
            </div>
    },

    {
        id: 4,
        desc: <>
            <div style={{ margin: "3rem 0rem" }}>
                <h1 style={{ textAlign: "center" }}>APPLICATION PROCEDURE FOR UNDER GST LAWS FOR NON-RESIDENT TAXPAYER UNDER GST LAWS FOR OIDAR SERVICES (ONLINE INFORMATION AND DATABASE ACCESS OR RETRIEVAL )</h1>
                <div style={{ margin: "2rem 0rem" }}>
                    <p>If a non resident , has Online Information and Database Access or Retrieval where they do not have a place of business in India and servers are not located in India , then the application shall be in different manner   Examples of the above is Google Inc not having a place of business in India , but providing Online Information and Database Access or Retrieval , that is search engine / paid ads related services then these procedures come into play   Lets understand OIDAR under the GST Laws  <span style={{ fontWeight: "bold" }}>   What is OIDAR services? OIDAR IS defined in Section 2(17) of IGST Act, 2017 </span>“OIDAR services” means services whose delivery is mediated by information technology over the internet or an electronic network and the nature of which renders their supply essentially automated and involving minimal human intervention and impossible to ensure in the absence of information technology and includes electronic services such as,–– (i) advertising on the internet; (ii) providing cloud services; (iii) provision of e-books, movie, music, software and other intangibles through telecommunication networks or internet; (iv) providing data or information, retrievable or otherwise, to any person in electronic form through a computer network; (v) online supplies of digital content (movies, television shows, music and the like); (vi) digital data storage; and (vii) online gaming;  <span style={{ fontWeight: "bold" }}>   What services would NOT be considered as OIDAR services?Clarification: </span> </p>
                    <ol style={{ margin: "1rem 2rem" }}>
                        <li>Supplies of goods, where the order and processing is done electronically</li>
                        <li>Supplies of physical books, newsletters, newspapers or journals</li>
                    </ol>
                </div>
                <div style={{ margin: "2rem 0rem" }}>
                    <p>iii. Services of lawyers and financial consultants who advise clients through email </p>
                    <ol style={{ margin: "1rem 2rem" }}>
                        <li>Booking services or tickets to entertainAment events, hotel accommodation or car hire</li>
                        <li>Educational or professional courses, where the content is delivered by a teacher over the internet or an electronic network (in other words, using a remote link)</li>
                        <li>Offline physical repair services of computer equipment</li>
                    </ol>
                </div>

                <p>vii. Advertising services in newspapers, on posters and on television   The registration procedure for OIDAROption 1: APPLY PAN FOR NON-RESIDENT TAXPAYER </p>


                <div style={{ margin: "1rem 0rem" }}>

                    <h3>The registration procedure for OIDAR</h3>
                    <h3 style={{ marginTop: "1rem" }}>Option 1: APPLY PAN FOR NON-RESIDENT TAXPAYER  </h3>
                    <ul style={{ margin: "1rem 2rem" }}>
                        <li>Obtain PAN Card (Permanent Account Number) for Foreign Non-Resident Taxpayer</li>
                        <li>Identify and Appoint an Authorized Signatory
                            <ol style={{ margin: "1rem 2rem" }}>
                                <li>Authorized signatory must be Resident of India</li>
                                <li>Authorized signatory must hold a valid PAN card</li>
                            </ol>
                        </li>
                        <li>Prepare and Submit application in FORM GST REG-09</li>
                        <li>FORM GST REG-09 must be signed by the Authorized Signatory</li>
                    </ul>
                </div>

                <div style={{ margin: "1rem 0rem" }}>
                    <h3 style={{ marginTop: "1rem" }}>Option 2: WITHOUT PAN FOR NON-RESIDENT TAXPAYER  </h3>
                    <ul style={{ margin: "1rem 2rem" }}>
                        <li>Identify and Appoint an Authorized Signatory
                            <ol style={{ margin: "1rem 2rem" }}>
                                <li>Authorized signatory must be Resident of India</li>
                                <li>Authorized signatory must hold a valid PAN card</li>
                            </ol>
                        </li>
                        <li>Prepare and Submit application in FORM GST REG-09</li>
                        <li>FORM GST REG-09 must be signed by the Authorized Signatory</li>
                    </ul>
                </div>

                <p> <span style={{ fontWeight: "bold" }}> Simplified registration scheme </span>Section 14(2) provides that the supplier of OIDAR services shall, for payment of integrated tax, take a single registration under the Simplified Registration Scheme to be notified by the Government.</p>
            </div>


            <div style={{ margin: "3rem 0rem" }}>
                <h1>DETAILS OF COMPANY REGISTRATION AND ITS PROCEDURES</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <ul style={{ margin: "1rem 2rem" }}>
                        <li>DSC & DIN of the directors (Directors Identification Number) is a unique 8 digit number that is allotted by the central government. DIN once allotted is valid for the time of a director until canceled, surrendered or deactivated. The documents required for application of DIN are as follows as per company registration
                            <ol style={{ margin: "1rem 2rem" }}>
                                <li>Passport size photograph of the applicant</li>
                                <li>Self-attested address proof of applicant</li>
                                <li>Self-attested PAN card of the applicant</li>
                            </ol>
                        </li>
                        <div style={{ margin: "1rem 0rem" }}>

                            <li style={{margin : "2rem 0rem"}}>
                                <h3>DSC (Digital Signature Certificate) </h3>
                                Any organization or firm can apply for a digital signature certificate for a transaction involving the MCA. if you already have a digital signature then you can use the same, no need to apply for another. agencies issues DSC'S with 1 or 2 years validity, after expiry you have to renew it. DSC is mandatory for company registration procedure.
                            </li>
                            <li style={{margin : "2rem 0rem"}}>
                                <h3>AOA</h3>
                                Articles Of Association are documents required for company registration that specify the regulation for a company's operation and defines the company purpose. It also includes the process for appointing the directors and the handling of financial records.
                            </li>
                            <li style={{margin : "2rem 0rem"}}>
                                <h3>MOA (Memorandum Of Association)</h3>
                                The Memorandum Of Association or MOA of a company is required for company registration defines the constitution and the scope of power of the company. It is a foundation on which company is built.
                            </li>
                            <li style={{margin : "2rem 0rem"}}>
                                <h3>PAN & TAN</h3>
                                In the company registration process, you have mandatory form for PAN and TAN. By using forms 49A for PAN and 49B for TAN. The system will automatically generate these forms after the submission of SPICe form.
                            </li>
                            <li style={{margin : "2rem 0rem"}}>
                                <h3>Certificate Of Incorporation</h3>
                                A (COI) is a legal document relating to the formation of a company or corporation. it is a license to form a corporation issued by the state government or, in some jurisdictions, by non-governmental entity/corporation. Its provides documented proof that company registration is completed.<a style={{ color: "blue" }} href="https://www.mca.gov.in/mcafoportal/viewPublicDocumentsFilter.do" target="_blank"> More Details on COI</a>
                            </li>
                            <li style={{margin : "2rem 0rem"}}>
                                <h3>GST registration after company registration</h3>
                                It is a tax on sale, purchase, and services. it includes all taxes such as sales tax, service tax, excise duty, etc. Into one tax that is GST. it is a tax which is levied on almost all the businesses in India. A business or a company needs to pay GST if -
                                <ol style={{ margin: "1rem 2rem" }}>
                                    <li>Their annual sales turnover is more than 20 lakhs.</li>
                                    <li>They are making sales outside the state.</li>
                                </ol>
                            </li>
                        </div>
                        <p>Even if the sales are less than Rs. 20 Lakhs, we advise you to opt for gst registration because of the following reasons You cannot sell outside your state</p>
                        <p>You will not get any tax refunds on purchases.</p>
                    </ul>
                </div>
            </div>

        </>
    },

];