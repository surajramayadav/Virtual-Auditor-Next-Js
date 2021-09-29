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
    title: <p style={{ fontSize: Fonts.h1, color: Colors.white }}>Startup Valuation</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4, color: Colors.white }}>Get a Valuation Certificate for estimating your company's worth and to attract funding. We are registered valuers, and our Certificate is valid througout world.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={conference} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>IBBI Registered Valuer</p>
        },
        {
            id: 2,
            imageSrc: <Image src={internet} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Certificate valid Worldwide</p>
        },
        {
            id: 3,
            imageSrc: <Image src={person} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Dedicated Account Manager</p>
        }
    ]


}


export const WCVA = {
    title: <p style={{ fontSize: Fonts.h1, fontWeight: 'bold', textAlign: 'center' }}>WHY CHOOSE <span style={{ color: Colors.heading }}>VIRTUAL AUDITOR</span></p>,

    box: [
        {
            id: 1,
            imageSrc: <Image src={accounting} alt="Work One Image Loading.." />,
            title: <p styleowner={{ fontSize: Fonts.h3, marginTop: 20 }}>Valuation performed by registered valuer</p>
        },
        {
            id: 2,
            imageSrc: <Image src={internet} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Valuation performed by registered valuer</p>
        },
        {
            id: 3,
            imageSrc: <Image src={government} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Valuation Certificate Accepted by all Statutory Authorities</p>
        },
        {
            id: 4,
            imageSrc: <Image src={investor} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Valuation Accepted by all Investors/Angel Investors/Venture Capitalist/PE Firms</p>
        },

    ]


}


export const DRFV = {
    title: <p style={{ fontSize: Fonts.h1, fontWeight: 'bold', textAlign: 'center', color: Colors.white }}>DOCUMENTS REQUIRED <span style={{ color: Colors.green }}>FOR VALUATION</span></p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={accounting} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Projected Profit & Loss Statements</p>
        },
        {
            id: 2,
            imageSrc: <Image src={time} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Projected Balance Sheet</p>
        },
        {
            id: 3,
            imageSrc: <Image src={internet} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Identifiable competitors’ names</p>
        },


    ]


}


export const ValStart = [
    {
        id: 1,
        imageSrc: <Image src={man} alt="Work One Image Loading.." />,
        desc: (<p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>To value firms with negative earnings, little or no historical data and few comparable, the steps involved are essentially the same as in any valuation like in the case of Ola , Paytm or Flipkart First Prepare the Estimated Future Cash flows and financial Statements of the Company
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            Step 1: Forecast all Revenue Sources
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            Step 2: Forecast All the Cost including both fixed Cost & Variable Cost
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            Step 3: Forecast the Investment in Assets
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            Step 4: Prepare Profit & Loss Account
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            Step 5: Prepare Balance Sheet
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            Step 6: Estimate the Funding Gap
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            Step 7: Business Valuation by Registered Valuer
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
        </p>),
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>Start up Valuation at early stage ?</h1>,
        right: true
    },
    {
        id: 2,
        imageSrc: <Image src={girl} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>Have you come across the term “startup valuation ?” It is quite a common term and used in context with analyzing the overall growth of your business Startup valuation india can be done only by Registered Valuer who are registered with IBBI , it cannot be merely done any Chartered Accountant At the pre-revenue stage of any business, it is important to stalk out a framework for their valuation.
            Business owners want the valuation to be on the higher side. A startup should have enough capital so that it can run the business without any hassle until the break-even point is achieved. Any startup or newly set-up business model will eventually fail if there is not enough backup for budget and funding. You always hear the word “Valuations”, say Ola is valued at $10 Billion, Flipkart is valued $ 21 Billion dollars The question that comes to your mind how come such a huge loss-making company get such a huge valuation!</p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>Are you running a startup organization?</h1>,
        right: false
    },
    {
        id: 3,
        imageSrc: <Image src={man2} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>We at virtual auditor are experts in Start-up Valuation and Business valuation, we have a dedicated team of Registered Valuers and Chartered Accountants to help you unlock and find the True value of you company before going to the Investor Business Valuation services should be done only by Registered valuer how specialised in category Securities and Financial Assets Registered with IBBI,</p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>Startup Valuation Experts</h1>,
        right: true
    },
    {
        id: 4,
        imageSrc: <Image src={man} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>Startup valuation is one of the most important factors that needs to be kept in mind while funding a new business. Such valuation of startup company has a crucial influence on the future valuation of the business and its ability to generate revenue. Startup valuation methods are also the means by which an aspiring business owner can calculate the worth of his/her company during the early pre-rowth stage. Various valuation companies in India are available who offer various valuation services at affordable rates. There are two types of Startup valuation, namely the amicable method and the one-way method. In the first type of valuation, all the concerned parties meet together and arrive at an equitable consensus as to the valuation of the business.
            All the valuation experts are gathered together and the process of valuation takes place through a transparent discussion. This method of valuation does not involve any pressure or intimidation from any angle and thus it is considered as one of the most transparent and legitimate method of valuation. There are many other important e-commerce valuation metrics that must be covered under this topic. The business valuation of a newly launched company is the first step that should be taken before making financial forecasts, funding rounds and getting an approval from the investors for the business.
            It is very important to have a clear picture of the financial modeling course that is to be followed and this can only be achieved with the help of an experienced and legitimate valuation service provider in India. These valuation service providers use different valuation models and they have a deep knowledge of financial modeling courses and their applications. Thus, these valuation services firms are very helpful in providing sound business valuation of a startup company. Valuation online is done by expert registered valuers virtual auditor supports all start in their fund raising journey. Wish to Apply for a new Company Registration
        </p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>
            Important E-Commerce valuation Methods</h1>,
        right: false
    },

]




export const VALSVD = {
    title: <p style={{ fontSize: Fonts.h1, fontWeight: 'bold', textAlign: 'center', color: Colors.black }}>STARTUP VALUATION <span style={{ color: Colors.heading }}>DEFINITION </span></p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4, color: Colors.white }}>Valuation or startup valuation refers to the process by which the value of enterprise is determined for the purpose of investment and amount of stake dilution (Shares to be allotted) Business valuation is never easy for any venture. However, when you are a start-up, it becomes particularly difficult to get a business valuation done, with little-or-no revenue or profits and less-than-certain futures.
        <br />
        <strong>Three approaches in valuation of start-up entities adopted by Registered Valuers</strong>
    </p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={work} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Going Concern Valuation</p>
        },
        {
            id: 2,
            imageSrc: <Image src={valuation} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Liquidation Valuation</p>
        },
        {
            id: 3,
            imageSrc: <Image src={tax} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Market Valuation</p>
        },


    ]


}





export const ValSecure = [
    {
        id: 1,
        imageSrc: <Image src={rocket} alt="Work One Image Loading.." />,
        desc: (<p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>How to find start-up valuation is most nagging question many start ups have , many start-up need to hire a Registered Valuer in the category Valuers in Securities & Financial Assets Registered with IBBI</p>),
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>
            How to find Startup Valuation?</h1>,
        right: false
    },
    {
        id: 2,
        imageSrc: <Image src={startup} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>
            <ul style={{ marginLeft: 20 }}>
                <li style={{ marginTop: 20 }}>Venture Capital Method</li>
                <li style={{ marginTop: 20 }}>Berkus Method</li>
                <li style={{ marginTop: 20 }}>Scorecard Valuation Method</li>
                <li style={{ marginTop: 20 }}>Risk Factor Summation Method</li>
                <li style={{ marginTop: 20 }}>Cost-to-Duplicate Method</li>
                <li style={{ marginTop: 20 }}>Discounted Cash Flow Method</li>
                <li style={{ marginTop: 20 }}>Valuation By Stage Method</li>
                <li style={{ marginTop: 20 }}>Comparable Method</li>
                <li style={{ marginTop: 20 }}>First Chicago Method</li>
                <li style={{ marginTop: 20 }}>Startup valuation revenue multiple</li>

            </ul>
        </p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>Methods of Valuation adopted by Registered Valuers</h1>,
        right: true
    },
    {
        id: 3,
        imageSrc: <Image src={girl} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>A startup is a new business with a unique value proposition for selling products, services, or ideas, and that has the potential for swift growth. Startup companies receive different kinds of funding for supporting the business model to grow and build up. There are various relevant options for fundraising for startups in India such as angel investors, venture capitalists, crowdfunding, bootstrapping, and others. Usually, there needs to be a guarantor for raising funds for a startup business. The reason behind this is the stage of instability and non-profitability that prevailed until the startup reaches its break-even point. Therefore, the determination of startup validation becomes difficult. For a mature business, the valuation process is very easy. To calculate the value, the company should compute all of their earnings, before adding taxes, interests, depreciation, and amortization. However, for the determining startup valuation, the registered valuers for valuation in India i.e., Insolvency and Bankruptcy Board of India (IBBI) consider a set of positive and negative factors. The positive factors include a reputation or brand value, customer traction, a prototype of the business, revenue generated till the time, supply and demand including distribution channels, and market value. The negative factors for valuating a startup include low margins in price determination, poor industrial value, market competition, product offerings, and management of the business.</p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>How is Startup Valuation determined by Registered Valuers?</h1>,
        right: false
    },
]




export const MOSV = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>METHODS OF STARTUP VALUATION,

    </h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}> There are different methods to calculate the valuation for new business. Some of them are simple, while most of them are based on several qualitative variables and statistical analysis. It is necessary for an entrepreneur to understand the most appropriate valuation method and then calculate the worth accordingly.</p>,
            hr: false,
            underline: true

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>1. Venture Capital Method (VC Method)</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}> The venture capital method allows a startup to evaluate the forecasted terminal value by establishing the return to be paid to an investor. It is well-suited for the pre-revenue startups involving pre-money valuation. The pre-money valuation is calculated by subtracting invested capital from post-money valuation, in which the post-money valuation is obtained by dividing terminal value with an expected return. It is the simplest method to calculate startup value. This method is suggested by most reputed fundraising for startups in India.</p>,
            hr: true,
            underline: true

        },

        {
            id: 3,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>2. Cost to Duplicate Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>Berkus method evaluates a startup based on the business idea, the prototype of products or services offered, quality of the management team, strategic relationships or alliances, and sales forecasting. Each of these criteria is associated with a certain amount of money.</p>,
            hr: true,
            underline: true

        }, {
            id: 10,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>3. Berkus Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}> Berkus method evaluates a startup based on the business idea, the prototype of products or services offered, quality of the management team, strategic relationships or alliances, and sales forecasting. Each of these criteria is associated with a certain amount of money.</p>,
            hr: true,
            underline: true

        }, {
            id: 4,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>4. Discounted Cash Flow (DCF) Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                This type of valuation method for a startup is used for estimating the overall value of the investment on the basis of the future cash flows.
                <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                DCF analysis is known to analyse the respective attempts towards getting an idea of some current investment –depending on the projections of how much money it is going to generate in the future.
                <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                Preparing the Valuation under Discounted Cash Flow Method
                <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                <strong>Step 1:Assess the firm’s Current Standing:</strong>
                <br /><br />
                <span style={{}}>What are the firms current year revenge
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                    What is the cash Burn rate of the company
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                    Industry projection
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />  </span>

                <strong>Step 2: Estimate Revenue Growth</strong><br /><br />
                <span style={{}}>This can be identified in the following ways
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                    o ·Past growth rate in revenues at the firm itself
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                    o Growth rate in the overall market that the firm serves
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                    o Barriers to Entry and Competitive Advantages possessed by the firm
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} /> </span>

                <strong>Step 3: Estimate a Sustainable Operating Margin in Stable Growt</strong><br /><br />
                <span style={{}}>This can be identified in the following ways
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />

                    <ul style={{ marginLeft: 20 }}>
                        <li style={{ marginTop: 20 }}> Looking at the underlying business that this firm is in, consider its true competitors.</li>
                        <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                        <li style={{ marginTop: 20 }}> Deconstruct the firm’s current income statement to get a true measure of its operating margin</li>
                        <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />

                    </ul>  </span>

                <strong>Step 4: Estimate Reinvestment To Generate Growth</strong><br /><br />
                <span style={{}}>To grow, firms have to reinvest, and this principle cannot be set aside when you are looking a young firm
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                    Expected growth = Reinvestment rate *(multiplied) Return on capital
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                </span>

                <strong>Step 5: Estimating Risk Parameters and Discount Rates</strong><br /><br />
                <span style={{}}>Risk, in traditional terms, is viewed as a ‘negative’. Webster’s dictionary, for instance, defines risk as “exposing to danger or hazard”.
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                    But has two facets one is “Danger” and the othe is “Opportunity”
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                    Risks are termed as BETA
                    <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />

                </span>
            </p>,
            hr: false,
            underline: true

        }, {
            id: 5,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>
                5. Scorecard Valuation Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}> It utilizes the comparison of the pre-money valuation of the startup by incorporating a scorecard. The average pre-money valuation of the startups in a region is calculated giving importance to certain criteria such as the size of the business, the strength of the central team, the technology used, competition, marketing channels, and investment options. The scorecard is made by assigning factors to each element and comparing it with a standard.
                <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
                This the most the used method in valuation , the components being the Weighted Average Cost of Capital , Beta being the risk factor , Cost of Equity and other factors that are used to determine the present value of future cash flows</p>,
            hr: true,
            underline: true

        },
        {
            id: 6,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>
                6. Risk Factor Summation Method</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>There are 12 factors that are considered for the evaluation of the worth of new business. These factors are - business stage, management team, political risks, manufacturing risks, sales and marketing, capital funding, competition, technology, litigation risks, reputation related risks, and potential lucrative risks. Every factor is analyzed as positive, negative, and neutral to determine the valuation. The registered valuers for valuation in India combine this method with other valuation processes for business valuation.
            </p>,
            hr: true,
            underline: true

        },
        {
            id: 7,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>
                7. Business Stage Valuation</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>A quick range of validation needed by angel investors and venture capital firms in order to fund a startup. The business stage valuation method evaluates various stages of funding with respect to the risks of investing in a startup. It is based on the estimated company value, stage of development, business idea, management team, product prototype, and strategic alliance or partners in the business venture.
            </p>,
            hr: true,
            underline: true

        },
        {
            id: 8,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>
                8. Probability Methods</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>There are some other probability methods such as the comparables method, the first Chicago method, and the book value method. They are all based on assumptions and future probability, without any mathematical or data analysis. The startup valuation is done based on best-case, worst-case, and normal case scenarios.</p>,
            hr: true,
            underline: true

        },
        {
            id: 9,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>
                9. Startup valuation revenue multiple</h4>,
            hr: true,
            underline: false

        },
    ]
}




export const ValStart2 = [
    {
        id: 1,
        imageSrc: <Image src={yes} alt="Work One Image Loading.." />,
        desc: (<p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>
            This can be answered through this question of how much revenue multiple the investor is willing to offer
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            In startup valuation revenue multiple method , registered valuers generally use, the two most reliable values
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            1) Earnings Before Interest, Taxes, Depreciation and Amortization (EBITDA)
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            2) Seller Discretionary Earnings (SDE).
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            EBITDA is used almost exclusively for companies larger than $5M in value and is calculated by adding interest, taxes, depreciation and amortization back to your net income. For businesses under $5M in value, Seller Discretionary Earnings (SDE) is typically used. SDE is the profit left to the business owner once all costs of goods sold and critical (i.e. non-discretionary) operating expenses have been deducted from gross income. Crucially, any owner salary can be added back to the profit number to reflect the true earnings power of the business. Essentially, SDE can be expressed with the following simple formula:
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            SDE = Revenue – Cost of Goods Sold – Operating Expenses + Owners (Founders) Compensation ( i.e Directors Salary or any other compensation provided) This is the figure that we recommend you apply the multiple to when calculating your company’s value.
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            Now that addressed this, we can move on to your actual question.
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />

        </p>),
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>
            Startup valuation revenue multiple</h1>,
        right: true
    },
    {
        id: 2,
        imageSrc: <Image src={girl} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>
            The Valuation has to done by a registered valuer only you may contact CA Viswanathan is IBBI Registered Valuer u/s 247 of Companies Act, 2013 for Securities or Financial Assets Class vide registration number IBBI/RV/03/2019/12333. He is also a fellow member of The Institute of Chartered Accountants of India and qualified Company Secretary We are into practice since 2012 and has advised many clients in Valuation, Amalgamations, Corporate Structuring, Tax & Audit. His clients include NBFCs, Publically Listed Companies, Stock Broking Companies, Manufacturing Companies, Service Industries, Real Estate Companies, etc. For unlisted companies under Income Tax Act, Merchant Bankers valuation reports are required to arrive at “Fair Market Value” under the discounted cash flow method (DCF Method). Business Valuation Advisory provided in the following areas
            <br/> <br/>
            1. Valuation of Business / Firm
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            2. Valuation of Intangibles such patents, copyrights, technical knowhow, franchise agreements, etc.
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            3. Valuation of Shares under Companies Act, Foreign Direct Investments
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            4. Valuation of Goodwill
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            5. Valuation for Swap Shares in case of Amalgamation
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            6. Start-up Valuation
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            7. Valuation for Brands
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            8. Valuation of Intellectual Property
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            9. Valuation of Software
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            10. Valuation of Debentures
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
        </p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>Conclusion</h1>,
        right: false
    },

]