import Image from "next/image";
import Valuation from "@images/home/valuation.png";
import Coin from "@images/gst/gst-registration/coin.png";
import Cost from "@images/gst/gst-registration/cost.png";
import Archive from "@images/gst/gst-registration-for-foreigners/archive.png";
import Name from "@images/gst/gst-registration-for-foreigners/name.png";
import Owner from "@images/gst/gst-registration-for-foreigners/owner.png";



export const EsiRegistrationData = {
    headTitle: "",
    containers: [
        {
            id: 1,
            container: {
                title: "ESI Registration",
                summary: (
                    <>
                        The Employees State Insurance Act, 1948, paved the way for the establishment of an autonomous corporate body – The Employee State Insurance Corporation, falling under the jurisdiction of Ministry of Labour and Employment, to provide benefits to employees falling under this Act in case of sickness, maternity or any employment injury or otherwise and to make provision for the matters in relation thereto.
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Coin} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Starting at Rs. 7,499/-</p>,
                    },
                    {
                        id: 2,
                        imageSrc: (
                            <Image src={Cost} alt="Work One Image Loading.." />
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
                title: "Benefits Of ESI Registration?",
                summary: (
                    <>
                        <div style={{ margin: "2rem 0rem" }}>
                            <p>The employees get both monetary support and medical support under this scheme -</p>

                        </div>
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Owner} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Cash benefits</p>,
                    },
                    {
                        id: 2,
                        imageSrc: (
                            <Image src={Name} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Paid maternity leaves</p>,
                    },
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Archive} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Medical care</p>,
                    },
                ],
            },
        },
    ],
}


export const EsiRegistrationDesc = [
    {
        id: 1,
        desc:
            <>

                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>ESI REGISTRATION PROCEDURE EXPLAINED</h1>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p>Under the ESI Act, all factories, and below stated establishments employing more than 10* employees for a monthly wage not exceeding Rs. 21,000 are required to be registered, within 15 days from the date it becomes eligible: -</p>
                        <ol style={{ margin: "2rem" }}>
                            <li>Shops</li>
                            <li>Movie theatres</li>
                            <li>Hotels & restaurants</li>
                            <li>Educational & Medical institutions</li>
                            <li>Road Transport Establishments</li>
                            <li>Newspaper Establishments</li>
                            <li>Establishments engaged in Insurance Business</li>
                            <li>NBFC</li>
                            <li>Warehousing Establishments</li>
                        </ol>
                        <p>*For Maharashtra & Chandigarh, the number of employees is 20.</p>
                    </div>
                </div>

                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>DOCUMENTS REQUIRED FOR ESI REGISTRATION</h1>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p>The following documents are required to register under the ESIC Act: -</p>
                        <ul style={{ margin: "2rem" }}>
                            <li>Copy of PAN Card – Employer’s and Employees’</li>
                            <li>Address proof</li>
                            <li>Copy of recently paid property tax / EB receipt</li>
                            <li>Registration Certificate issued under the</li>
                        </ul>
                        <ol style={{ margin: "2rem" }}>
                            <li>Factories Act</li>
                            <li>Shop & Establishment Act</li>
                        </ol>
                        <ul style={{ margin: "2rem" }}>
                            <li>Partmership Deed in case of Partnership Firms / LLPS</li>
                            <li>MoA and AoA, in case of Companies</li>
                            <li>Trust Deed in case of Trusts</li>
                            <li>Copy of Bank Statement (Recent 2 months)</li>
                            <li>GST Registration Certificate (Optional)</li>
                            <li>List of Employees with details of their monthly compensation</li>
                        </ul>
                    </div>
                </div>

                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>ESI REGISTRATION OVERVIEW</h1>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p>(ESI) Employees State Insurance Return filing is a self-financing social security and health insurance scheme for Indian workers. ESI Registration is mandatory for employers having 10 or more employee. For all employees earning Rs.15,000 or less per month as wages. The employer must contribute 4.75% and the employee must contribute 1.75% towards ESI. The ESI fund is managed by the ESI Corporation (ESI) according to rules and regulations stipulated therein the ESI Act 1948, which oversees the provision of medical and cash benefits to the employees and their family through its large network of branch offices, dispensaries, and hospitals throughout India. Therefore, ESI return is an autonomous corporation under the Ministry of Labour and Employment, Government of India. Hence, Virtual Auditor can help you obtain ESI registration for your business. All employers having 10 or more employees are required to be registered with Employee State Insurance (ESI) Corporation. Those entities having ESI Registration must then file ESI returns. ESI returns are due half-yearly. Therefore, Virtual Auditor can help file ESI returns for your business. Our ESI experts can also help you computer ESI payments and maintain ESI regulation compliance for your business. Use Remin Due to know more about your due dates for ESI return and ESI payment due date.</p>
                    </div>
                </div>



                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "center" }}>REASONS TO PERFORM ESI REGISTRATION</h1>
                    <div style={{ margin: "3rem 0rem" }}>
                        <p>Eventually, Employee's State Insurance Corporation(ESI) is a self-financing social security and health insurance scheme for Indian workers. The scheme provides employees with a comprehensive Social Security Scheme for protecting the employees during sickness, injury or disability.</p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <h2>ESI Contribution</h2>
                        <p>ESI contributions must be made by the employer for all employees having a salary of less than Rs.15,000 per month. Therefore, the employer must contribute 4.75% and the employee must contribute 1.75% of the wages for ESI.</p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <h2>Continued Compliance</h2>
                        <p>Organizations under ESI coverage must file an annual return showing the changes if any during the preceding year. Return of contributions enclosing a copy of all ESI contributions paid must submit once every six months.</p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <h2>ESI Benefits</h2>
                        <p>Hence, Employee's State Insurance Corporation(ESI) has a self-ESI provide employees registered the scheme with a host of medical and sickness benefits. Employees registered under the scheme can avail medical facilities and are also entitled to sick pay benefits.</p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <h2>ESI Registration</h2>
                        <p>ESI Registration for Employers having more than 10 employees. Therefore, The Employer must contribute 4.75% of the Employees wages towards ESI. Once, registered the organization has allotted a 17 digit unique identification code.</p>
                    </div>
                </div>


                <div style={{ margin: "4rem 0rem" }}>
                    <h1 style={{ textAlign: "left" }}>ESI due date</h1>
                    <h1>Due Date for ESI payment</h1>
                    <div style={{ margin: "1rem 0rem" }}>
                        <p>ESI return contribution has to deduct every month from the employee and it has to be contributed to the department. So ESI payment due date is monthly, on or before the 15th of next month. It is similar to PF in this respect.</p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <h2>ESI return due date</h2>
                        <p>ESI return filing has done on a half-yearly basis and therefore, the due dates are fixed as 11th of November and May.</p>
                    </div>
                    <div style={{ margin: "3rem 5rem" }}>
                        <table>
                            <tr>
                                <th>TYPE</th>
                                <th>DUE DATE</th>
                            </tr>
                            <tr>
                                <td>Due Date for ESI payment</td>
                                <td>On or before 15th of every month</td>
                            </tr>
                            <tr>
                                <td>ESI Return due date</td>
                                <td>11th of Nov and 11th of may</td>
                            </tr>
                        </table>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <h2>ESI interest</h2>
                        <p>Hence, An employer who does not pay the contribution within the time limit shall be liable to pay simple interest at the rate of 12% per annum for each day of the default or delay in payment of contribution.</p>
                    </div>
                    <div style={{ margin: "3rem 0rem" }}>
                        <h2>Procedure for ESI return filing</h2>
                        <p>Below are the steps to be followed</p>
                        <ul style={{ margin: "2rem" }}>
                            <li>Log in employer portal using the 17 digit employer digit code</li>
                            <li>GO to the monthly contribution section</li>
                            <li>All the details of the employer contribution will be displayed</li>
                            <li>Verify the details.</li>
                            <li>If there are any short payments in respects of the employer then complete the dues.</li>
                            <li>Do self-certification under monthly contribution section, and then check to mark the declaration and submit the return.</li>
                        </ul>
                    </div>
                    <div style={{ margin: "4rem 0rem" }}>

                        <h1>How we help with ESI return filing</h1>
                        <p>Here, Virtual Auditor can help your business to file ESI return and make ESI payments on time.</p>

                        <div style={{ margin: "2rem 0rem" }}>
                            <h2>Document Collection</h2>
                            <p>Here, A Virtual Auditor ESI Expert will collect the necessary information and documents for preparation of ESI return for your business.</p>
                        </div>
                        <div style={{ margin: "2rem 0rem" }}>
                            <h2>Return Preparation</h2>
                            <p>Therefore, based on the documents and information presented, a Virtual Auditor ESI expert will prepare your ESI return and send for your approval.</p>
                        </div>
                        <div style={{ margin: "2rem 0rem" }}>
                            <h2>Return Filing</h2>
                            <p>Once the ESI return is verified and approved by you. Hence, Our ESI expert will file your ESI return with the ESIC department.</p>
                        </div>
                    </div>
                </div>


            </>
    }
];
