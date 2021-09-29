import TitleDesc from "@components/gst/GstRegistration/TitleDesc";
import CTitleDescImagesFormLayout from "hoc/Layouts/CTitleDescImagesFormLayout";
import { gstTableData, gstTemparory, gstTemparoryDesc } from "json/pages/gst/gstTemparory";

const TemporaryGstRegistration = () => {
  return (
    <>
      <div>
        <CTitleDescImagesFormLayout data={gstTemparory}>
          {gstTemparoryDesc.map((d, index) => {
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
    </>
  );
};

export default TemporaryGstRegistration;
