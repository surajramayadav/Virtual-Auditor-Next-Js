import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'
import man from '@images/startup/man.png'
import man2 from '@images/startup/2man.jpg'
import girl from '@images/startup/girl.jpg'

import conference from '@images/startup/conference.png'
import person from '@images/startup/person.png'
import internet from '@images/startup/internet.png'

import accounting from '@images/startup/accounting.png'
import government from '@images/startup/government.png'
import investor from '@images/startup/investor.png'
import time from '@images/startup/time.png'


import work from '@images/startup/work.png'
import tax from '@images/startup/taxes.png'
import valuation from '@images/startup/valuation.png'

import rocket from '@images/startup/rocket.jpg'
import startup from '@images/startup/startup.jpg'
import yes from '@images/startup/yes.jpg'


export const ValStartupReg = {
    title: <p style={{ fontSize: Fonts.h1, }}>Company <strong>Valuation</strong></p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4 }}>Business Valuation services are typically done by Registered valuers, Valuation or startup valuation refers to the process by which the valuer of entreprise is determined for determining the investment and amount of stake dilution (Shares to be allowed) that need to do by a registered valuer</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Starting at Rs.29,999/-</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>
        },

    ]


}


export const WCVA = {
    title: <p style={{ fontSize: Fonts.h1, fontWeight: 'bold' }}>Why is Company Valuation Needed?</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4, color: Colors.white }}>Its common knowledge that many startups raise funds valuation the company at millions or billions of dollars how is it done, who can do the valuation lets find out Startup Valuation can only be done only by a registered valuer as per section 247 of the companies act 2013</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p styleowner={{ fontSize: Fonts.h3, marginTop: 20 }}>Startup Valuations</p>
        },
        {
            id: 2,
            imageSrc: <Image src={name} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Merger/Acquisition Valuations.</p>
        },
        {
            id: 3,
            imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>VC Valuations.</p>
        },

    ]


}


export const VALSVD = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold', textAlign: 'center', color: Colors.black }}>WHO IS A REGISTERED VALUER, PERSONS HOW CAN YOU PROVIDE BUSINESS VALUATION SERVICES?
    </p>,
    data: [
        {
            id: 1,
            desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4, }}>A registered valuer is a person how has qualified the prescribed exam conducted by Insolvency and Bankruptcy Board of India (<span style={{ color: Colors.link }}>IBBI</span>), a registered valuer must posses certificate of practice to issue the valuation certificate post which he can do Business Valuation services Now many start-ups would be wondering would my CA not do my startup valuation, the answer is NO CA cannot issue valuation certificate for start-up valuation any more in toto business valuation needs to be by a registered valuer
            </p>,
            hr: false,
            underline: false,
        }
    ]
}

export const Val_TCV = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold', textAlign: 'center', }}>TYPES OF COMPANY VALUATION
    </p>,
    data: [
        {
            id: 1,
            desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4, }}>It is very important for the business organizations and also for the investors to know the types of company valuation. For, if a <span style={{ color: Colors.link }}>company valuation </span>is done through the market experts then it can be very helpful because then only the market value of the business can be seen by you, whereas, with the services of a virtual auditor in India, you can get all the information of the business without even leaving your office or home. There are many types of valuation, for example: Firstly, when the valuation of the company is done through the professionals of India then only the book value of the company is considered. This valuation will also include the profit made by the company and also, the amount of net cash flow available in the recent past. Thus, this valuation can tell the exact financial condition of the company.
                <br />
                Secondly, you can also get the value of the firm by visiting the offices of the top valuation firms in India. When you are visiting these offices, then you can discuss the whole matter with the financial expert of that firm and then take a decision for your firm. For, only then, you can see the entire picture of the business. Moreover, the experts of these top valuation firms in India will also explain to you about the various aspects related to the finance report of the firm and also tell you about the debt instrument that the firm has used in the recent past and then you can analyze these financial reports to check whether the firm is likely to get financial assistance or not in future.
                <p style={{ marginTop: 20 }}> Looking for best valuation companies then you are in the right place virtua auditor are experts in business valuation</p>

            </p>,
            hr: false,
            underline: false,


        }
    ]

}

export const Uptable = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold', textAlign: 'center', }}>MERCHANT BANKER CERTIFICATE FOR BUSINESS VALUATION SERVICES IS A DILEMMA AND A PROCEDURAL CONFUSION LETS FIND OUT HOW CAN ISSUE THE VALUATION CERTIFICATES (VALUATION SERVICES) TO STARTUPS ( REGISTERED VALUERS)
    </p>,
    data: [
        {
            id: 1,
            desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4, }}>Well the DIPP as made amendments to startup India policy relaxing the requirement of Merchant Banker certification, now the only prescribed persons to get a business valuation of shares of a start-up by a Registered Valuer, so startup find your registered valuer your CA and merchant bankers cannot help you with your valuation What are the cases Conditions when Valuation certificate by Registered Valuer is compulsory
            </p>,
            hr: false,
            underline: false,

        }
    ]
}


export const ValTableData = [
    {
        data: [
            { id: 1, cell: "Sl. no." },
            { id: 2, cell: "Section" },
            { id: 3, cell: "Particulars" },
            { id: 4, cell: "Details" },
            { id: 5, cell: "To be processed by" },
        ]
    },
    {
        data: [
            { id: 1, cell: "1" },
            { id: 2, cell: "62(1)C" },
            { id: 3, cell: "Valuation report for Further Issue of Shares" },
            { id: 4, cell: "When a company having share capital proposes to increase its subscribed share capital by a fresh issue of shares, such shares shall be offered to:Ø   Existing shareholders i.e. Rights Issue Ø  Employees under a scheme of Employees’ Stock Option Ø  Any other persons except those mentioned above, if authorised by a special resolution: Issue of shares on a Preferential Basis In all of the above cases, the price of the shares issued must be determined by the valuation report of a registered valuer subject to prescribed conditions." },
        ]
    },
    {
        data: [
            { id: 1, cell: "2" },
            { id: 2, cell: "192(2)" },
            { id: 3, cell: "Valuation of Assets Involved in Arrangement of Non cash transactions involving Directors" },
            { id: 4, cell: "In case of sale or purchase of any asset involving a company and the directors of the company (or its holding, subsidiary or associate company) or a person connected with the Director for consideration other than cash, the value of the assets has to be calculated by a Registered V" },

        ]
    },
    {
        data: [
            { id: 1, cell: "3" },
            { id: 2, cell: "230(2)(c)(v)" },
            { id: 3, cell: "Valuation of shares, property and assets of the Company  under a scheme of Corporate Debt Restructuring" },
            { id: 4, cell: "In case of a compromise or arrangement between members (such as in mergers or amalgamations) or with creditors (such as in corporate debt restructuring), a valuation report in respect of shares, property or assets, tangible and intangible, movable and immovable of the company, or a swap ratio report by a Registered Valuer is required.► In case of mergers, the directors are also required to circulate a report to members specifying, inter alia, any" },
        ]
    },
    {
        data: [
            { id: 1, cell: "4" },
            { id: 2, cell: "230(3)" },
            { id: 3, cell: "Valuation report along with Notice of creditors/shareholders meeting –Under scheme of compromise/Arrangement" },
            { id: 4, cell: "In case of a compromise or arrangement between members (such as in mergers or amalgamations) or with creditors, a valuation report in respect of shares, property or assets, tangible and intangible, movable and immovable of the company, or a swap ratio report by a Registered Valuer is required." },

        ]
    },
    {
        data: [
            { id: 1, cell: "5" },
            { id: 2, cell: "232(2)(d)" },
            { id: 3, cell: "The report of the expert with regard to valuation, if any, would be circulated for meeting of creditors/Members" },
            { id: 4, cell: "Same as above" },

        ]
    },
    {
        data: [
            { id: 1, cell: "6" },
            { id: 2, cell: "232(3)(h)" },
            { id: 3, cell: "The Valuation report to be made by the tribunal for exit opportunity to the shareholders of transferor Company –Under the scheme of Compromise/Arrangement in case the Transferor company is Listed Company and the Transferee-company is an unlisted Company" },
            { id: 4, cell: "Same as above" },
        ]
    },
    {
        data: [
            { id: 1, cell: "7" },
            { id: 2, cell: "236(2)" },
            { id: 3, cell: "Valuation of equity shares held by the Minority Share Holders" },
            { id: 4, cell: "In case an acquirer or person acting in concert with the acquirer acquire 90% or more of the equity capital in a company, they can offer to the minority shareholder (or the minority shareholder can offer to the acquirer) to acquire the minority shareholding at a valuation determined by the Registered Valuer." },
        ]
    },
    {
        data: [
            { id: 1, cell: "8" },
            { id: 2, cell: "260(2)(c)" },
            { id: 3, cell: "Powers and duties of Company Administrator" },
            { id: 4, cell: "A company administrator appointed by the Tribunal under section 258 of the Act to prepare a scheme of revival and rehabilitation of a sick company, shall perform such functions as may be directed by the Tribunal u/s 260. He/she may also cause to be prepared, inter alia, a valuation report in respect of the shares and assets in order to arrive at the reserve price for the sale of any industrial undertaking of the company or for the fixation of the lease rent or share exchange ratio." },
        ]
    },
    {
        data: [
            { id: 1, cell: "9" },
            { id: 2, cell: "281(1)" },
            { id: 3, cell: "Valuing assets for submission of report by liquidator" },
            { id: 4, cell: "A valuation of assets of the company prepared by the Registered Valuer is required in case of winding up, voluntarily or otherwise." },
        ]
    },
    {
        data: [
            { id: 1, cell: "10" },
            { id: 2, cell: "305(2)(d)" },
            { id: 3, cell: "Declaration of insolvency in case of proposal to wind up voluntarily" },
            { id: 4, cell: "Where a proposal for voluntary winding up has been made by a company, a declaration must be made by the board of directors that the Company has no debt or whether it will be able to pay its debt in full from the proceeds of assets sold in voluntary winding up. The declaration made must be accompanied by, among other things, a valuation report prepared by registered valuer of the assets of the company." },
        ]
    },
    {
        data: [
            { id: 1, cell: "11" },
            { id: 2, cell: "319(3)(b)" },
            { id: 3, cell: "Power of Company Liquidator to accept shares etc, as consideration for sale of property of the Company" },
            { id: 4, cell: "Any member of the transferor company who did not vote in favour of the special resolution and expresses his dissent therefrom in writing addressed to the Company Liquidator, and left at the registered office of the company within seven days after the passing of the resolution, may require the liquidator to purchase his interest at a price to be determined by agreement or the registered valuer." },
        ]
    },
    {
        data: [
            { id: 1, cell: "12" },
            { id: 2, cell: "Rule 2 of Companies (Acceptance of deposit) Rules, 2014" },
            { id: 3, cell: "Exclusions from Deposits" },
            { id: 4, cell: "As per the rule, deposit includes any receipt by way of deposit or loan or in any other form by a company but does not include, among other things, money raised by issue of debentures secured by a charge on company’s assets. The amount of such debentures shall not exceed the market value of the assets as determined by a registered valuer." },
        ]
    },
    {
        data: [
            { id: 1, cell: "13" },
            { id: 2, cell: "Rule 8 of Companies (Share capital and Debentures) Rules, 2014" },
            { id: 3, cell: "Issue of Sweat Equity Shares" },
            { id: 4, cell: "This rule applies to all companies except listed companies issuing sweat equity shares to its directors or employees. The rule prescribes that the sweat equity shares shall be issued at a price determined by a registered valuer as the fair price giving justification for such valuation. Also, the value of the intellectual property or know-how or any other value additions, for which the sweat equity shares have been issued to its directors or employees shall be determined by a valuation report of a registered valuer.If the sweat equity shares are issued for a non-cash consideration, the value of such non-cash consideration shall be based on a valuation report by a registered valuer. Additionally, if the sweat equity shares are issued pursuant to acquisition of an asset, the value of such asset shall also be determined based on a valuation report by a registered valuer." },
        ]
    },


]




export const BottomTable = {
    data: [
        {
            id: 1,
            desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4, }}>  Just to summarise and above legal maxims for better understanding Valuation certificate from a Registered Valuer is mandatory when there is
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>A fresh issue of share u/s Section 62(1)(c) ( Typically when Funds are raised by a startup up a seed fund state or venture state when fresh share are allotted to new shareholders)</li>
                    <li style={{ marginTop: 20 }}>When sweat equity shares are issued to directors or key employees then a valuation certificate shall be done by a Registered Value.</li>
                </ol>
                <br />
                To know more about <span style={{ color: Colors.link }}>Start-UP FUNDING OPTIONS AND COMPLIANCES A STEP BY STEP GUIDE click here
                    <strong> START-UP VALUATION / BUSINESS VALUATION</strong></span>
                <p style={{ marginTop: 20 }}>
                    Business valuation is never easy for any venture. However, when you are a start-up, it becomes particularly difficult to get a business valuation done, with little-or-no revenue or profits and less-than-certain futures.
                </p>
                <p style={{ marginTop: 20 }}>
                    For mature, publicly listed businesses that have steady revenue and earnings, it’s a matter of valuing them as a multiple of their earnings before interests, taxes, depreciation, and amortization (EBITDA) or based on any other multiples specific to various industries.
                </p>
                <p style={{ marginTop: 20 }}>
                    However, it is very difficult to value start-up ventures that are not publicly listed and do not make steady sales or earnings.
                </p>

                <p style={{ marginTop: 20 }}>
                    If you are planning to invest into a start-up company or are trying to raise the capital worth of your start-up, it is necessary to ascertain the business value of your venture.
                </p>
                <p style={{ marginTop: 20 }}>
                    Below are three approaches mentioned towards the valuation of start-up entities:
                </p>
                <p style={{ marginTop: 20 }}>
                    1.Going Concern Value
                </p>
                <p style={{ marginTop: 20, color: Colors.link }}>
                    -This value focuses on the overall earning potential of business entities.
                </p>
                <p style={{ marginTop: 20, color: Colors.link }}>
                    -This value makes the assumption that business is a perpetual entity which is different from its promoters and will not be affected by any such external events.
                </p>

                <p style={{ marginTop: 20 }}>
                    2.Liquidation Value
                </p>
                <p style={{ marginTop: 20, color: Colors.link }}>
                    -It represents the amount received on selling off all the assets as well as settling liabilities.
                </p>
                <p style={{ marginTop: 20, color: Colors.link }}>
                    -Intangible assets like goodwill, brand value, and so on, are certain important assets that need to be calculated appropriately in such method.
                </p>
                <p style={{ marginTop: 20, color: Colors.link }}>
                    -It enables to set a benchmark below which the business should not be valued, as the same would not yield any gain for the shareholders.
                </p>

                <p style={{ marginTop: 20 }}>
                    3.Market Value
                </p>
                <p style={{ marginTop: 20, color: Colors.link }}>
                    -It relates to the companies listed at the stock market. It represents the price at which the company is trading at a recognized stock exchange.
                </p>
                <p style={{ marginTop: 20, color: Colors.link }}>
                    -For this method, it needs to be considered that the price of the security trading on the stock exchange is more a representation of the market sentiment instead of the actual state of business. This price cannot provide a complete picture of the fundamentals and potential of the security / stock.
                </p>

            </p>,
            hr: false,
            underline: false,
        }

    ]

}



export const MSVBVARV = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>Methods of Startup Valuation / Business Valuation to be applied by Registered Valuer

    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <ul style={{ marginLeft: 20 }}>
                    <li style={{ marginTop: 20 }}>Venture Capital Method</li>
                    <li style={{ marginTop: 20 }}>Berkus Method</li>
                    <li style={{ marginTop: 20 }}>Scorecard Valuation Method</li>
                    <li style={{ marginTop: 20 }}>Risk Factor Summation Method</li>
                    <li style={{ marginTop: 20 }}>Cost-to-Duplicate Method</li>
                    <li style={{ marginTop: 20 }}>Discounted Cash Flow Method</li>
                    <li style={{ marginTop: 20 }}>Valuation By Stage Method</li>
                    <li style={{ marginTop: 20 }}>Comparables Method</li>
                    <li style={{ marginTop: 20 }}>First Chicago Method</li>

                </ul>
            </p>,
            hr: false,
            underline: false

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>1. Venture Capital Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}> The Venture Capital Method (VC Method) is one of the methods for showing the pre-money valuation of pre-revenue startups. The concept was first described by Professor Bill Sahlman at Harvard Business School in 1987.
                <strong> It uses the following formulas:</strong>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Return on Investment (ROI) = Terminal (or Harvest) Value ÷ Post-money Valuation</li>
                    <li style={{ marginTop: 20 }}>Post-money Valuation = Terminal Value ÷ Anticipated ROI</li>
                </ul>
                <p style={{ marginTop: 10 }}>   Terminal (or Harvest) value is the startup's anticipated selling price in the future, estimated by using reasonable expectation for revenues in the year of sale and estimating earnings. If we have a tech business with a terminal value of 4,000,000 with an anticipated return of investment of 20X and they need $100,000 to get a positive cash flow we can do the following calculations.</p>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Post-money Valuation = Terminal Value ÷ Anticipated ROI = $4 million ÷ 20X</li>
                    <li style={{ marginTop: 20 }}>Post-money Valuation = $200,000</li>
                    <li style={{ marginTop: 20 }}>Pre-money Valuation = Post-money Valuation – Investment = $200,000 - $100,000</li>
                    <li style={{ marginTop: 20 }}>Pre-money Valuation = $100,000</li>
                </ul></p>,
            hr: false,
            underline: false
        },

        {
            id: 3,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>2. Berkus Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>The Berkus Method assigns a range of values to the progress startup business owners have made in their attempts to get the startup off of the ground. <span style={{ color: Colors.link }}>Source Credit :Berkus Method</span>:

                <table style={{ border: 1,marginTop:10,marginBottom:10 }}>
                    <tr>
                        <th><span style={{ color: Colors.link }}>If Exists:</span></th>
                        <th><span style={{ color: Colors.link }}>Add to Company Value up to:</span></th>
                    </tr>
                    <tr>
                        <td>Sound Idea (basic value)</td>
                        <td>$1/2 million</td>

                    </tr>
                    <tr>
                        <td>Prototype (reducing  technology risk)</td>
                        <td>$1/2 million</td>

                    </tr> <tr>
                        <td>Quality Management Team (reducing execution risk)</td>
                        <td>$1/2 million</td>

                    </tr> <tr>
                        <td>Strategic relationships (reducing market risk)</td>
                        <td>$1/2 million</td>

                    </tr> <tr>
                        <td>Product Rollout or Sales (reducing production risk)</td>
                        <td>$1/2 million</td>
                       
                    </tr>
                </table>


            </p>,
            hr: false,
            underline: false

        }, {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>3. Scorecard Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}> The Scorecard Valuation Method uses the average pre-money valuation of other seed/startup businesses in the area, and then judges the startup that needs valuing against them using a scorecard in order to get an accurate valuation
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>The first step is to find out the average pre-money valuation of pre-revenue companies in the region and business sector of the target startup</li>
                    <li style={{ marginTop: 20 }}>The next step is to find out the pre-money valuation of pre-revenue companies using the Scorecard Method to compare. The scorecard is as follows,
                        <ul style={{ marginLeft: 20 }}>
                            <li style={{ marginTop: 20 }}><strong>Strength of the Management Team</strong> – 0-30 percent</li>
                            <li style={{ marginTop: 20 }}><strong>Size of the Opportunity</strong> – 0-25 percent</li>
                            <li style={{ marginTop: 20 }}><strong>Product/Technology </strong>– 0-15 percent</li>
                            <li style={{ marginTop: 20 }}><strong>Competitive Environment </strong>– 0-10 percent</li>
                            <li style={{ marginTop: 20 }}><strong>Marketing/Sales Channels/Partnerships</strong> – 0-10 percent</li>
                            <li style={{ marginTop: 20 }}><strong>Need For Additional Investment</strong> – 0-5 percent</li>
                            <li style={{ marginTop: 20 }}><strong>Other </strong>– 0-5 percent</li>

                        </ul>
                    </li>
                </ul>
                <br />
                The final step is to assign a factor to each of the above qualities based on the target startup and then to multiply the sum of factors by the average pre-money valuation of pre-revenue companies Source Credit:<span style={{ color: Colors.link }}> please visit here</span>
            </p>,
            hr: false,
            underline: false

        }, {
            id: 4,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>4. Risk Factor Summation Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>
                The Risk Factor Summation Method compares 12 elements of the target startup to what could be expected in a fundable and possibly profitable seed/startup using the same average pre-money valuation of pre-revenue startups in the area as the Scorecard method. The 12 elements are,


                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Management</li>
                    <li style={{ marginTop: 20 }}>Stage of the business</li>
                    <li style={{ marginTop: 20 }}>Legislation/Political risk</li>
                    <li style={{ marginTop: 20 }}>Manufacturing risk</li>
                    <li style={{ marginTop: 20 }}>Sales and marketing risk</li>
                    <li style={{ marginTop: 20 }}>Funding/capital raising risk</li>
                    <li style={{ marginTop: 20 }}>Competition risk</li>
                    <li style={{ marginTop: 20 }}>Technology risk</li>
                    <li style={{ marginTop: 20 }}>Litigation risk</li>
                    <li style={{ marginTop: 20 }}>International risk</li>
                    <li style={{ marginTop: 20 }}>Reputation risk</li>
                    <li style={{ marginTop: 20 }}>Potential lucrative exit</li>
                </ul>
                <br />
                Each element is assessed as follows:
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>+2 - very positive for growing the company and executing a wonderful exit</li>
                    <li style={{ marginTop: 20 }}>+1  - positive</li>
                    <li style={{ marginTop: 20 }}>0  - neutral</li>
                    <li style={{ marginTop: 20 }}>-1  - negative for growing the company and executing a wonderful exit</li>
                    <li style={{ marginTop: 20 }}>-2   - very negative</li>
                </ul>
                <br />
                The average pre-money valuation of pre-revenue companies in your region is then adjusted positively by $250,000 for every +1 (+$500K for a +2) and negatively by $250,000 for every -1 (-$500K for a -2).
            </p>,
            hr: false,
            underline: false

        }, {
            id: 5,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>
                5.Cost-to-Duplicate Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>This approach involves looking at the hard assets of a startup and working out how much it would cost to replicate the same startup business somewhere else. The idea is that an investor wouldn't invest more than it would cost to duplicate the business. For example if you wanted to find the cost-to-duplicate a software business, you would look at the labour cost for programmers and the amount of programming time that has been used to design the software. The big problem with this method is that it doesn't include the future potential of the startup or intangible assets like brand value, reputation or hotness of the market. With this is in mind, the cash-to-duplicate method is often used as a 'lowball' estimate of company value</p>,
            hr: false,
            underline: false

        },
        {
            id: 6,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>
                6.Discounted Cash Flow (DCF) Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>This method involves predicting how much cash flow the company will produce, and then calculating how much that cash flow is worth against an expected rate of investment return.A higher discount rate is then applied to startups to show the high risk that the company will fail as it's just starting out. This method relies on a market analyst's ability to make good assumptions about long term growth which for many startups becomes a guessing game after a couple of years. This is the most common method of valuation for Indian startups it projects the revenue and cash flow for the next 3 to 5 years and discounts the cash flow to get the valuation.</p>,
            hr: false,
            underline: false

        },
        {
            id: 7,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>
                7. Valuation by Stage</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>The valuation by stage method is often used by angel investors and venture capital firms to come up with a quick range of startup valuation. This method uses the various stages of funding to decide how much risk is still present with investing in a startup. The further along a business is along the stages of funding the less the present risk. A valuation-by-stage model might look something like this:
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Estimated Company Value Stage of Development $250,000 - $500,000</li>
                    <li style={{ marginTop: 20 }}>Has an exciting business idea or business plan $500,000 - $1 million</li>
                    <li style={{ marginTop: 20 }}>Has a strong management team in place to execute on the plan $1 million – $2 million</li>
                    <li style={{ marginTop: 20 }}>Has a final product or technology prototype $2 million – $5 million</li>
                    <li style={{ marginTop: 20 }}>Has strategic alliances or partners, or signs of a customer base $5 million and up</li>

                </ul>
                <br />
                Startups with just a business plan will receive a small valuation, but that will increase as they meet developmental milestones.
            </p>,
            hr: false,
            underline: false

        },
        {
            id: 8,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>
                8. Comparables Method Valuation</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>This method is to literally look at the implied valuations of other similar startups, factoring in other ratios and multipliers for things that may not be similar between the two businesses. For example, if Startup A is acquired for $7,500,000, and its website had 250,000 active users, you can estimate a valuation between the price of the startup and the number of users, which is $30/user. Startup B might have 125,000 users which would then allow it to use the same multiple of $30/user to reach a valuation of $3,750,000</p>,
            hr: false,
            underline: false
        },
        {
            id: 9,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>
                9. The Book Value Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>This method is based solely on the net worth of the company. i.e. the tangible assets of the company. This doesn't take into account any form of growth or revenue, and is usually only applied when a startup is going out of business.</p>,
            underline: false
        },
        {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>
                10. First Chicago Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>This method factors in the possibility of a startup really taking off, or really going badly. To do this it gives a business owner three different valuations
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Worst case scenario</li>
                    <li style={{ marginTop: 20 }}>Normal case scenario</li>
                    <li style={{ marginTop: 20 }}>Best case scenario</li>
                </ul>
                <br />
                Conclusion The Valuation has to done by a registered valuer only you may contact <strong>CA Viswanathan is IBBI Registered Valuer u/s 247 of Companies Act, 2013 for Securities or Financial Assets Class </strong> vide registration number <strong>IBBI/RV/03/2019/12333</strong>. He is also a fellow member of The Institute of Chartered Accountants of India and qualified Company Secretary
                We are into practice since 2012 and has advised many clients in Valuation, Amalgamations, Corporate Structuring, Tax & Audit. His clients include NBFCs, Publically Listed Companies, Stock Broking Companies, Manufacturing Companies, Service Industries, Real Estate Companies, etc.
                For unlisted companies under Income Tax Act, Merchant Bankers valuation reports are required to arrive at “Fair Market Value” under the discounted cash flow method (DCF Method).
                <br />
                <h1 style={{ marginTop: 10 }}>Business Valuation Advisory provided in the following areas</h1>
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Valuation of Business / Firm</li>
                    <li style={{ marginTop: 20 }}>Valuation of Intangibles such patents, copyrights, technical knowhow, franchise agreements, etc.</li>
                    <li style={{ marginTop: 20 }}>Valuation of Shares under Companies Act, Foreign Direct Investments, etc.</li>
                    <li style={{ marginTop: 20 }}>Valuation of Goodwill</li>
                    <li style={{ marginTop: 20 }}>Valuation for Swap Shares in case of Amalgamation</li>
                    <li style={{ marginTop: 20 }}>Valuation for Startups</li>
                    <li style={{ marginTop: 20 }}>Valuation for Brands</li>
                    <li style={{ marginTop: 20 }}>Valuation of Intellectual Property</li>
                    <li style={{ marginTop: 20 }}>Valuation of Software</li>
                    <li style={{ marginTop: 20 }}>Valuation of Debentures</li>
                    <li style={{ marginTop: 20 }}>Valuation for Family Settlement</li>
                    <li style={{ marginTop: 20 }}>Valuation for Arbitration/Dispute Settlement/ Dispute Resolution</li>
                    <li style={{ marginTop: 20 }}>Valuation for Specific Purpose</li>
                    <li style={{ marginTop: 20 }}>Valuation in case of Take Over of Companies</li>
                    <li style={{ marginTop: 20 }}>Valuation of Shares for Transfer Pricing under Income Tax</li>
                    <li style={{ marginTop: 20 }}>Calculation of Fair Value as per IND-AS / IFRS/ Accounting Standards</li>
                    <li style={{ marginTop: 20 }}>Valuation of Venture Capital</li>
                    <li style={{ marginTop: 20 }}>Valuation Of Mergers and Demerger</li>
                    <li style={{ marginTop: 20 }}>Valuation Of Land Building and Plant and Machinery</li>
                    <li style={{ marginTop: 20 }}>Valuation of Insolvency and bankruptcy (ABC)</li>
                    <li style={{ marginTop: 20 }}>Valuation of Preference Shares</li>

                </ol>
            </p>,
            hr: false,
            underline: false
        },


    ]

}


