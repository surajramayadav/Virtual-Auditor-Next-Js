import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from "@images/gst/gst-registration/coin.png";
import cost from "@images/gst/gst-registration/cost.png";
import owner from "@images/startup/owner.png";
import name from "@images/startup/name.png";
import archive from "@images/startup/archive.png";

export const OnePcr = {
  title: (
    <p style={{ fontSize: Fonts.h1 }}>
      One Person{" "}
      <span style={{ fontWeight: "bold" }}>Company Registration</span>
    </p>
  ),
  desc: (
    <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4 }}>
      With the implementation of the Companies Act, 2013, a single person could
      constitute a Company, under the{" "}
      <span style={{ color: Colors.link }}>One Person Company </span>(OPC)
      concept. The introduction of OPC in the legal system is a move that would
      encourage corporatization of micro businesses and entrepreneurship.
    </p>
  ),
  box: [
    {
      id: 1,
      imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
      title: (
        <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>
          Starting at Rs.7,499/-
        </p>
      ),
    },
    {
      id: 2,
      imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
      title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>,
    },
  ],
};

export const IOPC = {
  title: (
    <p style={{ fontSize: Fonts.h2, fontWeight: "bold" }}>
      How To Incorporate One Person Company?
    </p>
  ),
  desc: (
    <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4 }}>
      Registering a private limited company requires the support of CA/CS/Lawyer
      as the legal procedures are involved in it, company registration a
      complicated process but does not worry our team of experts will guide you.
    </p>
  ),
  box: [
    {
      id: 1,
      imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
      title: (
        <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>
          Register The Director To MCA
        </p>
      ),
    },
    {
      id: 2,
      imageSrc: <Image src={name} alt="Work One Image Loading.." />,
      title: (
        <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>
          Select A Name For Company registration (OPC)
        </p>
      ),
    },
    {
      id: 3,
      imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
      title: (
        <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>
          Draft Documents (MOA & AOA)
        </p>
      ),
    },
  ],
};

export const RegPE = {
  title: (
    <h1 style={{ fontSize: Fonts.h2 }}>REGISTRATION PROCEDURE EXPLAINED</h1>
  ),
  data: [
    {
      id: 1,
      subtitle: (
        <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>Step 1: Apply RUN</h4>
      ),
      desc: (
        <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
          Apply RUN ( Reserve Unique Name Form ) (Name Availability)
        </p>
      ),
      hr: true,
      underline: true,
    },
    {
      id: 2,
      subtitle: (
        <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>
          Step 2: Acquire Digital Signature Certificate(DSC):
        </h4>
      ),
      desc: (
        <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
          Digital Signature should be acquired by those agencies which are
          appointed or controlled by certification agencies. (CCA). IF you
          already have digital signature then you can use the same, no need to
          apply for another one. but check once for validity, maximum limit is
          upto 1-2 years after expiry you can renew it.
        </p>
      ),
      hr: false,
      underline: true,
    },
    {
      id: 3,
      subtitle: (
        <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>
          Step 3: Create a account on MCA Portal – New user registration:-
        </h4>
      ),
      desc: (
        <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
          IN CASE OF MCA PORTAL,This is about having a registered user account
          on MCA Portal for filing a eForm, for online fee payment, for
          different transactions as registered and business user. Creating an
          account is totally free of cost.
        </p>
      ),
      hr: false,
      underline: true,
    },
    {
      id: 4,
      subtitle: (
        <h4 style={{ fontSize: Fonts.h4, marginTop: 20 }}>
          Step 4: Application of company has to registered:
        </h4>
      ),
      desc: (
        <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
          FOR this final procedure in registration of the company which includes
          incorporation of company name, MOREOVER, registration of office
          address notice for appointment of company directors, managers, etc..
          After submitting the form you will receive an approved application by
          MCA. Hence, YOU will receive the confirmation email regarding the
          application of incorporation of new company, and form will change to
          approve it.
        </p>
      ),
      hr: false,
      underline: true,
    },
  ],
};

export const DRFCR = {
  title: (
    <h1 style={{ fontSize: Fonts.h2 }}>
      DOCUMENTS REQUIRED FOR COMPANY REGISTRATION
    </h1>
  ),
  subtitle: (
    <h3 style={{ fontSize: Fonts.h3, marginTop: 20 }}>
      Documents required for Private Limited Company Registration through SPICe
      (INC-32)
    </h3>
  ),
  data: [
    {
      id: 1,
      subtitle: (
        <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>
          For Indian Directors/Shareholders
        </h4>
      ),
      desc: (
        <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
          <ul style={{ marginLeft: 20 }}>
            <li style={{ marginTop: 20 }}>
              FORM INC 9; An Affidavit on a Stamp Paper stating that the
              directors are not disqualified and not have been convicted of an
              offense
            </li>
            <li style={{ marginTop: 20 }}>
              PAN CARD of directors and subscribers
            </li>
            <li style={{ marginTop: 20 }}>
              Proof of office address – Voter ID, OR passport
            </li>
            <li style={{ marginTop: 20 }}>
              Copies of utility bills ( Telephone Bill or Bank Statements) that
              are not lider than two months ( Compulsory for the incorporation
              of companies)
            </li>
            <li style={{ marginTop: 20 }}>
              Rental Agreement; in case; of rented property
            </li>
            <li style={{ marginTop: 20 }}>
              NOC; from the owner of the property
            </li>
            <li style={{ marginTop: 20 }}>
              EB Card/EB Bill of the premise or Property Tax or Telephone
              evidencing the address proof of the company
            </li>
          </ul>
        </p>
      ),
      hr: false,
      underline: true,
    },
    {
      id: 2,
      subtitle: (
        <h4 style={{ fontSize: Fonts.h3, marginTop: 40 }}>
          For Foreign Directors/Sharehliders
        </h4>
      ),
      desc: (
        <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
          <ul style={{ marginLeft: 20 }}>
            <li style={{ marginTop: 20 }}>
              Passport ( Notarised or Appostiled in their country) and counter
              attested by; The Indian embassy
            </li>
            <li style={{ marginTop: 20 }}>
              No Pan Declaration and counter attested by the Indian embassy
            </li>
            <li style={{ marginTop: 20 }}>INC -9</li>
            <li style={{ marginTop: 20 }}>
              Address proof: Driving license, Residence card, Government issued
              a form of identification containing an address
            </li>
            <li style={{ marginTop: 20 }}>
              Copies of utility bills ( Telephone Bill or Bank Statements) that
              are not lider than two months ( Compulsory for the incorporation
              of companies)
            </li>
          </ul>
        </p>
      ),
      hr: false,
      underline: true,
    },
  ],
};

export const OPCO = {
  title: (
    <h1 style={{ fontSize: Fonts.h2, marginRight: 10, textAlign: "center" }}>
      {" "}
      ONE PERSON COMPANY REGISTRATION OVERVIE (OVERVIEW FOR OPC){" "}
    </h1>
  ),
  data: [
    {
      id: 1,
      subtitle: (
        <h3 style={{ fontSize: Fonts.h3, marginTop: 20, marginBottom: 10 }}>
          Method 1:
        </h3>
      ),
      desc: (
        <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
          Incorporating a Company via{" "}
          <span style={{ color: Colors.link }}>RUN (Reserve Unique Name)</span>{" "}
          form: In an attempt to ease procedures for new as well as existing
          companies, the Ministry of Corporate Affairs (MCA) has introduced RUN
          web service for the incorporation of a company and company
          registration RUN From gives only Two (2) chance for applying one is
          original submission and the other is in resubmission mode, You must
          ensure that the names should not be general and should be closely
          resembling with other companies detailed understanding of name
          availability guidelines In one application we can apply for Two names,
          in case of Resubmission we can apply for the next two names
        </p>
      ),
      hr: false,
      underline: false,
    },
    {
      id: 2,
      subtitle: (
        <h3 style={{ fontSize: Fonts.h3, marginTop: 20, marginBottom: 10 }}>
          Method 2:
        </h3>
      ),
      desc: (
        <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>
          Apply directly Directly in SPICE INC -32 for company registration and
          get a direct certificate of incorporation, the only pitfall is that we
          can apply only one name and all legal documents must be fully prepared
          to proceed with this, if the name is rejected then we have to
          completely redo entire documents such as INC- 9 ( Affidavit), DIR -2 (
          Director Concent) and all other documents including NOC from owner
        </p>
      ),
      hr: false,
      underline: false,
    },
  ],
};

export const RPCROPC = {
  title: (
    <h1 style={{ fontSize: Fonts.h2, marginRight: 10, textAlign: "center" }}>
      {" "}
      REASONS TO PERFORM COMPANY REGISTRATION AS A ONE PERSON COMPANY{" "}
    </h1>
  ),
  desc: (
    <p
      style={{
        fontSize: Fonts.h4,
        lineHeight: 2,
        marginTop: 30,
        marginBottom: 30,
      }}
    >
      The concept of One person company is quite revolutionary. It gives the
      individual entrepreneurs all the benefits of a company, which means they
      will get credit, bank loans, access to market, limited liability, and
      legal protection available to companies. Prior to the new Companies Act,
      2013 coming into effect, at least two shareholders were required to start
      a company. But now the concept of One Person Company (OPC) would provide
      tremendous opportunities for small businessmen and traders, now the OPC
      would help them do business as an enterprise and give them an opportunity
      to start their own ventures with a formal business structure, Further, the
      amount of compliance by a one person company is much lesser in terms of
      filing returns, balance sheets, audit etc. The new concept would also
      boost the confidence of small entrepreneurs.
    </p>
  ),
};
