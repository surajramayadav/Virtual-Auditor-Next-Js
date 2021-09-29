import { Grid, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Button, FormControl, Input, FormHelperText } from "@material-ui/core";

import Logo from "../../../public/images/global/logo.png";
import { MobileHeader } from "./MobileHeader.js/MobileHeader";
import styles from "@styles/components/Header.module.css";
import { NavbarMenuList } from "./NavbarMenuList";
import { navbarMenuItems } from "json/components/Navbar/Header";
import { AiOutlineDown } from "react-icons/ai";

import Link from "next/link";

const Navbar = () => {
  // console.log("data >>>>>", navbarMenuItems);
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1040px)");
  const [selectedItem, setselectedItem] = useState(null);

  return (
    <div 
    onMouseLeave={() => setselectedItem(null)}
    >
      {matches ? (
        <>
          <div
            className={classes.navbar}
            // onMouseLeave={() => setselectedItem(null)}
          >
            {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}> */}
            <div style={{ cursor: "pointer" }}>
              <Link href="/">
                <Image src={Logo} height={42} width={83} alt="Company logo" />
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {navbarMenuItems.map((d, index) => {
                return (
                  <>
                    <div
                      className={classes.navbarItemDiv}
                      onMouseEnter={() => setselectedItem(d.id)} onClick={() => {
                        if (selectedItem == null) {
                          setselectedItem(d.id)
                        } else {
                          setselectedItem(null)
                        }
                      }}>
                      <span className={classes.navbarText}>
                        {d.title}
                        <span style={{ marginLeft: "0.5rem" }}>
                          <AiOutlineDown fontSize="0.5rem" />
                        </span>
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
            <div style={{ display:"flex", justifyContent : "space-evenly"}}>
              <Button variant="contained" style={{ backgroundColor: "#007ed6", color: "white" }}>
                +91 99622 60333
              </Button> &nbsp;
              <Button variant="contained" style={{ backgroundColor: "#007ed6", color: "white" }}>
                LOGIN
              </Button>
            </div>
          </div>

          {selectedItem !== null && (
            <>
              <div className={`${styles.dropDownContainer}`}>
                <Grid
                  container
                  style={{
                    display: "flex",
                    justifyContent: "space-between", 
                  }}
                >
                  <NavbarMenuList
                    selectedItem={selectedItem}
                    data={navbarMenuItems.filter((e) => e.id == selectedItem)}
                  />
                </Grid>
              </div>
            </>
          )}
        </>
      ) : (
        <MobileHeader />
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    backgroundColor: "#030b2a",
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
  },
  navbarItemDiv: {
    '&:hover': {
      background: "#007bd9",
    },
    padding: "0.3rem 0rem 0.5rem 0rem",
    borderRadius: 10
  },
  navbarText: {
    padding: "0rem 0.7rem",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "0 auto",
    fontSize: "0.815rem",
  },
}));

export default Navbar;
