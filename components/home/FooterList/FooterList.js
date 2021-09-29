import { Grid } from "@material-ui/core";

export const FooterList = () => {
  return (
    <>
      <Grid item md={3} sm={12}>
        <div style={{ marginInline: "0rem 2rem" }}>
          <p
            style={{
              borderBottom: "1px solid white",
              padding: "1rem 0.5rem",
            }}
          >
            Top Services
          </p>
          <div style={{ padding: "2rem 0rem" }}>
            <li style={{ marginBottom: 8 }}>Private Limited Company</li>
            <li style={{ marginBottom: 8 }}>GST Registration</li>
            <li style={{ marginBottom: 8 }}>Company Valuation</li>
            <li style={{ marginBottom: 8 }}>Business Advisory</li>
            <li style={{ marginBottom: 8 }}>Digital Signature</li>

            {/* <p> Virtual Auditor Pvt Ltd Workafella Business Centre Office NO
                                        15 , Ground Floor AK Estate, Off Veer Savarkar Flyover, SV
                                       Rd, Goregaon West, Mumbai, Maharashtra 400062 Call Us : +91
                                        7700089597</p> */}
          </div>
        </div>
      </Grid>
    </>
  );
};
