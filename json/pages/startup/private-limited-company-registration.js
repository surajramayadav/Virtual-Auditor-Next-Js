import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'
import person from '@images/startup/person.png'
import accounting from '@images/startup/accounting.png'
import time from '@images/startup/time.png'
import environment from '@images/startup/environment.png'

export const HTROR = {

    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 40 }}>Starting at Rs.8,999/-</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>
        }
    ]


}


export const PLCROP = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold', textAlign: 'center' }}>OUR PACKAGE</p>,

    box: [
        {
            id: 1,
            imageSrc: <Image src={accounting} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Private Limited Company Registration Certificate</p>
        },
        {
            id: 2,
            imageSrc: <Image src={time} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Step by step Guidance</p>
        },
        {
            id: 3,
            imageSrc: <Image src={environment} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Help in Choosing Company name</p>
        },
        {
            id: 4,
            imageSrc: <Image src={time} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Hassle free Document preparation</p>
        },
        {
            id: 5,
            imageSrc: <Image src={environment} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Dedicated Account Manager</p>
        }
    ]


}


export const HTIPLC = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold', textAlign: 'center' }}>How To Incorporate Private Limited Company?</p>,

    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Register All Directors
            To MCA</p>
        },
      
    ]


}

