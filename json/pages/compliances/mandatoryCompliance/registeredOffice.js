import Image from "next/image";

import Work1 from "@images/home/work1.png";
import Taxes from "@images/home/taxes.png";
import Valuation from "@images/home/valuation.png";
import TestonomialIcon from "@images/testinomial/testimonial-icon.png";

export const registeredOfficeData = {
  headTitle: "Registered Office Address Change - Virtual Auditor",
  containers: [
    {
      id: 1,
      container: {
        title: "Change Registered Office",
        summary: (
          <>
            The registered office of a company or LLP has the principal place of
            business for a private/public limited company and all official
            correspondence from the ministry of corporate affairs has sent to
            this location.
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
        title: <>How To Change Registered Office?</>,
        summary: (
          <>
            The registered office of a company or LLP will be changed within the
            local limits of any city, town or village. Where such office is
            situated is just giving a notice to the concerned registrar within
            30 days after the date of the change. But a special resolution will
            require if the change of the registered office is from one village,
            town, etc in the same state. Where the place of registered office
            has to alter from one state to another state.
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p>Draft Documents (MOA & AOA)</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            title: <p>Hold a board meeting with directors</p>,
            desc: "",
          },
          {
            id: 3,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            title: <p>File the certified copy of resolution</p>,
            desc: "",
          },
        ],
      },
    },
  ],

  companyAddressChangeExp: {
    title: (
      <h1
        style={{
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        COMPANY ADDRESS CHANGING PROCEDURE EXPLAINED
      </h1>
    ),
    desc: (
      <p
        style={{
          lineHeight: 1.8,
          fontSize: "1.1rem",
          paddingTop: "2rem",
        }}
      >
        The company or LLP may do by passing a special resolution and getting
        confirmation of the company's law board. The company or LLP also
        required to give an advertisement in the newspaper indicating the change
        proposed to be made and also a notice has to give to the state
        government when it proposed to transfer. The registered office from one
        state to another. Here the following procedure for shifting the
        registered office from one state to another state. :-
      </p>
    ),
  },

  steps: [
    {
      title: <h3>Step-1</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          Prepare a draft for memorandum and articles of association of the
          company.
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
    },

    {
      title: <h3>Step-2</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          Hold a board meeting with directors. The standards prescribed by ICSI
          in SS-1 for board meetings, and get the notice calling for the
          extraordinary general meeting (EGM) signed by the directors.
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
    },
    {
      title: <h3>Step-3</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          Convene an EGM of shareholders and pass the special resolution by the
          members for a change of the company in a Memorandum of Association
          (MOA). The special resolution means a decision taken by more than 75%
          of voting rights.
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
    },
    {
      title: <h3>Step-4</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          File the certified copy of resolution in the form MGT-14 with the
          prescribed fee within 30 days of the passing of the resolution to the
          ROC.
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
    },
    {
      title: <h3>Step-5</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          File application in form INC 23 in seeking approval for alteration of
          MOA with regards to the relocation, with the federal government along
          with the following documents,
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
      bulletPoints: [
        {
          title: (
            <li>
              A copy of the amended of MOA and Article of Association (AOA) of
              the company.
            </li>
          ),
          desc: <></>,
        },
        {
          title: (
            <li>A copy of minutes of a general meeting recording the votes.</li>
          ),
          desc: <></>,
        },
        {
          title: (
            <li>
              A special resolution passed by the members for the alteration of
              MoA and AoA.
            </li>
          ),
          desc: <></>,
        },
        {
          title: <li>Copy of power of attorney or board resolution.</li>,
          desc: <></>,
        },
        {
          title: (
            <li>
              List of creditors and debenture holders of the company. Who has
              entitled to object to the application, along with their address,
              nature of the debt, and the amount due.
            </li>
          ),
          desc: <></>,
        },
        {
          title: (
            <li>
              Copy of authority letter, the board of resolution for the person
              who will appear in the hearings, if any, and
            </li>
          ),
          desc: <></>,
        },
        {
          title: (
            <li>
              An affidavit from the directors is that no employee shall retrench
              as a consequence of shifting of RO.
            </li>
          ),
          desc: <></>,
        },
      ],
      importantMessage: (
        <p
          style={{ color: "red", fontWeight: "bold", paddingBottom: "0.5rem" }}
        >
          The application must sent to the chief secretary and register of the
          state. Where the registered office of the company situates.
        </p>
      ),
    },
    {
      title: <h3>Step-6</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          30 days prior to the hearing, advertise the application in two
          newspaper indicating the change proposed to make. One in the English
          language and another in the principal language of that state.
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
    },
    {
      title: <h3>Step-7</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          Send the notice of the application by registered post to all the
          creditors and debenture holder, registrar, chief secretary of the
          state, or any relevant regulatory authority that governs the company
          under a particular law, such as security exchange bank of India
          (SEBI), if the company is listed in Reserve bank of India (RBI), and
          if the company is registered under RBI or income tax department.
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
    },
    {
      title: <h3>Step-8</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          If an objection has raised by any person whose interest has likely
          affected by the proposed application. And send a copy of the objection
          to the federal government or regional director on or before the
          hearing.
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
    },
    {
      title: <h3>Step-9</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          Where no objection has received. The regional director may confirm the
          change by making an order with or without any terms and condition.
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
    },
    {
      title: <h3>Step-10</h3>,
      desc: (
        <p style={{ fontSize: "1.1rem" }}>
          Once the order has passed. The shifting of the registered office has
          approved to file form INC-22 with both ROCs along with the supportive
          documents. Thereafter, the file form INC-28 to the ROC within 30 days
          of the order to make it effective.
        </p>
      ),
      styles: {
        paddingBottom: "2rem",
      },
    },
  ],

  docReqPoints: {
    bulletPoints: [
      {
        title: (
          <li style={{ fontSize: "1.1em" }}>
            List of directors of the company
          </li>
        ),
        desc: <></>,
      },
      {
        title: (
          <li style={{ fontSize: "1.1em" }}>
            List of shareholders of the companyList of shareholders of the
            company.
          </li>
        ),
        desc: <></>,
      },
      {
        title: (
          <li style={{ fontSize: "1.1em" }}>
            And, List of creditors duly certified by the auditors of the
            company.
          </li>
        ),
        desc: <></>,
      },
      {
        title: (
          <li style={{ fontSize: "1.1em" }}>Copy of public notice published</li>
        ),
        desc: <></>,
      },
      {
        title: (
          <li style={{ fontSize: "1.1em" }}>
            Copy of certificate of incorporation, MOA and AOA
          </li>
        ),
        desc: <></>,
      },
      {
        title: (
          <li style={{ fontSize: "1.1em" }}>
            Latest audited financial statement of the company
          </li>
        ),
        desc: <></>,
      },
      {
        title: (
          <li style={{ fontSize: "1.1em" }}>
            Rent agreement is in the name of the company for the new proposed
            address, and
          </li>
        ),
        desc: <></>,
      },
      {
        title: (
          <li style={{ fontSize: "1.1em" }}>
            Utility bill as proof of premises and a no-objection certificate
            (NOC) from the owner of premises. The bill should bear the name of
            the company along with the address that has to use. As the
            registered address of the company and not be more than two months
            old.
          </li>
        ),
        desc: <></>,
      },
    ],
    lastLine: (
      <p>
        Shifting of office from one state to another state has not permitted. If
        the company has any inquiry, inspection or investment initiated against
        it or has any prosecution pending against it under the companies act.
      </p>
    ),
  },

  changeOffice: {
    title: (
      <h1
        style={{
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        CHANGE OF REGISTERED OFFICE WITHIN THE CITY
      </h1>
    ),
    desc: (
      <p
        style={{
          lineHeight: 1.8,
          fontSize: "1.1rem",
          paddingTop: "2rem",
        }}
      >
        Companies relocating the RO within the local limits of the city or town
        can do so. Without the permission of the shareholder or any other
        authority. However, they must notify the changes to the registrar with
        the prescribed number of the days in e-form INC-22, along with other
        relevant documents and fee.
      </p>
    ),
  },

  changeOfficeBetTwoStates: {
    title: (
      <h1
        style={{
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        CHANGE OF REGISTERED OFFICE BETWEEN TWO CITIES WITHIN THE SAME STATE
      </h1>
    ),
    desc: (
      <p
        style={{
          lineHeight: 1.8,
          fontSize: "1.1rem",
          paddingTop: "2rem",
        }}
      >
        Companies shifting to the RO outside the city limits but within the same
        state must take approval from shareholders by way of passing special
        resolutions. No other permission or change in the MoA has needed.
      </p>
    ),
  },
};
