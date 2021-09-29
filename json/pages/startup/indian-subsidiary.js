import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const SCRII = {
    title: <p style={{ fontSize: Fonts.h1 }}>Subsidiary Company Registration In India</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10,fontSize:Fonts.h4  }}>Subsidiary Company Registration also referred to as foreign company registration is governed by the  Companies Act 2013 defines a subsidiary as a company in which a foreign corporate body owns no less than 50% of the entire share capital. A Subsidiary Company is also known as a sister company, and the company which exercises control over it is identified as the parent company or holding company. The parent company wholly or partially controls a subsidiary company. Subsidiaries must follow the laws of the country in which they are set up and running. Therefore, if the foreign subsidiary incorporated in India, then it must follow the law in force in India.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Starting at Rs.29,399/-</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>
        }
    ]


}


export const HTISC = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>How To Incorporate Subsidiary Company?</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10,fontSize:Fonts.h4  }}>Registering a private limited company requires the support of CA/CS/Lawyer as the legal procedures are involved in it, <span style={{ color: Colors.link }}>company registration</span> a complicated process but does not worry our team of experts will guide you.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Register All Directors To MCA</p>
        },
        {
            id: 2,
            imageSrc: <Image src={name} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Select A Name For Company registration</p>
        },
        {
            id: 3,
            imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Draft Documents
                (MOA & AOA)</p>
        }
    ]


}

export const MRTRPLSC = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>MINIMUM REQUIREMENTS TO REGISTER A PVT. LTD. SUBSIDIARY COMPANY
    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <ul style={{ marginLeft: 20 }}>
                    <li style={{ marginTop: 20 }}>At least two directors and shareholders</li>
                    <li style={{ marginTop: 20 }}>DIN for every Directors</li>
                    <li style={{ marginTop: 20 }}>The parent company should hold 50% of the total equity capital.</li>
                </ul>
            </p>,
            hr: false,
            underline: false

        },
    ]
}

export const PFISRII = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>PROCEDURE FOR INDIAN SUBSIDIARY REGISTRATION IN INDIA
    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <span style={{ fontWeight: 'bold' }}>STEP 1: Name Approval: </span>Before an application for name approval, a foreign company has to choose the name based on followings:

                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>a) A subsidiary or WOS foreign company can take advantage of its goodwill by using word of its name registered in a foreign country for Incorporation of foreign Company in India.</li>
                    <li style={{ marginTop: 20 }}>b) A subsidiary company can apply for the same name as used in a foreign country by including the word “India” in its name.</li>
                    <li style={{ marginTop: 20 }}>c) If foreign company owning any registered trademark, then it can use that trademark for registration of Company in India..</li>
                    <li style={{ marginTop: 20 }}>d) Any other name as decided by the Foreign Company.
                    </li>
                </ol>
            </p>,
            hr: false,
            underline: false

        },
        {
            id: 2,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>
                Following are the documents/ information required for application of name by foreign company: In the case a foreign company wants to use its original name or trademark, then the following documents are required:
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>A resolution of NOC passed by the foreign company to use the original name or trademark of the company. The resolution should be apostilled in the foreign country where it has been passed.</li>
                    <li style={{ marginTop: 20 }}>Charter of the foreign company which is translated in the English language and apostilled or with a Certificate of Authentication</li>
                    <li style={{ marginTop: 20 }}>If using the trademark as name of the company, a copy of the trademark registration
                    </li>

                </ul>
            </p>,
            hr: false,
            underline: false

        },
    ]
}



export const DRFSCR = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>DOCUMENTS REQUIRED FOR SUBSIDIARY COMPANY REGISTRATION
    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>a) Apostilled or consularized copy of the resolution of the foreign company, mentioning the name of the authorized representative and number of subscribers of shares.</li>
                    <li style={{ marginTop: 20 }}>b) Apostilled or consularized copy of ID Proof of authorised representatives.
                    </li>

                </ol>
            </p>,
            hr: false,
            underline: false

        },
        {
            id: 2,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>
                <span style={{ fontWeight: 'bold' }}>For Indian Nationals</span>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>PAN Card </span>(mandatory)</li>
                    <li style={{ marginTop: 20 }}>Address proof</li>
                    <li style={{ marginTop: 20 }}>Photo ID Proof</li>

                </ul>
            </p>,
            hr: false,
            underline: false

        },
        {
            id: 3,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>
                <span style={{ fontWeight: 'bold' }}>  For Foreign Nationals</span>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Passport</li>
                    <li style={{ marginTop: 20 }}>Address Proof (The Indian Consulate must certify the document)</li>
                    <li style={{ marginTop: 20 }}>Photo ID Proof (The Indian Consulate must approve the document)</li>

                </ul>
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>c) Apostilled or consularized copy of the Charter of foreign company.</li>
                    <li style={{ marginTop: 20 }}>d) Name of one resident director.</li>
                    <li style={{ marginTop: 20 }}>e) Name of Nominee (in case of incorporation of WOS)</li>
                </ol>
            </p>,
            hr: false,
            underline: false

        },
    ]
}


export const IA = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>INCORPORATION APPLICATION

    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>After name approval for incorporation of the company applicant have to prepare the below-mentioned Documents;</li>
                    <li style={{ marginTop: 20 }}>MoA of the Company (hardcopy of MOA duly Apostilled or consularized in the country of origin.</li>
                    <li style={{ marginTop: 20 }}>AoA of the Company (hardcopy of AOA duly Apostilled or consularized in the country of origin).</li>
                    <li style={{ marginTop: 20 }}>INC-9 declaration from the first subscriber(s)/director(s) (duly Apostilled or consularized in the country of origin).</li>
                    <li style={{ marginTop: 20 }}>DIR-2 declaration from the first Directors along with a copy of proof of identity and address. (Duly Apostilled or consularized in the country of origin).</li>
                    <li style={{ marginTop: 20 }}>Foreign subscribers declaration of not having PAN. (Duly Apostilled or consularized in the country of origin).</li>
                    <li style={{ marginTop: 20 }}>Property owner NOC.</li>
                    <li style={{ marginTop: 20 }}>Office address proof (Lease deed/Conveyance/Rent Agreement etc. together with rent receipts);</li>
                    <li style={{ marginTop: 20 }}>Utility bills (no more than two months)</li>
                    <li style={{ marginTop: 20 }}>In case of the subscriber(s)/ Director(s) not having a DIN, it is compulsory to attach: proof of identity and address proof of the subscriber(s)/ Director (Duly Apostilled or consularized in the country of origin)</li>
                    <li style={{ marginTop: 20 }}>Digital Signature of only one subscriber is sufficient for incorporation of the company.</li>
                    <li style={{ marginTop: 20 }}>DIR-2 from the Resident Director along with a self-attested copy of PAN and residential address proof.</li>
                </ol>
                <br />
                After approval of the incorporation application, the registrar would issue a Certificate of incorporation along with a Corporate Identification Number (CIN). Then the PAN and TAN of the Company would be assigned.

            </p>,
            hr: false,
            underline: false

        },

    ]
}





export const FDIII = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>FOREIGN DIRECT INVESTMENT IN INDIA
    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                Although foreign entrepreneurs can easily invest in the country, those who are interested in how to form a company in India should consider several aspects before starting their business here. This is because, in certain circumstances, foreign investors (and foreign shareholders) must obtain approval for their investment projects from local institutions.
                Depending on the investment sector that is of interest for foreign businesspeople, prior approval may be needed from the <strong>Reserve Bank of India (RBI) or the   Foreign Investment Promotion Board. Our team of experts, </strong>practised in any matter relating to the procedure of <strong>   company registration in India</strong>, can offer guidance on the business areas that need government approval.
                Approval requires to be taken from the <strong>RBI </strong>for the <strong>registration of the subsidiaries </strong>appointing foreign directors. So, any newly formed business receiving Foreign Direct Investment (FDI) must obtain the approval from the RBI.
                A <strong>subsidiary company</strong>is legally obliged to submit the FCGPR Reporting Form with the<strong> RBI </strong>when obtaining funds from a foreign <strong>parent company</strong>. The procedure must be finished within 30 days since the local subsidiary received the funds. Another requirement is the issuance of shares; a process that must be completed within 90 days after the <strong>subsidiary </strong>received the funds.
                <br />
                <strong>FDI LIMITS </strong>100% FDI is permitted in numerous business enterprises/sectors without any prior approval. FDI is not permitted in Proprietorships or Partnerships; LLPs requires prior Government approval. The following areas require prior Government Approval for investment by a subsidiary company:
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Asset Reconstruction Companies</li>
                    <li style={{ marginTop: 20 }}>Atomic minerals</li>
                    <li style={{ marginTop: 20 }}>Broadcasting</li>
                    <li style={{ marginTop: 20 }}>Courier Services</li>
                    <li style={{ marginTop: 20 }}>Defence and strategic industries</li>
                    <li style={{ marginTop: 20 }}>Development of Integrated Township</li>
                    <li style={{ marginTop: 20 }}>Establishment and operation of Satellite</li>
                    <li style={{ marginTop: 20 }}>Investing in companies in Infrastructure</li>
                    <li style={{ marginTop: 20 }}>Petroleum sector (except for private sector oil refining), Natural gas / LNG pipelines.</li>
                    <li style={{ marginTop: 20 }}>Postal Services</li>
                    <li style={{ marginTop: 20 }}>Print Media</li>
                    <li style={{ marginTop: 20 }}>Tea Sector</li>
                </ul>
            </p>,
            hr: false,
            underline: false

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 40 }}>In the following sectors, FDI not permitted:</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Animal Husbandry</li>
                    <li style={{ marginTop: 20 }}>Atomic Energy</li>
                    <li style={{ marginTop: 20 }}>Atomic Minerals</li>
                    <li style={{ marginTop: 20 }}>Basic Agriculture or plantations activities or Agriculture (excluding Floriculture, Horticulture</li>
                    <li style={{ marginTop: 20 }}>Cultivation of Vegetables, Mushrooms etc. under controlled conditions and services related to agro and allied sectors) and</li>
                    <li style={{ marginTop: 20 }}>Gambling and Betting</li>
                    <li style={{ marginTop: 20 }}>Lottery</li>
                    <li style={{ marginTop: 20 }}>Plantations (other than Tea plantations).</li>
                    <li style={{ marginTop: 20 }}>Postal Service</li>
                    <li style={{ marginTop: 20 }}>Railways</li>
                    <li style={{ marginTop: 20 }}>Seeds Development</li>
                </ul>
                <br />
                <strong>Advantages of opening an Indian subsidiary </strong>There is a lot of interest from foreign companies to commence their operations in India and access to one of the strongest-growing and most significant markets and take advantage of some of the best human capital assets in the world. Cities in India like Ahmedabad, Bangalore, Pune, Hyderabad, are becoming popular IT hubs to start an IT company in India.
                A foreign national or an entity registered in a foreign country can invest in India and incorporate a Company in India by the acquisition of shares of the company, depending on the FDI Policy of India. Once operations commenced, funds can be repatriated easy and quickly. Following are the advantages of incorporating a subsidiary in India<br />
                <strong>Independent legal structure:</strong> the subsidiary is a separate structure from its parent company,and it is regulated according to Indian law  <br />
                <strong>Transfer of shares:</strong> shares held by a shareholder can be readily transferred to another party by signing a form of transfer of shares and share certificates <br />
                <strong>Acquire property in India:</strong> the subsidiary is an independent structure; it is permitted to buy properties in India   <br />
                <strong>Incorporation with foreign direct investments:</strong> as previously mentioned, FDI is generally allowed for Indian subsidiaries, and applies to most commercial activities that are available in India.  <br />
                <strong>Annual Compliances of Indian Subsidiary Company </strong>Indian subsidiaries are required to comply with the Income Tax Act, the Companies Act, FEMA guidelines and transfer guidelines on prices. From time to time, they had to file income tax with the Income Tax Department, the annual return to the Registrar of Companies and other required documents with the Reserve Bank of India or Securities and Exchange Board of India (SEBI). They should also comply with additional regulations such as TDS regulations, GST rules and ESI regulations etc. The requirement is based on the type of industry, the number of employees and turnover.  <br />
                <strong>Why choose our services? </strong>We know that sometimes fulfilling legal requirements/documentation might be technical and challenging. We can help you to incorporate foreign companies in India with the local institutions. And can answer any question relating to the main characteristics of each one of the two business forms relating to Subsidiary Company registration.
            </p>,
            hr: false,
            underline: false

        },

    ]
}



export const FAQSCRII = {
    title: <h1 style={{ fontSize: Fonts.h2, marginBottom: 20 }}>FAQ ON Subsidiary Company Registration IN INDIA
    </h1>,
    data: [{
        id: 1,
        nodeId: "1",
        question: "What are DIN and DSC?",
        aid: "101",
        answer: <div>
            <p style={{ lineHeight: 2 }}>
                Director Identification Number (DIN) is a unique number for the identification of a director of a company. When any person is designated as a company director, the DIN must be mentioned in all relevant documentation.<br />
                A digital signature certificate or a DSC is an electronic signature of a person in an encrypted form. It is used for the signing e-forms (electronic when filing documents for company registration.
            </p>
        </div>
    },
    {
        id: 2,
        nodeId: "2",
        question: "What Is A Wholly Owned Subsidiary?",
        aid: "202",
        answer: <p style={{ lineHeight: 2 }}>
            A Wholly Owned Subsidiary (WOS) is a legal entity whose entire share ownership is in the hands of a foreign company.</p>
    },
    {
        id: 3,
        nodeId: "3",
        question: "What Is Automatic Route?",
        aid: "303",
        answer: <p style={{ lineHeight: 2 }}>The <strong>automatic route </strong>means more liberalised or less restricted regulations. By virtue of <strong>Automatic Route</strong>, a foreign investor or an Indian company does not need any permission from the RBI or Government of India for the investment. A post facto intimation is only needed to RBI within 30 days of shares being allotted to foreign investors.</p>
    },
    {
        id: 4,
        nodeId: "4",
        question: "Can foreign nationals/NRIs hold shares in an Indian subsidiary?",
        aid: "404",
        answer: <p style={{ lineHeight: 2 }}>Yes. Whereas the FDI guidelines issued by the government need to be followed before issuing shares to foreign nationals/NRIs.</p>
    },
    {
        id: 5,
        nodeId: "5",
        question: <strong>Whether a foreign company can use E-AoA and E-MoU for the incorporation of Indian subsidiary?</strong>,
        aid: "505",
        answer: <p style={{ lineHeight: 2 }}>No, AoA and MoA which have been signed by foreign nationals must be duly apostilled/notarised in the home country. This is according to the provision of Rule 13(5) Company (Incorporation) Rules under the Companies Act, 2013.
        </p>
    },
    {
        id: 6,
        nodeId: "6",
        question: <strong>Is there any qualification for an individual to be appointed as a director of an Indian Subsidiary?</strong>,
        aid: "606",
        answer: <p style={{ lineHeight: 2 }}>There is no required qualification for a person to be a director of an Indian Subsidiary and any individual over the age of 18 can become a director of an Indian Subsidiary.
        </p>
    },
    {
        id: 7,
        nodeId: "7",
        question: "Do we require a resident Indian to be a director of an Indian company?",
        aid: "707",
        answer: <p style={{ lineHeight: 2 }}><strong>Yes</strong>, every business to be incorporated in India obligated to have at least one Indian resident individual as a director. We will assist you with this if you need any assistance.</p>
    },
    {
        id: 8,
        nodeId: "8",
        question: "We do not wish to allot any shares to Indian resident Director. Is that allowed?",
        aid: "808",
        answer: <p style={{ lineHeight: 2 }}>
            <strong> Yes</strong>, a director doesn't also need to be a shareholder in Indian Company. As we have already stated, you as a foreign national or foreign company can retain hundred per cent ownership of Indian Company.
        </p>
    },
    {
        id: 9,
        nodeId: "9",
        question: "We are a company operational outside India. Can we begin a business in India and hold hundred of ownership?",
        aid: "909",
        answer: <p style={{ lineHeight: 2 }}>
            <strong>Yes</strong>, we call it wholly-owned Indian subsidiary company of Foreign Parent Company. Indian Laws permit you to hold a hundred per cent shareholding by subscribing to the shares of the Indian company.
        </p>
    },
    {
        id: 10,
        nodeId: "10",
        question: "Can a non-resident become a director of an Indian Company?",
        aid: "10010",
        answer: <p style={{ lineHeight: 2 }}>
            Yes, an Indian company must have at least two directors (one of them must be Indian Resident director). You can have more than one director as a non-resident director of an Indian Company’s board.
        </p>
    },
    {
        id: 11,
        nodeId: "11",
        question: "What is an Apostille?",
        aid: "11011",
        answer: <p style={{ lineHeight: 2 }}>
            An Apostille is simply the name of a special certificate issued by the Secretary of State. The Apostille is attached to your document original to verify that it is legitimate and authentic it will be accepted other countries that are members of the Apostille Convention. India is a member of the Hague Convention 1961 since 2005, which abolished the requirement of legalisation for foreign public documents. Besides, the Apostille certificate can be used to authenticate public documents such as business documents, judgments, passport copy, driver's license copy, notarial attestation or an extract of a register. If a document Apostilled in one member country, it will be acceptable in all the other 104 member-countries, a signatory to the referred convention of 1961 dramatically simplifies the process of attestation by making it unnecessary to get the documents attested in each of the countries individually.
        </p>
    },
    {
        id: 13,
        nodeId: "13",
        question: "Do we require to hire a full-time CA or CS for Subsidiary Company registration?",
        aid: "13013",
        answer: <p style={{ lineHeight: 2 }}>
        yes, you do not require to hire a full-time CA or CS for Subsidiary <strong>Company Registration</strong></p>
    },
    {
        id: 15,
        nodeId: "15",
        question: "In how much time an Indian Subsidiary Company can be registered in India?",
        aid: "15015",
        answer: <p style={{ lineHeight: 2 }}>Ordinarily, within 15 business days</p>
    },
   
    ]
}