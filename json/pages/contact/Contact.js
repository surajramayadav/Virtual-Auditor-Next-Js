import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const CVA = {
    title: <p style={{ fontSize: Fonts.h1 }}>Contact Virtual Auditor</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10,fontSize:Fonts.h4  }}>Virtual Auditor is a tech-driven firm which helps startups get registered do their, compliance and regulatory aspects, We help the start-up in advisory for fundraising, business modeling, and Startup Valuations,Virtual CFO Services , Our goal is to enable entrepreneurs to what they are best that is do their core business rest of compliance and regulatory aspects will handle it Our moto "Your Dreams Our Platform you persue your dreams we take care right From Registration To Business Valuation & Compliances"</p>,
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
