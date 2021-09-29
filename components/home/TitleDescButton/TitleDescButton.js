import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

export const TitleDescButton = ({ data }) => {
  console.log("data>>>>", data)
  return (
    <>
      {
        data && data.map((d, i) => {
          return (
            <>
              <Grid item md={3} lg={3} sm={12} xs={12}>
                <div
                  style={{
                    textAlign: "center",
                    backgroundColor: "white",
                    marginTop: "2rem",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    padding: "1rem 1rem",
                    borderRadius: 10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div style={{ minHeight: "20rem" }}>
                    <h1 style={{ fontSize: 18, }}>
                      {d.title}
                    </h1>
                    <p
                      style={{
                        fontSize: 17,
                        textAlign: "left",
                        padding: "1rem 0rem",
                        borderTop: "1px solid gray",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {d.desc}
                    </p>
                  </div>
                  <div style={{
                    borderTop: "1px solid gray",
                    padding: "1rem 0rem 0rem 0rem"
                  }}>
                    <Button variant="contained" color="primary">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Grid>
            </>
          )
        })
      }

    </>
  );
};
