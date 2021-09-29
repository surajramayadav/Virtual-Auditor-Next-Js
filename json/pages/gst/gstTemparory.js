import Image from "next/image";
import Valuation from "@images/home/valuation.png";
import Coin from "@images/gst/gst-registration/coin.png";
import Cost from "@images/gst/gst-registration/cost.png";
import Archive from "@images/gst/gst-registration-for-foreigners/archive.png";
import Name from "@images/gst/gst-registration-for-foreigners/name.png";
import Owner from "@images/gst/gst-registration-for-foreigners/owner.png";
import GlobalTable from "@components/table/GlobalTable";



export const gstTemparory = {
    headTitle: "",
    containers: [
        {
            id: 1,
            container: {
                title: "TEMPORARY GST Registration",
                summary: (
                    <>
                        The temporary GST registrations are given to persons known as Casual Taxable persons. They are those who intermittently deals with supply of goods or services or both and do not have a fixed place of business.
                    </>
                ),
                cards: [
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Coin} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Starting at Rs.4,699/-</p>,
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
                title: "How To Apply For Casual Taxable Person GST Registration?",
                summary: (
                    <>
                        Unlike normal registered persons, there is no threshold limit for a casual taxable person. He has to opt for registration, irrespective of the turnover he might have during that period. A casual taxable person also cannot opt for composition scheme.
                    </>
                ),
                cards: [
                    {
                        id: 3,
                        imageSrc: (
                            <Image src={Owner} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Register Applicant</p>,
                    },
                    {
                        id: 1,
                        imageSrc: (
                            <Image src={Archive} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Documents Submission</p>,
                    },
                    {
                        id: 2,
                        imageSrc: (
                            <Image src={Name} alt="Work One Image Loading.." />
                        ),
                        desc: "",
                        title: <p style={{ fontSize: 13 }}>Certificate</p>,
                    },
                ],
            },
        },
    ],
}

export const gstTableData = [
    {
        data: [
            { id: 1, cell: "S. No." },
            { id: 2, cell: "Particulars" },
        ]
    },
    {
        data: [
            { id: 1, cell: "1" },
            { id: 2, cell: "Leather articles (including bags, purses, saddlery, harness, 4201, 4202, 4203 garments)" }
        ]
    },
    {
        data: [
            { id: 1, cell: "2" },
            { id: 2, cell: "Carved wood products (including table and kitchenware) 4419" }
        ]
    },
    {
        data: [
            { id: 1, cell: "3" },
            { id: 2, cell: "Carved wood products (including table and kitchenware) 4419" }
        ]
    },
    {
        data: [
            { id: 1, cell: "4" },
            { id: 2, cell: "Carved wood products 4420" }
        ]
    },
    {
        data: [
            { id: 1, cell: "5" },
            { id: 2, cell: "Wood turning and lacquer ware 4421" }
        ]
    },
    {
        data: [
            { id: 1, cell: "6" },
            { id: 2, cell: "Bamboo products [decorative and utility items] 46" }
        ]
    },
    {
        data: [
            { id: 1, cell: "7" },
            { id: 2, cell: "Grass, leaf and reed and fibre products, mats, pouches, wallets 4601, 4602" }
        ]
    },
    {
        data: [
            { id: 1, cell: "8" },
            { id: 2, cell: "Paper mache articles 4823" }
        ]
    },
    {
        data: [
            { id: 1, cell: "9" },
            { id: 2, cell: "Textile (handloom products) including 50, 58, 62, 63" }
        ]
    },
    {

        data: [
            { id: 1, cell: "10" },
            { id: 2, cell: "Textiles hand printing 50, 52, 54" }
        ]
    },
    {

        data: [
            { id: 1, cell: "11" },
            { id: 2, cell: "Zari thread 5605" }
        ]
    },
    {

        data: [
            { id: 1, cell: "12" },
            { id: 2, cell: "Carpet, rugs and durries 57" }
        ]
    },
    {

        data: [
            { id: 1, cell: "13" },
            { id: 2, cell: "Textiles hand embroidery 58" }
        ]
    },
    {

        data: [
            { id: 1, cell: "14" },
            { id: 2, cell: "Theatre costumes 61, 62, 63" }
        ]
    },
    {

        data: [
            { id: 1, cell: "15" },
            { id: 2, cell: "Coir products (including mats, mattresses) 5705, 9404" }
        ]
    },
    {

        data: [
            { id: 1, cell: "16" },
            { id: 2, cell: "Leather footwear 6403, 6405" }
        ]
    },
    {

        data: [
            { id: 1, cell: "17" },
            { id: 2, cell: "Carved stone products (including statues, statuettes, figures of 6802 animals, writing sets, ashtray, candle stand)" }
        ]
    },
    {

        data: [
            { id: 1, cell: "18" },
            { id: 2, cell: "Stones inlay work 68" }
        ]
    },
    {

        data: [
            { id: 1, cell: "19" },
            { id: 2, cell: "Pottery and clay products, including terracotta 6901, 6909, 6911, 6912, 6913, 6914" }
        ]
    },
    {

        data: [
            { id: 1, cell: "20" },
            { id: 2, cell: "Metal table and kitchen ware (copper, brass ware) 7418" }
        ]
    },
    {

        data: [
            { id: 1, cell: "21" },
            { id: 2, cell: "Metal statues, images/statues vases, urns and crosses of the 8306 type used for decoration of metals of Chapters 73 and 74" }
        ]
    },
    {

        data: [
            { id: 1, cell: "22" },
            { id: 2, cell: "Metal bidriware 8306" }
        ]
    },
    {

        data: [
            { id: 1, cell: "23" },
            { id: 2, cell: "Musical instruments 92" }
        ]
    },
    {

        data: [
            { id: 1, cell: "24" },
            { id: 2, cell: "Horn and bone products 96" }
        ]
    },
    {

        data: [
            { id: 1, cell: "25" },
            { id: 2, cell: "Conch shell crafts 96" }
        ]
    },
    {

        data: [
            { id: 1, cell: "26" },
            { id: 2, cell: "Bamboo furniture, cane/Rattan furniture 94" }
        ]
    },
    {

        data: [
            { id: 1, cell: "27" },
            { id: 2, cell: "Dolls and toys 9503" }
        ]
    },
    {

        data: [
            { id: 1, cell: "28" },
            { id: 2, cell: "Folk paintings, madhubani, patchitra, Rajasthani miniature 97" }
        ]
    },
]

export const gstTemparoryDesc = [
    {
        id: 1,
        desc:
            <div>
                <h1 style={{ textAlign: "center" }}>CASUAL TAXABLE PERSON GST REGISTRATION PROCEDURE EXPLAINED</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <p>The above exemption is available to the Casual Taxable person only on 2 cases: - The aggregate value of supplies made pan India doesn’t exceed the threshold limit of aggregate turnover that is applicable to a person who is required to be registration under normal circumstances In the case of Inter-state supplies, E-way bill is generated in accordance with the Act.</p>
                </div>
            </div>
    },
    {
        id: 2,
        desc:
            <div>
                <h1>DOCUMENTS REQUIRED FOR COMPANY REGISTRATION</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <ul style={{ margin: "3rem 2rem" }}>
                        <li>PAN of Applicant</li>
                        <li>Aadhar of Applicant</li>
                        <li>Email ID and Phone Number of Applicant</li>
                        <li>Any existing registrations – MSME, IE etc.</li>
                        <li>Incorporation certificate, in case of company</li>
                        <li>Partnership Deed, in case of partnership</li>
                        <li>PAN, Aadhar, Email ID and Phone number of Directors/Partners</li>
                        <li>Cancelled cheque / bank statement</li>
                        <li>Authorization Letter, in case of entries other than proprietorship firm</li>
                        <li>Challan of taxes paid</li>
                    </ul>
                </div>
            </div>
    },
    {
        id: 3,
        desc:
            <div>
                <h1 style={{ textAlign: "center" }}>COMPANY REGISTRATION OVERVIEW</h1>
                <h1 style={{ textAlign: "center" }}>( OVERVIEW FOR PRIVATE LIMITED COMPANY REGISTRATION)</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <p>The returns of a Casual Taxable person are the same as a normal registered person. He’ll have to file GSTR 1 within 10th of the following month and GSTR 3B withing 20th of the following month, but there is no need to file Annual Return. However, the tax payment will differ in the case of casual taxable person as he needs to forecast the value of supply that he will be making in the period he has applied registration for and pay the tax liability upfront, when applying for registration.</p>
                </div>
            </div>
    },

    {
        id: 4,
        desc: <>
            <div style={{ margin: "3rem 0rem" }}>
                <h1>PERIOD OF REGISTRATION</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <p>A Casual Taxable Person needs to mention the period for which he is applying registration for. He can take GST registration for a maximum of 90 days or the period he has specified while applying for registration, whichever is earlier.  </p>
                </div>
            </div>


            <div style={{ margin: "3rem 0rem" }}>
                <h1>EXTENSION OF REGISTRATION PERIOD</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <p>However, the validity period of the GST registration can be extended further to a maximum of another 90 days by making an application in the Form GST REG-11.The casual taxable person will have to forecast the sales for the extended period and compute the tax on the same, for advance payment to the GST department. The approval of extension of registration depends on the officer assigned to. </p>
                </div>
            </div>

            <div style={{ margin: "3rem 0rem" }}>
                <h1>REFUND OF SURPLUS TAX PAID</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <p>A Casual Taxable person can request a refund of the excess tax amount that he had paid in advance, at the time of surrendering the registration, provided that all returns had been properly filed.   </p>
                </div>
            </div>

            <div style={{ margin: "3rem 0rem" }}>
                <h1>EXEMPTION FROM REGISTRATION</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <p>A casual taxable person is exempted from taking a GST registration in the following cases: </p>
                    <ul style={{ margin: "2rem" }}>
                        <li>When dealing with inter-state supply of handicraft goods which shall include any work of a corroborate nature, depicting predominant manual work by hands which might be different from mechanically produced similar goods.</li>
                        <li>When dealing with inter state supplies of specified products mentioned below, when made by the craftsmen predominantly by hand, even if some machinery is used in the business.</li>
                    </ul>
                </div>
            </div>

            <div style={{ margin: "3rem 0rem" }}>
                <div style={{ overflowX: "auto" }}>

                    <GlobalTable key={1} data={gstTableData}/>

                    {/* <table>
                        <tr>
                            <th>S. No.</th>
                            <th>Particulars</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Leather articles (including bags, purses, saddlery, harness, 4201, 4202, 4203 garments)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Carved wood products (including boxes, inlay work, cases, casks) 4415, 4416</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Carved wood products (including table and kitchenware) 4419</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Carved wood products 4420</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Wood turning and lacquer ware 4421</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Bamboo products [decorative and utility items] 46</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Grass, leaf and reed and fibre products, mats, pouches, wallets 4601, 4602</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Paper mache articles 4823</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Textile (handloom products) including 50, 58, 62, 63</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Textiles hand printing 50, 52, 54</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Zari thread 5605</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Carpet, rugs and durries 57</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Textiles hand embroidery 58</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Theatre costumes 61, 62, 63</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Coir products (including mats, mattresses) 5705, 9404</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Leather footwear 6403, 6405</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Carved stone products (including statues, statuettes, figures of 6802 animals, writing sets, ashtray, candle stand)</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Stones inlay work 68</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Pottery and clay products, including terracotta 6901, 6909, 6911, 6912, 6913, 6914</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Metal table and kitchen ware (copper, brass ware) 7418</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>Metal statues, images/statues vases, urns and crosses of the 8306 type used for decoration of metals of Chapters 73 and 74</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Metal bidriware 8306</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>	Musical instruments 92</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>Horn and bone products 96</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Conch shell crafts 96</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>Bamboo furniture, cane/Rattan furniture 94</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>Dolls and toys 9503</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>Folk paintings, madhubani, patchitra, Rajasthani miniature 97</td>
                        </tr>
                    </table> */}
                </div>

            </div>

            <div style={{ margin: "3rem 0rem" }}>
                <h1>CONDITIONS TO CLAIM EXEMPTION</h1>
                <div style={{ margin: "1rem 0rem" }}>
                    <p>The above exemption is available to the Casual Taxable person only on 2 cases: - </p>
                    <ul style={{ margin: "2rem" }}>
                        <li>The aggregate value of supplies made pan India doesn’t exceed the threshold limit of aggregate turnover that is applicable to a person who is required to be registration under normal circumstances</li>
                        <li>In the case of Inter-state supplies, E-way bill is generated in accordance with the Act.</li>
                    </ul>
                </div>
            </div>
        </>
    },

];

