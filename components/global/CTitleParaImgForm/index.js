import { Container, Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import CTitleParaImages from "../CTitleParaImages";
import ConsultForm from '@components/global/forms/ConsultForm';

const CTitleParaImgForm = ({ data, isRelative }) => {
  const [show, setShow] = React.useState(true);
  const matches = useMediaQuery("(max-width:600px)");
  const controlForm = () => {
    if (window.scrollY > 800) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", controlForm);

    return () => {
      window.removeEventListener("scroll", controlForm);
    };
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8}>
        {data &&
          data.map((content, index) => {
            return (
              <div
                key={content.id}
                style={{ marginTop: `${index > 0 ? "2rem" : "0rem"}` }}
              >
                <CTitleParaImages data={content.container} />
                {index === 0 && matches && (
                  <ConsultForm show={show} isRelative={true} />
                )}
              </div>
            );
          })}
      </Grid>

      {/* Display form on the right */}
      <Grid item xs={12} sm={4}>
        <div>
          {!matches && <ConsultForm show={show} isRelative={isRelative} />}
        </div>
      </Grid>
    </Grid>
  );
};

export default CTitleParaImgForm;
