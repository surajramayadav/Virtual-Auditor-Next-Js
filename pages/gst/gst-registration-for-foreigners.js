import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";
import TitleDesc from "@components/gst/GstRegistration/TitleDesc";
import { gstForeigners, gstForeignersDesc } from "json/pages/gst/GstForeigner";

const GstRegistrationForForeigners = () => {
  return (
    <div>
      <CTitleDescImagesFormLayout data={gstForeigners}>
        {gstForeignersDesc.map((d, index) => {
          return (
            <>
              <div key={index} style={{ margin: "3rem 0rem" }}>
                <TitleDesc data={d} />
              </div>
            </>
          );
        })}
      </CTitleDescImagesFormLayout>
    </div>
  );
};

export default GstRegistrationForForeigners;
