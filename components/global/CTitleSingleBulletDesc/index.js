import React from "react";

const CTitleBulletDesc = ({ data }) => {
  return (
    <>
      {data && (
        <div style={{ marginTop: "1.2rem" }}>
          <ul style={{ paddingLeft: "1.4rem" }}>
            <>{data.title && data.title}</>
          </ul>
          {data.desc && (
            <p
              style={{
                paddingLeft: "1rem",
                paddingTop: "0.6rem",
                fontSize: "1.1rem",
              }}
            >
              {data.desc}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default CTitleBulletDesc;
