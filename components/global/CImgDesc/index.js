import { useMediaQuery } from "@material-ui/core";
import React from "react";
import Image from "next/image";
const CImgDesc = ({ description }) => {
  return (
    <>
      <div className="cwid-container">
        <Image
          src="https://virtualauditor.in/assets/images/coin.png"
          style={{ maxWidth: "100%", height: "4rem" }}
        />
        <p style={{ textAlign: "center", marginTop: "1rem" }}>{description}</p>
      </div>
    </>
  );
};

export default CImgDesc;
