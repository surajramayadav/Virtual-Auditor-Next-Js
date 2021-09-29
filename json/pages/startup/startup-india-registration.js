import conference from '@images/startup/conference.png'
import internet from '@images/startup/internet.png'
import person from '@images/startup/person.png'
import accounting from '@images/startup/accounting.png'
import time from '@images/startup/time.png'
import environment from '@images/startup/environment.png'

import man from '@images/startup/man.png'
import man2 from '@images/startup/2man.jpg'
import girl from '@images/startup/girl.jpg'

import { Fonts } from 'constant/Fonts';
import Image from "next/image";
export const StartupCart = {
    cards: [
        {
            id: 1,
            imageSrc: <Image src={conference} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Startup India Registration</p>,
        },
        {
            id: 2,
            imageSrc: <Image src={internet} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Hassle free expert</p>,
        },
        {
            id: 3,
            imageSrc: <Image src={person} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h3, marginTop: 20 }}>Money Back Guarantee</p>,
        },
    ],
};


export const StartupourPackage = {
    cards: [
        {
            id: 1,
            imageSrc: <Image src={accounting} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h4, marginTop: 20 }}>Startup India Registration (DIPP Registration)</p>,
        },
        {
            id: 2,
            imageSrc: <Image src={time} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h4, marginTop: 20 }}>Step by step Guidelines</p>,
        },
        {
            id: 3,
            imageSrc: <Image src={environment} alt="Work One Image Loading.." />,
            title: <p style={{ fontSize: Fonts.h4, marginTop: 20 }}>Dedicated Account Manager</p>,
        },
    ],
};

export const StartupReg = [
    {
        id: 1,
        imageSrc: <Image src={man} alt="Work One Image Loading.." />,
        desc: (<p style={{ lineHeight: 2, marginTop: 20,fontSize:Fonts.h4  }}>Are you looking forward to launching a business of your own? When you wish to launch a startup business, there are several factors to consider. One of the most important aspects is the startup registration. In India, Narendra Modi –the Prime Minister of India, recently unveiled the Start India Program for giving a boost to the startup organizations.
            <span style={{ marginTop: 10, marginBottom: 10 }}></span>
            With potential business benefits, tax exemptions, and additional help provided by the central & state governments, more individuals are interested in launching a startup of their own. In this post, we will help you unravel all that you need to know about startup registration in India.</p>),
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>Startup India Registration</h1>,
        right: true
    },
    {
        id: 2,
        imageSrc: <Image src={man2} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20 ,fontSize:Fonts.h4 }}>Before you dive into the topic of startup India registration, it is imperative for you to know about the meaning of startup. A startup can be referred to as a newly established business setup in the form of a small business –usually by a single entrepreneur or a small group of entrepreneurs. The thing that differentiates startups from other businesses is the fact that a startup organization is known to offer some new product or service. The core aspect of launching a startup is innovation. If you are launching a startup in India, you should be aware of the startup registration process.</p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>What is a Startup?</h1>,
        right: false
    },
    {
        id: 3,
        imageSrc: <Image src={man} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20,fontSize:Fonts.h4  }}>Startups are increasingly gaining popularity in India. Towards boosting the Indian economy and giving the young entrepreneurs an opportunity to prosper and grow, the Government of India, has launched the revolutionary Startup India program for recognizing and promoting startups.</p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>What is Startup India?</h1>,
        right: true
    },
    {
        id: 4,
        imageSrc: <Image src={girl} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20,fontSize:Fonts.h4 }}>SIf you wish to know how your register your startup business under Startup India, here are some easy steps to follow:
            <ul>
                <li>Step 1: Incorporating Your Business For registering your startup, you are initially required to incorporate the business as a Partnership Firm or a Private Limited Company or an LLP (Limited Liability Partnership). For the incorporation of your business, you are required to follow the normal procedures for business registration –obtaining the incorporation or partnership registration certification, PAN card validation, and other vital compliances.</li>
                <li> Step 2: Registering with Startup India Once you have incorporated your business, you can register the same as a startup. The entire process tends to be online and seamless. All you are required to do is to visit the official website of Startup India and then fill out the form with the necessary details. You might also be required to upload some vital documents.</li>
                <li>Step 3: Uploading the Documents While registering your startup under Startup India, you are also required to upload some important documents related to your business. Some of these documents to be uploaded in the PDF format only are:</li>
            </ul>

            <ol style={{ marginLeft: 40 }}>
                <li>Recommendation (with respect to your business being an innovation) by some Incubator set up in some post-graduate college in the country, OR</li>
                <li> A support letter by some incubator –funded by the government to be a part of some specific scheme for promoting innovation, OR</li>
                <li>A funding letter of around 20 percent equity max by some Angel Fund or Incubating Fund or Angel Network, Private Equity Fund or Accelerator with SEBI for endorsing innovative aspect of the business, OR</li>
                <li> A recommendation letter indicating the innovative aspect of the business from some incubator that has been recognized by the Government of India, OR</li>
                <li> The patent that has been filed & published in the respective Journal presented by the Indian Patent Office for promoting the nature of the business</li>
            </ol>
            Additionally, you will also be required to upload the description of your business in brief and the registration or incorporation certificate.
            <ul>
                <li>Step 4: Answering Whether or Not You will Avail Tax Benefits Startups remain exempted from income tax for three years. However, to avail the given benefits, your business should be certified by the IMB (Inter-Ministerial Board). The startups that have received recognition from the DIPP under the Government of India are capable of directly availing the Income Tax-related benefits without the requirement of any certification from the IMB.</li>
                <li>Step 5: Self-certifying that the Business is Following Specific Conditions The conditions are:
                    <ol style={{ marginLeft: 40 }}>
                        <li>You are required to register your business as a partnership firm, a private limited company, or an LLP (Limited Liability Partnership)</li>
                        <li>The overall turnover should be less than 25 crores annually</li>
                        <li>The business should be registered or incorporated in the country</li>
                        <li>Innovation is a must-have aspect –the business organization should be working towards innovating something</li>
                    </ol>
                </li>
                <li> Step 6: Getting the Recognition Number Once you apply for the same, you will receive the unique recognition number for your business. You will also receive the recognition certificate once all your documents have been examined successfully. However, it is important to be careful when you are uploading the documents.</li>
                <li> Step 7: Focusing on Other Areas
                    <ol style={{ marginLeft: 40 }}><li> Trademarks, patents, and design registration –In case you require a trademark for your business or a patent for the innovation that your business executes, then you should reach out to the facilitators by the government.
                    </li>
                        <li> Funding –If you wish to receive funding support, it is imperative to know that the Government of India has launched a proper fund with the initial corpus amounting to 2,500 crore along with the total corpus amounting to 10,000 crore across a span of 4 years. The fund signifies the nature of the Funds of Funds. This implies that the given fund is not going to invest directly into the startup businesses. On the other hand, it is going to participate in the Venture Funds registered by SEBI.</li></ol></li>
            </ul>
        </p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>
            How to Register Your Startup with Startup India?</h1>,
        right: false
    },
    {
        id: 5,
        imageSrc: <Image src={girl} alt="Work One Image Loading.." />,
        desc: <p style={{ lineHeight: 2, marginTop: 20,fontSize:Fonts.h4  }}>
            <ul><li>The business should be an LLP or a private limited company</li>
                <li>The business should remain a startup for the initial 7 years after the registration date.</li>
                <li> The company would remain a startup in case the annual turnover is not able to cross the mark of INR 100 crore in the given span of 7 years. Once the company is capable of crossing the given mark, it will no longer be eligible to be referred to as the startup.</li>
                <li>  The company should receive the funds from some Incubation Fund, a private equity fund, or an angel fund.</li></ul></p>,
        title: <h1 style={{ fontSize: Fonts.h2, fontWeight: 'bold' }}>Eligibility Criteria for Startup India Registration</h1>,
        right: true
    }
]

