import FAQGst from "@components/gst/GstRegistration/FAQGst";
import TitleDesc from "@components/gst/GstRegistration/TitleDesc";
import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";
import {
  gstReturData,
  gstReturDataDesc,
  gstReturnFAQ,
} from "json/pages/gst/gstReturn";

const GstreturnFiling = () => {
  return (
    <div>
      <CTitleDescImagesFormLayout data={gstReturData}>
        {gstReturDataDesc.map((d, index) => {
          return (
            <>
              <div key={index} style={{ margin: "3rem 0rem" }}>
                <TitleDesc data={d} />
              </div>
            </>
          );
        })}

        <FAQGst data={gstReturnFAQ} />
      </CTitleDescImagesFormLayout>
    </div>
  );
};

export default GstreturnFiling;
