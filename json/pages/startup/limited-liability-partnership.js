import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const LLPREG = {
    title: <p style={{ fontSize: Fonts.h1 }}>LLP Registration</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, }}><span style={{ color: Colors.link }}>LLP </span>refers to Limited Liability Partnership, LLP is a more advanced and corporatized version of a normal partnership, the main advantage over normal partnership is the Limited Liability, we support LLP Registration in Chennai, LLP  Registration in Bangalore,LLP  Registration in Mumbai</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Starting at Rs.7,499/-</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>
        }
    ]


}


export const HILLP = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>How To Incorporate LLP?</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, }}>Registering an LLP requires a support of CA/CS/Lawyer as the legal procedures are involved in it, it's a complicated process but do not worry our team of experts will take care of these issues</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>LLP RUN(Reserve Unique Name)</p>
        },
        {
            id: 2,
            imageSrc: <Image src={name} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Drafting LLP Agreement</p>
        },
        {
            id: 3,
            imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>PAN and TAN Application</p>
        }
    ]


}


export const LLPRPE = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>LLP REGISTRATION PROCEDURE EXPLAINED</h1>,
    data: [
        {
            id: 1,
            subtitle: <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>Step 1: LLP Names</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>Apply for LLP NAmes in form LLP RUN(Reserve Unique Name) Web Service</p>,
            hr: true,
            underline: true

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>Step 2: Acquire Digital Signature Certificate(DSC) &  FiLLiP(Form for incorporating LLP)</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>Digital Signature should be acquired by those agencies which are appointed or controlled by certification agencies. (CCA). IF you already have digital signature then you can  use the same, no need to apply for another one. but check once for validity, maximum limit is upto 1-2 years after expiry you can renew it.</p>,
            hr: false,
            underline: true
        },
        {
            id: 3,
            subtitle: <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>Step 3:Drafting LLP Agreement:-</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>Drafting LLP Agreement and submit in LLP Form 3 & 4(Form use for LLP Registration)

            </p>,
            hr: false,
            underline: true

        },
        {
            id: 4,
            subtitle: <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>Step 4: PAN and TAN</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>PAN and TAN Application after obtaining a certificate of incorporation</p>,
            hr: false,
            underline: true
        },

    ]
}


export const DRCRLLP = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>DOCUMENTS REQUIRED FOR COMPANY REGISTRATION DOCUMENTS REQUIRED FOR LLP REGISTRATION THROUGH FORM LLP FILLIP
    </h1>,
    subtitle: <h3 style={{ fontSize: Fonts.h3, marginTop: 20 }}>Documents required for Private Limited Company Registration through SPICe (INC-32)</h3>,
    data: [
        {
            id: 1,
            subtitle: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>To proceed with LLP Registration, documents mentioned below are compulsory<span style={{ fontWeight: 'bold' }}> Where all director and subscriber are Indian Nationals</span></p>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>LLP Subscription sheet</li>
                    <li style={{ marginTop: 20 }}>PAN CARD of directors and subscribers</li>
                    <li style={{ marginTop: 20 }}>Proof of office address – Voter ID, OR passport</li>
                    <li style={{ marginTop: 20 }}>Copies of utility bills (Telephone Bill or Bank Statements) that are not older than two months (Compulsory for incorporation of companies)</li>
                    <li style={{ marginTop: 20 }}>Rental Agreement in case of rented property</li>
                    <li style={{ marginTop: 20 }}>NOC; from the owner of the property</li>
                    <li style={{ marginTop: 20 }}>EB Card/EB Bill of the premise or Property Tax or Telephone evidencing the address proof of the company</li>
                </ul>
            </p>,
            hr: false,
            underline: true,
            btdesc: <p style={{ fontSize: Fonts.h4, marginTop: 20 }}>Post submission of LLP Registration forms ROC, within 5 to 15 working days certificate of registration, post which you need to apply for PAN and TAN</p>
        },

    ]
}




export const LLPRO = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>LLP REGISTRATION OVERVIEW
        ( OVERVIEW FORLIMITED LIABILITY PARTNERSHIP REGISTRATION)
    </h1>,
    data: [
        {
            id: 1,
            subtitle: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step 1:</span> Apply for the name in LLP RUN(Reserve Unique Name) Choose and apply for LLP names in form LLP RUN , you can give two names per RUN from</p>,
            hr: false,
            underline: false,
        },
        {
            id: 2,
            subtitle: <p style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Step 2: Post name approval, Apply for  DSC & LLP FiLLiP (Form for incorporating LLP)</p>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                DSC (Digital Signature) in simple terms means your physical signature in a digital form, this does not mean your physical signature all your data that is PAN number and other details are encrypted in a file that can be downloaded in an e-token. The e-token will be password protected which will act as your digital signature, for company formation, GST registration, PF Registration and for Income Tax filing we  have to use class 2 DSC provided by government-approved vendors such as e-mudra or Sify or N-Code MCA (Ministry of Company Affairs) has introduced Form LLP FiLLiP (Form for incorporating LLP) for easy and fast LLP Registration
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20, fontWeight: 'bold' }}>Form LLP FiLLiP will be an integrated form offering multiple services viz. allotment of DIN/Reservation of Name and Incorporation of LLPs.</li>
                    <li style={{ marginTop: 20 }}>Application for allotment of DIN (Director Identification Number)</li>
                    <li style={{ marginTop: 20 }}>Reservation of LLP name</li>
                    <li style={{ marginTop: 20 }}>Incorporation of a new LLP</li>
                    <li style={{ marginTop: 20 }}>Application for PAN and TAN</li>

                </ul>
            </p>,
            hr: false,
            underline: true,

        },
        {
            id: 3,
            subtitle: <p style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Step3: Drafting LLP Agreement and submit in LLP Form 3 (Form use for LLP Registration)</p>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>LLP Agreement is a most important document for LLP. it serves as the parent document which regards to rights responsibilities and obligation of partners, LLP 3 has to file along with the LLP Agreement
            </p>,
            hr: false,
            underline: true,
        }
    ]
}



export const DCRP = {
    title: <h1 style={{ fontSize: Fonts.h2, marginTop: 50 }}>DETAILS OF COMPANY REGISTRATION AND ITS PROCEDURES
    </h1>,
    data: [

        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <ul style={{ marginLeft: 20 }} >
                    <li style={{ marginTop: 20, }}>DSC & DIN of the directors (Directors Identification Number) is a unique 8 digit number that is allotted by the central government. DIN once allotted is valid for the time of a director until canceled, surrendered or deactivated. The documents required for application of DIN are as follows as per company registration
                        <ul style={{ marginLeft: 40 }}>
                            <li style={{ marginTop: 20 }}>Passport size photograph of the applicant</li>
                            <li style={{ marginTop: 20 }}>Self-attested address proof of applicant</li>
                            <li style={{ marginTop: 20 }}>Self-attested PAN card of the applicant</li>
                        </ul>  </li>

                    <li style={{ marginTop: 20 }}>DSC (Digital Signature Certificate) Any organization or firm can apply for a digital signature certificate for a transaction involving the MCA. if you already have a digital signature then you can use the same, no need to apply for another. agencies issues DSC'S with 1 or 2 years validity, after expiry you have to renew it. DSC is mandatory for company registration procedure.</li>
                    <li style={{ marginTop: 20 }}>AOA<br />
                        Articles Of Association are documents required for company registration that specify the regulation for a company's operation and defines the company purpose. It also includes the process for appointing the directors and the handling of financial records.</li>
                    <li style={{ marginTop: 20 }}>MOA (Memorandum Of Association)<br />
                        The Memorandum Of Association or MOA of a company is required for company registration defines the constitution and the scope of power of the company. It is a foundation on which company is built.</li>
                    <li style={{ marginTop: 20 }}>PAN & TAN In the company registration process, you have mandatory form for PAN and TAN. By using forms 49A for PAN and 49B for TAN. The system will automatically generate these forms after the submission of SPICe form.</li>
                    <li style={{ marginTop: 20 }}>Certificate Of Incorporation<br />
                        A (COI) is a legal document relating to the formation of a company or corporation. it is a license to form a corporation issued by the state government or, in some jurisdictions, by non-governmental entity/corporation. Its provides documented proof that company registration is completed. <span style={{ color: Colors.link }}>More Details on COI</span></li>
                    <li style={{ marginTop: 20 }}>GST registration after company registration<br />
                        It is a tax on sale, purchase, and services. it includes all taxes such as sales tax, service tax, excise duty, etc. Into one tax that is GST. it is a tax which is levied on almost all the businesses in India. A business or a company needs to pay GST if -
                        <ol style={{ marginLeft: 40 }}>
                            <li>Their annual sales turnover is more than 20 lakhs.</li>
                            <li>They are making sales outside the state.</li>
                        </ol>
                        Even if the sales are less than Rs. 20 Lakhs, we advise you to opt for gst registration because of the following reasons You cannot sell outside your state<br />
                        You will not get any tax refunds on purchases.
                    </li>


                </ul>
            </p>,
            hr: false,
            underline: false,

        }

    ]
}



export const LLPRPA = {
    title: <h1 style={{ fontSize: Fonts.h2, marginTop: 50 }}>LLP REGISTRATION PROCESS AMENDED
    </h1>,
    data: [

        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                LLP which stands for Limited Liability Partnership has undergone a dramatic, now LLP Registration in Chennai, LLP Registration process in Bangalore or any other state will be done centrally through CRC ( Centralised Registration Center) vide LLP (Second)  Amendment Rules 2018-Applicable from 02.10.2018 Now <strong>LLP can be incorporated with upto 2 individuals as Partners who do not have<span style={{ color: Colors.link }}> DIN(Director Identification Number)</span>.on the similar lines of <span style={{ color: Colors.link }}>Company Registration </span>Forms SPICE</strong>
                <h1 style={{ fontSize: Fonts.h4, marginTop: 20, marginBottom: 20 }}><span style={{ color: Colors.link }}>MCA </span>AMENDS LLP REGISTRATION RULES NEW RULES APPLICABLE FROM 02.10.2018</h1>
                Name Form for LLP must be done through  Form RUN LLP will be filed for reservations of LLP NamUp to upto 2 Persons not having din and want to be appointed as designated partners can file DIN ( Director Identification number) application along  with LLP incorporation forms. From 02nd October, LLP name reservation application can be filed through Web form RUN like company name application and persons need not have a DIN ( Director Identification Number) for applying the name, Earlier many were unable to apply for reservations of LLP name and incorporation of LLP if the partners don't have DIN. To access the full process of<span style={{ color: Colors.link }}> LLP Registration a step by step guide</span>
            </p>,
            hr: false,
            underline: false,

        }

    ]
}

export const BottomTable = {
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                Following process flow changes are proposed to enable the LLP incorporation process re-engineering:
                <ul style={{ marginLeft: 40 }} >
                    <li style={{ marginTop: 20, }}>All Form 1 and Form 2 (along with Form 17/18/Addendum) which are pending processing from the date of notification of revised forms, shall be marked under Resubmission.</li>

                    <li style={{ marginTop: 20 }}>All forms which have to be resubmitted, must be submitted again in the new web service/new forms only.</li>
                    <li style={{ marginTop: 20 }}>All names which have been approved and against which Incorporation form is not filed till the date of notification of revised forms shall be allowed to be used to file form FiLLiP for incorporation.</li>
                    <li style={{ marginTop: 20 }}>All names which have been approved and against which Change of name Form 5 is not filed till the date of notification of revised forms, shall be allowed to be used to file in revised Form 5.</li>

                </ul>
            </p>, hr: false,
            underline: false,
        }

    ]
}


export const limTableData = [
    {
        data: [
            { id: 1, cell: "No." },
            { id: 2, cell: "Existing eForm" },
            { id: 3, cell: "New eform" },
            { id: 4, cell: "Change Proposed" },
            { id: 5, cell: "To be processed by" },
        ]
    },
    {
        data: [
            { id: 1, cell: "1" },
            { id: 2, cell: "Form 1(Application for reservation or change of name)" },
            { id: 3, cell: "LLP RUN(Reserve Unique Name) Web Service" },
            { id: 4, cell: "Web Service RUN will replace Form 1" },
            { id: 5, cell: "Central Registration Centre(CRC) under Non- STP" },
        ]
    },
    {
        data: [
            { id: 1, cell: "2" },
            { id: 2, cell: "Form 2(Incorporation document and Subscriber’s statement" },
            { id: 3, cell: "FiLLiP(Form for incorporating LLP)" },
            { id: 4, cell: "I. FiLLiPwill be an integrated form offering multiple services viz. allotment of DIN/Reservation of Name and Incorporation of LLPs. II. Consequent upon notification of FiLLiP, existingForm 2 will be deprecated." },
            { id: 5, cell: "Central Registration Centre(CRC) under Non- STP" },
        ]
    },
    {
        data: [
            { id: 1, cell: "3" },
            { id: 2, cell: "Addendum to Form 2(Details in respect of designated partners and partners of Limited Liability Partnership)" },
            { id: 3, cell: "Addendum toFiLLiP (Details in respect of designated partners and partners of Limited Liability Partnership)" },
            { id: 4, cell: "I. RUN-LLP SRN to be substituted for LLP Registration LLP RUN Form SRN in relevant field II. PAN is allowed to be entered in DSC section" },
            { id: 5, cell: "Central Registration Centre(CRC) under Non- STP" },
        ]
    },
    {
        data: [
            { id: 1, cell: "4" },
            { id: 2, cell: "Form 5 (Notice for change of name)" },
            { id: 3, cell: "Same form withminor modifications" },
            { id: 4, cell: "I. Details which were hitherto getting prefilled in the form (based on LLP Registration LLP RUN Form) shall now be entered by the user.II. RUN-LLP SRN to be substituted for LLP Registration LLP RUN Form in relevant field" },
            { id: 5, cell: "Central Registration Centre(CRC) under Non- STP" },
        ]
    },
    {
        data: [
            { id: 1, cell: "5" },
            { id: 2, cell: "Form 17(Application and statement for the conversion of a firm into LLP)" },
            { id: 3, cell: "Same form withminor modifications" },
            { id: 4, cell: "RUN-LLP SRN to be substituted for LLP Registration LLP RUN Form in relevant field II. PAN is allowed to be entered in DSC section" },
            { id: 5, cell: "Central Registration Centre(CRC) under Non- STP" },
        ]
    },
    {
        data: [
            { id: 1, cell: "6" },
            { id: 2, cell: "Form 18(Application and Statement for conversion of a Private Company/Unlisted Public Company into LLP)" },
            { id: 3, cell: "Same form withminor modifications" },
            { id: 4, cell: "RUN-LLP SRN to be substituted for LLP Registration LLP RUN Form in relevant field II. PAN is allowed to be entered in DSC section" },
            { id: 5, cell: "Central Registration Centre(CRC) under Non- STP" },
        ]
    },

]

