import Image from "next/image";

import Work1 from "@images/home/work1.png";
import Taxes from "@images/home/taxes.png";
import Valuation from "@images/home/valuation.png";
import TestonomialIcon from "@images/testinomial/testimonial-icon.png";

export const homeCardData = {
  cards: [
    {
      id: 1,
      imageSrc: <Image src={Work1} alt="Work One Image Loading.." />,
      title: <h1 style={{ fontSize: 18 }}>Start a Business</h1>,
      desc: (
        <p style={{ fontSize: 13 }}>
          Talk to our team and get dedicated support in registering from a
          private limited company to Public Company.
        </p>
      ),
    },
    {
      id: 2,
      imageSrc: <Image src={Taxes} alt="Work One Image Loading.." />,
      title: <h1 style={{ fontSize: 18 }}>Company Valuation</h1>,
      desc: (
        <p style={{ fontSize: 13 }}>
          Company valuation is a critical part of any business transaction and
          will be required for many reasons.
        </p>
      ),
    },
    {
      id: 3,
      imageSrc: <Image src={Valuation} alt="Work One Image Loading.." />,
      title: <h1 style={{ fontSize: 18 }}>File Tax Returns</h1>,
      desc: (
        <p style={{ fontSize: 13 }}>
          Talk to our team of Experts and get started with everything from GST
          return filing to IT return filing.
        </p>
      ),
    },
  ],
};

export const testinomialData = {
  cards: [
    {
      id: 1,
      imageSrc: <Image src={TestonomialIcon} alt="Work One Image Loading.." />,
      title: (
        <p style={{ textAlign: "left" }}>
          They have qualified professionals in auditing and they do finish the
          job on time.
        </p>
      ),
      desc: (
        <div style={{ textAlign: "left", padding: "1rem 0rem" }}>
          <p>Vigneshwar rajagopal</p>
          <p style={{ fontSize: 14, color: "#ff589e", fontWeight: "bold" }}>
            {" "}
            VINIPRAHA FOODS PRIVATE LIMITED
          </p>
        </div>
      ),
    },
    {
      id: 2,
      imageSrc: <Image src={TestonomialIcon} alt="Work One Image Loading.." />,
      title: (
        <p style={{ textAlign: "left" }}>
          Very good Company. seamless operation with swift and at best customer
          service.
        </p>
      ),
      desc: (
        <div style={{ textAlign: "left", padding: "1rem 0rem" }}>
          <p>Suresh</p>
          <p style={{ fontSize: 14, color: "#ff589e", fontWeight: "bold" }}>
            {" "}
            BHRIGU SSS PRIVATE LIMITED
          </p>
        </div>
      ),
    },
    {
      id: 3,
      imageSrc: <Image src={TestonomialIcon} alt="Work One Image Loading.." />,
      title: (
        <p style={{ textAlign: "left" }}>
          From the day one we are having very good service from your end, really
          good.
        </p>
      ),
      desc: (
        <div style={{ textAlign: "left", padding: "1rem 0rem" }}>
          <p>Naresh </p>
          <p style={{ fontSize: 14, color: "#ff589e", fontWeight: "bold" }}>
            {" "}
            Sea Glider
          </p>
        </div>
      ),
    },
  ],
};


// -------------------------------- start up india --------------------------------


export const sigCards = {
  cards: [
    {
      id: 1,
      imageSrc: <Image src={Work1} alt="Work One Image Loading.." />,
      title: <h1 style={{ fontSize: 18 }}>Start a Business</h1>,
    },
    {
      id: 2,
      imageSrc: <Image src={Taxes} alt="Work One Image Loading.." />,
      title: <h1 style={{ fontSize: 18 }}>Company Valuation</h1>,
    },
    {
      id: 3,
      imageSrc: <Image src={Valuation} alt="Work One Image Loading.." />,
      title: <h1 style={{ fontSize: 18 }}>File Tax Returns</h1>,
    },
  ],
};

export const ourPackage = {
  cards: [
    {
      id: 1,
      imageSrc: <Image src={Work1} alt="Work One Image Loading.." />,
      title: <h1 style={{ fontSize: 18 }}>Startup India Registration (DIPP Registration)</h1>,
    },
    {
      id: 2,
      imageSrc: <Image src={Taxes} alt="Work One Image Loading.." />,
      title: <h1 style={{ fontSize: 18 }}>Step by step Guidelines</h1>,
    },
    {
      id: 3,
      imageSrc: <Image src={Valuation} alt="Work One Image Loading.." />,
      title: <h1 style={{ fontSize: 18 }}>Dedicated Account Manager</h1>,
    },
  ],
};
