import Image from "next/image";

import Work1 from "@images/home/work1.png";
import Taxes from "@images/home/taxes.png";
import Valuation from "@images/home/valuation.png";
import TestonomialIcon from "@images/testinomial/testimonial-icon.png";
import CTitleSummaryBPoints from "@components/global/CTitleSummaryBPoints";

const compulsoryWindingUp = [
  {
    title: (
      <h4 style={{ paddingTop: "1rem" }}>
        The following persons/entities/agencies may file a petition for
        compulsory winding up:
      </h4>
    ),
    bulletPoints: [
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            The company or
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            The trade creditors or of the company or
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Any contributors or contributory to the company or
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            The Central or State Governments or
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Registrar of the Companies
          </li>
        ),
      },
      {
        title: (
          <>
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              The appointed liquidator will prepare a report of the asset and
              liabilities, capital, reserves, etc.
            </li>
          </>
        ),
      },
    ],
  },

  {
    styles: {
      paddingTop: "1rem",
    },
    title: (
      <p style={{ fontSize: "1.1rem" }}>
        <span style={{ fontWeight: 600 }}>
          The petition shall be presented accompanying with the statement of
          affairs of the company.
        </span>{" "}
        A practicing CA will have to audit all the financial documents of the
        company accompanied by petition and the evaluation provided by the
        auditor on the financial statement need to be unconditional.
      </p>
    ),
  },
  {
    styles: {
      paddingTop: "1rem",
    },
    title: (
      <p style={{ fontSize: "1.1rem" }}>
        <span style={{ fontWeight: 600 }}>
          An advertisement in a daily journal at least for 14 days.
        </span>{" "}
        The petition requires to be advertised in a daily journal at least for
        14 days, and the language of the advertisement ought to be in the
        vernacular language of the respective area and in English.
      </p>
    ),
  },
  {
    styles: {
      paddingTop: "1rem",
    },
    title: (
      <h3>
        Proceedings of the Tribunal Form 11 shall be needed to order winding up
        the company.
      </h3>
    ),
    bulletPoints: [
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Tender the total audited books of accounts until the date of the
            order
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Give the details of liquidator like date, time and place
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Handover the documents and assets of the company
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            The Central or State Governments or
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ marginLeft: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Registrar of the Companies
          </li>
        ),
      },
      {
        title: (
          <>
            <li
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              The appointed liquidator will prepare a report of the asset and
              liabilities, capital, reserves, etc.
            </li>
          </>
        ),
      },
    ],
  },
];

export const windingUpOfCompany = {
  headTitle: "Company Closure - Register your Private Limited Company",
  containers: [
    {
      id: 1,
      container: {
        title: "Closure of Private Limited Company in India",
        summary: (
          <>
            If you are continuously facing losses in your company and if you are
            struggling to run your business in an appropriate manner, it is
            advisable to close down your private limited company and begin a
            different course. When transactions are not taking place or
            directors of the company not able or ready to commence business
            operations, in that scenario also Private limited company requires
            to be shut down.
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Starting at Rs.4,699/-</p>,
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
        title: "How to initiate closure?",
        summary: (
          <>
            The process of closure of a Pvt Ltd Company is also known as strike
            off. In India, company closure is administered by Section 248 of the
            Companies Act, 2013 and should follow the rules of the Companies
            (Removal of Names of Companies) Rules, 2016.
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Pass Resolution</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>File Documents</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Get Closure</p>,
          },
        ],
      },
    },
  ],

  processForClosure: {
    title: (
      <h1 style={{ textAlign: "center" }}>
        PROCESS FOR CLOSURE OF PRIVATE LIMITED COMPANY IN INDIA
      </h1>
    ),
    desc: (
      <p style={{ fontSize: "1.1rem", marginTop: "1rem", lineHeight: 1.8 }}>
        Operating a business ( Company Registration ) comes along with its
        difficulties and hurdles. In some cases, when businesses do not work out
        as planned, it needs to be shut down. There may be various circumstances
        to wind up a company. In this article, we would discuss the four modes
        to close down a private limited company.
      </p>
    ),
    points: [
      {
        desc: (
          <p
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              paddingLeft: "1rem",
            }}
          >
            (1) Sell the company
          </p>
        ),
      },
      {
        desc: (
          <p
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              paddingLeft: "1rem",
            }}
          >
            (2) Voluntary winding up
          </p>
        ),
      },
      {
        desc: (
          <p
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              paddingLeft: "1rem",
            }}
          >
            (3) Compulsory winding up
          </p>
        ),
      },
      {
        desc: (
          <p
            style={{
              fontSize: "1.1rem",
              marginTop: "1rem",
              paddingLeft: "1rem",
            }}
          >
            (4) Defunct company winding up
          </p>
        ),
      },
    ],
    sections: [
      {
        styles: {
          paddingTop: "2rem",
        },
        title: <h3>(1) Sell the Company</h3>,
        desc: (
          <p
            style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            To sell off a Private Limited Company is a sort of voluntary winding
            up of a company. It can be carried out by selling out the majority
            of shares or majority shareholding of a company. From a technical
            point of view, it is not actually a winding up. But, the shares or
            financial involvement in that business transferred to an entity or
            another person, and the majority of stockholders are discharged from
            their stakes and duties.
          </p>
        ),
      },
      {
        styles: {
          paddingTop: "2rem",
        },
        title: <h3>(2) Voluntary Winding Up</h3>,
        desc: (
          <p
            style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Voluntarily winding up of a company need long-drawn procedural
            formalities to comply. There are specific mandatory necessities
            which ought to be performed to voluntarily shut down a company.
          </p>
        ),
        bulletTitle: <h3 style={{ paddingTop: "1rem" }}>Procedure:</h3>,
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
                According to the Companies Act 2013, a board resolution is
                needed for voluntarily winding up of a company, wherein the
                majority of directors require agreeing to wind up.
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
                Additionally, a Special Resolution is needed for winding up of
                the company where three fourths the entire Stockholders need to
                cast their vote in favour to wind up the company.
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
                According to the Companies Act 2013, a board resolution is
                needed for voluntarily winding up of a company, wherein the
                majority of directors require agreeing to wind up.
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
                The approval of the creditors or lenders is also needed for
                winding up the company. The creditors or lenders have to give
                their consent that the company does not owe anything to them,
                and the company can wind up.
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
                The company ought to issue a Declaration of Solvency, and the
                trade creditors of the company must accept the same. The company
                intending to wind up must demonstrate the company’s
                creditability in Declaration of Solvency.
              </li>
            ),
          },
          {
            title: (
              <>
                <li
                  style={{
                    marginLeft: "1rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  The appointed liquidator will prepare a report of the asset
                  and liabilities, capital, reserves, etc.
                </li>
                <p style={{ color: "red", paddingTop: ".5rem" }}>
                  All the procedures, as mentioned above, shall be prepared,
                  presented and filed in prescribed forms. Even after the
                  company’s winding up, the company’s name shall not be given
                  and prohibited for two years to be used by all other
                  applicants.
                </p>
              </>
            ),
          },
        ],
      },
      {
        styles: {
          paddingTop: "2rem",
        },
        title: <h3>(3) Compulsory Winding Up</h3>,
        desc: (
          <>
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              Companies that are registered under the Companies Act 2013 and
              committed an unlawful and fraudulent activity must be compulsorily
              wound up. Even if those companies contributed to some illegal or
              fraudulent activities, then such companies ordered to be
              compulsorily wound up by the tribunal. Following is the procedure
              for Compulsory Winding Up
              {compulsoryWindingUp.map((content, index) => {
                return <CTitleSummaryBPoints key={index} data={content} />;
              })}
            </p>
          </>
        ),
      },
      {
        styles: {
          paddingTop: "2rem",
        },
        title: <h3>(4) Defunct Company Winding Up</h3>,
        desc: (
          <p
            style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            According to the Companies Act 2013, a defunct company is also known
            as a dormant company. The government gives specific relief to such
            inactive or defunct companies because there are no commercial
            activities or transactions conducted by dormant companies. The
            Companies Act, 2013 lays down detailed rules for winding up of an
            inactive/defunct Company. A dormant company maybe winds up through a
            fast track procedure which needs submitting the STK-2 form. STK-2
            Form is required to wind up a dormant company, and there is no
            further procedure for that. The STK-2 form requires to be filled
            with the ROC and the same needs to be properly signed by the
            director of the company approved by the board. The fast track exit
            scheme (FTE) applies to the following defunct companies:
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
                No asset and liability,
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
                No starting of any commercial venture after its establishment or
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
                Not carried out any business pursuits since last one year before
                applying under FTE
              </li>
            ),
          },
        ],
      },
    ],
  },

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
