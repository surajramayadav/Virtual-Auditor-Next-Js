import Image from "next/image";
import Valuation from "@images/home/valuation.png";
import Coin from "@images/gst/gst-registration/coin.png";
import Cost from "@images/gst/gst-registration/cost.png";
import Archive from "@images/gst/gst-registration-for-foreigners/archive.png";
import Name from "@images/gst/gst-registration-for-foreigners/name.png";
import Owner from "@images/gst/gst-registration-for-foreigners/owner.png";



export const tanRegistrationData = {
    headTitle: "",
    containers: [
        {
            id: 1,
            container: {
                title: "TAN Registration",
                summary: (
                    <>
                        TAN registration is required for all the assesses required to deduct TDS (Tax deducted at source) on transactions.
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Coin} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Starting at Rs. 499/-</p>,
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
                title: "How To Incorporate Private Limited Company?",
                summary: (
                    <>
                        <div style={{ margin: "2rem 0rem" }}>
                            <p>Registering a private limited company requires the support of CA/CS/Lawyer as the legal procedures are involved in it, company registration a complicated process but does not worry our team of experts will guide you.</p>

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
                        title: <p style={{ fontSize: 13 }}>APPLICATION PROCEDURE (ONLINE)</p>,
                    },
                    {
                        id: 2,
                        imageSrc: (
                            <Image src={Name} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>PAYMENT</p>,
                    },
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Archive} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>POINTERS FOR FILING FORM 49B</p>,
                    },
                ],
            },
        },
    ],
}


export const tanRegistrationDesc = [
    {
        id: 1,
        desc:
            <>
                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>TAN REGISTRATION PROCEDURE EXPLAINED</h1>

                    <div style={{ margin: "4rem 0rem" }}>
                        <h3>How to Apply for TAN?</h3>
                        <p>TAN has to apply by making an online application or in person by visiting the income tax department. TAN Application has to made by using the form 49B. Thus the acknowledgement which is  received after the application is submitted in form 49B which needs to be furnish to the department as a proof.</p>
                    </div>
                </div>
                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "left" }}>Application Procedure (Online)</h1>
                    <div style={{ margin: "1rem 0rem" }}>
                        <ol style={{ margin: "2rem" }}>
                            <li>TAN applicant has to be filled in form 49B</li>
                            <li>In case there’s an error, it needs to be rectified and the form needs to be re-submitted.</li>
                            <li>It will display a confirmation screen with the  data filled</li>
                            <li>The applicant can edit or confirm the same.</li>
                        </ol>
                    </div>
                </div>
                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "left" }}>Acknowledgement (TAN REGISTRATION)</h1>
                    <div style={{ margin: "1rem 0rem" }}>
                        <ol style={{ margin: "2rem" }}>
                            <li> And Once confirmation is provided by the applicant, then an acknowledgement screen will displayed. This acknowledgement would consist of:
                                <ul>
                                    <li>A unique acknowledgement number of 14-digits</li>
                                    <li>Name and contact details of the applicant</li>
                                    <li>Status of applicant</li>
                                    <li>Details with respect to payment</li>
                                    <li>Space for signature</li>
                                </ul>
                            </li>
                            <li>Applicants should save and print this acknowledgement.</li>
                            <li>The applicant have to sign in the space as so provided.</li>
                        </ol>
                    </div>
                </div>

                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "left" }}>Payment (TAN REGISTRATION)</h1>
                    <div style={{ margin: "1rem 0rem" }}>
                        <p style={{ marginBottom: "1rem" }}>The fee for processing the application for TAN application INR 65.00 ( 55.00 application charge + 18.00% Goods & Services Tax) and this is a non-refundable fee if your application is rejected. DD/Cheque ha to drawn in favour of NSDL-TIN.</p>
                        <p>Once the form is submit, then the department has to verify the details which is submitted to it. And If the application appears to be correct, then the NSDL will send the TAN details to the applicant’s address as provided in the form 49B or they could also send through an email with the details of TAN  if the application was made online.</p>
                    </div>
                </div>


                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "left" }}>Pointers for Filling Form 49B (TAN REGISTRATION)</h1>
                    <div style={{ margin: "1rem 0rem" }}>
                        <ol style={{margin:"1rem"}}>
                            <li>Given Below are few points which one should keep in mind while applying for TAN in the form 49B. 1. Form 49B has to file in English and in capital letters only.</li>
                            <li>The details of the assessing officer are required to furnish by collector or deductor of tax. Thus this  information have to access from the Income Tax Office if same isn’t available.</li>
                            <li>Details in respect to the district, area, area code, etc, is required to provide by tax deductor or collector. If this particular detail isn’t known, then the  Income Tax Office will assist you to find out the same.</li>
                            <li>The form have to filled up entirely. Blanks or pending sections won’t be considered</li>
                            <li>Those Individuals which are responsible for filing and submitting tax have to list down their designation mandatorily.</li>
                            <li>And also These applicant’s address has to be the Indian address only.</li>
                        </ol>
                    </div>
                </div>

            </>
    }
];
 