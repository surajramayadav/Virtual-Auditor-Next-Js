import Image from "next/image";
import Valuation from "@images/home/valuation.png";
import Coin from "@images/gst/gst-registration/coin.png";
import Cost from "@images/gst/gst-registration/cost.png";
import Archive from "@images/gst/gst-registration-for-foreigners/archive.png";
import Name from "@images/gst/gst-registration-for-foreigners/name.png";
import Owner from "@images/gst/gst-registration-for-foreigners/owner.png";
import FAQGst from "@components/gst/GstRegistration/FAQGst";
import GlobalTable from "@components/table/GlobalTable";


export const msmeRegistrationTableData = [
    {
        data: [
            { id: 1, cell: " " },
            { id: 2, cell: "MICRO in Udyog Aadhar" },
            { id: 1, cell: "SMALL in Udyog Aadhar" },
            { id: 2, cell: "MEDIUM Udyog Aadhar" },
        ]
    },
    {
        data: [
            { id: 1, cell: "Manufacturing Business" },
            { id: 2, cell: "Rs 2,500,000" },
            { id: 1, cell: "Less than Rs 50,000,000" },
            { id: 2, cell: "Less than Rs 100,000,000" },
        ]
    },
    {
        data: [
            { id: 1, cell: "Service Business" },
            { id: 2, cell: "Less than Rs 10,00,000" },
            { id: 1, cell: "Less than Rs 20,000,000" },
            { id: 2, cell: "Less than Rs 50,000,000" },
        ]
    },
]


export const msmeData = {
    headTitle: "",
    containers: [
        {
            id: 1,
            container: {
                title: "MSME Registration Udyog Aadhar Registration",
                summary: (
                    <>
                        MSME Registration Udyog Aadhar Registration more popularly referred to as Udyog Aadhar registration, Udyog Aadhaar is a twelve-digit Unique Identification Number provided by the Ministry of Micro, Small and Medium Enterprises, Government of India for small and medium enterprises in India they can also register as a private limited company. It is also known as Aadhaar for Business.
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Coin} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Starting at Rs. 999/-</p>,
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
                title: "How To Register For MSME?",
                summary: (
                    <>
                        <div style={{ margin: "2rem 0rem" }}>
                            <p>MSME/Udyog Aadhar Registration applies to all companies be it manufacturing or services it defines based on the investment made in the business,</p>

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
                        title: <p style={{ fontSize: 13 }}>Name of the suppliers</p>,
                    },
                    {
                        id: 2,
                        imageSrc: (
                            <Image src={Name} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>PAYMENT</p>,
                    },

                ],
            },
        },
    ],
}


export const msmeDesc = [
    {
        id: 1,
        desc:
            <>
                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>RS 3 LAKH CRORES COLLATERAL-FREE AUTOMATIC LOANS FOR BUSINESSES, INCLUDING MSMES</h1>

                </div>
                <div style={{ margin: "4rem 0rem" }}>
                    <div style={{ margin: "1rem 0rem" }}>
                        <p style={{ textAlign: "left" }}>Businesses/MSMEs have been badly hit due to COVID19 need additional funding to meet operational liabilities built up, buy raw material and restart business</p>
                        <ul style={{ margin: "2rem" }}>
                            <li style={{ fontWeight: "bold" }}>Decision: Emergency Credit Line to Businesses/MSMEs from Banks and NBFCs up to 20% of entire outstanding credit as on 29.2.2020</li>
                            <li>Borrowers with up to Rs. 25 crore outstanding and Rs. 100 crore turnover eligible</li>
                            <li>Loans to have <span style={{ fontWeight: "bold" }}>4 year tenor</span> with a <span style={{ fontWeight: "bold" }}> moratorium of 12 months</span> on Principal repayment</li>
                            <li> <span style={{ fontWeight: "bold" }}>Interest </span> to be  <span style={{ fontWeight: "bold" }}>capped</span></li>
                            <li> <span style={{ fontWeight: "bold" }}>100% credit guarantee cover</span> to Banks and NBFCs on  <span style={{ fontWeight: "bold" }}>principal and interest</span></li>
                            <li>Scheme can be availed till 31stOct 2020</li>
                            <li style={{ fontWeight: "bold" }}>No guarantee fee, no fresh collateral</li>
                        </ul>
                    </div>

                    <div style={{ margin: "1rem 0rem" }}>
                        <h3 style={{ textAlign: "left" }}>Rs 20,000 crores Subordinate Debt for Stressed MSMEs</h3>
                        <ul style={{ margin: "2rem" }}>
                            <li>Stressed MSMEs need equity support</li>
                            <li> GoI will facilitate provision of <strong> 20,000 cr</strong> as subordinate debt </li>
                            <li><strong>Two lakh MSMEs </strong>are likely to benefit</li>
                            <li> Functioning MSMEs which are <strong>NPA or are stressed</strong> will be eligible </li>
                            <li> will provide a support of <strong>Rs. 4,000 Cr.</strong> to CGTMSE </li>
                            <li> CGTMSE will <strong>provide&nbsp; partial&nbsp; Credit&nbsp; Guarantee&nbsp; support&nbsp; to</strong><strong>Banks</strong></li>
                            <li> Promoters of the MSME will be given debt by banks, which will then be infused by the promoter as equity in the Unit. </li>
                        </ul>
                    </div>

                    <div style={{ margin: "1rem 0rem" }}>
                        <h3 style={{ textAlign: "left" }}>Rs 50,000 cr. Equity infusion for MSMEs through Fund of Funds</h3>
                        <ul style={{ margin: "2rem" }}>
                            <li>MSMEs face severe shortage of Equity.</li>
                            <li> Fund of Funds with <strong>Corpus of Rs 10,000 crores</strong> will be set up. </li>
                            <li> Will provide equity funding for <strong>MSMEs with growth</strong><strong>potential and viability.</strong></li>
                            <li> FoF will be operated through a <strong>Mother Fund</strong> and few <strong>daughter funds</strong></li>
                            <li><strong>Fund structure will help leverage Rs 50,000 cr of funds at </strong><strong>daughter funds level</strong></li>
                            <li>Will help to expand MSME size as well as capacity.</li>
                            <li> Will <strong>encourage MSMEs to get listed</strong> on main board of Stock </li>
                        </ul>
                    </div>

                    <div style={{ margin: "1rem 0rem" }}>
                        <h3 style={{ textAlign: "left" }}>WHY SHOULD I APPLY & WHAT BENEFITS I CAN GET?</h3>
                        <ol style={{ margin: "2rem" }}>
                            <li>Credit Facilities without Collateral (Schemes discussed below)</li>
                            <li> Capital Subsidies for various manufacturing and service sector units</li>
                            <li> Incentives for various manufacturing and service sector units </li>
                            <li>1 % Interest Reduction on Overdraft Loans and other loans</li>
                            <li> Startup India Scheme for Innovative Companies - 3 out of 10 Years - No Income Tax to be paid - Allowed as Deduction - Companies up to 10 Years in Existence are still considered Startup - This is Free </li>
                            <li>Generator Subsidy</li>
                            <li> Concessions on Electricity Bills </li>
                            <li>Subsidy on Patent Registration and few Trademarks</li>
                            <li> ISO Certification Charges Reimbursement </li>
                            <li>1MDA Scheme for Registration for Bar Coding </li>
                            <li>1Special Incentives for Companies Manufacturing COVID-19 Products like - COVID Testing Kits, Sanitizers (Alcohol Based), Ventilators, PPE Kits, 3Ply Surgical Masks, KN95 Masks/ N95 Masks, Hospital Mattresses &amp; Pillows, Multipara Monitors, Medical Oxygen </li>
                            <li>1Allows credit for minimum alternate tax (MAT) to be carried forward for up to 15 years instead of 10 years </li>
                            <li>1There are many government tenders which are only open to the MSME Industries </li>
                            <li>1Business registered under MSME is given higher preference for government license and certificatio</li>
                            <li>Support if you are starting an Incubation Center. </li>
                            <li>FIncentives for Employment Generation. </li>

                        </ol>
                    </div>

                    <div style={{ margin: "1rem 0rem" }}>
                        <h3 style={{ textAlign: "left" }}>What are the activities specifically excluded from coverage under MSME?</h3>
                        <p>A. Ministry of Micro, Small and Medium Enterprises (MSME) has clarified as per notification S.O 2576 (E) dated 18.09.2015 and subsequent notification no S.O 85(E) dated 10.1.2017, activities that would be specifically not included in the manufacturing or production of commodities or rendering of services as per Section 7 of the said Act.</p>
                        <ol style={{ margin: "2rem" }}>
                            <li>Forest and Logging </li>
                            <li>Fishing and aquaculture </li>
                            <li>Wholesale, retail trade and repair of motor vehicle and motorcycles </li>
                            <li>Wholesale trade except for motor vehicles and motorcycles. </li>
                            <li>Retail Trade Except of Motor Vehicles and motor cycles </li>
                            <li>Activities of households as employees for domestic personnel </li>
                            <li>Undifferentiated goods and services producing activities of private households for own </li>
                            <li>Activities of extraterritorial organisations and bodies Exchanges.  </li>
                        </ol>
                    </div>
                </div>


                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>CLASSIFICATION FOR MSME REGISTRATION UDYOG AADHAR REGISTRATION, UDYOG AADHAR REGISTRATION</h1>
                    <div style={{ margin: "2rem 0rem" }}>
                        <GlobalTable  key={1} data={msmeRegistrationTableData} />
                    </div>
                </div>

                <div style={{ margin: "4rem 0rem" }}>
                    <h2 style={{ textAlign: "center" }}>DETAILS REQUIRED FOR MSME REGISTRATION UDYOG</h2>
                    <h2 style={{ textAlign: "center" }}>AADHAR REGISTRATION, UDYOG AADHAR</h2>
                    <div style={{ margin: "3rem 0rem" }}>
                        <ol style={{ margin: "1rem" }}>
                            <li>The Business is Required to classify whether it is a manufacturing sector or service sector</li>
                            <li>Required to classify whether the establishment covers Micro, medium and small.</li>
                            <li>Details are required
                                <ol style={{ margin: "1rem" }}>
                                    <li>Aadhar number,</li>
                                    <li>industry Type,</li>
                                    <li>Address and bank details</li>
                                </ol>
                            </li>
                            <li>Details regarding products are manufacturing or rendering service-related details</li>
                        </ol>
                    </div>
                </div>



                <div style={{ margin: "4rem 0rem" }}>
                    <h2 style={{ textAlign: "center" }}>DOCUMENTS REQUIRED FOR MSME REGISTRATION UDYOG</h2>
                    <h2 style={{ textAlign: "center" }}>AADHAR REGISTRATION</h2>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p>Below, you will find the details and documents that you will require for completing the registration process in order to obtain Udyog Aadhar for your enterprise.</p>
                        <ul style={{ margin: "1rem" }}>
                            <li>Forest and Logging </li>
                            <li>Fishing and aquaculture </li>
                            <li>Wholesale, retail trade and repair of motor vehicle and motorcycles </li>
                            <li>Wholesale trade except for motor vehicles and motorcycles. </li>
                            <li>Retail Trade Except of Motor Vehicles and motor cycles </li>
                            <li>Activities of households as employees for domestic personnel </li>
                            <li>Undifferentiated goods and services producing activities of private households for own </li>
                            <li>Activities of extraterritorial organisations and bodies Exchanges. </li>
                        </ul>
                    </div>
                </div>


                <div style={{ margin: "4rem 0rem" }}>
                    <h2 style={{ textAlign: "center" }}>PROCESS FOR MSME REGISTRATION UDYOG AADHAR REGISTRATION,  UDYOG AADHAR</h2>
                    <h2 style={{ textAlign: "center" }}>AADHAR REGISTRATION</h2>
                    <div style={{ margin: "3rem 0rem" }}>
                        <ul style={{ margin: "1rem" }}>
                            <li>Understand the Clients business</li>
                            <li> To classify whether sector cover micro medium and small enterprise under MSME UDYOG AADHAR </li>
                            <li>Get OTP in Registered Aadhar number</li>
                            <li> To fill all required details in the MSME website
                                <a href="https://udyogaadhaar.gov.in/UA/UAM_Registration.aspx">https://udyogaadhaar.gov.in/UA/UAM_Registration.aspx</a></li>
                            <li> MSME is Registered, Certificate under UDYOG AAHDAR is issued </li>
                        </ul>
                    </div>
                </div>


                <div style={{ margin: "4rem 0rem" }}>
                    <h2 style={{ textAlign: "center" }}>UDYOG AADHAR REGISTRATION PROCESS</h2>
                    <p>The registration process of Udyog Aadhar is quite easy, and the form filling process is pretty straightforward too. The system today is kind of rejuvenated, and it seeks comparatively less information than the EMI/II process. </p>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p><strong>Step 1: Visit the Official Website of Udyog Aadhar Registration </strong> Visit the official website Udyog Aadhar Registration where you will find the steps for getting registered. </p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p> <strong>Step 2: Fill Personal Information </strong> Initially, you need to enter your name and your Aadhar Card number. Click on the “Validate & Generate OTP.” Your registered mobile number will get OTP. You need to enter the OTP, after that, you need to select the category from the choices General, SC, ST and OBC.  </p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p><strong> Important Note:</strong> It is essential to state here that the Udyog Aadhaar registration is an online process for individuals who operate an enterprise and hold an Aadhar card. If a person doesn’t possess an Aadhar card, then the individual can also apply to the GM (General Manager) of the concerned District Industries Centre. In future, GOI will address the difficulties encountered by entrepreneurs who don’t hold an Aadhar card.  </p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>

                        <p> <strong>Step 3: Details about the Enterprise/Entity </strong>Next thing, the applicant needs to enter the name of the entity. In case an applicant owns more than one enterprise requires to file a separate Udyog Aadhar. An applicant can fill it as Enterprise-1 and Enterprise-2, and also needs to select the “Type of Organization” from the drop-down menu.  </p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p> <strong>Step 4: Filling correspondence address</strong> After entering all the information mentioned above, the following information an applicant needs to provide the postal address of the enterprise/entity as well as details about the district, pin code of the district, state, mobile number and email address.  </p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p><strong>Step 5: Fill the Carry Forward Info</strong> An applicant needs to enter the date of starting the business operations of the enterprise from the calendar provided. An applicant also ought to give details concerning the previous registration by SSI, EM1, and EM2, and the UAM registration number.   </p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p><strong>Step 6: Bank Details</strong> An applicant needs to enter the bank account number as well as the IFSC code of the concerned bank branch of the enterprise’s account.   </p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p><strong>Step 7: Choose Classification of Your Enterprise </strong> An applicant needs to mention the main business activity of the enterprise from the “manufacturing” or “services”. Things might be a little complicated if the applicant business includes a mixture of both the possible options. If such a scenario, the applicant should consider selecting the category that comprises the majority part of the operations of the enterprise. For example, if the applicant business shall consist of 80% service and 20% manufacturing, then the applicant needs to choose “Services”.
                        </p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p><strong>Step 8: Total Investment</strong> After entering all of the above details, one more thing that an applicant will be providing is the number of workers employed in the enterprise and the amount of money invested in the enterprise.   </p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p> <strong>Step 9: Select the District Industry Center and Accept the Declaration </strong>This is the final step of the registration process; an applicant needs to select the district industry centre from the drop-down menu. After that, the applicant needs to accept the declaration and submit the application to finish the process. Finally, the applicant will receive an acknowledgment number.</p>
                    </div>

                </div>



                <div style={{ margin: "4rem 0rem" }}>
                    <h2 style={{ textAlign: "center" }}>BENEFITS OF MSME REGISTRATION UDYOG AADHAR</h2>
                    <h2 style={{ textAlign: "center" }}>REGISTRATION, UDYOG AADHAR</h2>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p>Udyog Aadhaar registration will facilitate the enterprises to avail many schemes/programs launched by State and Central.</p>
                        <ul style={{ margin: "1rem" }}>
                            <li> After obtaining Udyog Aadhaar registration, the applicant will get the advantages of all the government schemes such as loans with subsidised rates of interest or loans without guarantee etc. </li>
                            <li>Concession in the electricity bills</li>
                            <li>Easy and cheaper bank loans</li>
                            <li>Eligibility to receive government subsidies</li>
                            <li> Financial assistance for participating in international expos to exhibit their products/services. </li>
                            <li>Increased chances of winning government tenders</li>
                            <li>Industrial promotion subsidy</li>
                            <li> It would also enable enterprises to apply for government micro business loans and other similar beneficial schemes/benefits. </li>
                            <li> Reduction in fee for filing patents and trademark registration to get protection under the rights of intellectual properties. </li>
                            <li>Reduction in the rate of interest by major banks</li>
                            <li>Refrain from asking for security deposits</li>
                            <li> Registration would expedite the hassle-free opening of a current bank account in the business name. </li>
                            <li>Reimbursement under the bar code registration</li>
                            <li>Reservation benefits</li>
                            <li>Stamp duty and registration charges are waived off</li>
                        </ul>
                    </div>
                </div>


            </>
    }
];


export const msmeRegitrationFAQ = [
    {
        id: 1,
        nodeId: "1",
        question: "How to apply for GST number?",
        aid: "101",
        answer: <div>
            <p>The Government of India has enacted the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 in terms of which the definition of micro, small and medium enterprises is as under:</p>
            <ul style={{ marginLeft: "2rem" }}>

                <li> Enterprises engaged in the manufacture or production, processing or preservation of goods as specified below: </li>
                <li> A micro enterprise is an enterprise where investment in plant and machinery does not exceed Rs. 25 lakh; </li>
                <li> A small enterprise is an enterprise where the investment in plant and machinery is more than Rs. 25 lakh but does not exceed Rs. 5 crore; </li>
                <li> A medium enterprise is an enterprise where the investment in plant and machinery is more than Rs.5 crore but does not exceed Rs.10 crore. In case of the above enterprises, investment in plant and machinery is the original cost excluding land and building and the items specified by the Ministry of Small Scale Industries. </li>
                <li> Enterprises engaged in providing or rendering of services and whose investment in equipment (original cost excluding land and building and furniture, fittings and other items not directly related to the service rendered or as may be notified under the MSMED Act, 2006 are specified below. </li>
                <li> A micro enterprise is an enterprise where the investment in equipment does not exceed Rs. 10 lakh; </li>
                <li> A small enterprise is an enterprise where the investment in equipment is more than Rs.10 lakh but does not exceed Rs. 2 crore; </li>
                <li> A medium enterprise is an enterprise where the investment in equipment is more than Rs. 2 crore but does not exceed Rs. 5 crore. </li>

            </ul>
        </div>
    },
    {
        id: 2,
        nodeId: "2",
        question: "What is the difference Between MSME Registration Udyog Aadhar Registration & Udyog Aadhar Registration?",
        aid: "202",
        answer: "Now, MSME Registration Udyog Aadhar Registration and Udyog Aadhar Registration both are related but separate. Udyog Aadhar is a simple way of obtaining MSME Registration Udyog Aadhar Registration. Udyog Aadhar Registration is an online registration process through which an MSME can receive the 12-digit Udyog Aadhar Number. And, after that MSME Registration Udyog Aadhar Registration. Hence, one can tell that both are separate. However, Udyog Aadhar registration is a new method of acquiring MSME Registration Udyog Aadhar Registration."
    },
    {
        id: 3,
        nodeId: "3",
        question: "What is Udyog Aadhar Registration?",
        aid: "303",
        answer: "The Ministry of Micro, Small and Medium Enterprises facilitates registration of Small Scale Industry(SSI) Udyog Aadhar Registration is the process by the MSME Registration Udyog Aadhar Registration certificate is obtained"
    },
    {
        id: 4,
        nodeId: "4",
        question: "Is MSME Registration Udyog Aadhar Registration now being changed to Udyog Aadhar?",
        aid: "404",
        answer: "Now, MSME Registration Udyog Aadhar Registration and Udyog Aadhar Registration both are related but separate. Udyog Aadhar is a simple way of obtaining MSME Registration Udyog Aadhar Registration. Udyog Aadhar Registration is an online registration process through which an MSME can receive the 12-digit Udyog Aadhar Number. And, after that MSME Registration Udyog Aadhar Registration. Hence, one can tell that both are separate. However, Udyog Aadhar registration is a new method of acquiring MSME Registration Udyog Aadhar Registration."
    },
    {
        id: 5,
        nodeId: "5",
        question: "What are the foremost advantages of Udyog Aadhar registration?",
        aid: "505",
        answer: "The Ministry of Micro, Small and Medium Enterprises facilitates registration of Small Scale Industry(SSI) Udyog Aadhar Registration is the process by the MSME Registration Udyog Aadhar Registration certificate is obtained"
    },
    {
        id: 6,
        nodeId: "6",
        question: "Is MSME/Udyog Aadhar registration compulsory?",
        aid: "606",
        answer: "The Ministry of Micro, Small and Medium Enterprises facilitates registration of Small Scale Industry(SSI) Udyog Aadhar Registration is the process by the MSME Registration Udyog Aadhar Registration certificate is obtained"
    },
    {
        id: 6,
        nodeId: "6",
        question: "What is MSMED?",
        aid: "606",
        answer: "The Ministry of Micro, Small and Medium Enterprises facilitates registration of Small Scale Industry(SSI) Udyog Aadhar Registration is the process by the MSME Registration Udyog Aadhar Registration certificate is obtained"
    },
    {
        id: 7,
        nodeId: "7",
        question: "How much time MSME Udyog Aadhar registration certificate is valid?",
        aid: "707",
        answer: ""
    },
    {
        id: 8,
        nodeId: "8",
        question: "Whether GST compulsory for MSME/Udyog Aadhar registered companies?",
        aid: "808",
        answer: ""
    },
    {
        id: 8,
        nodeId: "8",
        question: "Can I take a loan from MSME to open a college or school?",
        aid: "808",
        answer: ""
    },
    {
        id: 9,
        nodeId: "9",
        question: "Can I register my existing business with MSME",
        aid: "909",
        answer: ""
    },
    {
        id: 10,
        nodeId: "10",
        question: "Whether books publishing come under MSME/Udyog Aadhar registration?",
        aid: "10010",
        answer: ""
    },
    {
        id: 11,
        nodeId: "11",
        question: "Which one is good Udyog Aadhar or MSME?",
        aid: "11011",
        answer: ""
    },
    {
        id: 12,
        nodeId: "12",
        question: "What is Udyog Aadhar Memorandum (UAM)?",
        aid: "12012",
        answer: ""
    },
    {
        id: 13,
        nodeId: "13",
        question: "When will Udyog Aadhaar Registration Certificate be issued?",
        aid: "13013",
        answer: ""
    },
    {
        id: 14,
        nodeId: "14",
        question: "Is EM-I/II got replaced by UAM?",
        aid: "14014",
        answer: ""
    },
    {
        id: 15,
        nodeId: "15",
        question: "Whether the multiple modes of registration exist after the initiation of UAM?",
        aid: "15015",
        answer: ""
    },
    {
        id: 16,
        nodeId: "16",
        question: "Whether States and UTs have access to reports or query and such other tasks as may be needed by GM and Directorate of Industries on the UAM website?",
        aid: "16016",
        answer: ""
    },
    {
        id: 17,
        nodeId: "17",
        question: "How to choose the NIC Code of the activity conducted by the enterprise?",
        aid: "17017",
        answer: ""
    },
    {
        id: 18,
        nodeId: "18",
        question: "Is there a facility available to check the credentials from UAM of the agencies like government departments/PSUs?",
        aid: "18018",
        answer: ""
    },
    {
        id: 10,
        nodeId: "10",
        question: "Is there a variation in the details asked under EM-I/II and the new UAM?",
        aid: "10010",
        answer: ""
    },
    {
        id: 19,
        nodeId: "19",
        question: "How to present the supporting documents when applying for the UAM?",
        aid: "19019",
        answer: ""
    },
    {
        id: 20,
        nodeId: "20",
        question: "What is the role of “Udyog Bandhu” in the UAM?",
        aid: "20020",
        answer: ""
    },
    {
        id: 21,
        nodeId: "21",
        question: "Whether the current arrangement of UAM encapsulated the change in the production line?",
        aid: "21021",
        answer: ""
    },
    {
        id: 22,
        nodeId: "22",
        question: "What in case of enterprised those who do not have an Aadhaar Number?",
        aid: "22022",
        answer: ""
    },
    {
        id: 23,
        nodeId: "23",
        question: "EM-I filed by a proposed business allows it for some exemptions from paying stamp-duties. How to manage this in UAM?",
        aid: "23023",
        answer: ""
    },
    {
        id: 24,
        nodeId: "24",
        question: "Is there any provision for editing of details in UAM of an enterprise through GM (DIC)?",
        aid: "24024",
        answer: ""
    },
    {
        id: 25,
        nodeId: "25",
        question: "What is the fate of EM Portal devised by the Ministry of MSME, i.e. http://em.msme.gov.in?",
        aid: "25025",
        answer: ""
    },
    {
        id: 26,
        nodeId: "26",
        question: "Who can access the data from the UAM portal?",
        aid: "26026",
        answer: ""
    },
    {
        id: 27,
        nodeId: "27",
        question: "Whether the new regime of registration has provisions of NIC Code in English and Hindi?",
        aid: "27027",
        answer: ""
    },
    {
        id: 28,
        nodeId: "28",
        question: "What is the monitoring mechanism available to Director (Industries) and GM (DICs) for new registration under UAM?",
        aid: "28028",
        answer: ""
    },
    {
        id: 28,
        nodeId: "28",
        question: "What in case of enterprised those who do not have an Aadhaar Number?",
        aid: "28028",
        answer: ""
    },
    {
        id: 29,
        nodeId: "29",
        question: "Whether any disclaimer should be provided in UAN?",
        aid: "29029",
        answer: ""
    },
    {
        id: 30,
        nodeId: "30",
        question: "Why have power load details not been required in UAM?",
        aid: "30030",
        answer: ""
    },
    {
        id: 31,
        nodeId: "31",
        question: "Will the UAM portal facilitates any updating of data by the businesspeople?",
        aid: "31031",
        answer: ""
    },
    {
        id: 32,
        nodeId: "32",
        question: "How is the closing of the business unit recorded the businessperson in the UAM?",
        aid: "32032",
        answer: ""
    },

]