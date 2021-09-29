import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const PR = {
    title: <p style={{ fontSize: Fonts.h1 }}>Proprietorship Registration</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, }}>Complete your proprietorship registration online with our dedicated team anywhere from India. Proprietorship startup with GST registration and IT filing starting at less than Rs.2599 per year.</p>,
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

export const HTPPR = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>How To Perform Proprietorship Registration?</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize:Fonts.h4 }}>A Sole Proprietorship is basically a type of unregistered business that is owned and controlled by a signle person. Sole Proprietorship is the one of the most common form of business in India, used by the micro and small level businesses operating in the unorganised sectors. Proprietorships firms are very easy to start and have a very low regulatory compliance requirement for starting and operating. So, it is the best form of registration for small businesses.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Business Idea</p>
        },
        {
            id: 2,
            imageSrc: <Image src={name} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Apply For GST</p>
        },
        {
            id: 3,
            imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>File Returns</p>
        }
    ]


}



export const PRPE = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>REGISTRATION PROCEDURE EXPLAINED</h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Although, the sole proprietor does Not require any specific registrations, he is advised to obtain things that make his functions go on smoothly.
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>REGISTERING AS SMS</li>
                    <li style={{ marginTop: 20 }}>SHOP AND <span style={{ color: Colors.link }}>ESTABLISHMENT</span> ACT</li>
                    <li style={{ marginTop: 20 }}>GST REGISTRATION OF SOLE PROPRIETORSHIP</li>
                </ol></p>,
            hr: true,
            underline: false

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20, }}>Aadhar Card</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>AADHAR number is now a necessity for applying for any registration in India. Also, income tax return only be filed if the person has linked his PAN card with Aadhar number. Contact nearest E-Mitra or Aadhar Seva Kendra if you haven’t got an Aadhar number yet. After applying for Aadhar card, a hard copy of the same has to receive at the registered address in around 15-20 days.</p>,
            hr: true,
            underline: false
        },
        {
            id: 3,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>PAN Card</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>YOU  Cant even file your income tax until even you get the PAN CARD. So if you don’t have a PAN number, apply for it at the earliest. PAN CARD has to apply online and it costs Rs. 110, approximately. For APPLICATION, you need to have a proper scanned photograph, their identity proof, and their address proof. The form has to  submitt it  online by verifying it through Aadhar e-KYC. Once PAN card application is submitted, it is checked at NSDL for verification, and if NSDL finds the information correct, it allots the PAN number within 7-8 days. Further, a hard copy of PAN card has received at the registered address within 15-20 days.
            </p>,
            hr: true,
            underline: false

        },
        {
            id: 4,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>Bank Account</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>MOREOVER, After you have got Aadhar Number and PAN, you can visit any bank for opening an account with them. Apart from Aadhar Number and PAN, you need to carry ew proofs such as identity proof and address proof. For opening a current account, you need to submit GST registration document to the bank officials too.</p>,
            hr: true,
            underline: false
        },
        {
            id: 5,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>Registered office proof</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>i.  Rent agreement and NOCfrom a landlord. (if it is a rented property) ii. Electricity bill or any other address proof. (if it has a self owned property) In addition to the above, there are few registrations that require in order to establish the existence for firm:</p>,
            hr: true,
            underline: false

        },
        {
            id: 6,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>Registering as SME</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>In general words, You can get yourself registered as Small and Medium Enterprise (SME) under the MSME Act. The application has to filed electronically. Although it isn’t compulsory to register as an SME, it is highly beneficial, especially at the time of taking loan for the business. The Government runs various schemes for SMEs where loans are provided at the concessional rate of interest.</p>,
            hr: true,
            underline: false
        },
        {
            id: 7,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>Shop and Establishment Act License</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Furthermore, This license isn’t mandatory at all places, but has to require for obtaining according to the local laws. it's going to be issued on the basis of the number of employees.</p>,
            hr: true,
            underline: false
        },
        {
            id: 8,
            subtitle: <h4 style={{ fontSize: Fonts.h2, marginTop: 20 }}>GST REGISTRATION OF SOLE PROPRIETORSHIP:-</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>You can get yourself registered under gst if your annual turnover is more than Rs. 20 lakhs. Also, if you are doing online business (selling through amazon, flipkart etc.), you will require to get a GST number. For registration you will need following documents such as:- a. PAN card, Photo and Aadhar Card of the proprietor b.  (Electricity bill/ rent agreement) proof of business place. c. Bank statement copy (first page for verifying bank account number, address and IFSC</p>,
            hr: false,
            underline: false
        },

    ]
}

export const DRFSPR = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>DOCUMENTS REQUIRED FOR SOLE PROPRIETORSHIP REGISTRATION</h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20,      }}>For registering SOLE PROPRIETORSHIP you will need documents that are required such as:-
                <ol style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>AADHAR CARD</li>
                    <li style={{ marginTop: 20 }}>PAN CARD</li>
                    <li style={{ marginTop: 20 }}>BANK ACCOUNT</li>
                    <li style={{ marginTop: 20 }}>REGISTERED OFFICE PROOF</li>
                </ol>
            </p>,
            hr: false,
            underline: false

        },

    ]
}