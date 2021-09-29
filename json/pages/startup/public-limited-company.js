import Colors from "constant/Colors";
import { Fonts } from "constant/Fonts";
import Image from "next/image";
import coin from '@images/gst/gst-registration/coin.png'
import cost from '@images/gst/gst-registration/cost.png'
import owner from '@images/startup/owner.png'
import name from '@images/startup/name.png'
import archive from '@images/startup/archive.png'

export const PLCR = {
    title: <p style={{ fontSize: Fonts.h1 }}>Public Limited Company Registration</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, }}>Uniquely, A Public Limited Company  is a company that has limited liability & offers shares to the general public A company whose securities are traded on a stock exchange and can be bought and sold by anyone</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={coin} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Starting at Rs.28,999/-</p>
        },
        {
            id: 2,
            imageSrc: <Image src={cost} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>EMI Available</p>
        }
    ]


}

export const HTIPLC = {
    title: <p style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>How To Incorporate Public Limited Company?</p>,
    desc: <p style={{ lineHeight: 2, marginTop: 10, fontSize:Fonts.h4 }}>Registering a Public limited company requires the support of CA/CS/Lawyer as the legal procedures are involved in it, company registration a complicated process but does not worry our team of experts will guide you.</p>,
    box: [
        {
            id: 1,
            imageSrc: <Image src={owner} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Register All Directors To MCA</p>
        },
        {
            id: 2,
            imageSrc: <Image src={name} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Select A Name For Company registration</p>
        },
        {
            id: 3,
            imageSrc: <Image src={archive} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Draft Documents
                (MOA & AOA)</p>
        }
    ]


}


export const PLRPE = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>PUBLIC LIMITED REGISTRATION PROCEDURE EXPLAINED</h1>,
    data: [
        {
            id: 1,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>Registering a Public limited company requires a support of CA/CS/Lawyer as the legal procedures are involved in it, it's a complicated process but do not worry our team of experts will take care of these issues</p>,
            hr: true,
            underline: false

        },
        {
            id: 2,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step1</span>: Apply RUN (Reserve Unique Name Form ) <span style={{ fontWeight: 'bold' }}>(Name Availability)</span></p>,
            hr: true,
            underline: false
        },
        {
            id: 2,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step2</span>: Obtain DSC and Form SPICE INC-32 (E Form used for Company Registration)</p>,
            hr: true,
            underline: false
        },
        {
            id: 3,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step3</span>: Drafting of MOA in SPICE INC - 33 and AOA In SPICE form company registration</p>,
            hr: true,
            underline: false
        },
        {
            id: 4,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step4</span>:  PAN and TAN Application Along with Form SPICE INC -32 (E Form used for Company Registration) </p>,
            hr: true,
            underline: false
        },
        {
            id: 5,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>Step5</span>: After completion of the above-mentioned process of company registration, RoC Issues Certificate of Incorporation</p>,
            hr: true,
            underline: false
        },
        {
            id: 6,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>You must understand first what is <span style={{ color: Colors.link }}> MoA & AoA in the process of registering a private limited company</span> Now that you have understood the Steps involved, we will get into the intricate details of about company registration and its procedures To get the name approval, there are following options: </p>,
            hr: true,
            underline: false
        },
        {
            id: 7,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}> Method 1</span>: Incorporating a Company via <span style={{ color: Colors.link }}>RUN (Reserve Unique Name)</span> form: In an attempt to ease procedures for new as well as existing companies, the Ministry of Corporate Affairs (MCA) has introduced RUN web service for the incorporation of a company and company registration RUN From gives only Two (2) chance for applying one is original submission and the other is in resubmission mode, You must ensure that the names should not be general and should be closely resembling with other companies detailed understanding of name availability guidelines In one application we can apply for Two names, in case of Resubmission we can apply for the next two names You can check the names through this government portal link
            </p>,
            hr: true,
            underline: false
        },
        {
            id: 8,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}><span style={{ fontWeight: 'bold' }}>METHOD 2</span>: Apply directly Directly in SPICE INC -32 for company registration and get a direct certificate of incorporation, the only pitfall is that we can apply only one name and all legal documents must be fully prepared to proceed with this, if the name is rejected then we have to completely redo entire documents such as INC- 9 ( Affidavit), DIR -2 ( Director Concent) and all other documents including NOC from owner</p>,
            hr: false,
            underline: false
        },



    ]
}


export const DRFPCR = {
    title: <h1 style={{ fontSize: Fonts.h2 }}>DOCUMENTS REQUIRED FOR PUBLIC COMPANY REGISTRATION</h1>,
    data: [
        {
            id: 1,

            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20 }}>The following documents are required for company registration from all directors/shareholders ensure that there are a minimum of 3 Directors and 7 shareholders</p>,
            hr: false,
            underline: false

        },
        {
            id: 2,
            subtitle: <h4 style={{ fontSize: Fonts.h3, marginTop: 20 }}>1. A)  Where all director and subscriber are Indian Nationals</h4>,
            desc: <p style={{ fontSize: Fonts.h4, lineHeight: 2, marginTop: 20,  }}>DOCUMENTS REQUIRED :-
                <ul style={{ marginLeft: 40 }}>
                    <li style={{ marginTop: 20 }}>FORM INC 9 An Affidavit on a Stamp Paper stating that the directors are not disqualified and not have been convicted of an offense</li>
                    <li style={{ marginTop: 20 }}>PAN CARD of directors and subscribers</li>
                    <li style={{ marginTop: 20 }}>Proof of office address – Voter ID, OR passport</li>
                    <li style={{ marginTop: 20 }}>Copies of utility bills ( Telephone Bill or Bank Statements) that are not older than two months ( Compulsory for incorporation of companies)</li>
                    <li style={{ marginTop: 20 }}>Rental Agreement in case of rented property</li>
                    <li style={{ marginTop: 20 }}>NOC from the owner of the property</li>
                    <li style={{ marginTop: 20 }}>EB Card / EB Bill of the premise or Property Tax or Telephone evidencing the address proof of the company<br/><br/>
                    <span style={{marginLeft:-20,fontWeight:'bold',fontSize:Fonts.h3}}>1. Where director/subscriber is a foreign National</span>
                    <ul style={{marginLeft:20}}>
                        <li  style={{ marginTop: 20 }}>Passport ( Notarised or Apostilled in their country) and counter attested by Indian embassy</li>
                        <li  style={{ marginTop: 20 }}>No Pan Declaration and counter attested by Indian embassy)</li>
                        <li  style={{ marginTop: 20 }}>INC -9</li>
                        <li  style={{ marginTop: 20 }}>Address proof: Driving license, Residence card, Government issued a form of identification containing an address</li>
                        <li style={{ marginTop: 20 }}>Copies of utility bills ( Telephone Bill or Bank Statements) that are not older than two months ( Compulsory for incorporation of companies)</li>
                    </ul>
                    </li>
                </ul>
                <br/>
                <span style={{ }}>
                Once all the above mentioned documents are ready ,company registration forms are submitted to ROC, now managed by <span style={{color:Colors.link}}>ROC CRC ( Centralised Registration Center)</span> with 2 to 3 working days certificate of incorporation along with E-PAN and TAN will be issued if all documents are provided correctly and from there on you corporate journey towards achieving great heights and success starts
                </span>
              </p>,
            hr: false,
            underline: false

        },
       
    ]
}
