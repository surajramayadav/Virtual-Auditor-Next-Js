import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const ABS = {
    title: <p style={{ fontSize: Fonts.h1 }}>ACCOUNTING & <strong>BOOKKEEPING SERVICES</strong></p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4 }}>Accounting & Bookkeeping Services is the most time-consuming part of any business after the <span style={{ color: Colors.link }}>company registration</span> is completed, as the saying goes focus on your business and leave the complexity of accounting & bookkeeping to the experts</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Starting at Rs.6,999/-</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>
        }
    ]


}


export const WCVAFABS = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>Why Choose Virtual Auditor for Accounting & Bookkeeping Services</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4 }}>Our Accounting & Bookkeeping Services are focused at reducing the finance and accounting costs of our clients by helping them with their management, accounting, and tax preparation needs. Personalized and professional online bookkeeping services cover the entire scope of bookkeeping and customers have the flexibility to choose what they require. We help our clients in accounting and bookkeeping process by helping them in</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Set-up, support</p>
        },
        {
            id: 2,
            imageSrc: <Image src={name} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Maintenance and consultancy</p>
        },
        {
            id: 3,
            imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>accounting and bookkeeping.</p>
        }
    ]


}


export const ABSWO = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>ACCOUNTING & BOOKKEEPING SERVICES WE OFFER
    </h1>,
    data: [
        {
            id: 1,
            subtitle: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Virtual Auditor has proficiency across all the major accounting software used in the industry for bookkeeping services, such as</p>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>QuickBooks (We are one of Quickbooks Certified Pro Advisors)</li>
                    <li style={{ marginTop: 20 }}>Virtual Auditor has a dedicated team of Chartered Accountants and professionals who can quickly adapt to customers' specified software and processes, and at the same time ensure quick turnaround time and quality standards.</li>
                </ol>
            </p>,
            hr: false,
            underline: true

        },
        {
            id: 2,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Accounts Receivable</li>
                    <li style={{ marginTop: 20 }}>Accounts payable</li>
                    <li style={{ marginTop: 20 }}>Bank Reconciliation</li>
                    <li style={{ marginTop: 20 }}>Invoicing Processing Services</li>
                    <li style={{ marginTop: 20 }}>Journal Entry Services</li>
                    <li style={{ marginTop: 20 }}>GST Returns</li>
                    <li style={{ marginTop: 20 }}>General ledger maintenance</li>
                    <li style={{ marginTop: 20 }}>Assets / equipment ledger maintenance</li>
                    <li style={{ marginTop: 20 }}>Expenses ledger maintenance</li>
                    <li style={{ marginTop: 20 }}>Preparing accounts receivable reports</li>
                    <li style={{ marginTop: 20 }}>Preparing accounts payable reports</li>
                    <li style={{ marginTop: 20 }}>Preparing ageing reports & summaries</li>
                    <li style={{ marginTop: 20 }}>Credit card reconciliation services</li>
                    <li style={{ marginTop: 20 }}>Preparing financial statements</li>
                    <li style={{ marginTop: 20 }}>Trial balance services</li>
                    <li style={{ marginTop: 20 }}>Preparing income statements (Profit & Loss)</li>
                    <li style={{ marginTop: 20 }}>Balance sheet services</li>
                    <li style={{ marginTop: 20 }}>Preparing sales reports</li>
                    <li style={{ marginTop: 20 }}>Preparing purchase reports</li>
                    <li style={{ marginTop: 20 }}>Cash flow statement</li>
                    <li style={{ marginTop: 20 }}>Entry of transactions</li>
                    <li style={{ marginTop: 20 }}>Inventory services</li>
                    <li style={{ marginTop: 20 }}>Accounting setup services</li>
                    <li style={{ marginTop: 20 }}>Day-to-day bookkeeping and accounting</li>
                    <li style={{ marginTop: 20 }}>Books balanced and reconciled quarterly</li>
                    <li style={{ marginTop: 20 }}>Management accounts produced quarterly</li>
                    <li style={{ marginTop: 20 }}>Annual accounts and tax returns preparation</li>
                    <li style={{ marginTop: 20 }}>Submission to Inland Revenue</li>
                    <li style={{ marginTop: 20 }}>Submitted to Companies House</li>
                    <li style={{ marginTop: 20 }}>Expert tax advice to minimize tax liability</li>
                    <li style={{ marginTop: 20 }}>Adjustments to year-end accounts</li>
                    <li style={{ marginTop: 20 }}>Storage of documents at our office</li>
                </ul>
            </p>,
            hr: false,
            underline: true

        },
        {
            id: 3,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 40 }}>Preparation of Financial Statements - Preparation of annual accounts for the statutory annual audit.</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
                <strong>Our services include:</strong>
                <br />
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Financial Reports</li>
                    <li style={{ marginTop: 20 }}>Financial Statement Preparation</li>
                    <li style={{ marginTop: 20 }}>Accounts Reconciliation</li>
                    <li style={{ marginTop: 20 }}>Financial Budgeting</li>
                    <li style={{ marginTop: 20 }}>Preparation of Tax Returns - Preparation of periodic tax, Gst and other returns. We also facilitate everything from tax processing and planning to filing, including tax returns preparation, quarterly returns and Annual Returns.</li>
                </ul>
                <br />
                For Accounting & Bookkeeping Servies in Bangalore, we have a specialized delivery center and service team that works out of Bangalore For Accounting & Bookkeeping Servies in Mumbai, we have a specialized service team that works out of Mumbai
            </p>,
            hr: false,
            underline: false

        },

    ]
}


