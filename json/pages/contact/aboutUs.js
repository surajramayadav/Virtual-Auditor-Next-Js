import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const WMEDCT = {
    title: <p style={{ fontSize: Fonts.h1 }}>We Make entrepreneurial dreams come true!</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize: Fonts.h4 }}>Virtual Auditor is a tech-driven firm which helps startups get registered do their, compliance and regulatory aspects, We help the start-up in advisory for fundraising, business modeling, and Startup Valuations, Virtual CFO Services, technology consulting enabling startup and companies in accessing the internet and be a part of Digital India revolution.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 40 }}>Dedicated Customer Support</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>24*7 Helpline</p>
        }
    ]


}


export const OurMiss = {
    title: <h1 style={{ fontSize: Fonts.h2, marginTop: 50 ,textAlign:'center'}}>OUR MISSION</h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, }}>Our goal is to enable entrepreneurs to what they are best that is do their core business rest of compliance and regulatory aspects will handle it</p>,
            hr: false,
            underline: true

        },
        {
            id: 2,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>Our motto "Your Dreams Our Platform you pursue your entrepreneurial dreams we take care right From Registration To Business Valuation, Compliances & Technology "
            </p>,
            hr: false,
            underline: true
        },
        {
            id: 3,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>Virtual Auditor is a one-stop business formation/ Company registration and corporate services the company managed by a specialized team of Chartered Accountants/ Company Secretaries and Registered Valuers, Management Professionals committed to providing excellent prospects to our clients in the widest range of business requirement.</p>,
            hr: false,
            underline: true

        },
        {
            id: 4,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>Our specialized team with extensive financial and corporate knowledge enables us to provide the requirement and needs of our clients. Our service area is from Incorporating of companies, providing services relating to intellectual property rights, corporate and secretarial compliances, FEMA advisory through Online services. Our service area is from Incorporating of companies, providing services relating to intellectual property rights, corporate and secretarial compliances, FEMA advisory through Online services, Tax audits, Statutory Audits.</p>,
            hr: false,
            underline: true
        },
        {
            id: 5,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>The Basis of our practice is that of Zeal to exhibit that efficient service is based on commercial spirit and creativity, effectively utilizing the deep proficiency and practical knowledge that specialization brings. We bestow hard to offer new and customized business and corporate solutions and undertake to promote the strength of all our clients.</p>,
            hr: false,
            underline: true
        },
        {
            id: 6,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>As far as customers are concerned you are the company. This is not a burden, but the core of your job. You hold in your hands the power to keep customers coming back – perhaps even to make or break the company.  - Unknown.</p>,
            hr: false,
            underline: true
        },
        {
            id: 7,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}><strong>Our Vision</strong>
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>To earn customers rather clients by not royalty but by treating them royally with Loyalty.
                    </li>
                    <li style={{ marginTop: 20 }}>To become the iconic professional services firm, always in front of mind whenever professional services are mentioned.</li>
                    <li style={{ marginTop: 20 }}>To Harmonise Your Goals with Ours towards Success.</li>
                    <li style={{ marginTop: 20 }}>To make customer’s perception is our reality.</li>
                </ul>
            </p>,
            hr: false,
            underline: true
        },
        {
            id: 8,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>Resolving our promises not only online but also by creating a mode of physical touch with customers uninterruptedly.</p>,
            hr: false,
            underline: true
        },
        {
            id: 8,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>The Valuation has to done by a registered valuer only you may contact Mr CA Viswanathan who is IBBI Registered Valuer u/s 247 of Companies Act, 2013 for Securities or Financial Assets Class. He is also a fellow member of The Institute of Chartered Accountants of India and qualified Company Secretary.
            </p>,
            hr: false,
            underline: true
        }, {
            id: 8,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2 }}>We are into business advisory since 2012 and has advised many clients in Valuation, Amalgamations, Corporate Structuring, Tax & Audit, clients include NBFCs, Publically Listed Companies, Stock Broking Companies, Manufacturing Companies, Service Industries, Real Estate Companies, etc.</p>,
            hr: false,
            underline: false
        },
    ]
}
