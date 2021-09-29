import Image from "next/image";
import Valuation from "@images/home/valuation.png";
import Coin from "@images/gst/gst-registration/coin.png";
import Cost from "@images/gst/gst-registration/cost.png";
import Archive from "@images/gst/gst-registration-for-foreigners/archive.png";
import Name from "@images/gst/gst-registration-for-foreigners/name.png";
import Owner from "@images/gst/gst-registration-for-foreigners/owner.png";

export const gstReturData = {
  headTitle: "",
  containers: [
    {
      id: 1,
      container: {
        title: "GST RETURN FILING",
        summary: (
          <>
            GST RETURN FILING is the process of declaring the Sales and purchase
            and out tax liability to the government/ reporting authority in a
            specified manner, after you get the GST Registration done, this has
            to be filed in GSTR 3B and GSTR 1.
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: <Image src={Coin} alt="Work One Image Loading.." />,
            desc: "",
            title: <p style={{ fontSize: 13 }}>Starting at Rs. 2,799/-</p>,
          },
          {
            id: 2,
            imageSrc: <Image src={Cost} alt="Work One Image Loading.." />,
            desc: "",
            title: <p style={{ fontSize: 13 }}>EMI Available</p>,
          },
        ],
      },
    },
    {
      id: 2,
      container: {
        title: "How has GST Returns?",
        summary: (
          <>
            <div style={{ margin: "2rem 0rem" }}>
              <p>
                All GST registered irrespective of turnover (i.e If you have
                registered the exemption limit of 20 Lakhs Does not apply, even
                NIL turnover needs to be disclosed), have to the file prescribed
                return within the Due date, the majority of traders/service
                providers need to file GSTR 3B within 20th of the subsequent
                month declaring their summary turnover and summary Input
              </p>
            </div>
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: <Image src={Owner} alt="Work One Image Loading.." />,
            desc: "",
            title: <p style={{ fontSize: 13 }}>Collect Documents</p>,
          },
          {
            id: 2,
            imageSrc: <Image src={Name} alt="Work One Image Loading.." />,
            desc: "",
            title: <p style={{ fontSize: 13 }}>File GSTR 3B</p>,
          },
          {
            id: 1,
            imageSrc: <Image src={Archive} alt="Work One Image Loading.." />,
            desc: "",
            title: <p style={{ fontSize: 13 }}>Get Returns</p>,
          },
        ],
      },
    },
  ],
};

export const gstReturDataDesc = [
  {
    id: 1,
    desc: (
      <>
        <div style={{ margin: "4rem 0rem" }}>
          <h1 style={{ textAlign: "center" }}>
            GSTR-3B FILINGS (GST RETURN FILINGS)
          </h1>
          <div style={{ margin: "1rem 0rem" }}>
            <p>
              GSTR-3B is a simplified summary return and the purpose of the
              return is for taxpayers to declare their summary GST liabilities
              for the tax period and the discharge of these liabilities in a
              timely manner A normal taxpayer is required to file GSTR-3B
              returns for every tax period. All normal taxpayers and casual
              taxpayers are required to file the GSTR-3B GSTR-3B can be filed
              from the returns section of the GST Portal. In the post login
              mode, you can access it by going to Services > Returns > Returns
              Dashboard. After selecting the financial year and tax period,
              GSTR-3B, (if applicable), in the given period will be displayed.
            </p>
          </div>
        </div>
        <div style={{ margin: "4rem 0rem" }}>
          <h1 style={{ textAlign: "left" }}>
            DUE DATE TO FILE GST RETURNS GSTR 3B
          </h1>
          <div style={{ margin: "1rem 0rem" }}>
            <p>
              The due dates for filings GSTR 3B are 20th of the subsequent
              month, that is the sales and purchase of the month April need to
              filed within 20th May The tax filers from 15 states/UTs --
              Chhattisgarh, Madhya Pradesh, Gujarat, Daman and Diu, Dadra and
              Nagar Haveli, Maharashtra, Karnataka, Goa, Lakshadweep, Kerala,
              Tamil Nadu, Puducherry, Andaman and Nicobar Islands, Telangana and
              Andhra Pradesh -- will now be having the last date of filing
              GSTR-3B returns as 22nd of the month without late fees 22
              States/UTs of Jammu and Kashmir, Ladakh, Himachal Pradesh, Punjab,
              Chandigarh, Uttarakhand, Haryana, Delhi, Rajasthan, Uttar Pradesh,
              Bihar, Sikkim, Arunachal Pradesh, Nagaland, Manipur, Mizoram,
              Tripura, Meghalaya, Assam, West Bengal, Jharkhand and Odisha
              having annual turnover below Rs 5 crore in previous financial year
              the last date will be 24th.
            </p>
          </div>
        </div>
        <div style={{ margin: "4rem 0rem" }}>
          <h1 style={{ textAlign: "left" }}>
            Will there be any invoice matching in GSTR-3B?
          </h1>
          <div style={{ margin: "1rem 0rem" }}>
            <p>
              No, all the details in GSTR-3B will be self-declared in summary
              manner and the taxes will be paid based on table 6 of GSTR-3B
              (refer to the Rules as available on the GST Council or CBEC
              website, applicable for GSTR-3B Form). But you need unsure the
              that you match it GSTR 2A and not more than 10% for unlisted items
              can be claimed, that means you can claim only 110% of the amount
              reflected in GSTR 2A.
            </p>
          </div>
        </div>
        <div style={{ margin: "4rem 0rem" }}>
          <h1 style={{ textAlign: "left" }}>
            Is filing of GSTR-3 mandatory even if there is no business in the
            particular tax period?
          </h1>
          <div style={{ margin: "1rem 0rem" }}>
            <p>
              GSTR-3B is also mandatory to be filed by all normal and casual tax
              payers, even if there is no business in the particular tax period.
            </p>
          </div>
        </div>
        <div style={{ margin: "4rem 0rem" }}>
          <h1 style={{ textAlign: "left" }}>GSTR-1 (GST RETURN FILINGS)</h1>
          <div style={{ margin: "1rem 0rem" }}>
            <h2>1. What is GSTR-1? (Form used in GST RETURN FILINGS)</h2>
            <p>
              GSTR-1 is a monthly Statement of Outward Supplies to be furnished
              by all normal and casual registered taxpayers making outward
              supplies of goods and services or both and contains details of
              outward supplies of goods and services. Every registered taxable
              person, other than an input service distributor/compounding
              taxpayer/TDS Deductor/TCS Collector is required to file GSTR-1,
              the details of outward supplies of goods and/or services during a
              tax period, electronically on the GST Portal.
            </p>
          </div>
        </div>
        <div style={{ margin: "3rem 0rem" }}>
          <h1 style={{ textAlign: "left" }}>
            Is GSTR-1 filing mandatory? (Form used in GST RETURN FILINGS)
          </h1>
          <div style={{ margin: "1rem 0rem" }}>
            <p>
              GSTR-1 needs to be filed even if there is no business activity
              (Nil Return) in the tax period. The following details of a tax
              period have to be furnished in GSTR-1:
            </p>
            <ul style={{ margin: "2rem" }}>
              <li>
                Invoice level details of supplies to registered persons
                including those having UIN
              </li>
              <li>
                Invoice level details of Inter- state supplies of invoice value
                greater than equal to INR2,50,000 to unregistered persons
                (consumers)
              </li>
              <li>
                Details of Credit/Debit Notes issued by the supplier against
                invoice
              </li>
              <li>
                Details of export of goods and services including deemed exports
                (SEZ)
              </li>
              <li>
                Summarised state level details of supplies to unregistered
                persons (consumers)
              </li>
              <li>
                Summary Details of Advances received in relation to future
                supply and their adjustment
              </li>
              <li>
                Details of any amendments effected to the reported information
                for either of the above categories.
              </li>
              <li>Nil- rated, exempted, and non-GST supplies</li>
              <li>HSN/SAC wise summary of outward supplies</li>
            </ul>
          </div>
          <div style={{ margin: "3rem 0rem" }}>
            <p>The following taxpayers are not required to file GSTR-1:</p>
            <ul style={{ margin: "2rem" }}>
              <li>
                Taxpayers under the Composition Scheme (Return to be filled by
                them in GSTR 4)
              </li>
              <li>
                Non-resident foreign tax payers (Return to be filled by them in
                GSTR 5)
              </li>
              <li>
                Online information database and access retrieval service
                provider (Return to be filled by them in GSTR 5A) Input Service
                Distributors (ISD) (Return to be filled by them in GSTR-6)
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

export const gstReturnFAQ = [
  {
    id: 1,
    nodeId: "1",
    question: "What is the due date for filing the GSTR-1 GST Return Filing?",
    aid: "101",
    answer: (
      <div>
        <p>
          <span style={{ fontWeight: "bold" }}>
            FOR TAXPAYERS WITH TURNOVER ABOVE RS 5 CRORES PER ANNUM
          </span>{" "}
          The due date to file GSTR-1 for the given tax period the is the 10th
          day of the succeeding month.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <span style={{ fontWeight: "bold" }}>
            FOR TAXPAYERS WITH TURNOVER BELOW RS 5 CRORES PER ANNUM
          </span>{" "}
          All taxpayers with turnover less than 5 Crores can file GSTR 1
          quarterly
        </p>
      </div>
    ),
  },
  {
    id: 2,
    nodeId: "2",
    question:
      "How should the value of turnover to be in entered in the mandatory field on the landing page of GSTR-1?",
    aid: "202",
    answer:
      "The turnover value in Table 3 of GSTR-1 has to be entered manually for the first year as the information is not available with the GST system. From the second year of implementation of GST, the system will auto-calculate the turnover based on all the annual returns filed for all the GSTINs associated with a given PAN (PAN-based turnover). However, the turnover value will be editable and you will have the option to amend it.",
  },
  {
    id: 3,
    nodeId: "3",
    question: "What does the ‘Total Invoice Value’ column indicate in GSTR-1?",
    aid: "303",
    answer:
      "The ‘Total Invoice Value’ column in GSTR-1 is for the invoice value inclusive of taxes.",
  },
  {
    id: 4,
    nodeId: "4",
    question:
      "Will there be any validation on relationship between Invoice value and Taxable Value?",
    aid: "40",
    answer:
      "Taxable value is the value as per the provisions of GST law. There will be no validation that the invoice value is equivalent to taxable value plus the tax amount.",
  },
  {
    id: 5,
    nodeId: "5",
    question: "Can I enter details of Goods and Services in the same invoice?",
    aid: "505",
    answer:
      "Yes, you can enter details of Goods and Services in the same invoices.",
  },
  {
    id: 6,
    nodeId: "6",
    question: "What are B2B Supplies?",
    aid: "606",
    answer:
      "B2B Supply refers to supply transactions between registered taxable entities/persons (Business-to-Business supplies).",
  },
  {
    id: 7,
    nodeId: "7",
    question: "What are Debit Notes?",
    aid: "707",
    answer:
      "A Debit Note is a document issued against an invoice in cases where the original invoice was issued at a value lower than the actual value of goods and/or services provided. It can also be issued in case of post supply price negotiations. The difference amount is accounted for in the form of a Debit note",
  },
  {
    id: 8,
    nodeId: "8",
    question: "What are Credit Notes?",
    aid: "808",
    answer:
      "Credit Note is a document issued against an invoice in cases where invoice was issued at a value higher than the actual value of goods and/or services provided or the invoice value is reduced due to post supply negotiations. This may also happen when the goods supplied are returned by the recipient, or where goods or services or both supplied are found to be deficient.",
  },
  {
    id: 9,
    nodeId: "9",
    question: "When are Debit Notes to be reported in the return?",
    aid: "909",
    answer:
      "Debit Notes are to be reported in the return of the month in which they are issued by the supplier.",
  },
  {
    id: 10,
    nodeId: "10",
    question: "When are Credit Notes to be reported in the return?",
    aid: "10010",
    answer:
      "Credit Notes are to be reported in the return of the month in which they are issued but not later than the return of the September month following the end of the financial year in which such supply was made, or the date of furnishing of the relevant annual return, whichever is earlier.",
  },
  {
    id: 11,
    nodeId: "11",
    question:
      "Does a taxpayer need to report the credit notes and debit notes of supplies to consumer separately?",
    aid: "11011",
    answer:
      "No. In case of supplies to consumers are to be reported in a consolidated manner (intra-state supplies to the consumer and inter- state supplies of invoice value less than INR 2.5 lakhs), the credit/debit notes are not required to be reported separately. Such supplies have to be reported in a consolidated manner net off the values of credit and debit notes.",
  },
  {
    id: 13,
    nodeId: "13",
    question:
      "In case of Receipt of advance by the Supplier from a Receiver, is the supplier liable to pay tax on such an advance amount?",
    aid: "13013",
    answer:
      "Yes, Supplier is liable to pay tax on advances received from Receivers for the supply of goods and services and report the consolidated advance received details in month in which payment is received. The amount of advances to be reported in GSTR-1 is net off the amount for which invoices have already been issued and the value reported in the same return in other sections.",
  },
  {
    id: 15,
    nodeId: "15",
    question:
      "How is the tax paid on advance payments adjusted against the invoice(s) issued in the subsequent tax period(s)?",
    aid: "15015",
    answer:
      "The taxpayer has to declare the advance that has to be adjusted in the tax period in which advance is received. Subsequently when invoice is issued,then taxpayer can adjust the tax liability of the invoice issued of that tax period, in the GSTR-1 of that period. This can be shown in the advance adjustment table of GSTR-1.",
  },
  {
    id: 16,
    nodeId: "16",
    question: "How is Export treated under the GST regime?",
    aid: "16016",
    answer:
      "Exports are generally treated as Zero-rated Inter-State Supplies. In case of exports, the taxpayer has the option to export without payment of any integrated tax and claim refund of ITC (against the exports made) or the taxpayer may pay IGST and claim refund of the IGST amount paid (post affecting the exports).",
  },
];
