import Image from "next/image";

import Work1 from "@images/home/work1.png";
import Taxes from "@images/home/taxes.png";
import Valuation from "@images/home/valuation.png";
import TestonomialIcon from "@images/testinomial/testimonial-icon.png";

export const removeDirectors = {
  headTitle: "Virtual Auditor - Company Registration - GST - Tax Filing",
  containers: [
    {
      id: 1,
      container: {
        title: "Director Resignation / Removal",
        summary: (
          <>
            According to the Company Act, the shareholders of the company have
            the right to remove the director from the given organization before
            the expiry of his or her tenure.
          </>
        ),
        cards: [
          {
            id: 1,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Hassle Free Procedure</p>,
          },
          {
            id: 2,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Few Documents Required</p>,
          },
          {
            id: 3,
            imageSrc: (
              <Image src={TestonomialIcon} alt="Work One Image Loading.." />
            ),
            desc: "",
            title: <p style={{ fontSize: 13 }}>Money Back Guarantee</p>,
          },
        ],
      },
    },
  ],
};
