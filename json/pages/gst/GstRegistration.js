
import Image from "next/image";
import Valuation from "@images/home/valuation.png";
import Coin from "@images/gst/gst-registration/coin.png";
import Cost from "@images/gst/gst-registration/cost.png";


export const gstRegistration = {
    headTitle: "",
    containers: [
        {
            id: 1,
            container: {
                title: "GST Registration",
                summary: (
                    <>
                        GST Registration Online popularly known as GST Registration is the process of Registering with the Goods and Services Taxes (GST) Department is a crucial step for any business. It's what ensures that the company can offer its products to customers complying the tax laws of the country According to the GST rules, a business with above RS.40 lakh turnover shall register itself as a normal taxable entity.
                        Howbeit, for the businesses in the hill or North-Eastern states, get a rebate off RS.30 lakh, which concludes the turnover amount is RS.10 lakh. Online GST registration can be a tedious process. But it is worth the effort as it makes a business competitive than other ones. Thus, those who fall under the GST Registration eligibility must complete the process as soon as possible. The government takes non-registered businesses seriously and levies heavy penalties based on their tax evasion period!
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Coin} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Starting at Rs.4,699/-</p>,
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
                title: "What is New GST Registration?",
                summary: (
                    <>
                        GST, the Goods and Service Tax, is a registration process meant to generate government revenue. It's an indirect tax levied filled by consumers for buying goods/services from different companies. In other words, businesses selling their products with an additional tax rate are registered under the GST policy.
                        All the businesses registered under GST receive a 15-digit Goods and Service Tax Identification Number (GSTIN). This is intended to determine the liability of a GST registered business. The central government now makes it easier for these entities to complete the GST registration process within 6 working days--a time frame previously unheard of!
                    </>
                ),
            },
        },
    ],


}

export const newGstRegistration = [
    {
        id: 1,
        title: <p style={{ fontWeight: "bold" }}>Aggregate Turnover</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>If you're in the services-providing business and your aggregated turnover is more than Rs. 20 lakhs, it's mandatory for you to apply for GST registration Online . On top of that, if your goods are valued at over Rs. 40 Lakhs, it becomes a compulsory step to take up this tax liability</p>
    },
    {
        id: 2,
        title: <p style={{ fontWeight: "bold" }}>Interstate Business</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>In India, a registered business entity must have GST registration to sell goods from one state to another. This is so that government can collect the tax efficiently, and tax evasion will not occur as often</p>
    },
    {
        id: 3,
        title: <p style={{ fontWeight: "bold" }}>E-commerce Platform</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>If you are an entrepreneur who operates your own E-commerce platform, it is essential to obtain GST registration in India. To start with a business on the internet, one must register under GST regardless of any turnover</p>
    },
    {
        id: 4,
        title: <p style={{ fontWeight: "bold" }}>Normal Taxable Person</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>The GST registration is required for all seasonal vendors. Business owners in this category should not assume their initial state will be exempt from the requirement, as it does not matter what your turnover is</p>
    },
    {
        id: 5,
        title: <p style={{ fontWeight: "bold" }}>Voluntary Registration</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>Voluntary GST registration is a dream come true for entities that have it. The recent revisions to the rules allow them to surrender their voluntary status at any time, eliminating all of those pesky extra taxes you might not want!</p>
    },
    {
        id: 6,
        title: <p style={{ fontWeight: "bold" }}>Exceptions</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>You don't have to go through the hassle of GST registration if you're a cultivator or someone involved in agricultural products' suppliance under reverse turnover</p>
    }
];

export const typesOfGst = [
    {
        id: 1,
        title: <p style={{ fontWeight: "bold" }}>Normal Taxpayer:</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>The largest businesses in India are considered normal taxpayers. It is easier and simpler for them to pay taxes as they do not have any deposit fees or expiration dates on their fines. Additionally, the central government allows them access to unlimited validity of input tax credit.</p>
    },
    {
        id: 2,
        title: <p style={{ fontWeight: "bold" }}>Casual Taxable Person:</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>The best option for small businesses that are more seasonal is the Casual Taxable Person registration. Companies who fall under this category of GST Registration must pay an advance amount equivalent to their anticipated GST liability during the time they're present. Howbeit, these categories are valid for three months only and can be increased if desired.</p>
    },
    {
        id: 3,
        title: <p style={{ fontWeight: "bold" }}>Composition Taxpayer:</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>Taxpayers can save themselves from tedious GST rules by opting out of the Composition Scheme. However, they will not be able to claim an input tax credit. Small taxpayers may find this trade-off worth it and pay a set rate of turnover instead.
        </p>
    },
    {
        id: 4,
        title: <p style={{ fontWeight: "bold" }}>Non-Resident Taxable Person:</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>The GST registration is required for all seasonal vendors. Business owners in this category should not assume their initial state will be exempt from the requirement, as it does not matter what your turnover is</p>
    },
    {
        id: 5,
        title: <p style={{ fontWeight: "bold" }}>Voluntary Registration</p>,
        desc: <div>
            <p style={{ margin: "1rem 0rem" }}>The non-resident taxable person applies to those living outside India yet supplying goods/services to the country. According to the GST law, such businesses are obliged to pay advanced GST tax rates for activating their GST registration. However, the registration is only effective for 3 months, with the option to extend it if necessary. Below are some examples of non-resident businesses that fall under this GST act,</p>
            <li>Non-Resident Online Service Provider</li>
            <li>Government Entities-GST TDS Deductor</li>
            <li>Developer of the Special Economic Zone</li>
            <li>Special Economic Zone Unit</li>
            <li>Individuals notified by the UN Embassy/ Body/ Other</li>
            <li>E-commerce Companies-GST TDS Collector</li>
        </div>
    },
];

export const gstProcedure = [
    {
        id: 1,
        title: <p style={{ fontWeight: "bold" }}>First Step</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>Get to your internet browser and navigate to the official GST registration website (https://www.gst.gov.in/). Afterward, read the full application form and enter the needed information according to the official business documents you have.</p>
    },
    {
        id: 2,
        title: <p style={{ fontWeight: "bold" }}>Second Step</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>After submitting, you will receive an OTP number on the cell number you have just registered in the application form. Or else, you can also check your email and save the OTP information for the application confirmation.</p>
    },
    {
        id: 3,
        title: <p style={{ fontWeight: "bold" }}>Third Step</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>Once you have completed the verification, you will get a TRN (Temporary Reference Number). So, note that information to proceed with the application process further.
        </p>
    },
    {
        id: 4,
        title: <p style={{ fontWeight: "bold" }}>Fourth Step</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>Next, you will need to fill out the automatically generated GST REG-03 form with the TRN number and attach all the needed documents before the final submission.</p>
    },
    {
        id: 5,
        title: <p style={{ fontWeight: "bold" }}>Advantages of GST Registration</p>,
        desc: <p style={{ margin: "1rem 0rem" }}>You may think that being registered for GST is a chore. But if you're an entrepreneur, it's actually the key to success, since this tax system has many benefits, which include,</p>
    },
    {
        id: 6,
        title: <p style={{ fontWeight: "bold" }}>Advantages of GST Registration</p>,
        desc: <div>
            <p style={{ margin: "1rem 0rem" }}>You may think that being registered for GST is a chore. But if you're an entrepreneur, it's actually the key to success, since this tax system has many benefits, which include,</p>
            <li>Multinational companies can take on large projects (MNCs).</li>
            <li>Goods are available for sale online.</li>
            <li>Goods can be sold nationwide.</li>
            <li> As a legal organization, GST registration functions as a shred of valid evidence.</li>
            <li>When any goods or services are acquired, the input tax credit may be utilized.</li>
            <li>A GSTIN can be used to open an existing bank account.</li>
            <li>The GSTIN contributes to the company's brand value.</li>
        </div>
    },
];


export const gstRegisterCompulsory = [

    {
        id: 1,
        desc: <>
            <div>
                <p style={{ margin: "1rem 0rem" }}>GST Registration is not compulsory for agriculturists who involved in the cultivation and supply of agricultural products, making supplies that are fully covered under reverse charge or making only exempt supplies of goods and services. Small taxpayers benefit a lot by registering under the GST composition scheme because it lessens their tax burden. Although, the below-mentioned individuals and businesses must complete GST Registration:</p>
                <ol style={{ marginLeft: "1rem" }}>
                    <li>Those have been registered under the earlier taxation laws (VAT, Service Tax, Excise, etc.)</li>
                    <li>Businesses having turnover higher than specific threshold limit (Rs. 40 lakh for small enterprises and Rs. 10 lakh for the North Eastern States, Uttarakhand, Himachal Pradesh, Jammu & Kashmir, as per new regulations).</li>
                    <li>If a business is making inter-state sales</li>
                    <li>If a business participating in an event/trade fair even outside the State as a casual taxpayer</li>
                    <li>If a business wants to raise a tax invoice for its customers</li>
                    <li>Non-Resident Taxable Person and Casual Taxable Person</li>
                    <li>Those who pay tax under reverse charge mechanism</li>
                    <li>Individuals involving in e-commerce or supply goods through e-commerce platforms.</li>
                </ol>
            </div>

            <p style={{ marginTop: "1rem" }}>Individuals involving in the import or export business</p>
        </>
    },
];

export const gstDocs = [

    {
        id: 1,
        desc: <>
            <div>
                <p style={{ margin: "1rem 0rem" }}>The GST registration documents vary depending on the type of business people want to register for. However, the general documents that every business needs to submit for the GST registration process are as follows,</p>
                <li>Permanent Account Number (PAN)</li>
                <li>Passport Size Photograph</li>
                <li>Aadhar card or Driving License or Passport</li>
                <li>Address proof of business premises</li>
                <li>Bank Statement or Cancel cheque or Passbook</li>
            </div>
        </>
    },

    {
        id: 1,
        desc: <>
            <div>
                <p style={{ margin: "1rem 0rem" }}>For the private limited company/OPC/LLP/Partnership Firm, one must include these documents with their GST registration application.</p>
                <li>Certificate of Incorporation in the case of a Limited Liability Company, an OPC, or an LLP; </li>
                <li>Partnership Deed in the event of a partnership firm;</li>
                <li>Opening page of a bank statement held in the name of the business or the proprietor;</li>
                <li>Letter of permission or a board resolution.</li>
            </div>
        </>
    }
];

export const gstFees = [
    {
        id: 1,
        desc: <>
            <div>
                <p style={{ margin: "1rem 0rem" }}>GST registration Fees is dependent on the type of business one falls under and ranges from RS1199-RS3000. It's a one-time fee, yet the process takes time.</p>
                <p style={{ margin: "1rem 0rem" }}>
                    For the regular GST registration certificate, it takes around 3-6 working days. However, if you need any further modification, it may take around 15-20 working days.</p>
            </div>
        </>
    }
];

export const typesOfGstSpan = [
    {
        id: 1,
        desc: <p style={{ margin: "1rem 0rem" }}>Under the GST Act, GST Registration can be of various kinds. It is essential that the taxpayer is informed of the distinct kinds of GST Registration and chooses the proper one. The multiple kinds of GST Registration are given below:</p>
    },
    {
        id: 2,
        desc: <p style={{ margin: "1rem 0rem" }}> <span style={{ fontWeight: "bold" }}>Normal Taxpayer : </span>  Largest of the businesses in India come under this type. The applicant need not furnish any deposit to fall in the category of a normal taxpayer. Besides, there is no expiration date for taxpayers who come under this category.</p>
    },
    {
        id: 2,
        desc: <p style={{ margin: "1rem 0rem" }}> <span style={{ fontWeight: "bold" }}>Casual Taxable Person : </span> Individuals who want to start a seasonal business or shop can choose for this category. The taxpayer must deposit an advance amount that is equivalent to the anticipated GST liability during the time the seasonal business or stall is present. The term of the GST Registration under this categorization is three months, and it can also be increased or renewed.</p>
    },
    {
        id: 3,
        desc: <p style={{ margin: "1rem 0rem" }}> <span style={{ fontWeight: "bold" }}>Composition Taxpayer : </span>Taxpayers who want to get the GST Composition Scheme can opt-out for this type of GST Registration. Small taxpayers can free themselves of tedious GST rules and return GST at a set rate of turnover. The input tax credit could not be availed by taxpayers belonging to this category.
        </p>
    },
    {
        id: 4,
        desc: <>
            <p style={{ margin: "1rem 0rem" }}><span style={{ fontWeight: "bold" }}>Non-Resident Taxable Person : </span> In case individuals reside outside India, but supply goods and services to businesses who stay in India, they must select for this sort of GST Registration. Compared to the Casual Taxable Person sort of GST Registration, taxpayers required to pay a deposit that is the same as the anticipated GST payable throughout the time the GST registration is active. The duration for this type of GST registration usually is three months, although it can be extended or renewed at the time of expiry.</p>

            <li>Non-Resident Online Service Provider</li>
            <li>Government Entities-GST TDS Deductor</li>
            <li>Developer of the Special Economic Zone</li>
            <li>Special Economic Zone Unit</li>
            <li>Individuals notified by the UN Embassy/ Body/ Other</li>
            <li>E-commerce Companies-GST TDS Collector</li>
        </>
    },
];

export const gstVoluntarily = [
    {
        id: 1,
        desc: <p style={{ margin: "1rem 0rem" }}>Businesses having turnover lesser than 40 and 20 Lacs can also register under GST, there is no restraint on registration if turnover is below (40/20 Lacs) but, if turnover is higher than prescribed limit, then registration is mandatory. Registering your business under the GST not only supports you in getting your business acknowledged being legally registered but also aid you to avail different benefits like to raise GST Invoice, input tax credit, and many more.</p>
    },
    {
        id: 2,
        desc: <p style={{ margin: "1rem 0rem" }}>Turnover comprises the aggregate value of all taxable supplies + inter-state supplies + exempt supplies + export of goods or services or both + It includes supplies made by a person on behalf of his principals (excludes the value of job-worked goods if he is a job-worker) Aggregate turnover can be computed by counting all the supplies made by a business having the same PAN number based on all India.</p>
    },
];

export const multiGstRn = [
    {
        id: 1,
        desc:
            <div>
                <p style={{ margin: "1rem 0rem" }}>An enterprise requires to obtain multiple GST numbers if,</p>

                <ul style={{ marginLeft: "1rem" }}>
                    <li>An enterprise is supplying goods & services from various States; then it compulsorily needed to register under GST in various States.</li>
                    <li>Moreover, any enterprise can take several GSTIN even if they are running from a particular State under various verticals to simplify accounting complexity among different businesses.</li>
                </ul>
            </div>
    },
    {
        id: 2,
        desc: <p style={{ margin: "1rem 0rem" }}>For instance, ABC LLC involves in the business of selling clothes and software from Bangalore alone. Nevertheless, ABC LLC can use for different GST numbers for their various business fields.</p>
    },
];

export const getDesc = [
    {
        id: 1,
        desc:
            <div>
                <h1>Multiple GST Registration Number Possible?</h1>
                <div>
                    <p style={{ margin: "1rem 0rem" }}>An enterprise requires to obtain multiple GST numbers if,</p>

                    <ul style={{ marginLeft: "1rem" }}>
                        <li>An enterprise is supplying goods & services from various States; then it compulsorily needed to register under GST in various States.</li>
                        <li>Moreover, any enterprise can take several GSTIN even if they are running from a particular State under various verticals to simplify accounting complexity among different businesses.</li>
                    </ul>
                </div>
                <p style={{ margin: "1rem 0rem" }}>For instance, ABC LLC involves in the business of selling clothes and software from Bangalore alone. Nevertheless, ABC LLC can use for different GST numbers for their various business fields.</p>
            </div>
    },
    {
        id: 2,
        desc:
            <div>
                <h1 style={{ textAlign: "center" }}>GST REGISTRATION WHEN OPERATING IN MULTIPLE STATES</h1>
                <p style={{ margin: "1rem 0rem" }}><span style={{ fontWeight: "bold" }}>If a single person is operating in various States, with the same PAN, whether can he operate with a single registration or not is a common question among many taxpayers, </span>Each and Every person which is liable to take the registration they have to get registered separately for each of the States from where he is making taxable supplies and also is liable to get registered.   <span style={{ fontWeight: "bold", color: "blue" }}>GST Registration </span>  must be done in every state separately</p>
            </div>
    },
    {
        id: 3,
        desc:
            <div>
                <h1>Penalty for not Registering Under GST</h1>
                <p style={{ margin: "1rem 0rem" }}> All the entities and individuals and who meet the eligibility requirements are required to go for GST Registration. Defaulters who neglect to follow the rules and do not pay the tax or make default in payments instead of full refund are liable to pay the penalty. The penalty for tax avoidance by a defaulter will be hundred per cent of the tax amount due. The penalty for not registering under GST is ten per cent of the total tax amount payable subject to a minimum of Rs. 10,000.</p>
            </div>
    },
    {
        id: 4,
        desc:
            <div>
                <h1>GST REGISTRATION UNDER COMPOSITION SCHEME</h1>
                <p style={{ margin: "1rem 0rem" }}>GST Composition Scheme is a scheme created for small taxpayers to lessen the compliance onus. Small taxpayers can be free of tiring GST formalities and file GST at a fixed rate of turnover. Any individual or entity is having a yearly turnover of less than INR 2 Crores* can opt out composition scheme under when applying for GST registration. *For Northeastern and hilly regions namely Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Tripura, Sikkim and Himachal Pradesh the threshold limit is INR 1 Crore. <span style={{ fontWeight: "bold", color: "blue" }}>*CBIC </span><span style={{ fontWeight: "bold" }}>has announced the increase of threshold limit from INR 1 Crore to INR 1.5 Crores.</span> Rates of Tax for small taxpayers</p>

                <div style={{ margin: "1rem 0rem" }}>
                    <ol style={{ margin: "1rem 2rem" }}>
                        <li>2% for manufacturers,</li>
                        <li>5% for the restaurant service sector</li>
                        <li>1% for other suppliers</li>
                    </ol>
                    <p>File only quarterly Returns</p>
                </div>

                <div style={{ margin: "1rem 0rem" }}>
                    <p>Tax Payer Cannot opt for the composition scheme if you are/you make: -</p>
                    <ul style={{ margin: "1rem 2rem" }}>
                        <li>engaged in the supply of services - any supply of goods which are not liable to be taxed under this Act</li>
                        <li>inter-state outward supplies of goods</li>
                        <li>supplies through electronic commerce operators who are required to collect tax under section 56.</li>
                        <li>a manufacturer of notified goods</li>
                        <li>a casual dealer</li>
                        <li>a Non-Resident Foreign Taxpayer</li>
                        <li>a person registered as Input Service Distributor (ISD)</li>
                        <li>a person registered as TDS Deductor/Tax Collector</li>
                    </ul>
                </div>

                <p>To opt for the Composition Scheme on the GST Portal, perform the following steps: 1. Log in to the Taxpayers’ Interface Step 2. Go to Services > Registration > Application to Opt for Composition Scheme Step 3. Fill the form as per the form specification rules and submit</p>
            </div>
    },
    {
        id: 5,
        desc:
            <div>
                <h1>Amendment to GST Registration</h1>
                <p style={{ margin: "1rem 0rem" }}>There may circumstances where we may have to amend the GST Registration, as a change of address, change of partners/Directors there is a procedure to amend the GST Registration</p>
            </div>
    },
    {
        id: 6,
        desc:
            <div>
                <h1>Cancelation of GST Registration</h1>
                <p style={{ margin: "1rem 0rem" }}>If the GST Registered person does not carry on any business or the business has closed can apply for cancellation of GST Registration</p>
            </div>
    },
];

export const gstFAQ = [
    {
        id: 1,
        nodeId: "1",
        question: "Can I apply for GST on my business name?",
        aid: "101",
        answer: "Yes, in case of an individual or sole proprietorship, you are free to apply for GST registration on your business name. Moreover, you can use your personal name as well."
    },
    {
        id: 2,
        nodeId: "2",
        question: "Can I trade both Goods/Services with one GSTIN?",
        aid: "202",
        answer: "Yes, you can trade both Goods/Services with one GSTIN, provided you have included such Goods/Services when registering for GST."
    },
    {
        id: 3,
        nodeId: "3",
        question: "Is the current account is necessary for a business registration under GST?",
        aid: "303",
        answer: "No, current, as well as savings accounts, can be used for registration under GST."
    },
    {
        id: 3,
        nodeId: "3",
        question: "Can I receive a GST certificate at my house address?",
        aid: "303",
        answer: "Sure, you can commence a business from the house address. You need to furnish proof of your house address for registration under GST."
    },
    {
        id: 4,
        nodeId: "4",
        question: "What to do after getting GST number?",
        aid: "404",
        answer: <>
            <div>
                <ol>
                    <li>Show and affix GST Certificate inside your business place.</li>
                    <li>Use and issue GST compliant bills.</li>
                    <li>File GST Returns on time.</li>
                </ol>
            </div>
        </>
    },
    {
        id: 5,
        nodeId: "5",
        question: "Do I have to charge GST from the customers?",
        aid: "505",
        answer: "Indeed, from the time you get GST registration certificate, you require to charge GST from customers on each sale done."
    },
    {
        id: 6,
        nodeId: "6",
        question: "What would be the result of incomplete/wrong details in filing GST Returns?",
        aid: "606",
        answer: "Providing incomplete or wrong information when filing GST return can attract a penalty of up to Rs 25,000. CBIS has published circular no 89/80/2019-GST dt 18/02/2019 in this respect."
    },
    {
        id: 7,
        nodeId: "7",
        question: "What are the advantages and disadvantages of GST Composition Scheme?",
        aid: "707",
        answer: <>
            <div style={{ margin: "1rem" }}>
                <h4>Advantages of GST Composition scheme</h4>
                <ol style={{ marginLeft: "2rem" }}>
                    <li>Require to file a single quarterly return, i.e. four returns in one year</li>
                    <li>Few compliances</li>
                    <li>Low tax burden</li>
                    <li>Low tax on turnover (5% for restaurant and 1% for traders)</li>
                    <li>No requirement to maintain detailed records</li>
                    <li>Can render auxiliary services maximally INR 5 lakhs yearly under the composition scheme.</li>
                </ol>
            </div>
            <div>
                <h4>Disadvantages of GST Composition scheme</h4>
                <ol style={{ marginLeft: "2rem" }}>
                    <li>Cannot claim an input tax credit of purchases made</li>
                    <li>Cannot issue a tax invoice</li>
                    <li>Cannot charge composition tax on the invoice from the customer as usual practice in case of standard GST scheme</li>
                </ol>
            </div>
        </>
    },
    {
        id: 8,
        nodeId: "8",
        question: "Who cannot opt for composition scheme?",
        aid: "808",
        answer: <div>
            <ol style={{ marginLeft: "2rem" }}>
                <li>If Annual turnover exceeds INR 1.5 Crores</li>
                <li>If you involved in Inter-State supplies</li>
                <li>All Service Sector Business except restaurant</li>
                <li>Importer of goods & services</li>
                <li>E-commerce sellers</li>
                <li>Supplier of non-taxable goods</li>
                <li>Manufacturer of Notified Goods</li>
            </ol>
        </div>
    },
    {
        id: 9,
        nodeId: "9",
        question: "Is Digital Signature Required for GST registration?",
        aid: "909",
        answer: "Yes, Digital Signature Certificate is needed for Private limited, Public limited, LLP or OPC."
    },
    {
        id: 10,
        nodeId: "10",
        question: "Who should file GST Returns and what are the various types of GST Returns?",
        aid: "10010",
        answer: "A GST Return is a record stating particulars of income a taxpayer is obligated to file with the relevant tax authority on the basis which the tax burden will be determined. Filing GST returns is a responsibility that requires to be performed by every business under the GST system. Businesses registered under GST must file monthly and annual returns that can be done online. A registered trader requires filing GST returns involving sales, purchases, outputting GST (on sales) and inputting tax credit (GST paid on purchases). The benefit of the system is that one has to enter details of one monthly return – GSTR-1 manually. Then, the other return GSTR 3B will get automatically filled by obtaining data from GSTR-1 filed by you and your dealers. Under the GST regime, any established enterprise has to file two returns per month and one yearly return. It computed to 26 returns annually. The different kinds of GST return filed by taxpayers are GSTR-1, GSTR-2, GSTR-2A, etc."
    },
    {
        id: 12,
        nodeId: "12",
        question: "What is GSTR-3B?",
        aid: "12012",
        answer: "GSTR-3B is a simplified summary return and the purpose of the return is for taxpayers to declare their summary GST liabilities for the tax period and the discharge of these liabilities in a timely manner A normal taxpayer is required to file GSTR-3B returns for every tax period."
    },
    {
        id: 13,
        nodeId: "13",
        question: "Who needs to file the GSTR-3B?",
        aid: "13013",
        answer: "All normal taxpayers and casual taxpayers are required to file the GSTR-3B"
    },
    {
        id: 14,
        nodeId: "14",
        question: "Where can I file GSTR-3B?",
        aid: "14014",
        answer: "GSTR-3B can be filed from the returns section of the GST Portal. In the post login mode, you can access it by going to Services > Returns > Returns Dashboard. After selecting the financial year and tax period, GSTR-3B, (if applicable), in the given period will be displayed."
    },
    {
        id: 15,
        nodeId: "15",
        question: "WHAT IS THE DUE DATE TO FILE GSTR 3B?",
        aid: "15015",
        answer: "The due dates for filings GSTR 3B are 20th of the subsequent month, that is the sales and purchase of the month April need to filed within 20th May"
    },
    {
        id: 16,
        nodeId: "16",
        question: "Will there be any invoice matching in GSTR-3B?",
        aid: "16016",
        answer: "No, all the details in GSTR-3B will be self declared in summary manner and the taxes will be paid based on the table 6 of GSTR-3B (refer to the Rules as available on the GST Council or CBEC website, applicable for GSTR-3B Form)."
    },
    {
        id: 17,
        nodeId: "17",
        question: "Will the Utilize cash/ITC(Input Tax Credit) functionality be available for discharging return related liabilities?",
        aid: "17017",
        answer: "No, all the details in GSTR-3B will be declared in a consolidated manner by the taxpayer and the taxes will be paid based on the table 6 of GSTR-3B, after submitting the return"
    },
    {
        id: 18,
        nodeId: "18",
        question: "Is filing of GSTR-3 mandatory even if there is no business in the particular tax period?",
        aid: "18018",
        answer: "GSTR-3B is also mandatory to be filed by all normal and casual tax payers, even if there is no business in the particular tax period."
    },
    {
        id: 19,
        nodeId: "19",
        question: "One is required to Confirm after entering data in each section in GSTR-3B. Will the GST System save the confirmed data if a taxpayer exits without completing the form?",
        aid: "19019",
        answer: "No, to ensure that the furnished data is saved in a partially complete GSTR-3B, a tax payer is required to click on Save GSTR-3B before closing the form."
    },
    {
        id: 20,
        nodeId: "20",
        question: "I have already filed GSTR-3B, but now I want to make some modifications. Can I file an amendment?",
        aid: "20020",
        answer: "GSTR-3B once filed cannot be revised. Adjustments, if any, has to be done subsequently when you file GSTR-1for the period."
    },
    {
        id: 21,
        nodeId: "21",
        question: "Who is the person liable to take registration under the GST Law?",
        aid: "21021",
        answer: "In terms of Section 22(1) of the CGST Act, every supplier making taxable supplies is liable for registration if his aggregate turnover in a financial year exceeds twenty lakh rupees or ten lakh rupees in special category States as the case may be."
    },
    {
        id: 22,
        nodeId: "22",
        question: "Is there a provision for a person to get himself registered voluntarily though he may not be liable to pay GST?",
        aid: "22022",
        answer: "In terms of Section 25(3) a person, though not liable to be registered under Section 22, may get himself registered voluntarily, and all provisions of this Act, as are applicable to a registered taxable person shall apply to such person."
    },
    {
        id: 23,
        nodeId: "23",
        question: "Whether an officer may cancel the voluntary registration of a business under Section 29(2)(d) where the company has started purchasing capital goods/setting up of business but has not made any supply in those 6 months?",
        aid: "23023",
        answer: "No, even acquiring of business assets tantamount to commencement of business and therefore Section 29(2)(d) is not applicable in this case."
    },
    {
        id: 24,
        nodeId: "24",
        question: "Whether cancellation of the registration certificate is permissible?",
        aid: "24024",
        answer: "Any registration granted under this Act may be canceled by the proper officer, on various circumstances and the provisions of the law on this subject have been outlined under Section 29 of the Act. The proper officer may, either on his own motion or on an application filed, in the prescribed manner, by the registered taxable person or by his legal heirs, in case of death of such person, cancel the registration, as per Rules 20 and 22."
    },
    {
        id: 25,
        nodeId: "25",
        question: "Whether cancellation of registration under CGST Act means cancellation under SGST ACT also?",
        aid: "25025",
        answer: "Yes, the cancellation of registration under the CGST Act /SGST Act shall be deemed to be a cancellation of registration under the SGST Act /CGST Act mutually."
    },
    {
        id: 26,
        nodeId: "26",
        question: "Can i form a Private limited company with my home address?",
        aid: "26026",
        answer: "Yes, one can register the company at their current hoem addrress.But any utility bill has to be submitted."
    },
    {
        id: 27,
        nodeId: "27",
        question: "Whether amendments to the registration certificates issued by the proper officer are permissible?",
        aid: "27027",
        answer: "In terms of Section 28, the proper officer may, on the basis of such information furnished either by the registrant or as ascertained by him, approve or reject amendments in the registration particulars in the manner and within such period as may be prescribed"
    },
    {
        id: 28,
        nodeId: "28",
        question: "How to register Under GST?",
        aid: "28028",
        answer: <div>
            <p>For Online GST registration, you can consult Virtual Auditor experts and follow the steps mentioned below:</p>
            <ol style={{ marginLeft: "2rem" }}>
                <li>Login in to gst.gov.in</li>
                <li>Fill the Part A</li>
                <li>All Service Sector Business except restaurant</li>
                <li>Generate ARN.</li>
            </ol>
        </div>
    },
    {
        id: 29,
        nodeId: "29",
        question: "Procedure Required to apply for the GST number?",
        aid: "29029",
        answer: <div>
            <p>To apply for GST number online you need to follow the steps mentioned below:</p>
            <ol style={{ marginLeft: "2rem" }}>
                <li>Contact details.</li>
                <li>Email address.</li>
                <li>PAN (Permanent Account Number).</li>
                <li>Draft all the documents.</li>
                <li>Upload the documents.</li>
                <li> Generate ARN.  </li>
            </ol>
        </div>
    },
    {
        id: 30,
        nodeId: "30",
        question: "What is the GST registration?",
        aid: "30030",
        answer: "GST (Goods and Service Tax) in India is an Indirect tax in India. Under GST a person who crosses a certain threshold turnover and certain person how are mandatorily required to. GST registration have to apply for GST Registration"
    },
    {
        id: 31,
        nodeId: "31",
        question: "Who can register for GST?",
        aid: "31031",
        answer: <div>
            <p>Below mentioned taxpayers have to apply for GST registration:</p>
            <ol style={{ marginLeft: "2rem" }}>
                <li>Individuals registered under the Pre-GST law (i.e., Excise, VAT, Service Tax etc.)</li>
                <li>Taxable person who supplies goods and the annual turnover of his business is above 40 lakhs and the one who supplies services with annual turnover of rupees 20 lakhs.</li>
                <li>Casual taxable person / Non-Resident taxable person.</li>
                <li>Agents of a supplier & Input service distributor.</li>
                <li>Those paying tax under the reverse charge mechanism.</li>
                <li>Person who supplies via e-commerce aggregator.</li>
                <li>Every e-commerce aggregator.</li>
            </ol>
        </div>
    },
    {
        id: 32,
        nodeId: "32",
        question: "What is the time duration to get the GST number?",
        aid: "32032",
        answer: "GST registration takes 3 to 5 working days for the entire process to complete and receive the GST number."
    },
    {
        id: 33,
        nodeId: "33",
        question: "What is IGST (Integrated goods and Service Tax)?",
        aid: "33033",
        answer: "IGST Stand for Integrated GST (IGST) would be levied and collected by the Centre on the inter-State supply of goods and services. The GST on supplies in the course of inter-state trade or commerce shall be levied and collected by the Government of India and such tax shall be apportioned between the Union and the States in the manner as may be provided by Parliament by law on the recommendations of the Goods and Services Tax Council"
    },
    {
        id: 34,
        nodeId: "34",
        question: "How will imports be taxed under GST?",
        aid: "34034",
        answer: "Import of goods will be treated under IGST (Integrated Goods and Service Tax), the importer at the time of import of goods/service need to pay to clear the dues and then proceed with taking the goods."
    },
    {
        id: 35,
        nodeId: "35",
        question: "How will exports be treated under GST?",
        aid: "35035",
        answer: "Exports will be treated as zero-rated supplies. No tax will be payable on exports of goods or services, however, the credit of input tax credit will be available and same will be available as a refund to the exporters. The Exporter will have an option to either pay tax on the output and claim refund of IGST or export under Bond without payment of IGST and claim a refund of Input Tax Credit (ITC)."
    },
    {
        id: 36,
        nodeId: "36",
        question: "Will Does B2B transactions mean in the context of  GST?",
        aid: "36036",
        answer: ""
    },
    {
        id: 37,
        nodeId: "37",
        question: "What is an Input Tax Credit in the Context of GST Law?",
        aid: "37037",
        answer: ""
    },
    {
        id: 38,
        nodeId: "38",
        question: "How to register for GST?",
        aid: "38038",
        answer: <div>
            <p>For completing your online GST registration, simply consult the experts at Virtual Auditor and follow these steps:</p>
            <ul style={{ marginLeft: "2rem" }}>
                <li>Open the Virtual Auditor website</li>
                <li>Start drafting the requisite documents</li>
                <li>Complete the prescribed payment online</li>
                <li>Upload your documents</li>
                <li>Generate the ARN</li>
                <li>A GST number will be allotted and sent to your registered email address.</li>
            </ul>
        </div>
    },
    {
        id: 39,
        nodeId: "39",
        question: "How to apply for GST number?",
        aid: "39039",
        answer: <div>
            <p>Below mentioned taxpayers have to apply for GST registration:</p>
            <ul style={{ marginLeft: "2rem" }}>
                <li>Enter your contact details, including your email ID</li>
                <li>Enter your PAN or Permanent Account Number Details</li>
                <li>Draft the required documents</li>
                <li>Complete the online payment</li>
                <li>Start uploading your documents</li>
                <li>Generate the ARN</li>
            </ul>
        </div>
    },
    {
        id: 40,
        nodeId: "40",
        question: "How Much Does GST registration cost?",
        aid: "40040",
        answer: "Goods & Service Tax or GST in India refers to the indirect taxation regime currently in effect in India. Existing GST laws mandate that a business must apply for GST registration upon meeting specified criteria. Virtual Auditor experts can help you complete GST registration in an easy manner.  "
    },
    {
        id: 41,
        nodeId: "41",
        question: "Who can register for GST?",
        aid: "41041",
        answer: <div>
            <p>Here is a list of the individuals and entities who are required to apply for GST registration:</p>
            <ul style={{ marginLeft: "2rem" }}>
                <li>All registered individuals who followed the previous indirect taxation regimes (Service Tax, VAT, Excise, etc.)</li>
                <li>A taxable individual who deals with the supply of goods and whose business has an annual turnover exceeding ₹40,00,000.</li>
                <li>A taxable individual who deals with the supply of services and whose business has an annual turnover exceeding ₹20,00,000.</li>
                <li>Non-resident Taxable individuals and casual taxable persons</li>
                <li>Input service distributors and all agents of suppliers</li>
                <li>All individuals liable to pay tax under reverse charge tax laws</li>
                <li>Any individual who supplies using e-commerce aggregators</li>
                <li>All e-commerce aggregators</li>
            </ul>
        </div>
    },
    {
        id: 42,
        nodeId: "42",
        question: "How long does it take to get GST number?",
        aid: "42042",
        answer: "You can expect the entire GST registration process to take around 7-10 working days. You will be allotted your GST number by the end of this period."
    },
    {
        id: 43,
        nodeId: "43",
        question: "Taxation of imports under the GST regime",
        aid: "43043",
        answer: "The import of consumer goods shall fall under the ambit of IGST or Integrated Goods & Service Tax. GST is a destination-based tax and the incidence of tax occurs on this principle. SGST tax revenue belongs to the specific State where imported services and goods had been consumed. Complete and full set-off is available on any GST that has been paid on the import of services and goods."
    },
    {
        id: 44,
        nodeId: "44",
        question: "Taxation of exports under the GST regime ",
        aid: "44044",
        answer: "All exports are to be considered zero-rated supplies. Suppliers don’t need to pay any tax for exporting services or goods. However, exporters are allowed to claim ITC credit in the form of a refund. It is up to the exporter whether to pay output tax & claim an IGST refund or whether to export without paying IGST and claim ITC credit."
    },
    {
        id: 45,
        nodeId: "45",
        question: "Is PAN mandatory for GST registration",
        aid: "45045",
        answer: "PAN card has been declared mandatory for GST registration."
    },
    {
        id: 46,
        nodeId: "46",
        question: "Specific time periods prescribed for GST registration",
        aid: "46046",
        answer: "The GST regime comes into effect on July 1. GST registration may be done till January 31."
    },
    {
        id: 47,
        nodeId: "47",
        question: "Is it possible to claim a refund of GST interest after 2 years have elapsed since the payment?",
        aid: "47047",
        answer: "You cannot file a claim for a refund of GST interest after 2 years have elapsed since the payment."
    },
    {
        id: 48,
        nodeId: "48",
        question: "When are GST regulations applicable for your business?",
        aid: "48048",
        answer: "You need to apply for GST registration if the annual turnover of your business exceeds ₹20,00,000. However, this threshold limit has been lowered to ₹10,00,000 for businesses in states in the North East, namely, Tripura, Nagaland, Mizoram, Meghalaya, Manipur, Assam, and Arunachal Pradesh, and hilly states like Sikkim, Jammu & Kashmir, Uttarakhand, and Himachal Pradesh."
    },
    {
        id: 49,
        nodeId: "49",
        question: "Define Casual Taxable Person?",
        aid: "49049",
        answer: "Any person who supplies services or goods in taxable territories as an agent or as a principal or in some other capacity where the provisions of the GST Act are applicable but don’t maintain any fixed place or centre of business are defined to be Casual Taxable Persons, as per the GST Act."
    },
    {
        id: 50,
        nodeId: "50",
        question: "Exemption from GST registration",
        aid: "50050",
        answer: "Input Tax Credit under GST. Input Tax Credit or ITC is the tax that a business pays on a purchase and that it can use to reduce its tax liability when it makes a sale. In other words, businesses can reduce their tax liability by claiming credit to the extent of GST paid on purchases."
    },
    {
        id: 51,
        nodeId: "51",
        question: "What is an Input Tax Credit in the Context of GST LAw?",
        aid: "51051",
        answer: <>
            <div>
                <p>These individuals and entities are exempt from having to obtain GST registration. They are allotted Unique Identification Numbers or UINs instead. They may be entitled to receive tax refunds on the supply of notified services or goods they receive.</p>
                <ul style={{ marginLeft: "2rem" }}>
                    <li>A United Nations Organization or a multilateral financial organization or institution, as defined by the UN Act, 1947, embassies or consulates of different foreign countries.</li>
                    <li>Individuals notified by the GST Commissioner/Board.</li>
                </ul>
            </div>
            <div>
                <p>The State Government or Central Government is empowered to notify specific persons as being exempt from registration, after considering recommendations issued by the Indian GST Council. Can unregistered individuals collect GST?</p>
                <p>No, unregistered individuals cannot collect GST.</p>
            </div>
        </>
    },
    {
        id: 52,
        nodeId: "52",
        question: "What is the registration process for GST in India?",
        aid: "52052",
        answer: <div>
            <p>You can complete GST registration in India in 3 simple steps and get your number allotted:</p>
            <ul style={{ marginLeft: "2rem" }}>
                <li>Draft your application</li>
                <li>Generate the ARN</li>
                <li>Your GST number will be allotted to you next.</li>
            </ul>
        </div>
    },
    {
        id: 53,
        nodeId: "53",
        question: "Can individuals who lack GST registration collect tax and claim ITC?",
        aid: "53053",
        answer: "Unregistered individuals are not allowed to collect tax or claim ITC."
    },
    {
        id: 54,
        nodeId: "54",
        question: "Are small retailers, who purchase from wholesalers/dealers required to complete GST registration?",
        aid: "54054",
        answer: "No, small retailers are under no obligation to complete GST registration if their purchases are from wholesalers/dealers."
    },
    {
        id: 55,
        nodeId: "55",
        question: "Is the EOU scheme in India still in existence after GST implementation?",
        aid: "55055",
        answer: "The GST Act lacks enough information about the future of Export Oriented Units or EOUs. The future course of action must be decided after considering the FTP alone."
    },
    {
        id: 56,
        nodeId: "56",
        question: "GST Registration Annual Turnover Threshold Limit",
        aid: "56056",
        answer: "All individuals/entities whose annual turnover exceeds ₹20,00,000 are liable to get themselves registered for GST."
    },
    {
        id: 57,
        nodeId: "57",
        question: "Can GST registration only be completed with a current account?",
        aid: "57057",
        answer: "A current account is purely the discretion of the business. GST registration procedures do not mandate that businesses have current accounts."
    },
    {
        id: 58,
        nodeId: "58",
        question: "Is GST compulsory for online vendors?",
        aid: "58058",
        answer: "GST isn’t compulsory unless your annual turnover is in excess of ₹20,00,000."
    },
    {
        id: 59,
        nodeId: "59",
        question: "Is it possible to issue a GST invoice if I haven’t yet completed my GST registration?",
        aid: "59059",
        answer: "No, you cannot do so."
    },
    {
        id: 60,
        nodeId: "60",
        question: "Is GST registration mandatory for eCommerce startups?",
        aid: "60060",
        answer: "Yes, GST registration is compulsory for all ecommerce startups."
    },
    {
        id: 61,
        nodeId: "61",
        question: "Can GST registration be canceled?",
        aid: "61061",
        answer: "In the event of a modification to the business’s constitution or termination of the business, its GST registration stands cancelled."
    },
    {
        id: 62,
        nodeId: "62",
        question: "What is Reverse Charge?",
        aid: "62062",
        answer: "Reverse charge places the liability of paying GST upon the beneficiaries of the supply of services and goods instead of the suppliers, as is prescribed as the default in other sections of the GST Act."
    },
    {
        id: 63,
        nodeId: "63",
        question: "Can the tax paid in one Indian state be claimed for ITC purposes in a different state?",
        aid: "63063",
        answer: "When firms are registered across different states, it is considered to be a separate entity in each State it is registered in. Cross utilization of ITC isn’t permitted between 2 distinct registered persons."
    },
    {
        id: 64,
        nodeId: "64",
        question: "What is GST?",
        aid: "64064",
        answer: "Goods and Services Taxes (GST) is an Indirect tax levied on most goods and services sold for domestic consumption. Consumers pay the GST, but it is forwarded to the government by the businessmen selling the products and services. Primarily, GST generates revenue for the government."
    },
    {
        id: 65,
        nodeId: "65",
        question: "When GST registration is compulsory?",
        aid: "65065",
        answer: <div>
            <p>GST Registration is not compulsory for agriculturists who involved in the cultivation and supply of agricultural products, making supplies that are fully covered under reverse charge or making only exempt supplies of goods and services. Small taxpayers benefit a lot by registering under the GST composition scheme because it lessens their tax burden. Although, the below-mentioned individuals and businesses must complete GST Registration:</p>
            <ol style={{ marginLeft: "2rem" }}>
                <li>Those have been registered under the earlier taxation laws (VAT, Service Tax, Excise, etc.)</li>
                <li>Businesses having turnover higher than specific threshold limit (Rs. 40 lakh for small enterprises and Rs. 10 lakh for the North Eastern States, Uttarakhand, Himachal Pradesh, Jammu & Kashmir, as per new regulations).</li>
                <li>If a business is making inter-state sales</li>
                <li>If a business participating in an event/trade fair even outside the State as a casual taxpayer</li>
                <li>If a business wants to raise a tax invoice for its customers</li>
                <li>Non-Resident Taxable Person and Casual Taxable Person</li>
                <li>Those who pay tax under reverse charge mechanism</li>
                <li>Individuals involving in e-commerce or supply goods through e-commerce platforms.</li>
            </ol>
            <p>Individuals involving in the import or export business  </p>

            <h4>GST registration process</h4>
            <p>Here is how you can register for GST, go to GST portal: https://reg.gst.gov.in/registration/</p>

            <ul style={{ marginLeft: "2rem" }}>
                <li>Enter the details whether you are a Taxpayer/GST Practitioner/Tax Deductor, the State/UT and District you reside, Name of the taxpayer/GST practitioner, etc., as stated in the PAN card, PAN number, E-mail ID, and phone number to fill out GST REG-01 and submit the same</li>
                <li>Get an E-Mail and Mobile OTP to verify and login to the account</li>
                <li>Save the application reference number [ARN] sent to your phone number and e-mail ID after verification</li>
                <li>Fill out GST ARN number and attach supportive documents where needed</li>
                <li>Complete the automatically generated form GST REG-03 in case further information is needed</li>
                <li>After verifying of all information provided, a certificate of registration will be issued within three working days</li>
            </ul>
        </div>
    },
    {
        id: 66,
        nodeId: "66",
        question: "What is GSTIN?",
        aid: "66066",
        answer: <>
            <div style={{ marginTop: "2rem" }}>
                <p>GSTIN is the abbreviation for Goods and Service Tax Identification Number. It consists of 15 digits and will get generated from the GST portal when a person or entity successfully applied for GST registration.</p>
                <ul style={{ margin: "2rem" }}>
                    <li>First, two digits denote the State in which business is registered under GST</li>
                    <li>Next ten Digits indicates PAN of the business</li>
                    <li>The thirteenth digit shows the number of businesses placed in the same State</li>
                    <li>Last two digits are generated randomly.</li>
                </ul>
            </div>
            <div style={{ marginTop: "2rem" }}>
                <h4>Documents required for GST registration</h4>
                <p>The documents needed to be based on the type of business you are operating. Below documents are necessary for GST Registration: -</p>
                <ul style={{ margin: "2rem" }}>
                    <li>Permanent Account Number (PAN) of the business entity</li>
                    <li>Passport Size Photograph</li>
                    <li>Aadhar card or Driving License or Passport</li>
                    <li>Address proof of business premises</li>
                    <li>Bank Statement or Cancel cheque or Passbook</li>

                </ul>
            </div>
            <div style={{ marginTop: "2rem" }}>
                <p>  Additional documents are required for Private Limited Company /OPC /LLP/ Partnership Firm</p>
                <ul style={{ margin: "2rem" }}>
                    <li>Certificate of Incorporation in case of Limited Liability Company, OPC or LLP</li>
                    <li>Partnership Deed in case of partnership firm</li>
                    <li>Opening page of Bank statement held in the name of Business or Proprietor.</li>
                    <li>Letter of authorisation or board resolution</li>
                </ul>
            </div>
        </>
    },
    {
        id: 67,
        nodeId: "67",
        question: "Can I voluntarily get registered under GST?",
        aid: "67067",
        answer: <p>Yes, businesses having turnover lesser than 40 and 20 Lacs can also register under GST, there is no restraint on registration if turnover is below (40/20 Lacs) but, if turnover is higher than prescribed limit, then registration is mandatory.
            Registering your business under the GST not only supports you in getting your business acknowledged being legally registered but also aid you to avail different benefits like to raise GST Invoice, input tax credit, and many more.
            Turnover comprises the aggregate value of all taxable supplies + inter-state supplies + exempt supplies + export of goods or services or both + It includes supplies made by a person on behalf of his principals (excludes the value of job-worked goods if he is a job-worker)
            Aggregate turnover can be computed by counting all the supplies made by a business having the same PAN number based on all India.    </p>
    },
    {
        id: 68,
        nodeId: "68",
        question: "When a business requires obtaining multiple GSTINs?",
        aid: "68068",
        answer:
            <div style={{ marginTop: "1rem" }}>
                <p>An enterprise requires to obtain multiple GST numbers if,</p>
                <ul style={{ margin: "2rem" }}>
                    <li>An enterprise is supplying goods & services from various States; then it compulsorily needed to register under GST in various States.</li>
                    <li>Moreover, any enterprise can take several GSTIN even if they are running from a particular State under various verticals to simplify accounting complexity among different businesses.</li>
                </ul>
                <p>For instance, ABC LLC involves in the business of selling clothes and software from Bangalore alone. Nevertheless, ABC LLC can use for different GST numbers for their various business fields.</p>
            </div>
    },
    {
        id: 69,
        nodeId: "69",
        question: "What is the penalty for not registering under GST?",
        aid: "69069",
        answer: "All the entities and individuals and who meet the eligibility requirements are required to go for GST Registration. Defaulters who neglect to follow the rules and do not pay the tax or make default in payments instead of full refund are liable to pay the penalty. The penalty for tax avoidance by a defaulter will be hundred per cent of the tax amount due. The penalty for not registering under GST is ten per cent of the total tax amount payable subject to a minimum of Rs. 10,000."
    },
    {
        id: 70,
        nodeId: "70",
        question: "What GST rate will apply to my commercial activities",
        aid: "70070",
        answer: "GST rate ranges from 0% to 28% depending on the nature of goods and services you are selling."
    },
    {
        id: 71,
        nodeId: "71",
        question: "Can I apply for GST on my business name?",
        aid: "71071",
        answer: "Yes, in case of an individual or sole proprietorship, you are free to apply for GST registration on your business name. Moreover, you can use your personal name as well"
    },
    {
        id: 72,
        nodeId: "72",
        question: "Can I trade both Goods/Services with one GSTIN?",
        aid: "72072",
        answer: "Yes, you can trade both Goods/Services with one GSTIN, provided you have included such Goods/Services when registering for GST."
    },
    {
        id: 73,
        nodeId: "73",
        question: "Is the current account is necessary for a business registration under GST?",
        aid: "73073",
        answer: "No, current, as well as savings accounts, can be used for registration under GST"
    },
    {
        id: 74,
        nodeId: "74",
        question: "Can I receive a GST certificate at my house address?",
        aid: "74074",
        answer: "Sure, you can commence a business from house address. You need to furnish proof of your house address for registration under GST."
    },
    {
        id: 75,
        nodeId: "75",
        question: <p>What to do after getting the GST Registration number?
            One of the most obvious question businessmen usually asks, i.e. what is the compliance after getting GST certificate?</p>,
        aid: "75075",
        answer: <div style={{ marginTop: "1rem" }}>
            <p>Following compliances, you need to do after getting GSTIN Number:</p>
            <ol style={{ margin: "2rem" }}>
                <li>Show and affix GST Certificate inside your business place.</li>
                <li>Use and issue GST compliant bills.</li>
                <li>File GST Returns on time.</li>
            </ol>
        </div>
    },
    {
        id: 76,
        nodeId: "76",
        question: "Do I have to charge GST from the customers",
        aid: "76076",
        answer: "Indeed, from the time you get GST registration certificate, you require to charge GST from customers on each sale done."
    },
    {
        id: 77,
        nodeId: "77",
        question: "What would be the result of incomplete/wrong details in filing GST Returns?",
        aid: "77077",
        answer: "Providing incomplete or wrong information when filing GST return can attract a penalty of up to Rs 25,000. CBIS has published circular no 89/80/2019-GST dt 18/02/2019 in this respect."
    },
    {
        id: 79,
        nodeId: "79",
        question: "What is GST Composition Scheme?",
        aid: "79079",
        answer: "GST Composition Scheme is a scheme created for small taxpayers to lessen the compliance onus. Small taxpayers can be free of tiring GST formalities and file GST at a fixed rate of turnover. Any individual or entity is having a yearly turnover of less than INR 2 Crores* can opt out composition scheme under when applying for GST registration.   *For Northeastern and hilly regions namely Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Tripura, Sikkim and Himachal Pradesh the threshold limit is INR 1 Crore."
    },
    {
        id: 80,
        nodeId: "80",
        question: "What are the advantages and disadvantages of GST Composition Scheme?",
        aid: "80080",
        answer: <>
            <div style={{ margin: "1rem" }}>
                <h4>Advantages of GST Composition scheme</h4>
                <ol style={{ marginLeft: "2rem" }}>
                    <li>Require to file a single quarterly return, i.e. four returns in one year</li>
                    <li>Few compliances</li>
                    <li>Low tax burden</li>
                    <li>Low tax on turnover (5% for restaurant and 1% for traders)</li>
                    <li>No requirement to maintain detailed records</li>
                    <li>Can render auxiliary services maximally INR 5 lakhs yearly under the composition scheme.</li>
                </ol>
            </div>
            <div>
                <h4>Disadvantages of GST Composition scheme</h4>
                <ol style={{ marginLeft: "2rem" }}>
                    <li>Cannot claim an input tax credit of purchases made</li>
                    <li>Cannot issue a tax invoice</li>
                    <li>Cannot charge composition tax on the invoice from the customer as usual practice in case of standard GST scheme</li>
                </ol>
            </div>
        </>
    },
    {
        id: 81,
        nodeId: "81",
        question: "Who cannot opt for composition scheme?",
        aid: "81081",
        answer: <div>
            <ol style={{ marginLeft: "2rem" }}>
                <li>If Annual turnover exceeds INR 1.5 Crores</li>
                <li>If you involved in Inter-State supplies</li>
                <li>All Service Sector Business except restaurant</li>
                <li>Importer of goods & services</li>
                <li>E-commerce sellers</li>
                <li>Supplier of non-taxable goods</li>
                <li>Manufacturer of Notified Goods</li>
            </ol>
        </div>
    },
    {
        id: 82,
        nodeId: "82",
        question: "Is Digital Signature Required for GST registration?",
        aid: "82082",
        answer: "Yes, Digital Signature Certificate is needed for Private limited, Public limited, LLP or OPC."
    },
    {
        id: 83,
        nodeId: "83",
        question: "Who should file GST Returns and what are the various types of GST Returns?",
        aid: "83083",
        answer: "A GST Return is a record stating particulars of income a taxpayer is obligated to file with the relevant tax authority on the basis which the tax burden will be determined. Filing GST returns is a responsibility which requires to be performed by every business under the GST system. Businesses registered under GST must file monthly and annual returns that can be done online. A registered trader requires filing GST returns involving sales, purchases, outputting GST (on sales) and inputting tax credit (GST paid on purchases). The benefit of the system is that one has to enter details of one monthly return – GSTR-1 manually. Then, the other return GSTR 3B will get automatically filled by obtaining data from GSTR-1 filed by you and your dealers. Under the GST regime, any established enterprise has to file two returns per month and one yearly return. It computed to 26 returns annually. The different kinds of GST return filed by taxpayers are GSTR-1, GSTR-2, GSTR-2A, etc."
    },
]


