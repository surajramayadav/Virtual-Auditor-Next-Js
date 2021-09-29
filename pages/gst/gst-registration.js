import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";
import CTitleSingleBulletDesc from "@components/global/CTitleSingleBulletDesc";
import { makeStyles } from "@material-ui/core";
import CTitleSummaryBPoints from "@components/global/CTitleSummaryBPoints";
import TitleDesc from "@components/gst/GstRegistration/TitleDesc";
import FAQGst from "@components/gst/GstRegistration/FAQGst";
import {
  gstRegistration,
  newGstRegistration,
  typesOfGst,
  gstProcedure,
  gstRegisterCompulsory,
  gstDocs,
  gstFees,
  typesOfGstSpan,
  gstVoluntarily,
  multiGstRn,
  getDesc,
  gstFAQ,
} from "json/pages/gst/GstRegistration";

const GstRegistration = () => {
  const classes = useStyles();

  return (
    <>
      <CTitleDescImagesFormLayout data={gstRegistration}>
        <div style={{ margin: "1rem 0rem" }}>
          <div>
            <h1>Who Should Apply for New GST Registration?</h1>
            <p style={{ margin: "1rem 0rem" }}>
              The CGST Act 2017 of the central government provides plenty of
              information on which categories are applicable to pay GST.
            </p>
            <p> Here is an overview:</p>
          </div>

          {newGstRegistration.map((d, i) => {
            return <TitleDesc key={i + 1} data={d} />;
          })}
        </div>

        <div style={{ margin: "1rem 0rem" }}>
          <div>
            <h1>Types of GST Registration?</h1>
            <p style={{ margin: "1rem 0rem" }}>
              According to the GST Act 2017, the registration process has
              several categories to fall under. Depending on the several kinds
              of business entities in the states, the GST registration process
              is divided into multiple categories, which are given as follows,
            </p>
          </div>

          {typesOfGst.map((d, i) => {
            return <TitleDesc key={i + 1} data={d} />;
          })}
        </div>

        <div style={{ margin: "3rem 0rem" }}>
          <div>
            <h1 style={{ textAlign: "center" }}>
              WHEN IS NEW GST REGISTRATION COMPULSORY?
            </h1>
            <p style={{ margin: "3rem 0rem" }}>
              GST Registration is not compulsory for agriculturists who involved
              in the cultivation and supply of agricultural products, making
              supplies that are fully covered under reverse charge or making
              only exempt supplies of goods and services. Small taxpayers
              benefit a lot by registering under the GST composition scheme
              because it lessens their tax burden. Although, the below-mentioned
              individuals and businesses must complete GST Registration:
            </p>
          </div>

          {gstRegisterCompulsory.map((d, i) => {
            return <TitleDesc key={i + 1} data={d} />;
          })}
        </div>

        <div style={{ margin: "3rem 0rem" }}>
          <div>
            <h1 style={{ textAlign: "center" }}>
              GST REGISTRATION PROCEDURE EXPLAINED
            </h1>
            <p style={{ margin: "3rem 0rem" }}>
              The GST registration procedure is not as difficult as it may
              appear. With the required documentation, one will be on their way
              to an easy and simple GST registration online in no time at all!
            </p>
          </div>

          {gstProcedure.map((d, i) => {
            return <TitleDesc key={i + 1} data={d} />;
          })}
        </div>

        <div style={{ margin: "3rem 0rem" }}>
          <div>
            <h1 style={{ textAlign: "center" }}>
              DOCUMENTS REQUIRED FOR GST REGISTRATION
            </h1>
          </div>

          {gstDocs.map((d, i) => {
            return <TitleDesc key={i + 1} data={d} />;
          })}
        </div>

        <div style={{ margin: "3rem 0rem" }}>
          <div>
            <h1>GST Registration Fees</h1>
          </div>

          {gstFees.map((d, i) => {
            return <TitleDesc key={i + 1} data={d} />;
          })}
        </div>

        <div style={{ margin: "3rem 0rem" }}>
          <div>
            <h1 style={{ textAlign: "center" }}>TYPES OF GST REGISTRATION</h1>
          </div>

          {typesOfGstSpan.map((d, i) => {
            return <TitleDesc key={i + 1} data={d} />;
          })}
        </div>

        <div style={{ margin: "3rem 0rem" }}>
          <div>
            <h1>Voluntarily GST Registration</h1>
          </div>

          {gstVoluntarily.map((d, i) => {
            return <TitleDesc key={i + 1} data={d} />;
          })}
        </div>

        {getDesc.map((d, index) => {
          return (
            <>
              <div style={{ margin: "3rem 0rem" }}>
                <TitleDesc key={index + 1} data={d} />
              </div>
            </>
          );
        })}

        <FAQGst data={gstFAQ} />
      </CTitleDescImagesFormLayout>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: "4rem",
    borderBottom: "1px solid lightgrey",
  },
}));

export default GstRegistration;
