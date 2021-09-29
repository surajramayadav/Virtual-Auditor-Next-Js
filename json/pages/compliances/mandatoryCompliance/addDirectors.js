import Image from "next/image";

import Work1 from "@images/home/work1.png";
import Taxes from "@images/home/taxes.png";
import Valuation from "@images/home/valuation.png";
import TestonomialIcon from "@images/testinomial/testimonial-icon.png";

export const addDirectors = {
  headTitle: "Virtual Auditor - Company Registration - GST - Tax Filing",
  containers: [
    {
      id: 1,
      container: {
        title: "Appointment of Director",
        summary: (
          <>
            Director Appointment also referred to an appointment of a director
            in private limited company, as per company act 2013, is applicable.
            in the case where a company is already registered and you are being
            appointed to the Board.
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
      id: 2,
      container: {
        title: <>Process of Director Appointment / Director Addition</>,
        summary: (
          <>
            To appoint a director, the person proposing to become a Director
            must obtain a digital signature certificate (DSC) and director
            identification number (DIN). DIN can be obtained for any person who
            is above the age of 18. The nationality or residency status of the
            DIN applicant does not matters. Hence, Indian Nationals,
            Non-Resident Indians and Foreign Nationals have obtained DIN and
            appointed as Director of a company in India.
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p>Get DSC</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            title: <p>Submit Documents</p>,
            desc: "",
          },
          {
            id: 3,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            title: <p>Verify</p>,
            desc: "",
          },
        ],
      },
    },
  ],

  directorAddExp: {
    title: (
      <h1 style={{ textAlign: "center" }}>
        DIRECTOR ADDITION PROCEDURE EXPLAINED
      </h1>
    ),
    bulletPoints: [
      {
        title: <li style={{ fontSize: "1.1rem" }}>Obtain Digital Signature</li>,
      },
      {
        title: (
          <li style={{ fontSize: "1.1rem" }}>
            Submit your KYC ( Pan, Aadhar, DL, Bank Statement/Telephone Bill)
          </li>
        ),
      },
      {
        title: (
          <li style={{ fontSize: "1.1rem" }}>
            Request the Company in which you are proposed to appointed to Apply
            in the e Form DIR 3
          </li>
        ),
      },
      {
        title: (
          <li style={{ fontSize: "1.1rem" }}>
            Post Verification has allowed DIN, by the Ministry of Corporate
            Affairs
          </li>
        ),
      },
    ],
  },

  directorTypes: {
    title: <h1 style={{ textAlign: "center" }}>TYPES DIRECTOR APPOINTMENT</h1>,
    desc: (
      <p style={{ lineHeight: 1.8, fontSize: "1.1rem", paddingTop: "1rem" }}>
        In the Director appointment happens after the AGM date ( Annual General
        Meeting Date), that is in that the director can be appointed as "
        Additional Director". To hold office till the End of the AGM and at the
        Subsequent AGM the appointment can be regularised.
      </p>
    ),
  },

  rulesRelation: {
    styles: {
      paddingTop: "2rem",
    },
    title: <h2>Rules Relation to Appointment of Director</h2>,
    desc: (
      <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
        Hence, E-Form DIR-12 has to filed pursuant to Sections 7(1) (c), 168 &
        170 (2) of the Companies Act, 2013 and Rule 17 Of Companies
        (Incorporation) Rules , Rule 8, 15 & 18 of Companies (Appointment and
        Qualification of Directors) Rules, 2014 which has to reproduced for your
        reference.
      </p>
    ),
  },

  sections: [
    {
      title: <h2 style={{ marginTop: "1rem" }}>Section 168:</h2>,
      points: [
        {
          styles: {
            marginTop: "1rem",
          },
          desc: (
            <>
              <p style={{ fontSize: "1.1rem" }}>
                (1) A director may resign from his office by giving a notice in
                writing to the company and the Board shall on receipt of such
                notice take note of the same and the company shall intimate the
                Registrar in such manner, within such time and in such form as
                may be prescribed and shall also place the fact of such
                resignation in the report of directors laid in the immediately
                following general meeting by the company:
              </p>
              <p style={{ fontSize: "1.1rem" }}>
                Provided that a director shall also forward a copy of his
                resignation along with detailed reasons for the resignation to
                the Registrar within thirty days of resignation in such manner
                as may be prescribed.
              </p>
            </>
          ),
        },
        {
          styles: {
            marginTop: "1rem",
          },
          desc: (
            <>
              <p style={{ fontSize: "1.1rem" }}>
                (2) The resignation of a director has taken effect from the date
                in which the notice has received by the company or the date, it
                has specified by the director in the notice, whichever is later:
              </p>
              <p style={{ fontSize: "1.1rem" }}>
                Provided that the director who has resigned shall be liable even
                after his resignation for the offenses which occurred during his
                tenure.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: <h2 style={{ marginTop: "1rem" }}>Section 170(2):</h2>,
      desc: (
        <>
          <p>
            Therefore, A return containing such particulars and documents has to
            prescribed, of the directors and the key managerial personnel, has
            to file with the Registrar within thirty days from the appointment
            of every director, as the case may be, and within thirty days of any
            change taking place.
          </p>
        </>
      ),
      points: [
        {
          styles: {
            marginTop: "1rem",
            paddingLeft: "1rem",
          },
          title: <h2>Rule 17:</h2>,
          desc: (
            <p>
              Therefore, The particulars of each person mentioned in the
              articles as the first director of the company and his interest in
              other firms or bodies corporate along with his consent to act as a
              director of the company shall be filed in Form No.DIR-12 along
              with the fee as provided.
            </p>
          ),
        },
        {
          styles: {
            marginTop: "1rem",
            paddingLeft: "1rem",
          },
          title: <h2>Rule 8:</h2>,
          desc: (
            <>
              <p>
                Every person who has appointed to hold the office of a director
                shall on or before the appointment furnish to the company a
                consent in writing to act as such in Form No. DIR-2:
              </p>
              <p>
                Provided that the company shall within the thirty days of the
                appointment of a director, file such consent with the Registrar
                in Form No. DIR-12 along with the fee as provided
              </p>
            </>
          ),
        },
        {
          styles: {
            marginTop: "1rem",
            paddingLeft: "1rem",
          },
          title: <h2>Rule 15:</h2>,
          desc: (
            <>
              <p>
                The company shall within thirty days from the date of receipt of
                notice of resignation from a director. Intimate the Registrar in
                Form DIR-12 DIR-12 (Form for Appointment of Director) and post
                the information on its website if any.
              </p>
            </>
          ),
        },
        {
          styles: {
            marginTop: "1rem",
            paddingLeft: "1rem",
          },
          title: <h2>Rule 18:</h2>,
          desc: (
            <>
              <p>
                A return containing the particulars of appointment of director
                and changes therein shall be filed with the Registrar. in Form
                DIR-12 (Form for Appointment of Director) along with such fee
                has provided within thirty days of such appointment or change,
                as the case may be.
              </p>
            </>
          ),
        },
      ],
    },
  ],
};
