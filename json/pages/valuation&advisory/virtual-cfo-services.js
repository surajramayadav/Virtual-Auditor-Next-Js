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

import environment from '@images/startup/environment.png'

export const VartualCFOS = {
    title: <p style={{ fontSize: Fonts.h1, color: Colors.white }}>Virtual CFO Services</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4, color: Colors.white }}>At Virtual Auditor, we provide virtual CFO services that will be in charge of handling the accounts, finance, company operations, reporting, and several other tasks in the company.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={conference} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Outsourced virtual CFO</p>
        },
        {
            id: 2,
            imageSrc: <Image src={internet} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>financial advise by expert CA/CS</p>
        },
        {
            id: 3,
            imageSrc: <Image src={person} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Financial plan and advisory</p>
        }
    ]


}


export const Virtual_OurPack = {
    title: <p style={{ fontSize: Fonts.h1, fontWeight: 'bold', textAlign: 'center' }}>OUR <span style={{ color: Colors.heading }}>PACKAGE</span></p>,

    box: [
        {
            id: 1,
            imageSrc: <Image src={accounting} alt="Work One Image Loading.." />,
            title: <p styleowner={{ fontSize: Fonts.h3, marginTop: 20 }}>Development and Evaluation of Management Accounts</p>
        },
        {
            id: 2,
            imageSrc: <Image src={time} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Cash Flow Projections</p>
        },
        {
            id: 3,
            imageSrc: <Image src={environment} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Budgeting (Interim and Annual).</p>
        },
        {
            id: 4,
            imageSrc: <Image src={government} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Compensation Design</p>
        },
        {
            id: 5,
            imageSrc: <Image src={investor} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Overview of Accounting and Monthly Closes.</p>
        },
        {
            id: 6,
            imageSrc: <Image src={investor} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Management of Creditors and Debtors</p>
        },
        {
            id: 7,
            imageSrc: <Image src={investor} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Structural Guidance</p>
        },
        {
            id: 8,
            imageSrc: <Image src={investor} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Project Management of The Financial Aspect of New Businesses.</p>
        },
        {
            id: 9,
            imageSrc: <Image src={investor} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Evaluation and Analysis of Internal Controls</p>
        },
        {
            id: 10,
            imageSrc: <Image src={investor} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Compliance Management (Taxation, Corporate, and Listing Policies).</p>
        },
    ]


}


export const Virtual_Start = [
    {
        id: 1,
        imageSrc: <Image src={man} alt="Work One Image Loading.." />,
        desc: (<p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>Virtual CFO services are offered to businesses that are yet to assign an internal CFO (Chief Financial Officer). In today's business setting, organizations are faced with different challenges from their financial conditions, management, accounting, and overall business growth. This task requires a high-ranking administrative officer in the organization whose primary responsibility is to manage the financial reports, accounting, and financial crisis of the company. Therefore, a virtual CFO will effectively handle these challenges by providing support, analysis, professional and financial advice to the management. Startups, SMEs, and small enterprises are often unable to afford the cost implications of appointing a top management executive as a CFO, hence requiring the services of a virtual CFO.
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            At Virtual Auditor, we provide virtual CFO services that will be in charge of handling the accounts, finance, company operations, reporting, and several other tasks in the company. The services offered are the complete supervision of finance, account operations, financial plan and provide support to the management and customers.
        </p>),
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>What is Virtual CFO Services?</h1>,
        right: true
    },
    {
        id: 2,
        imageSrc: <Image src={man2} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>Virtual CFO services created the opportunity for Chief Financial Officer (CFO) services that is responsible for financial evaluation and risk recognition. The services of a CFO can be easily outsourced if you don’t require an internal CFO to carry out these financial responsibilities. These financial responsibilities can be outsourced to a reliable consultancy agency that will handle all the tasks that are finance-related in the business. Outsourcing to virtual CFO services that will gain insights into your business’s financial condition and turn it around for the better. Below are the ways virtual CFO services can benefit your business
            <br />
            <ul style={{ marginLeft: 40 }}>
                <li style={{ marginTop: 20 }}>Financial Projections: Virtual CFO services can evaluate your financial records and income statements to provide valid financial projections.</li>
                <li style={{ marginTop: 20 }}>Cash Flow Management: Adequate revenue management is required to appropriately handle cash utilization.</li>
                <li style={{ marginTop: 20 }}>Cash Flow Projections: Proper cash flow predictions will be performed to guarantee the continuous in-flow of cash to fulfill all responsibilities.</li>
                <li style={{ marginTop: 20 }}>Budgeting: Annual budgeting is vital and regular tracking is also required to evaluate progress.</li>
                <li style={{ marginTop: 20 }}>Management Of Debtors And Creditors: The management of debtor and creditor is necessary to reduce financial risks.</li>
                <li style={{ marginTop: 20 }}>Establishing an Account System: Analysis of the current account system and suggestions for necessary improvements</li>
            </ul>
        </p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>What is the requirement of having Virtual CFO Services?</h1>,
        right: false
    },
    {
        id: 3,
        imageSrc: <Image src={man} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>The primary feature of virtual CFO Is the management of records that is in line with standards of the financial records and improve the current structure of the organization The following are features of a virtual CFO Management of Account Records: Virtual CFO is responsible for managing financial records according to accounting principles. We are already aware that the financial records in an organization must follow the accounting guidelines established by the governmental body.
            <hr style={{ borderWidth: 1, marginTop: 20, marginBottom: 20, opacity: 0.6 }} />
            <ul style={{ marginLeft: 40 }}>
                <li style={{ marginTop: 20 }}>Financial Evaluation: Virtual CFO evaluates the financial status of the organization necessary for making policies integral to business growth. The business activities are also evaluated by recognizing major operational pointers.</li>
                <li style={{ marginTop: 20 }}>Budgeting: Setting up budgets assists in the cash flow management of the business. It is vital for evaluating cash requirements to appropriately balance income and expenditure.</li>
                <li style={{ marginTop: 20 }}> Financial Projections: Financial projections involve the estimation of future income and expenditure. It helps to forecast market factors and decisions on cash and resource requirements.</li>
                <li style={{ marginTop: 20 }}> Cash Flow Projections: Cash Flow predictions help to evaluate the financial status of the organization. This is crucial for making financial plans to cater to every financial responsibility.</li>
                <li style={{ marginTop: 20 }}> Increase Profitability: Virtual CFO services assist in mitigating wastage of resources. A strategic plan is required to increase productivity.</li>
                <li style={{ marginTop: 20 }}>Risk Evaluation: Virtual CFO recognizes every risk and moves appropriately to mitigate the risk that can adversely affect the business in the future. Risk evaluation is performed to mitigate risks and increase productivity.</li>
                <li style={{ marginTop: 20 }}>Key Performance Indicators (KPIs): Key Performance Indicators is required to evaluate existing condition and project future occurrences. There are different areas of the business that demonstrates KPIs such as sales, production, distribution, cash generation, and status of inventory. These factors are constantly tracked by the virtual CFO.</li>
                <li style={{ marginTop: 20 }}>Organizational Structure.: The Virtual CFO implements appropriate modifications in the structure of the organization for the growth of the business.</li>
                <li style={{ marginTop: 20 }}>Growth Plan: The financial status of the organization is managed by the virtual CFO to facilitate the growth of the business. The virtual CFO develops an excellent growth plan that recognizes when the business needs funding.</li>

            </ul>
        </p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>Features of Virtual CFO services</h1>,
        right: true
    },
    {
        id: 4,
        imageSrc: <Image src={girl} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20, fontSize: Fonts.h4 }}>Outlined below are services provided by the virtual CFO
            <br />
            <ul style={{ marginLeft: 40 }}>
                <li style={{ marginTop: 20 }}>Financial Recommendations: Virtual CFO analyses the current demand to provide financial recommendations. The growth of a business is determined by proper financial planning. This will enable top executives to concentrate on critical aspects without worrying about the financial condition of the business.</li>
                <li style={{ marginTop: 20 }}> Cash Flow Projections: Another primary responsibility of the virtual CFO is to predict cash flows. The financial condition of the business should be well-known to implement proper decisions. Proper future financial planning must have been established to meet all present and future responsibilities. It facilitates proper decision making irrespective of the number of funds that would be incurred.</li>
                <li style={{ marginTop: 20 }}> Budgeting: Virtual CFO services also involve budgeting. The tracking performance of the organization is performed through budgeting. Budgets require quarterly and monthly reviews for adequate modifications and improvements to meet a specific objective.</li>
                <li style={{ marginTop: 20 }}> Break-Even Analysis: A break-even analysis is used to determine the profitability of a business by considering the total cost (both variable and fixed). A virtual CFO develops the break-even analysis of a business to identify aspects where expenses should be managed.</li>
                <li style={{ marginTop: 20 }}>Responsible for The Company’s Account.: The account management of an organization is very critical. This aspect is responsible for analyzing the financial condition of the company. This financial condition involves a comprehensive assessment of the organization’s account and finance section. A professional is required in the business management that will provide an extensive report on the accounting operations of the company such as preparation of data as well as other accounting requirements. : Specialized areas require constant evaluation to facilitate business growth. A strong financial condition can be achieved through the establishment of different policies and the integration of strategic ideas. This process requires deliberations and evaluations to provide adequate guidance concerning the current profit, turnover, accounting and operational systems, business ambitions, and key performance indicators (KPIs). The financial conditions also evaluate potential growth, tax efficiency, and the overall business structure.</li>

            </ul>
        </p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>
            What Are The Main Virtual CFO services?</h1>,
        right: false
    },

]