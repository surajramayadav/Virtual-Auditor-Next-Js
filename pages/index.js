import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Head from "next/head";
import CImgTitlePara from "@components/global/CImgTitlePara";
import { TitleDescButton } from "../components/home/TitleDescButton/TitleDescButton";
import { FooterList } from "@components/home/FooterList/FooterList";
import Navbar from "@components/global/Navbar";
import Image from "next/image";
import { homeCardData, testinomialData } from "json/pages/home/home";
import AutomaticScrollTabs from "@components/global/Tabs/AutomaticScrollTabs";

export default function Home() {
  const classes = useStyles();

  const ourServiceData = [
    {
      id: 0,
      title: "Company Registration",
      cardData: [
        {
          id: 1,
          title: "Private Limited Company",
          desc: "Private limited company registration starts from Rs 9,999. Register a private limited company within 5–15 working day.",
          goto: ""
        },
        {
          id: 2,
          title: "Limited Liability Partnership",
          desc: "Limited Liability Partnership registration starts from Rs 10,000. Register within 10-15 working days.",
          goto: ""
        },
        {
          id: 3,
          title: "One Person Company",
          desc: "One Person company registration starts from Rs 8,999 (inclusive of taxes). Register an OPC in Bangalore within 10 – 15 working days",
          goto: ""
        },
        {
          id: 4,
          title: "Foreign Subsidiary",
          desc: "Register a branch office or a wholly owned subsidiary in India within 30–45 days. Registration of wholly owned company starts from Rs 40,000",
          goto: ""
        }
      ]
    },
    {
      id: 1,
      title: "TAX Filing",
      cardData: [
        {
          id: 1,
          title: "Goods & Service Tax Registration",
          desc: "GST is a destination based tax i.e. the tax should be received by the state in which the goods or services are consumed and not by the state in which such goods are manufactured",
          goto: ""
        },
        {
          id: 2,
          title: "IE Code",
          desc: "The Import Export Code which is issued by the Director General of Foreign Trade (DGFT) is mandatory for all business entities which deals with import and export in the Indian territory.",
          goto: ""
        },
        {
          id: 3,
          title: "ESI",
          desc: "Under the ESI Act, all factories, and below stated establishments employing more than 10* employees for a monthly wage not exceeding Rs. 21,000 are required to be registered, within 15 days from the date it becomes eligible:",
          goto: ""
        },
        {
          id: 4,
          title: "MSME Registration",
          desc: "The MSME (Micro, Small, Medium Enterprises) Development Act, was created as an initiative for enhancing, promoting and facilitating the enterprises falling under this Act.",
          goto: ""
        },
      ]
    },
    {
      id: 2,
      title: "Accounting",
      cardData: [
        {
          id: 1,
          title: "Maintain your Accounts",
          desc: "The weekly and monthly reports generated by us will make it seem like you have an in-house accounts team.",
          goto: ""
        },
        {
          id: 2,
          title: "Payroll Management",
          desc: "An affordable and end to end payroll service for businesses of all sizes.We will advise you on how to structure salaries of employees and prepare employment agreements",
          goto: ""
        },
      ]
    },
    {
      id: 3,
      title: "Annual Compliances",
      cardData: [
        {
          id: 1,
          title: "PROFESSIONAL TAX REGISTRATION IN BANGALORE",
          desc: "Professional Tax (PT) is a direct tax imposed on all sorts of trades, professions, and employment in relation to the income of the individual or entity",
          goto: ""
        },
        {
          id: 2,
          title: "Import Export Code Registration",
          desc: "Individuals who intend to import and export goods and services in India need to register for the Importer Exporter (IE) Code.",
          goto: ""
        },
        {
          id: 3,
          title: "LLP Compliance",
          desc: "For a Limited Liability Partnership, LLP returns must be filed periodically to maintain compliance and avoid heavy penalty for non-compliance.",
          goto: ""
        },
        {
          id: 4,
          title: "Company Annual Filing",
          desc: "As required under section 92 and section 137 of the companies Act 2013, we need to file the annual return to the RoC (Registrar of Companies).",
          goto: ""
        },
      ]
    }
  ]


  return (
    <>
      <div className={classes.root}>
        <Head> 
          <title>
            Virtual Auditor - Company Registration - GST - TAX Filing
          </title>
        </Head>
        {/*---------------------------------------------- Navbar ---------------------------------------------- */}

        {/*---------------------------------------------- Title + Textbox ---------------------------------------------- */}
        <div className={classes.homeTitleSection}>
          <div className={classes.homeTitle}>
            <h1 className={classes.h1Text}> Your Dreams <strong>Our Platform</strong></h1>
            <h1 className={classes.h1Text}>
              From Registration & Valuation <strong>To Compliances </strong>
            </h1>

            <input type="text" placeholder="Search From Our Services" className={classes.searchTextBox} />
          </div>
        </div>

        {/*---------------------------------------------- Home Image Cards ---------------------------------------------- */}
        <div className={classes.homeCardSection}>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            {homeCardData &&
              homeCardData.cards.map((item, index) => {
                return <CImgTitlePara key={index + 1} data={item} />;
              })}
          </Grid>
        </div>

        {/*---------------------------------------------- Our Services ---------------------------------------------- */}

        <div style={{ backgroundColor: "#f3efef" }}>
          <div className={classes.serviceSection}>
            <h1 style={{ textAlign: "center", paddingBottom: "3rem" }}>
              OUR SERVICES
            </h1>
            <AutomaticScrollTabs data={ourServiceData} />

            {/* <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              <Grid item md={3} sm={12}>
                <h3
                  className={classes.serviceHeader}
                  style={{ borderBottom: "4px solid black" }}
                >
                  Company Registration
                </h3>
              </Grid>
              <Grid item md={3} sm={12}>
                <h3 className={classes.serviceHeader}>Company Registration</h3>
              </Grid>
              <Grid item md={3} sm={12}>
                <h3 className={classes.serviceHeader}>Company Registration</h3>
              </Grid>
              <Grid item md={3} sm={12}>
                <h3 className={classes.serviceHeader}>Company Registration</h3>
              </Grid>
            </Grid>

            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              <TitleDescButton />
              <TitleDescButton />
              <TitleDescButton />
              <TitleDescButton />
            </Grid>
      */}
          </div>
        </div>

        {/*---------------------------------------------- Stay Connected ---------------------------------------------- */}

        <div className={classes.stayConnectedSection}>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <Grid item md={6} sm={12}>
              <h1>Stay Connected</h1>
              <h1>Every Moment</h1>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 2,
                  padding: "1rem 0rem 3rem 0rem",
                }}
              >
                Stay connected to us via our mobile App. Chat with our experts,
                raise tickets, upload documents, start a company, file returns
                and many more services at your ease on the go.
              </p>
              <Grid
                container
                style={{
                  display: "flex",
                }}
              >
                <Grid item md={4} xs={8}>
                  <div className={classes.playstoreButton}>
                    <h3>Availble</h3>
                    <p>On App Store</p>
                  </div>
                </Grid>
                <Grid item md={4} xs={8}>
                  <div
                    className={classes.playstoreButton}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    <h3>Availble</h3>
                    <p>On App Store</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        {/*---------------------------------------------- Testonomials ---------------------------------------------- */}
        <div className={classes.testonomialSection}>
          <h1 style={{ textAlign: "center", paddingBottom: "3rem" }}>
            OUR CLIENT TESTIMONIALS
          </h1>
          <p style={{ color: "gray", textAlign: "center" }}>
            Read testimonials from some of our best clients
          </p>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            {testinomialData &&
              testinomialData.cards.map((item, index) => {
                return <CImgTitlePara key={index + 1} data={item} />;
              })}
          </Grid>
        </div>

      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: "white",
  },

  homeTitleSection: {
    margin: "0rem 5rem",
    padding: "5rem 0rem",
    maxWidth: "1440px",
    margin: "0 auto",

    [theme.breakpoints.down(780)]: {
      margin: "0rem 2rem",
      padding: "2rem 0rem",
    },
  },

  homeCardSection: {
    margin: "0rem 5rem",
    padding: "5rem 0rem",
    maxWidth: "1440px",
    margin: "0 auto",

    [theme.breakpoints.down(780)]: {
      margin: "0rem 2rem",
      padding: "2rem 0rem",
    },
  },

  stayConnectedSection: {
    margin: "0rem 5rem",
    padding: "5rem 0rem",
    maxWidth: "1440px",
    margin: "0 auto",

    [theme.breakpoints.down(780)]: {
      margin: "0rem 2rem",
      padding: "2rem 0rem",
    },
  },

  serviceSection: {
    margin: "0rem 5rem",
    padding: "5rem 0rem",
    maxWidth: "1440px",
    margin: "0 auto",

    [theme.breakpoints.down(780)]: {
      margin: "0rem 2rem",
      padding: "2rem 0rem",
    },
  },

  testonomialSection: {
    margin: "0rem 5rem",
    padding: "5rem 0rem",
    maxWidth: "1440px",
    margin: "0 auto",

    [theme.breakpoints.down(780)]: {
      margin: "0rem 2rem",
      padding: "2rem 0rem",
    },
  },

  homeTitle: {
    paddingTop: "3rem",
    textAlign: "center",
  },

  h1Text: {
    marginBlock: "0rem",
  },

  serviceHeader: {
    textAlign: "center",
    padding: "1rem",
  },

  playstoreButton: {
    border: "1px solid black",
    padding: "1rem 2rem",
    margin: "0.3rem",
  },

  searchTextBox: {
    padding: ".5rem 10rem",
    marginBlockStart: "2rem",
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      padding: " 0.5rem",
      marginBlockStart: "2rem",
    }
  }
}));

// className={`${styles["banner-subtitle"]} row`}