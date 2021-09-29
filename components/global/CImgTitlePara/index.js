import { Grid } from "@material-ui/core";

const CImgTitlePara = ({ data }) => {
  return (
    <>
      <Grid item md={4} xs={12}>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "white",
            alignItems: 'center',
            margin: "1rem",
            padding: "1rem",
            borderRadius: 10,
            minHeight: '90%',
            // minWidth:"90%",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div style={{ height: 90, display: "flex", justifyContent: "center", alignItems: "center" }}>
            {data.imageSrc && data.imageSrc}
          </div>
          {data.title && data.title}
          {data.desc && data.desc}
        </div>
      </Grid>
    </>
  );
};

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//   },
// }));

export default CImgTitlePara;
