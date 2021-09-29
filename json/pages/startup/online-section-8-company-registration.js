import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const S8CRO = {
    title: <p style={{ fontSize: Fonts.h1 }}>Section 8 Company Registration Online</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10,fontSize:Fonts.h4  }}>What to start an NGO then Section 8 Company registration online Virtual Auditor can help you register Section 8 Company in India in just Rs.12899 in about 20 days.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Starting at Rs.12,899/-</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>
        }
    ]


}


export const HTISC = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>How To Incorporate Section 8 Company?</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10,fontSize:Fonts.h4  }}>Section 8 Company is an organization which is registered for charitable purposes; it can also be referred to as a Non-Profit Organisation (NPO) or NGO. It is an organization designated to promote arts, literature, commerce, charity, education, protection of the environment, science, social welfare, religion, research, sports, and aims to utilize its profits, if any, or any other income in furthering its objects. Section 8 companies function precisely like a limited liability company, particularly concerning all the rights and duties that arise with limited liability companies.
        Although it is different from a limited liability company in one very significant feature, i.e. it could not use the words “Limited” or “Section 8” in its name. The income of the Company must be utilized to support only charitable purposes, and the Company cannot pay any profit to its members. The Central Government gives a certificate of incorporation to all such companies and also imposes some conditions and restrictions. In the event they don’t meet them, the Central Government may direct them to wind up the Company. In case fraud allegations are proved, legal action will be brought against all members of the Company. According to rule 8(7) of the Companies (Incorporation) Rules, 2014, Section 8 companies name shall include the words Academy, Association, Chambers, Confederation, Council, Charities, Development, Electoral Trust, Foundation, Federation, Forum, Organisation, Society and the like etc.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h4, marginTop: 20 }}>Name For Company registration</p>
        },
        {
            id: 2,
            imageSrc: <Image src={name} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h4, marginTop: 20 }}>Register All Directors To MCA</p>
        },
        {
            id: 3,
            imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h4, marginTop: 20 }}>Draft Documents</p>
        }
    ]
}


export const MRTRPLSC = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>REGISTRATION PROCESS OF SECTION 8 COMPANY
    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <strong>Step 1:</strong> Get Name Approval in RUN Form
                Applications would be filed with the ROC to obtain the Name of the company and DSC for the Directors. Once DSC received to proceed with company registration just like itd done with a private limited company Registration
            </p>,
            hr: true,
            underline: false

        },
        {
            id: 2,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <strong>Step 2:</strong> Apply for License & COI
                File Form INC-12 with the ROC after name approval to apply for a license for the Section 8 Company now the same has been merged with SPICE 32 FORM
            </p>,
            hr: false,
            underline: false

        },
    ]
}


export const DTAWI12 = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>DOCUMENTS TO ATTACH WITH INC-12:
    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Draft MOA as per Form INC-13</li>
                    <li style={{ marginTop: 20 }}>Draft AOA</li>
                    <li style={{ marginTop: 20 }}>Declaration as per Form INC-14 (Declaration from Practicing Chartered Accountant)</li>
                    <li style={{ marginTop: 20 }}>Declaration as per Form INC-15 (Declaration from each person making application )</li>
                    <li style={{ marginTop: 20 }}>Estimated Income & Expenditure for the next three years.</li>
                </ol>
                <br />
                Every subscriber shall sign the subscription pages of the Memorandum and Articles of Association of the Company along with mentioning his name, address, and occupation, in the presence of at least one witness who shall attest the signature and sign and add his name, address, and occupation. SPICE Form 32 with the ROC for incorporation together with the following documents for section 8 company registration <strong>MCA</strong>
                <br />
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>An affidavit of all the director(s) cum subscriber(s) – INC-9</li>
                    <li style={{ marginTop: 20 }}>Declaration of deposits</li>
                    <li style={{ marginTop: 20 }}>KYC of all the Directors</li>
                    <li style={{ marginTop: 20 }}>Form DIR-2 with its attachments, i.e. PAN Card and address proof of the directors</li>
                    <li style={{ marginTop: 20 }}>Consent letter of all the directors</li>
                    <li style={{ marginTop: 20 }}>Interest in other entities of the directorss</li>
                    <li style={{ marginTop: 20 }}>Utility bill as a proof of Office address</li>
                    <li style={{ marginTop: 20 }}>NOC in case the premises is rented or leased</li>
                    <li style={{ marginTop: 20 }}>Draft MOA and AOA</li>
                </ol>
                <br />
                If the ROC is satisfied with the forms presented, he will issue a Certificate of Incorporation as well as a unique Company Identification Number (CIN).
            </p>,
            hr: false,
            underline: false

        },

    ]
}



export const S8CRC = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>SECTION 8 COMPANY REGISTRATION COST
    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                The Cost to register Section 8 Company online ranges from Rs 12,000 to Rs 18,000 for company registration  cheap section 8 company registration
            </p>,
            hr: false,
            underline: false

        },

    ]
}



export const AADOS8CR = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>ADVANTAGES AND DISADVANTAGES OF SECTION 8 COMPANY REGISTRATION
    </h1>,
    data: [
        {
            id: 1,
            subtitle: <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>Advantages of Section 8 Company</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                A section 8 company provides a range of benefits, unlike a Trust or Society. Following are the advantages of Section 8 companies:
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}><strong>Tax benefits: </strong>As Section 8 companies are not for profit, so they benefit the exemption from income tax under Sec. 80G of the Income Tax Act as well as various other tax deductions and benefits.</li>
                    <li style={{ marginTop: 20 }}><strong>Zero Stamp Duty:</strong> Section 8 companies do not require to pay stamp duty on the MoA and AoA, unlike a private or public limited company.</li>
                    <li style={{ marginTop: 20 }}><strong>Minimal share capital:</strong> in contrast to other limited companies like private, public, or one person, a Section 8 company does not require very much share capital to form the entity. The members can right away employ the funds from their donations or subscriptions.</li>
                    <li style={{ marginTop: 20 }}><strong>Separate legal entity:</strong> Section 8 company enjoys perpetual existence and distinct legal entity which implies the Company’s existence is separate from its members.
                    </li>

                </ul>
            </p>,
            hr: true,
            underline: true

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>Disadvantages of Section 8 Company Registration</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                Following are the weaknesses of the Section 8 Company:
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}><strong>No distribution of profits: </strong>The members of a Section 8 company cannot distribute the profits between themselves. The earnings employed only for the progress of the Company’s aspiration.</li>
                    <li style={{ marginTop: 20 }}><strong>Amendment in MOA and AOA: </strong>  A Section 8 company cannot amend/alter the MoA or the AoA without obtaining the approval of the Central Government.</li>
                    <li style={{ marginTop: 20 }}><strong>Zero benefits: </strong> The members of a Section 8 company do not get any perks or profits from the Company. They are only allowed to reimburse their pocket expenses.</li>
                    <li style={{ marginTop: 20 }}><strong>Limited objective:</strong> The primary aim of Section 8 companies is to utilise the profits and income of the Company in the promotion of particular fields only and not for other purposes.
                    </li>

                </ul>
            </p>,
            hr: false,
            underline: true

        },

    ]
}





export const AOTEFS8CR = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>APPLICABILITY OF TAX EXEMPTION FOR SECTION 8 COMPANY REGISTRATION

    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                There is a common misunderstanding that a Section 8 company does not require to pay taxes as they work for the welfare of society. A Section 8 company, like other legal entities, is responsible for paying taxes. For claiming exemption from taxes, a Section 8 company must receive certification, in particular, Section 12 A, 80G etc. from the IT Authorities.
            </p>,
            hr: false,
            underline: false

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>Compliances for Section 8 Companies Registration</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                Like other forms of companies registered under The Companies Act 2013, Section 8 Company is obligated to file compliances as required in the Act.
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Like other companies, a Section 8 company ought to comply with the yearly compliances.</li>
                    <li style={{ marginTop: 20 }}>In the event of non-compliance, the Company will be wielded as a dormant company, and it can be strike-through from the register.</li>
                    <li style={{ marginTop: 20 }}>A section 8 company is also obligated to do the CSR compliances and activities.
                    </li>
                    <li style={{ marginTop: 20 }}>A Section 8 Company is registered for promoting sports, art, science, religion, charitable activities, etc. These companies are in obligation to file annual and event-based (one-time) compliances with The Ministry of Corporate Affairs.
                    </li>

                </ul>
            </p>,
            hr: false,
            underline: false

        },

    ]
}


