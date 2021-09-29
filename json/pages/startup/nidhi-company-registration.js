import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const NCR = {
    title: <p style={{ fontSize: Fonts.h1 }}>Nidhi Company Registration</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10,fontSize:Fonts.h4  }}>The purpose of registration of Nidhi Company is to promote savings as well as austerity among its members. The word “Nidhi” is a commonly used Hindi word that means “treasure”. Nidhi Company is a type of Non-Banking Financial Company (NBFC), and RBI holds the authority to issue directions to them regarding deposit acceptance policies. Although, since Nidhis Company deals with their shareholder/members only, RBI has excused them from the main provisions of the RBI and other regulations applied to NBFCs. Consequently, Nidhi Company is a perfect entity to receive a deposit and lend to a definite group of people.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Starting at Rs.34,199/-</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>
        }
    ]


}

export const HTINC = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>How To Incorporate Nidhi Company?</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10,fontSize:Fonts.h4  }}>Registering a private limited company requires the support of CA/CS/Lawyer as the legal procedures are involved in it, company registration a complicated process but does not worry our team of experts will guide you. The Nidhi Company is authorised to borrow money from its members/subscribers, and give loans only to its members/subscribers. Accordingly, it is also described as Mutual Benefit Society because it serves for the common good and benefit of all its members. The Section-406 of the Indian Companies Act of 2013 and the Nidhi Rules, 2014 include the provisions for the governance and Nidhi limited company registration in India. The operations of the Nidhi Companies also come under the scope of RBI because the RBI can issue guidelines to direct financial measures and investments by the NBFCs, including Nidhi companies. Since the Nidhi Companies handle loans and deposits of its members only, RBI has given some exemptions to Nidhi companies. The loans are granted to the members at very affordable rates for objects like house construction and restoration. These are usually secured loans. The deposits received by Nidhis do not get good interest in comparison to the conventional banking system. we would see how to open a Nidhi Company, what is Nidhi limited registration process and various other things relevant to Nidhi Companies.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Raise deposit form</p>
        },
        {
            id: 2,
            imageSrc: <Image src={name} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Lend money to shareholders</p>
        },
        {
            id: 3,
            imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Minimum Capital of Rs. 5,00,00 /-</p>
        }
    ]


}


export const NCRPE = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>NIDHI COMPANY REGISTRATION PROCEDURE EXPLAINED</h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Registering a Nidhi company requires a support of CA/CS/Lawyer as the legal procedures are involved in it, it's a complicated process but do not worry our team of experts will take care of these issues</p>,
            hr: true,
            underline: false

        },
        {
            id: 2,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step1</span>: Apply RUN (Reserve Unique Name Form ) <span style={{ fontWeight: 'bold' }}>(Name Availability)</span></p>,
            hr: true,
            underline: false
        },
        {
            id: 2,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step2</span>: Obtain DSC and Form SPICE INC-32 (E Form used for Company Registration)</p>,
            hr: true,
            underline: false
        },
        {
            id: 3,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step3</span>: Drafting of MOA in SPICE INC - 33 and AOA In SPICE form company registration</p>,
            hr: true,
            underline: false
        },
        {
            id: 4,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step4</span>:  PAN and TAN Application Along with Form SPICE INC -32 (E Form used for Company Registration) </p>,
            hr: true,
            underline: false
        },
        {
            id: 5,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step5</span>: After completion of the above-mentioned process of company registration, RoC Issues Certificate of Incorporation</p>,
            hr: true,
            underline: false
        },
        {
            id: 6,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Now that you have understood the Steps involved, we will get into the intricate details of about Nidhi company registration and its procedures.
            </p>,
            hr: true,
            underline: false
        },

        {
            id: 8,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Important Points to Noted For Nidhi Company Registration</span> <br />Below are some points (provided in Rule-6 of the Nidhi Rules of 2014) are notable concerning the operation of Nidhi Companies in India:
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>20% per annum maximum interest rate can be charged by following the declining balance method.</li>
                    <li style={{ marginTop: 20 }}>A minimum of 200 members/subscribers has to be added within 12 months of completion of Nidhi registration process.</li>
                    <li style={{ marginTop: 20 }}>A Nidhi Company can not issue, debentures, preference shares, or any other debt instruments in any form.</li>
                    <li style={{ marginTop: 20 }}>A Nidhi Company cannot give loans without any security such as Gold, FD & LIC and Property.</li>
                    <li style={{ marginTop: 20 }}>Annual audit and tax returns are mandatory.</li>
                    <li style={{ marginTop: 20 }}>It cannot receive deposits from anyone or give loans to any individual or entity.</li>
                    <li style={{ marginTop: 20 }}>It is not permitted to carry out microfinance business and vehicle finance business in India.</li>
                    <li style={{ marginTop: 20 }}>Nidhi Companies cannot conduct any of the following business operations: lease financing, chit fund, insurance, hire purchase finance, or acquisition of corporate securities.</li>
                    <li style={{ marginTop: 20 }}>Nidhi Company can be started in about Rs. 25,000 only</li>
                    <li style={{ marginTop: 20 }}>Unencumbered deposits should be more than 10% of outstanding deposits.</li>
                </ul></p>,
            hr: false,
            underline: false
        },



    ]
}


export const DRFNCR = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>DOCUMENTS REQUIRED FOR NIDHI COMPANY REGISTRATION
    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><ul style={{ marginLeft: 20 }}>
                <li style={{ marginTop: 20 }}>Aadhaar Card and PAN card of all the directors</li>
                <li style={{ marginTop: 20 }}>Passport Size photos of all the directors</li>
                <li style={{ marginTop: 20 }}>ID proof of all the shareholders and designated directors</li>
                <li style={{ marginTop: 20 }}>Address proof of all the shareholders and directors (Aadhaar Card, Passport, Voter ID, Ration Card, and Utility Bill water/electricity/mobile).</li>
                <li style={{ marginTop: 20 }}>Address Proof of the Company should not be not older than two months</li>
                <li style={{ marginTop: 20 }}>No objection certificate from the owner if the property is rented</li>

            </ul></p>,
            hr: false,
            underline: false

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>Requirement before Nidhi Company Registration</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20, }}>DOCUMENTS REQUIRED :-
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Minimum seven number of shareholders/members</li>
                    <li style={{ marginTop: 20 }}>Minimum of three Directors</li>
                    <li style={{ marginTop: 20 }}>The minimum capital required Rs. Five lakhs</li>
                    <li style={{ marginTop: 20 }}>DIN for Directors</li>
                    <li style={{ marginTop: 20 }}>No issuance of Preference Shares</li>
                    <li style={{ marginTop: 20 }}>The company' objective shall be to nurture the habit of saving by accepting deposits from and loaning to its members for mutual benefit.</li>
                </ul>
            </p>,
            hr: false,
            underline: false

        },

    ]
}




export const NCRAI = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>NIDHI COMPANY REGISTRATION AN INSIGHT
    </h1>,
    data: [
        {
            id: 1,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Requirement after Nidhi Company Registration</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>The number of members/subscribers of the Nidhi Company must be at least 200 by the end of the first year</li>
                    <li style={{ marginTop: 20 }}>Net Owned Fund require to be more than Rs. 10 lakhs.</li>
                    <li style={{ marginTop: 20 }}>The ratio of the Net Owned Fund to Deposit should be over and above 1:20.</li>
                    <li style={{ marginTop: 20 }}>Unencumbered deposits should be more than 10% of outstanding deposits.</li>
                </ol>
            </p>,
            hr: false,
            underline: false

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>PROCESS OF NIDHI COMPANY REGISTRATION/How to open a NIDHI Company</h4>,
            hr: false,
            underline: false
        },
        {
            id: 3,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step1</span>:  Approval of the Name through ‘RUN’ facility You require to select three different names on the MCA website for the Nidhi Company. Only one out of three will be accepted for the Company by MCA. The selected names must be different and not resembling the names of other already existing companies. The approved name will remain valid for twenty days only according to Rule 8 of the Company Act. A Nidhi Company should have as a part of its name “Nidhi Limited” as the last words. For instance, Swayam Nidhi Limited.  </p>,
            hr: true,
            underline: false
        },
        {
            id: 4,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step2</span>: Applying Digital Signature Certificate (DSC) The Directors who may also be the applicant or promoter of the Nidhi company are required to apply for the Class 2Digital Signature Certificate (DSC). The Ministry of Corporate Affairs (MCA) issue DSC. DSC is used for all e-filing purposes. The step can be bypassed for the Directors, who already hold DSC.  </p>,
            hr: true,
            underline: false
        },
        {
            id: 5,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step3</span>:   Filing of SPICE32 Form After the name approval and the getting the DSC, SPICE32 Form needs to be filled with the following documents. The MoA and AoA are to be filed with the Registrar of Companies (ROC) with the subscriber’s information. Memorandum of Association (MoA) and Articles of Association (AoA) must specify charity as the principal object of registering a Nidhi company.
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>PAN Card of the Subscribers/members</li>
                    <li style={{ marginTop: 20 }}>ID Proof of First Directors/promoters</li>
                    <li style={{ marginTop: 20 }}>Address Proof of First Directors/ promoters</li>
                    <li style={{ marginTop: 20 }}>Address Proof of Registered Office (Sale Deed/Rent Agreement)</li>
                    <li style={{ marginTop: 20 }}>Consent and Declaration from the first Director in form DIR-2</li>
                    <li style={{ marginTop: 20 }}>Less than two months old Utility Bill of Registered Office (Electricity/ Gas/Telephone)</li>
                    <li style={{ marginTop: 20 }}>NOC from the Owner of Registered Office.</li>
                    <li style={{ marginTop: 20 }}>Self-Declaration from the First Directors/Subscribers in the INC-9 form</li>
                </ul> </p>,
            hr: true,
            underline: false
        },
        {
            id: 6,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step4</span>: Approval and Certificate of Incorporation It needed between 15-25 days to register a Nidhi company and receive the registration certificate. This certificate certifies that a company has been formed and it states the company identification number (CIN). The registration certification is proof that the Nidhi Company came into existence and all the formalities related to the registration of the Nidhi Company has been finished.  </p>,
            hr: true,
            underline: false
        },
        {
            id: 7,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step5</span>:  TAN, PAN, and Bank Account Finally, you require to apply for TAN and PAN. The TAN and PAN are ordinarily received within seven working days. Next, you need to open a bank account by submitting the CIN, MoA, AoA, and PAN to the bank.</p>,
            hr: true,
            underline: false
        },
        {
            id: 8,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>BENEFITS OF REGISTERING A NIDHI COMPANY </span>The primary goal behind forming a Nidhi Company is to assist its members in saving money and meeting their financial obligations occurring from time to time easily. By staying economical, they grow self-sufficient and would face future liabilities that may arise.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 9,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>There are so many advantages of registering a Nidhi Company. Some are mentioned below: <br />
                Limited Liability</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Liability of members and Directors is limited. Therefore, in case the company bears any loss and faces financial difficulty in the course of its principal business pursuit, the individual assets of Directors and members are not in danger of being seized by lenders, banks, and government.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Better Reliability</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Nidhi companies enjoy more high-grade reliability in comparison to other organizations such as NGOs, Trusts, and Cooperative Societies.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 12,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>A better opportunity for Savings</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>One of the main purposes of Nidhi Company is to promote the practice of saving among the members. This is how it accomplishes its additional goal of remaining reciprocally helpful.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 11,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Easy Access to Public fund</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>The members of the Nidhi Company can get a loan at a lower rate from its own company rather than lending from banks and other NBFCs. Furthermore, the process of getting the loan and other services are far faster and convenient.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 11,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Ease of Fund</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Nidhi is the most reliable and most affordable way of attracting deposits from the general public. It would be best if you got them registered as members.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 11,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Micro Banking</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Nidhis offer Rural banking services to the remote communities of the nation, which yet is far-away and therefore without NBFCs and national banks.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Better Option than Credit Co-operative</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>The small financer most prefers Nidhi company as this is a near replacement of credit co-operative society. Once a Nidhi company is registered, you can avail of all the advantages of credit co-operative society and get the benefit of double deposit.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}> Easy processing</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Lending and borrowing to known persons, i.e., to its members, is less complicated than dealing with banks, where the system is solidified.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}> Less Regulations </h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Nidhi companies obey the Nidhi Rules, 2014. The Central Government is the body regulating its activities. Regulations required by the RBI on Nidhi are limited.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Low Capital Requirement</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>MCA dictates the minimum capital obligation of Rs. Five lakhs for Nidhi. Also, within one year, the capital shall be rise to at least Rs. Ten lakhs.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}> Easy Registration Process</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>To register Nidhi company is a simple process. Nidhi Companies don’t need to obtain a license from RBI.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}> Meeting the wants of middle or lower-income groups</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Nidhi Companies play an essential role in meeting the needs of middle and low-income groups by giving them financial guidance with minimum formalities and documentation.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}> Loans with minimum eligibility criteria</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>The small wage earners are ordinarily incapable of getting loans from conventional banks because they don’t satisfy the eligibility norms. For them, Nidhi Company is an excellent means to obtain loans due to fewer conditions.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}> No outside involvement
            </h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Nidhi Companies accept funds from their members and gives loans to their members only. This implies no external factors are influencing the performance of these companies. The members and investors themselves administer the procedures of the company.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}> Perpetual Successions</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Nidhi Company does not dissolve by the death, insanity or insolvency and, retirement, of its shareholders and members.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}> Separate Entity</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Nidhi Company is a separate entity that can acquire assets and contract debts in its name.
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}> Compliances after Nidhi Company Registration</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>
                <ul style={{ marginLeft: 40 }}>
                    <li><span style={{ marginTop: 20, fontWeight: 'bold' }}>Form NDH-1 </span><br />
                        A Nidhi Company required to submit the list of members of the Nidhi Company within 90 days at the end of each financial cycle using this Form.
                    </li>
                    <li><span style={{ marginTop: 20, fontWeight: 'bold' }}>Form NDH-2</span><br />
                        The Company can apply for an extension to MCA if it has not been capable of adding 200 members in its first financial year.
                    </li>
                    <li><span style={{ marginTop: 20, fontWeight: 'bold' }}>Form NDH-3 </span><br />
                        apart from the above NDH-1 Form, a half-yearly return is also needed to be filed in NDH-3 Form.
                    </li>
                    <li><span style={{ marginTop: 20, fontWeight: 'bold' }}>Annual Returns with ROC </span><br />
                        A Nidhi Company must use Form MGT-7 to file its Annual Returns with MCA.
                    </li>
                    <li><span style={{ marginTop: 20, fontWeight: 'bold' }}>Profit, Loss and Balance sheet </span><br />
                        A Nidhi Company must use Form AOC-4 to submit financial statements and other related documents annually.
                    </li>
                    <li><span style={{ marginTop: 20, fontWeight: 'bold' }}>Income tax Returns </span><br />
                        Nidhi Company must file its Annual Returns by 30th September of the following financial year, like all other companies.
                    </li>
                </ul>
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, fontWeight: 'bold' }}>Activities Prohibited for the Nidhi Company</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}> Even though the initial idea of Nidhi companies is to carry out non-banking financial activities, they are forbidden to perform below-mentioned activities:
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Getting deposits or lending funds to persons other than its members</li>
                    <li style={{ marginTop: 20 }}>By investing in securities a company purchase another company</li>
                    <li style={{ marginTop: 20 }}>Advertisements to invite deposits from the public</li>
                    <li style={{ marginTop: 20 }}>Carrying out a business apart from borrowing and lending to its members</li>
                    <li style={{ marginTop: 20 }}>Chit funds, Leasing Finance</li>
                    <li style={{ marginTop: 20 }}>Entering into a partnership relationship to carry lending and borrowing activities</li>
                    <li style={{ marginTop: 20 }}>Hire-Purchase finances</li>
                    <li style={{ marginTop: 20 }}>Insurance</li>
                    <li style={{ marginTop: 20 }}>Issuance of debentures, preference shares, or some other debt instruments</li>
                    <li style={{ marginTop: 20 }}>Lend or accept the deposit from corporates</li>
                    <li style={{ marginTop: 20 }}>Lotteries</li>
                    <li style={{ marginTop: 20 }}>(though a Nidhi Company can open a Savings Account) Open a current account along with its members</li>
                    <li style={{ marginTop: 20 }}>Pay commission or incentive for mobilising deposits</li>
                    <li style={{ marginTop: 20 }}>Pledge and kept assets of its members as security</li>
                    <li style={{ marginTop: 20 }}>For a loan sell the assets of its members held as security</li>
                </ul>
                <br />
                Registering a private Nidhi limited company requires the support of CA/CS/Lawyer as the legal procedures are involved in it are complicated process, we make this very simple for you.
            </p>,
            hr: true,
            underline: false
        },




    ]
}


export const FAQNC = {
    title: <h1 style={{ fontSize: Fonts.h2, marginBottom: 20 }}>NIDHI COMPANY REGISTRATION AN INSIGHT
    </h1>,
    data: [{
        id: 1,
        nodeId: "1",
        question: "How long can a company validly function?",
        aid: "101",
        answer: <div>
            <p>
                If the yearly requirements are met, it is okay for the company to run, if it fails to fulfil requirements, then it is referred to as a dormant company. What are the benefits and expectancies from a Nidhi Company?
            </p>
            <p style={{}}>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Very simple to begin with in terms of the registration process.</li>
                    <li style={{ marginTop: 20 }}>No need for RBI licensing to start functioning</li>
                    <li style={{ marginTop: 20 }}>Seven people at least required to get started with</li>
                    <li style={{ marginTop: 20 }}>Minimum of 3 board directors</li>
                    <li style={{ marginTop: 20 }}>Financial activities are directly in control of the members alone.</li>
                    <li style={{ marginTop: 20 }}>The rate of interest reasonable in nature.</li>

                </ul>
            </p>
        </div>
    },
    {
        id: 2,
        nodeId: "2",
        question: "For registration is an office space needed?",
        aid: "202",
        answer: <p>
            A Nidhi company can run from a residential address, and they don't need to have a dedicated office.</p>
    },
    {
        id: 3,
        nodeId: "3",
        question: "Can it convert into an asset finance company?",
        aid: "303",
        answer: "No, it is not permitted as it against the rules for organising a Nidhi company"
    },
    {
        id: 4,
        nodeId: "4",
        question: "What is the governance structure of Nidhi Company In India?",
        aid: "404",
        answer:  <p style={{lineHeight:2}}>The rules, provisions and regulations are given in Article 406 of the 2013 Companies Act, and in companies (Nidhi Companies) Rules of 2014, governing and regulating all Nidhi companies throughout India. Again activities Nidhi companies fall under the guidelines of RBI field that govern the activities of NBFCs and other institutions for financing and investment. RBI offers exemptions Nidhi companies based on the fact that these Nidhi companies deal only with its members, and no people outside or investors</p>
    },
    {
        id: 5,
        nodeId: "5",
        question: "What is the meaning of Nidhi Hindi?",
        aid: "505",
        answer:  <p style={{lineHeight:2}}>The real meaning in Hindi Nidhi is a treasure. The Nidhi word is also used for the girls' names in India. It is a common belief that the girl named with Nidhi has a wealth of knowledge and wealth. Legally, there is no official definition of Nidhi and therefore, we follow the general meaning of Nidhi which means treasure.</p>
    },
    {
        id: 6,
        nodeId: "6",
        question: "Can a company do business Nidhi microfinance?",
        aid: "606",
        answer: <p style={{lineHeight:2}}>No, Nidhi Company has no right to do microfinance business in India. This is because microfinance is an entirely different set of business for an NBFC and requires more capital to do the same. Therefore, Nidhi Company may engage in the microfinance business. Furthermore, since Nidhi Company stimulus money deposits and, therefore, if it even goes to a member without any security, then there will be excellent customer default likely to be ultimate results in the Nidhi bankruptcy of the Company  </p>
    },
    {
        id: 7,
        nodeId: "7",
        question: "Can a Nidhi Company open branches and how many?",
        aid: "707",
        answer: <p style={{lineHeight:2}}>A Nidhi company can open three branches after three years of profit continuously running of the business. Besides, these three branches can be opened in the district alone. Moreover, to open a branch outside the district, you will need permission Regional Director (RD). Also, Nidhi Company cannot open a branch outside the state.</p>
    },
    {
        id: 8,
        nodeId: "8",
        question: "Is Nidhi company requires an NBFC license from RBI?",
        aid: "808",
        answer: <p style={{lineHeight:2}}>
            No, Nidhi Company does not require RBI license to start a business in India; it is because RBI of its key provisions exempted Nidhi Company and, therefore, there is no registration requirement RBI Nidhi Company in India.<br/>
            <span style={{color:Colors.link}}>What do you mean by corporate mutual benefit and how it is different from Nidhi Company?<br/>
            What is the maximum limit of the amount of deposits a Nidhi company can take?</span>

        </p>
    },
    {
        id: 9,
        nodeId: "9",
        question: "Why register a Nidhi Company?",
        aid: "909",
        answer: <p>
            <ul style={{ marginLeft: 20 }}>
                    <li style={{ marginTop: 20 }}>Loan at lower interest rates.</li>
                    <li style={{ marginTop: 20 }}>Low mobilisation of deposits</li>
                    <li style={{ marginTop: 20 }}>No external interference</li>
                    <li style={{ marginTop: 20 }}>Suitable for smaller or middle-income groups</li>
                    <li style={{ marginTop: 20 }}>Timely and secured returns</li>
                </ul>
        </p>
    },
    {
        id: 10,
        nodeId: "10",
        question: "What are the post-registration requirements for Nidhi Company?",
        aid: "10010",
        answer: <p style={{lineHeight:2}}>
            The following conditions must be met within a period of one year from the start: •         The company can not accept deposits of more than 20 times the net owned funds.
            <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Minimum of 200 shareholders is required.</li>
                    <li style={{ marginTop: 20 }}>Burdened deposit • Minimum should be 10% of outstanding deposits.</li>
                    <li style={{ marginTop: 20 }}> A minimum net owned fund of Rs. 10 lakhs.</li>
                </ul>
        </p>
    },
    {
        id: 11,
        nodeId: "11",
        question: "Are there any restrictions in the law to Nidhi Company?",
        aid: "11011",
        answer:  <p>
        <ul style={{ marginLeft: 20 }}>
                <li style={{ marginTop: 20 }}>Can not take deposits or lend money, other than members.</li>
                <li style={{ marginTop: 20 }}>Should not pay incentives to mobilise deposits.</li>
                <li style={{ marginTop: 20 }}>Do not start a chit fund business, financial leasing, insurance or acquisition of securities issued by a legal entity.</li>
                <li style={{ marginTop: 20 }}>Limited to issue shares, bonds or other instruments.</li>
            </ul>
    </p>
    },
    {
        id: 13,
        nodeId: "13",
        question: "Can a minor be the director?",
        aid: "13013",
        answer: <p style={{lineHeight:2}}>No, a minor can not be a director due to the Director of DIN is mandatory, and to obtain a single DIN must have reached the age of 18 years or above.</p>
    },
    {
        id: 15,
        nodeId: "15",
        question: "Can NRI / Foreign Nationals became Director in Corporate India?",
        aid: "15015",
        answer: <p style={{lineHeight:2}}>Yes, NRI / National Foreign Could be a Director and Shareholder of the Company India provided he or she should be competent to contract and the Company in which the NRI / foreign citizens / is the Director (s), must have at least one Indian Resident Director of the Board of Directors.</p>
    },
    {
        id: 16,
        nodeId: "16",
        question: "Can a salaried individual be the director of a company?",
        aid: "16016",
        answer: <p style={{lineHeight:2}}>Yes, people can also be a salaried employment agreement Corporate Director provided allows for the provision. Generally, employers do not have a problem if their employees are Directors of each company.</p>
    },
    {
        id: 17,
        nodeId: "17",
        question: "What is the Paid-up Capital?",
        aid: "17017",
        answer: <p style={{lineHeight:2}}>Paid-up share capital also known as the Issued Share Capital of the company is a number of shares issued by a company to its shareholders.</p>
    },
    {
        id: 18,
        nodeId: "18",
        question: "Can we increase Authorised Capital & Paid-Up Capital after Incorporation?",
        aid: "18018",
        answer: "Yes, Authorised Capital & Paid-Up Capital can be increased anytime after incorporation."
    },
    {
        id: 19,
        nodeId: "19",
        question: "How many Nidhi Company's Board of Directors required?",
        aid: "19019",
        answer: "A minimum of three directors is required to build Nidhi Company, and the maximum amount can not exceed fifteen."
    },


    {
        id: 20,
        nodeId: "20",
        question: "How much money do I need to Start Nidhi Company?",
        aid: "20020",
        answer: <p style={{lineHeight:2}}>The minimum authorized capital to start to be Rs. 500,000 (US $ 7549 approx) and can be increased to any amount (no upper limit). This money is deposited in a bank account you want your company. </p>
    },
    {
        id: 21,
        nodeId: "21",
        question: "When I get the status of `Nidhi` approved?",
        aid: "21021",
        answer:  <p style={{lineHeight:2}}>
       Once the company is established, within a period of one year from the commencement, Nidhi Companies must meet all the following criteria:
        <ul style={{ marginLeft: 40 }}>
                <li style={{ marginTop: 20 }}>No fewer than two hundred members (shareholders)</li>
                <li style={{ marginTop: 20 }}>Had Net Owned Funds (NOF) of ten lakh rupees or more</li>
                <li style={{ marginTop: 20 }}>Having unencumbered term deposits of not less than 10% of the outstanding deposits</li>
                <li style={{ marginTop: 20 }}>Net Property Fund has a ratio to deposits of no more than 1:20</li>
            </ul>
    </p>
    },
    {
        id: 22,
        nodeId: "22",
        question: "What RBI guidelines for Nidhi company?",
        aid: "22022",
        answer: <p style={{lineHeight:2}}>RBI is empowered to issue directions to them in matters relating to their deposits acceptance activity. However, because of an agreement with the shareholders Nidhis-its members, RBI has exempted companies were told as of the core provisions of the RBI Act and other applicable directions for NBFCs. As on date (February 2013) RBI does not have a regulatory framework that is determined to Nidhis. </p>
    },
    {
        id: 23,
        nodeId: "23",
        question: "Is it mandatory to name a Nidhi company as “Nidhi ltd” at its end?",
        aid: "23023",
        answer: "Yes. It is mandatory to use Nidhi ltd mentioned at the end of its name."
    },
    {
        id: 24,
        nodeId: "24",
        question: "How many Nidhi Company's Board of Directors required?",
        aid: "24024",
        answer: "A minimum of three directors is required to build Nidhi Company, and the maximum amount can not exceed fifteen."
    },
    {
        id: 25,
        nodeId: "25",
        question: "Who is the regulator of Nidhi companies?",
        aid: "25025",
        answer: "Ministry of Corporate Affairs (MCA) is the regulator of Nidhi companies. "
    },
    {
        id: 26,
        nodeId: "26",
        question: "How a fund uses Nidhi Company bought by it?",
        aid: "26026",
        answer: "Nidhi Company lends money provided by it as loans to its members."
    },
    {
        id: 27,
        nodeId: "27",
        question: "What costs Nidhi company registration?",
        aid: "27027",
        answer: "These costs depend on many factors and vary from case to case."
    },
    {
        id: 28,
        nodeId: "28",
        question: "Are my deposits safe with Nidhi business?",
        aid: "28028",
        answer: "Yes. Nidhi companies are registered with the MCA and RBI has formulated laws to secure customer deposits."
    },
    {
        id: 29,
        nodeId: "29",
        question: "How many people are needed to form a Nidhi business?",
        aid: "29029",
        answer: "Three directors and seven members are required to form a Nidhi company."
    },

    ]
}