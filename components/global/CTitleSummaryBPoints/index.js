import React from "react";
import CTitleSingleBulletDesc from "../CTitleSingleBulletDesc";

const CTitleSummaryBPoints = ({ data }) => {
  return (
    <div style={data.styles}>
      {/* display the title */}
      {data.title && data.title}
      {/* display the summary */}

      {data.desc && data.desc}

      {data.bulletTitle && data.bulletTitle}
      {data.bulletPoints &&
        data.bulletPoints &&
        data.bulletPoints.map((point,i) => {
          return <CTitleSingleBulletDesc key={i} data={point} />;
        })}
      {data.points &&
        data.points.map((point, index) => {
          return (
            <div key={index} style={point.styles}>
              {point.title && point.title} {point.desc && point.desc}
            </div>
          );
        })}

      {data.desc2 && data.desc2}
    </div>
  );
};

export default CTitleSummaryBPoints;
