import Image from "next/image";

import Work1 from "@images/home/work1.png";
import Taxes from "@images/home/taxes.png";
import Valuation from "@images/home/valuation.png";
import TestonomialIcon from "@images/testinomial/testimonial-icon.png";

export const companyNameData = {
  headTitle: "Change Company Name Online - Virtual Auditor",
  containers: [
    {
      id: 1,
      container: {
        title: <>Change Company Name</>,
        summary: (
          <>
            Name change for the company, the authorized director or company
            secretary will apply in form INC-1 to MCA for checking name
            availability and approving the name. This process is the same as the
            process adopted at the time of initial name approval.
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p>Starting at Rs.14,999/-</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p>EMI Available</p>,
          },
        ],
      },
    },
    {
      id: 2,
      container: {
        title: <>How To Change Company Name?</>,
        summary: (
          <>
            The proposed name shouldn't be similar to another, and it shouldn't
            include the word state for the name change. Another condition
            existing at the time of initial name approval exists in this
            situation also.
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p>Select New Name</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            title: <p>Apply For Name</p>,
            desc: "",
          },
          {
            id: 3,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            title: <p>Verification</p>,
            desc: "",
          },
        ],
      },
    },
  ],
  bulletPoints: [
    {
      title: <h2>Board Resolution</h2>,
      desc: (
        <>
          Foremostly, A Board meeting has convened to pass a resolution for the
          name of the company and to authorize a Director or Company Secretary
          to make an application to the MCA for ascertaining availability of
          proposed name. At the same Board meeting, a resolution has to convene
          an extraordinary general meeting for changing the name of the company,
          and altering the Memorandum of Association and Articles of Association
          can also be passed.
        </>
      ),
    },
    {
      title: <h2>Check Company Name Availability</h2>,
      desc: (
        <>
          Once a resolution has passed ascertaining. Availability of the
          proposed company name, the authorized person can make a name applied
          to the MCA. The procedure for name application is similar as that of
          the name application procedure. Which has followed during
          incorporation of a private limited company. Therefore, a name must be
          as per the Companies Act 2013 Naming Guidelines.
        </>
      ),
    },
    {
      title: <h2>Pass Special Resolution</h2>,
      desc: (
        <>
          Once a name has approved by the MCA for changing the company name. The
          Company must conduct an extraordinary general meeting and pass special
          resolution for change of company name. And the consequential changes
          to the Memorandum of Association and Articles of Association.
        </>
      ),
    },
    {
      title: <h2>Application for approval</h2>,
      desc: (
        <>
          Once the special resolution for company name has passed. The special
          resolution and application for approval must file with the Registrar
          of Companies. An application for company name must made in Form 1B
          along with the requisite fee.
        </>
      ),
    },
    {
      title: <h2>Make Changes to MOA and AOA</h2>,
      desc: (
        <>
          Subsequent to the issuance of the new incorporation certificate. Steps
          has taken to incorporate new company names in all the copies of Moa,
          AOA, and certificate of Incorporation issued by the Registrar.
        </>
      ),
    },
  ],
};
