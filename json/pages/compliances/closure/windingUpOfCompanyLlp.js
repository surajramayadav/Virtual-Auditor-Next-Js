import Image from "next/image";

import Work1 from "@images/home/work1.png";
import Taxes from "@images/home/taxes.png";
import Valuation from "@images/home/valuation.png";
import TestonomialIcon from "@images/testinomial/testimonial-icon.png";
// import CTitleSummaryBPoints from "@components/global/CTitleSummaryBPoints";

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
  },
];

export const windingUpOfCompanyLlp = {
  headTitle: "LLP Winding Up - Requirements & Process - Virtual Auditor",
  containers: [
    {
      id: 1,
      container: {
        title: "Winding Up of LLP Online",
        summary: (
          <>
            A Limited Liability Partnership or LLP falls under the ambit of the
            LLP Act, 2008. It is a business entity that enjoys exemption from
            audit if its annual turnover happens to be below ₹40,00,000 or/and
            its capital contribution doesn’t exceed ₹25,00,000. As a result,
            entrepreneurs are increasingly going for an LLP-style business.
            However, there may be factors or reasons that necessitate the
            winding up of an LLP (Closure of LLP) like loss or disagreement
            between partners or any reason that my warrant closing of LLP The
            Closure can be done by filing LLP FORM 24 and it would cost around
            12999/-
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
        title: "Overview of the Winding Up Procedure of the LLP",
        summary: (
          <>
            Winding up an LLP may be done voluntarily or by the order of a
            Tribunal. In case the LLP is shutting down voluntarily, it has to
            first pass a resolution, with at least 3/4th of the partners
            approving of this resolution. In case the LLP has unsecured or
            secured lenders, their approval must also be gained before the LLP
            can be shut down.
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Submit Documents</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Verify Via Video Call</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Get Your DSC</p>,
          },
        ],
      },
    },
  ],

  llpWound: {
    title: (
      <h1 style={{ textAlign: "center" }}>
        WHEN THE LLP IS WOUND UP BY THE TRIBUNAL
      </h1>
    ),
    desc: (
      <p style={{ fontSize: "1.1rem", marginTop: "1rem", lineHeight: 1.8 }}>
        The Tribunal might decide to initiate the winding up of an LLP for the
        below-mentioned reasons:
      </p>
    ),
    bulletPoints: [
      {
        title: (
          <li
            style={{ fontSize: "1.1rem", marginRight: "1rem", lineHeight: 1.8 }}
          >
            The Tribunal holds that it is equitable and just for the LLP to be
            wound up
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ fontSize: "1.1rem", marginRight: "1rem", lineHeight: 1.8 }}
          >
            The LLP has requested to be shut down
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ fontSize: "1.1rem", marginRight: "1rem", lineHeight: 1.8 }}
          >
            The LLP has had less than 2 partners for a time period exceeding six
            months
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ fontSize: "1.1rem", marginRight: "1rem", lineHeight: 1.8 }}
          >
            The LLP has become insolvent or bankrupt
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ fontSize: "1.1rem", marginRight: "1rem", lineHeight: 1.8 }}
          >
            he LLP’s actions harmed the integrity and sovereignty of India or
            caused security/public order issues.
          </li>
        ),
      },
      {
        title: (
          <li
            style={{ fontSize: "1.1rem", marginRight: "1rem", lineHeight: 1.8 }}
          >
            The LLP hasn’t filed its Annual Returns or Statement of Accounts &
            Solvency with the Registrar for the preceding 5 consecutive years.
          </li>
        ),
      },
    ],
    sections: [
      {
        styles: {
          paddingTop: "2rem",
        },
        title: <h3>Winding Up of LLP Procedure</h3>,
        desc: (
          <p
            style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            The process starts by approving and filing a resolution with the
            Registrar seeking the closure of the LLP within a period of thirty
            days from the date of approval of this resolution. The voluntary
            winding-up procedure will be declared to have commenced from the
            date this resolution has been passed. This resolution is to be then
            filed with the Registrar along with a declaration & affidavit by a
            majority of the LLP’s partners that the entity does not have any
            debt or that it’s capable of paying off all its debts within a
            specified period, stated in this declaration. However, the period
            should not exceed 1 year from the commencement date of the
            winding-up procedure of the LLP. Apart from the affidavit that’s to
            be signed, these documents should also be filed and submitted to the
            Registrar of Companies within a period of fifteen days from the date
            of passing the resolution for the LLP’s dissolution.
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
                A statement of assets & liabilities for the period starting from
                the date of closure of accounts to the date of dissolution of
                the LLP that is attested by a minimum of 2 partners
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
        ],
      },
      {
        styles: {
          paddingTop: "2rem",
        },
        title: <h3>Winding up of LLP with Creditors</h3>,
        desc: (
          <p
            style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            In case the LLC facing dissolution has any unsecured or secured
            creditors, the approval of these creditors must be requested before
            the dissolution procedures for the LLP can be set into motion.
            Creditors must offer their opinion regarding the dissolution of the
            LLP within a period of thirty days from the date of receipt of
            request seeking their approval for dissolution. If all the partners
            and creditors approve of the dissolution, the LLP is allowed to
            start its voluntary dissolution procedures.
          </p>
        ),
      },
      {
        styles: {
          paddingTop: "2rem",
        },
        title: <h3>Appointment of LLP Liquidator</h3>,
        desc: (
          <>
            <p
              style={{
                paddingTop: "1rem",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              The appointment of an LLP Liquidator must be done within a period
              of 30 days of the approval of the resolution to commence voluntary
              dissolution procedures. If the LLP has any creditors, the LLP
              Liquidator’s appointment is held to be valid only when approved by
              a 2/3rd majority of the firm’s creditors, based on the value of
              the debt they hold. It is the LLP Liquidator’s duty to carry out
              the duties and functions for the dissolution of the LLP. The
              Liquidator shall adjust the partners’ rights and settle the LLP’s
              creditors. During the discharge of his duties, the Liquidator is
              also required to keep the necessary books of accounts that pertain
              to the LLP’s dissolution.
              {/* {compulsoryWindingUp.map((content, index) => {
                return <CTitleSummaryBPoints data={content} />;
              })} */}
            </p>
          </>
        ),
      },
      {
        styles: {
          paddingTop: "2rem",
        },
        title: <h3>Filing of The Dissolution Report by The LLP Liquidator</h3>,
        desc: (
          <p
            style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            After the LLP’s affairs have been completely wound up, the
            Liquidator has to create a report that details how the dissolution
            was conducted and how the LLP’s properties have been sold or
            disposed of. Provided 2/3rd of the creditors in value and partners
            have approved of the LLP Liquidator’s dissolution report, a
            resolution seeking winding up of the accounts & an explanation for
            the firm’s dissolution has to be approved by the firm’s partners.
            The Liquidator is then required to submit the resolution and the
            LLP’s winding up reports to the Registrar & submit an application
            for dissolution to the Tribunal.
          </p>
        ),
      },
      {
        styles: {
          paddingTop: "2rem",
        },
        title: <h3>Dissolution of the LLP</h3>,
        desc: (
          <p
            style={{ paddingTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            After the Tribunal has been satisfied that all prescribed procedures
            were followed during the winding up of the LLP, it shall issue an
            order approving the dissolution of the LLP. The Liquidator shall
            file this order’s copy with the Registrar in order to wind up the
            LLP. After the Registrar has received the order issued by the
            Tribunal approving the dissolution, the Registrar shall then issue a
            notice proclaiming the dissolution of the LLP in the Official
            Gazette.
          </p>
        ),
      },
    ],
  },

  //   faqClosure: {
  //     title: <h1>Dissolution of the LLP</h1>,
  //     accordions: [
  //       {
  //         title: <p>What is the meaning of strike-off of a company</p>,
  //         desc: (
  //           <p>
  //             Strike Off implies the removal of the name of the company from the
  //             Register of Companies kept by the ROC. It is like the closure of a
  //             company, and the company will not be in existence after being struck
  //             off and cannot do any business operations after that.
  //           </p>
  //         ),
  //       },

  //       {
  //         title: <p>Can a strike-off company trade?</p>,
  //         desc: (
  //           <p>
  //             Strike Off implies the removal of the name of the company from the
  //             Register of Companies kept by the ROC. It is like the closure of a
  //             company, and the company will not be in existence after being struck
  //             off and cannot do any business operations after that.
  //           </p>
  //         ),
  //       },

  //       {
  //         title: <p>How long will it take to strike off of a company?</p>,
  //         desc: (
  //           <p>
  //             It ordinarily takes at least three months for a business to get
  //             dissolved officially. However, the range of time can change
  //             considerably if the process is complicated. Usually, a company will
  //             stop to exist within three months of the winding-up notice
  //             advertised in the official gazette.
  //           </p>
  //         ),
  //       },

  //       {
  //         title: <p>What is statement of affairs?</p>,
  //         desc: (
  //           <p>
  //             Statement of affairs is a document which provides a comprehensive
  //             account of assets and liabilities of a Company and is required for
  //             winding up of a company.
  //           </p>
  //         ),
  //       },

  //       {
  //         title: <p>What is the meaning of strike of a company</p>,
  //         desc: (
  //           <p>
  //             Strike Off implies the removal of the name of the company from the
  //             Register of Companies kept by the ROC. It is like the closure of a
  //             company, and the company will not be in existence after being struck
  //             off and cannot do any business operations after that.
  //           </p>
  //         ),
  //       },

  //       {
  //         title: (
  //           <p>
  //             What is the duration of time required to give notice to the
  //             registrar for the appointment of a liquidator?
  //           </p>
  //         ),
  //         desc: (
  //           <p>
  //             Notice is furnished to the registrar within ten days of passing of a
  //             special resolution.
  //           </p>
  //         ),
  //       },
  //     ],
  //   },
};
