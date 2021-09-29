import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const PFR = {
    title: <p style={{ fontSize: Fonts.h1 }}>Partnership <span style={{ fontWeight: 'bold' }}>Firm Registration</span></p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, }}>A partnership firm is one of the most important forms of a business organization, where two or more people come together to form a business and divide the profits thereof in an agreed ratio. it is easy to form compliance and it is minimal as in comparison with another companies.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Starting at Rs.7,499/-</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>
        }
    ]


}

export const HTFPF = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>How To Form Partnerhip Firm?</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize:Fonts.h4 }}>An application has to submit to the existing clients of their state. This application has to signed by their agents. or all the partners.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Name given to partnership firm</p>
        },
        {
            id: 2,
            imageSrc: <Image src={name} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Agreement between partners formed</p>
        },
        {
            id: 3,
            imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Register Partnership firm</p>
        }
    ]


}


export const RPE = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>REGISTRATION PROCEDURE EXPLAINED</h1>,
    data: [
        {
            id: 1,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>1. PARTNERSHIP FIRM ( NAME):-</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 ,marginTop: 20}}>Ultimately, Any Name can be suggested to the firm as long as you fulfill the basic conditions.
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>The given name shouldn't be same or identical at the same time /firm</li>
                    <li style={{ marginTop: 20 }}>The name should not contain empire etc words that conflicts about the future.</li>
                </ol></p>,
            hr: false,
            underline: false

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20, color: Colors.link }}>2. HOW SHOULD BE THE AGREEMENT BETWEEN THE PARTNERS FORMED:-</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 ,marginTop: 20}}>It is an agreement between the partnership in which their duties,rules of each director is mentioned. for this reason, It is done by two methods either orally or by written method but its is better to make agreement in written form only so as to not get any comflicts accordingly,
                <span style={{ fontSize: Fonts.h3, fontWeight: 'bold' }}>Following detailS required in a partnership deed:-</span>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Name & address of all the partners and firms</li>
                    <li style={{ marginTop: 20 }}>Nature of business</li>
                    <li style={{ marginTop: 20 }}><span style={{ color: Colors.link }}>Incorporation</span> date & Capital that contributed by each partner </li>
                    <li style={{ marginTop: 20 }}>Capital that has to contribute by each partner</li>
                    <li style={{ marginTop: 20 }}>Profit/loss sharing ratio among the partners</li>

                </ul>

            </p>,
            hr: false,
            underline: false
        },
        {
            id: 3,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>3. IS IT NECESSARY TO REGISTER PARTNERSHIP FIRM:-</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 ,marginTop: 20}}>Provided that, the Registration has to done at any time. It is always advisable to register the firm. itis a necessry tool for the people who is going to start up the business. Registration for partnership is  to have an optional at discretion of partners.
            </p>,
            hr: false,
            underline: false

        },
        {
            id: 4,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>4.HOW TO REGISTER PARTNERSHIP FIRM:-</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 ,marginTop: 20}}>Further, An application has to submit to the existing clients of their state. This application has to signed by their agents. or all the partners.</p>,
            hr: false,
            underline: false
        },

    ]
}


export const DRFPR = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>DOCUMENTS REQUIRED FOR PARTNERSHIP REGISTRATION</h1>,
    data: [
        {
            id: 1,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>DOCUMENTS REQUIRED :-</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 ,marginTop: 20,fontWeight:'bold'}}>DOCUMENTS REQUIRED :-
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>Application for registration of partnership.</li>
                    <li style={{ marginTop: 20 }}>Specimen of Affidavit.</li>
                    <li style={{ marginTop: 20 }}>Certified original copy of Partnership Deed.</li>
                    <li style={{ marginTop: 20 }}>(ownership documents or rental/lease agreement) Proof of principal place of business</li>
                </ol>
                <span style={{marginTop:20}}>
                So in case of Registration of Firms it contains up-to-date information on all firms and can be viewed by anybody upon payment of certain fees.
                    </span></p>,
            hr: false,
            underline: false

        },
        
    ]
}