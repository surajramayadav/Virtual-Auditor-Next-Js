import Image from "next/image";

import Work1 from "@images/home/work1.png";
import Taxes from "@images/home/taxes.png";
import Valuation from "@images/home/valuation.png";
import TestonomialIcon from "@images/testinomial/testimonial-icon.png";
import CTitleSummaryBPoints from "@components/global/CTitleSummaryBPoints";

const prepareFinincial = {
  bulletPoints: [
    {
      title: (
        <li
          style={{
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          Profit & Loss Account
        </li>
      ),
    },
    {
      title: (
        <li
          style={{
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          Balance Sheet
        </li>
      ),
    },
    {
      title: (
        <li
          style={{
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          Cash Flow Statement (If applicable)
        </li>
      ),
    },
  ],
};

const circulateNotice = {
  bulletPoints: [
    {
      title: (
        <li
          style={{
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          Directors Report
        </li>
      ),
    },
    {
      title: (
        <li
          style={{
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          Audit Report
        </li>
      ),
    },
    {
      title: (
        <li
          style={{
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          Notice Calling the AGM
        </li>
      ),
    },
    {
      title: (
        <li
          style={{
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          Financial Statements
        </li>
      ),
    },
  ],
};

export const companyAnnualFiling = {
  headTitle:
    "Private Limited Company Annual Filing & Compliance - Virtual Auditor",
  containers: [
    {
      id: 1,
      container: {
        title: "Company Annual Filing: RoC Filing",
        summary: (
          <>
            You have started your entrepreneurial journey and have started
            running your company after your successful Company Registration,
            there are some procedures (Rules) to comply with regards to the
            filing of documents and maintenance of records, do Annual filing (
            RoC Filing) with Ministry of Corporate Affairs
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Starting at Rs.19,699/-</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>EMI Available</p>,
          },
        ],
      },
    },
    {
      id: 1,
      container: {
        title: "Company Annual Filing?",
        summary: (
          <>
            We will look at what the laws are and how to comply with them, and
            we will go over some practical tips for staying in line with the
            laws. We’ll also look at some of the results of this compliance,
            such as avoiding notices for non-compliance and protection from
            fines and penalties which has now been increased to Rs. 50,000 Vde
            THE COMPANIES (AMENDMENT) ORDINANCE, 2018
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: (
              <p style={{ fontSize: 13 }}>Collect Documents And Information</p>
            ),
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: (
              <p style={{ fontSize: 13 }}>File annual return to the RoC</p>
            ),
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Confirmation</p>,
          },
        ],
      },
    },
  ],

  processForClosure: {
    title: (
      <h1 style={{ textAlign: "center" }}>
        ANNUAL FILING (ROC FILING) FOR PRIVATE LIMITED COMPANIES & OPC ( ONE
        PERSON COMPANIES)
      </h1>
    ),
    desc: (
      <h3 style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
        WHAT IS ANNUAL FILING?
      </h3>
    ),
    bulletPoints: [
      {
        title: (
          <li
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            As required under section 92 and section 137 of the CompaniesAct
            2013, we need to file the annual return to the RoC (Registrar of
            Companies) document containing profit & loss , cash flow statements
            and Balance sheet with Registrar of companies.
          </li>
        ),
      },
      {
        title: (
          <li
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            The Following Plenty clause has been included in Section 92 of the
            Companies Act 2013.
          </li>
        ),
      },
      {
        title: (
          <li
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            "If any company fails to file its annual return under sub-section
            (4), before the expiry of the period specified therein, such company
            and its every officer who is in default shall be liable to a penalty
            of fifty thousand rupees and in case of continuing failure, with
            further penalty of one hundred rupees for each day during which such
            failure continues, subject to a maximum of five lakh rupees."." (
            The Penalty is Increased to Rs 50,000 + Further Penalty of Rs 100
            per day of default, subject to a maximum of Rs 5,00,00/-)
          </li>
        ),
      },
      {
        title: (
          <li
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            To know about the due dates for filing clink on the following link
            Company Annual Filing ( RoC Filing)
          </li>
        ),
      },
    ],
    sections: [
      {
        styles: {
          paddingTop: "2rem",
        },
        title: (
          <h3>
            PROCESS OF ANNUAL FILING (ROC FILINGS) FOR NEW COMPANIES (FORMED ON
            OR AFTER 1ST JANUARY OF THE RELEVANT YEAR)
          </h3>
        ),
        desc: (
          <p
            style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Companies that has been formed after 31st December of the relevant
            year (i.e. Company is formed on or after 1st January till 31st
            March) Section 92 that mandated the Annual Filing stipulates that in
            case a company is formed after 1st January they can hold with 18
            Months from the date of Incorporation
          </p>
        ),
      },
      {
        styles: {
          paddingTop: "2rem",
        },
        // title: <h3>BEST COMPLIANCE PRACTISES FOR ANNUAL FILING (ROC FILING)</h3>,
        // desc: (
        //   <p
        //     style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
        //   >
        //     Voluntarily winding up of a company need long-drawn procedural
        //     formalities to comply. There are specific mandatory necessities
        //     which ought to be performed to voluntarily shut down a company.
        //   </p>
        // ),
        bulletTitle: <h3 style={{ paddingTop: "1rem" }}>Procedure:</h3>,
        points: [
          {
            styles: {
              paddingTop: "1rem",
            },
            title: (
              <>
                <p
                  style={{
                    marginLeft: "1rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  (1) Prepare the financial statement for 18 Months.
                </p>
                {/* {prepareFinincial.map((bullet,index) => {
                  return 
                })} */}
                <CTitleSummaryBPoints key={1} data={prepareFinincial} />
              </>
            ),
          },
          {
            styles: {
              paddingTop: "1.5rem",
            },
            title: (
              <p
                style={{
                  marginLeft: ".5rem",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                (2) Conduct a Board meeting for finalization of accounts.
              </p>
            ),
          },
          {
            styles: {
              paddingTop: "1rem",
            },
            title: (
              <p
                style={{
                  marginLeft: ".5rem",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                (3) Get the Accounts audited by you Statutory Auditors (CA’s).
              </p>
            ),
          },
          {
            styles: {
              paddingTop: "1rem",
            },
            title: (
              <p
                style={{
                  marginLeft: ".5rem",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                (4) Get the Audit report.
              </p>
            ),
          },
          {
            styles: {
              paddingTop: "1rem",
            },
            title: (
              <p
                style={{
                  marginLeft: ".5rem",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                (5) Conduct a Board meeting for Adoption of financial statements
                (Accounts).
              </p>
            ),
          },
          {
            styles: {
              paddingTop: "1rem",
            },
            title: (
              <>
                <p
                  style={{
                    marginLeft: ".5rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  (6) Circulate Notice to AGM to all shareholders at least 21
                  prior to the date of annual general meeting Circulate Notice
                  to AGM to all shareholders at least 21 prior to the date of
                  annual general meeting with the following contents.
                </p>
                <CTitleSummaryBPoints key={1} data={circulateNotice} />
              </>
            ),
          },
          {
            styles: {
              paddingTop: "1.5rem",
            },
            title: (
              <>
                <p
                  style={{
                    marginLeft: ".5rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  (7) Conduct Annual General Meeting.
                </p>
              </>
            ),
          },
        ],
      },
      // {
      //   styles: {
      //     paddingTop: "2rem",
      //   },
      //   title: <h3>(3) Compulsory Winding Up</h3>,
      //   desc: (
      //     <>
      //       <p
      //         style={{
      //           paddingTop: "1rem",
      //           fontSize: "1.1rem",
      //           lineHeight: 1.8,
      //         }}
      //       >
      //         Companies that are registered under the Companies Act 2013 and
      //         committed an unlawful and fraudulent activity must be compulsorily
      //         wound up. Even if those companies contributed to some illegal or
      //         fraudulent activities, then such companies ordered to be
      //         compulsorily wound up by the tribunal. Following is the procedure
      //         for Compulsory Winding Up
      //         {compulsoryWindingUp.map((content, index) => {
      //           return <CTitleSummaryBPoints data={content} />;
      //         })}
      //       </p>
      //     </>
      //   ),
      // },
      // {
      //   styles: {
      //     paddingTop: "2rem",
      //   },
      //   title: <h3>(4) Defunct Company Winding Up</h3>,
      //   desc: (
      //     <p
      //       style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
      //     >
      //       According to the Companies Act 2013, a defunct company is also known
      //       as a dormant company. The government gives specific relief to such
      //       inactive or defunct companies because there are no commercial
      //       activities or transactions conducted by dormant companies. The
      //       Companies Act, 2013 lays down detailed rules for winding up of an
      //       inactive/defunct Company. A dormant company maybe winds up through a
      //       fast track procedure which needs submitting the STK-2 form. STK-2
      //       Form is required to wind up a dormant company, and there is no
      //       further procedure for that. The STK-2 form requires to be filled
      //       with the ROC and the same needs to be properly signed by the
      //       director of the company approved by the board. The fast track exit
      //       scheme (FTE) applies to the following defunct companies:
      //     </p>
      //   ),
      //   bulletPoints: [
      //     {
      //       title: (
      //         <li
      //           style={{
      //             marginLeft: "1rem",
      //             fontSize: "1.1rem",
      //             lineHeight: 1.8,
      //           }}
      //         >
      //           No asset and liability,
      //         </li>
      //       ),
      //     },
      //     {
      //       title: (
      //         <li
      //           style={{
      //             marginLeft: "1rem",
      //             fontSize: "1.1rem",
      //             lineHeight: 1.8,
      //           }}
      //         >
      //           No starting of any commercial venture after its establishment or
      //         </li>
      //       ),
      //     },
      //     {
      //       title: (
      //         <li
      //           style={{
      //             marginLeft: "1rem",
      //             fontSize: "1.1rem",
      //             lineHeight: 1.8,
      //           }}
      //         >
      //           Not carried out any business pursuits since last one year before
      //           applying under FTE
      //         </li>
      //       ),
      //     },
      //   ],
      // },
    ],
  },

  formsToFiled: {
    styles: {
      paddingTop: "2rem",
    },
    title: <h3>FORMS TO BE FILED FOR ANNUAL FILING (ROC FILINGS):</h3>,
    bulletPoints: [
      {
        title: (
          <li
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            ADT-1 FOR APPOINTNMENT OF AUDITORS
          </li>
        ),
      },
      {
        title: (
          <li
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            MGT-7 ANNAUL RETURNS.
          </li>
        ),
      },
      {
        title: (
          <li
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            AOC-4 STATEMENTS OF ACCOUNTS.
          </li>
        ),
      },
      // {
      //   title: (
      //     <li
      //       style={{
      //         fontSize: "1.1rem",
      //         marginTop: "1rem",
      //         marginLeft: "1rem",
      //       }}
      //     >
      //       To know about the due dates for filing clink on the following link
      //       Company Annual Filing ( RoC Filing)
      //     </li>
      //   ),
      // },
    ],
  },

  processAnnualFiling: {
    styles: {
      paddingTop: "2rem",
    },
    title: (
      <h3>
        PROCESS OF ANNUAL FILING (ROC FILINGS) FOR NEW COMPANIES (FORMED BEFORE
        1ST JANUARY OF THE RELEVANT YEAR):
      </h3>
    ),
    desc: (
      <p style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
        Section 92 of the act, stipulates that in case the company is formed
        between 1st April to 31st December then the Company has to file with it
        with in 6 month of closure of Financial year BEST COMPLIANCE PRACTISES
      </p>
    ),
    bulletTitle: (
      <h3 style={{ paddingTop: "2rem" }}>FOR ANNUAL FILING (ROC FILINGS)</h3>
    ),
    points: [
      {
        styles: {
          paddingTop: ".5rem",
        },
        title: (
          <>
            <p
              style={{
                marginLeft: ".5rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              (1) Prepare the financial statement for 18 Months.
            </p>
            {/* {prepareFinincial.map((bullet,index) => {
              return 
            })} */}
            <CTitleSummaryBPoints key={1} data={prepareFinincial} />
          </>
        ),
      },
      {
        styles: {
          paddingTop: "1.5rem",
        },
        title: (
          <p
            style={{
              marginLeft: ".5rem",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            (2) Conduct a Board meeting for finalization of accounts.
          </p>
        ),
      },
      {
        styles: {
          paddingTop: "1rem",
        },
        title: (
          <p
            style={{
              marginLeft: ".5rem",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            (3) Get the Accounts audited by you Statutory Auditors (CA’s).
          </p>
        ),
      },
      {
        styles: {
          paddingTop: "1rem",
        },
        title: (
          <p
            style={{
              marginLeft: ".5rem",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            (4) Get the Audit report.
          </p>
        ),
      },
      {
        styles: {
          paddingTop: "1rem",
        },
        title: (
          <p
            style={{
              marginLeft: ".5rem",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            (5) Conduct a Board meeting for Adoption of financial statements
            (Accounts).
          </p>
        ),
      },
      {
        styles: {
          paddingTop: "1rem",
        },
        title: (
          <>
            <p
              style={{
                marginLeft: ".5rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              (6) Circulate Notice to AGM to all shareholders at least 21 prior
              to the date of annual general meeting Circulate Notice to AGM to
              all shareholders at least 21 prior to the date of annual general
              meeting with the following contents.
            </p>
            <CTitleSummaryBPoints key={1} data={circulateNotice} />
          </>
        ),
      },
      {
        styles: {
          paddingTop: "1.5rem",
        },
        title: (
          <>
            <p
              style={{
                marginLeft: ".5rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              (7) Conduct Annual General Meeting.
            </p>
          </>
        ),
      },
      {
        styles: {
          paddingTop: "1.5rem",
        },
        title: (
          <>
            <p
              style={{
                marginLeft: ".5rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              (8) File the Forms
            </p>
          </>
        ),
      },
    ],
  },

  appoinmentOfAuditors: [
    {
      title: (
        <h3 style={{ paddingTop: "2rem" }}>ADT – 1 APPOINTMENT OF AUDITORS</h3>
      ),
      desc: (
        <p style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
          HOW TO DO APPOINTMENT OF AUDITOR FOR YOUR COMPANY? As required under
          Section 139 and 140 of the Companies Act, 2013 and pursuant to rule
          4(2) of the Companies (Audit and Auditors) Rules, 2014. eForm ADT-1
          must be filed with registrar of Companies Extract of Section 139 of
          the Companies Act 2013 (1) Subject to the provisions of this Chapter,
          every company shall, at the first annual general meeting, appoint an
          individual or a firm as an auditor who shall hold office from the
          conclusion of that meeting till the conclusion of its sixth annual
          general meeting and thereafter till the conclusion of every sixth
          meeting and the manner and procedure of selection of auditors by the
          members of the company at such meeting shall be such as may be
          prescribed.
        </p>
      ),
    },
    {
      title: (
        <h3 style={{ paddingTop: "2rem" }}>
          MGT – 7 | From used for Annual Filing (ROC FILING)
        </h3>
      ),
      desc: (
        <p style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
          There are many compliance such holding 4 board meeting in a year
          maintain statutory registers and other compliance under the companies
          Act Filing is done Pursuant to Section 92(1) of the Companies Act,
          2013 and rule 11(1) of the Companies (Management and Administration)
          Rules, 2014.
        </p>
      ),
    },
    {
      title: <h3 style={{ paddingTop: "2rem" }}>CONTENTS OF MGT -7 FORM</h3>,
      desc: (
        <p style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
          Every company shall prepare an annual return in the form MGT-7
          containing the particulars as they stood on the close of the financial
          year regarding:
        </p>
      ),
      points: [
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              a) its registered office, principal business activities,
              particulars of its holding, subsidiary and associate companies.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              b) its shares, debentures and other securities and shareholding
              pattern.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              c) its indebtedness.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              d) its members and debenture-holders along with changes therein
              since the close of the previous financial year.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              e) its promoters, directors, key managerial personnel along with
              changes therein since the close of the previous financial year.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              f) meetings of members or a class thereof, Board and its various
              committees along with attendance details; g) remuneration of
              directors and key managerial personnel.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              g) remuneration of directors and key managerial personnel.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              h) penalty or punishment imposed on the company, its directors or
              officers and details of compounding of offences and appeals made
              against such penalty or punishment.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              i) matters relating to certification of compliances, disclosures
              as may be prescribed.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              j) Shareholding pattern of the company; and such other matters as
              required in the form.
            </p>
          ),
        },
      ],
    },
    {
      title: (
        <h3 style={{ paddingTop: "2rem" }}>
          AOC-4 STATEMENTS OF ACCOUNTS (Form used for Annual filing (ROC FILING)
        </h3>
      ),
      desc: (
        <p
          style={{
            paddingTop: "1rem",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            paddingBottom: "1rem",
          }}
        >
          Form AOC 4 contains financial details such as details of profit & loss
          account , balance sheet, cash flow statement , break up of sundry
          debtors/creditors , break up of loans and all other financial
          statements You must note that every company needs to file its
          financial statements and mandatory attachments, via e-Form AOC4 within
          the prescribed time limit as per section 137. Once financial
          statements are adopted then company shall file the adopted financial
          statements via e-form AOC-4 within 30 days of the AGM (actual or
          adjourned whichever is applicable). In case company needs to revise
          the financial statement or Board’s report under provisions of section
          130 or section 131 then revised financial statements shall be filed
          via e-Form AOC-4.
        </p>
      ),
    },
  ],

  accountServices1: [
    {
      title: <h3>Accounting</h3>,
      desc: (
        <p style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
          ANNUAL ACCOUNTS Section 128 of the Companies Act, 2013 (the Act)
          provides that every company shall prepare and keep at its registered
          office books of account and other relevant books and papers and
          financial statement for every financial year which give a true and
          fair view of the state of the affairs of the company, including that
          of its branch office or offices, if any, and explain the transactions
          effected both at the registered office and its branches and such books
          shall be kept on accrual basis and according to the double entry
          system of accounting. Under Section 129 of the Companies Act, 2013, at
          every annual general meeting of a company, the Board of Directors of
          the company shall lay before such meeting financial statements for the
          financial year. Where a company has one or more subsidiaries, it
          shall, in addition to financial statements, prepare a consolidated
          financial statement of the company and of all the subsidiaries in the
          same form and manner as that of its own which shall also be laid
          before the annual general meeting of the company along with the laying
          of its financial statement. The company shall also attach along with
          its financial statement, a separate statement containing the salient
          features of the financial statement of its subsidiary or subsidiaries
          in such form as may be prescribed. Every company shall file the
          financial statements with registrar together with form AOC-4.
          According to Rule 12(2) of the companies (Accounts) Rules, 2014 the
          class of companies as may be notified by the Central Government from
          time to time, shall mandatorily file their financial statement in
          Extensible Business Reporting Language (XBRL) format and the Central
          Government may specify the manner of such filing under such
          notification for such class of companies. As per section 2(13) of
          Companies Act, 2013 “books of account” includes records maintained in
          respect of – (i) All sums of money received and expended by a company
          and matters in relation to which the receipts and expenditure take
          place;
        </p>
      ),
      points: [
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              a) All sales and purchases of goods and services by the company.
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              b) The assets and liabilities of the company; and
            </p>
          ),
        },
        {
          title: (
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginLeft: "1rem",
              }}
            >
              c) The items of cost as may be prescribed under section 148 in the
              case of a company which belongs to any class of companies
              specified under that section.
            </p>
          ),
        },
      ],
    },
  ],

  accountServices2: [
    {
      desc: (
        <p style={{ paddingTop: "2rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
          According to section 2(12) “book and paper” and “book or paper”
          include books of account, deeds, vouchers, writings, documents,
          minutes and registers maintained on paper or in electronic form. The
          basis of all the filing is the Financial statement, you must ensure
          that your company records all entries in an Accounting ERP:
        </p>
      ),
      bulletPoints: [
        {
          title: (
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Bank Entries
            </li>
          ),
        },
        {
          title: (
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Cash Entries
            </li>
          ),
        },
        {
          title: (
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Payment Vouchers
            </li>
          ),
        },
        {
          title: (
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Sales Entries
            </li>
          ),
        },
        {
          title: (
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Purchase Entries
            </li>
          ),
        },
        {
          title: (
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Journal Entities
            </li>
          ),
        },
        {
          title: (
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Debtor Reconciliation
            </li>
          ),
        },
        {
          title: (
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Creditor Reconciliation
            </li>
          ),
        },
      ],
      desc2: (
        <p
          style={{
            paddingTop: "1rem",
            color: "red",
            fontSize: "1.1rem",
            lineHeight: 1.8,
          }}
        >
          All the above-mentioned records need to be given to your auditor for
          completing the statutory audit. We at virtual auditor help in
          maintaining you accounts and guide you till the completing of the
          audit.
        </p>
      ),
    },
  ],

  table: [
    {
      data: [
        { id: 1, cell: "S. No." },
        { id: 2, cell: "FORM NAME" },
        { id: 3, cell: "MANDATORY FOR ALL COMPANIES" },
        { id: 4, cell: "RELEVANT SECTION & RULE" },
      ],
    },
    {
      data: [
        { id: 1, cell: "1" },
        { id: 2, cell: "MGT-1" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "S.88(1)(a) & R.3(1) OF COS (MANAGEMENT & ADMINISTRATION)",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "2" },
        { id: 2, cell: "MGT-2" },
        { id: 2, cell: "NO , IF DEBENTURES OR OTHER SECURITIES" },
        {
          id: 4,
          cell: "S.88(1)(b) & (c) AND R.4 OF COS (MANAGEMENT & ADMINISTRATION)",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "3" },
        { id: 2, cell: "REGISTER" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "S.46(3) & R.6(3)(a) OF COS (SHARE CAPITAL & DEBENTURE)",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "4" },
        { id: 2, cell: "SH-2" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "S.88(1)(b) & (c) AND R.4 OF COS (MANAGEMENT & ADMINISTRATION)",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "5" },
        { id: 2, cell: "SH-3" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "S.88(1)(b) & (c) AND R.4 OF COS (MANAGEMENT & ADMINISTRATION)",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "6" },
        { id: 2, cell: "SH-6" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "S.88(1)(b) & (c) AND R.4 OF COS (MANAGEMENT & ADMINISTRATION)",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "7" },
        { id: 2, cell: "SH-10" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "S.68(9) & R.17(12) OF COS (SHARE CAPITAL & DEBENTURES)",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "8" },
        { id: 2, cell: "CHG-7" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "S.85 & R.10(1) OF COS (REGISTRATION OF CHARGES)",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "9" },
        { id: 2, cell: "MBP-2" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "S.186(9) & R.12(1) OF COS (MEETINGS OF BOARDS & ITS POWERS)",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "10" },
        { id: 2, cell: "MBP-3" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "S.187(3) & R.14(1) OF COS (MEETINGS OF BOARDS & ITS POWERS) as amended",
        },
      ],
    },
    {
      data: [
        { id: 1, cell: "11" },
        { id: 2, cell: "	MBP-4" },
        { id: 3, cell: "YES" },
        {
          id: 4,
          cell: "	S.189(1) & R.16(1) OF COS (MEETINGS OF BOARDS & ITS POWERS)",
        },
      ],
    },
    // {
    //   data: [
    //     { id: 1, cell: "12" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "13" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "14" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "15" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "16" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "17" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "18" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "19" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "20" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "21" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "22" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "23" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "24" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "25" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "26" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "27" },
    //     { id: 2, cell: "" },
    //   ],
    // },
    // {
    //   data: [
    //     { id: 1, cell: "28" },
    //     { id: 2, cell: "" },
    //   ],
    // },
  ],

  faqClosure: {
    title: <h1>FAQ ON Closure of Private Limited Company in India</h1>,
    accordions: [
      {
        title: <p>What is the meaning of strike-off of a company</p>,
        desc: (
          <p>
            Strike Off implies the removal of the name of the company from the
            Register of Companies kept by the ROC. It is like the closure of a
            company, and the company will not be in existence after being struck
            off and cannot do any business operations after that.
          </p>
        ),
      },

      {
        title: <p>Can a strike-off company trade?</p>,
        desc: (
          <p>
            Strike Off implies the removal of the name of the company from the
            Register of Companies kept by the ROC. It is like the closure of a
            company, and the company will not be in existence after being struck
            off and cannot do any business operations after that.
          </p>
        ),
      },

      {
        title: <p>How long will it take to strike off of a company?</p>,
        desc: (
          <p>
            It ordinarily takes at least three months for a business to get
            dissolved officially. However, the range of time can change
            considerably if the process is complicated. Usually, a company will
            stop to exist within three months of the winding-up notice
            advertised in the official gazette.
          </p>
        ),
      },

      {
        title: <p>What is statement of affairs?</p>,
        desc: (
          <p>
            Statement of affairs is a document which provides a comprehensive
            account of assets and liabilities of a Company and is required for
            winding up of a company.
          </p>
        ),
      },

      {
        title: <p>What is the meaning of strike of a company</p>,
        desc: (
          <p>
            Strike Off implies the removal of the name of the company from the
            Register of Companies kept by the ROC. It is like the closure of a
            company, and the company will not be in existence after being struck
            off and cannot do any business operations after that.
          </p>
        ),
      },

      {
        title: (
          <p>
            What is the duration of time required to give notice to the
            registrar for the appointment of a liquidator?
          </p>
        ),
        desc: (
          <p>
            Notice is furnished to the registrar within ten days of passing of a
            special resolution.
          </p>
        ),
      },
    ],
  },
};
