import styles from "@styles/components/SwipeableTemporaryDrawer.module.css";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiArrowDropRightLine,
} from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

export const MobileMenuList = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  // console.log("data >>>>>", data)
  // console.log("selectedItem >>>>>", selectedItem)
  const router = useRouter();

  return (
    <>
      <div className={`${styles["m-header-desc"]}`}>
        {data.map((d, index) => {
          return (
            <>
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "60vw",
                }}
                onClick={() => {
                  if (selectedItem == null) {
                    setSelectedItem(d.id);
                  } else {
                    setSelectedItem(null);
                  }
                }}
              >
                <p style={{ marginTop: 10 }}>{d.title}</p>
                <span
                  style={{
                    fontSize: "2rem",
                    marginTop: "0.2rem",
                  }}
                >
                  {selectedItem == d.id ? (
                    <RiArrowDropUpLine />
                  ) : (
                    <RiArrowDropDownLine />
                  )}
                </span>
              </div>
              {selectedItem != null && (
                <div>
                  {d.id == selectedItem && (
                    <>
                      {d.data.map((dd, ii) => {
                        return (
                          <>
                            <p key={ii} style={{ padding: "0.5rem 0rem" }}>
                              {dd.title}
                            </p>
                            {dd.subMenu.map((ddd, index) => {
                              return (
                                <>
                                  <Link key={index} href={`/${ddd.gotoPage}`}>
                                    <p
                                      style={{
                                        borderLeft: ddd.gotoPage == router.pathname ? "3px solid #007bd9" : "3px solid #8a92a3",
                                        margin: "0rem 0rem 0rem 1rem",
                                        padding: "0.5rem 00rem 0.5rem 1rem",
                                        color: ddd.gotoPage == router.pathname && "#007bd9",
                                        fontWeight: ddd.gotoPage == router.pathname ? "bold" : "normal",
                                      }}
                                    >
                                      {ddd.title}
                                    </p>
                                  </Link>
                                </>
                              );
                            })}
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
              )}
            </>
          );
        })}

        {/* {
                    data.map((d, i) => {
                        return (
                            <>
                              <h5 key={index1} style={{ marginBottom: 5 }}>
                                {dd.title}{" "}
                              </h5>
                              {dd.innerMenu.length != 0 &&
                                dd.innerMenu.map((ddd, index2) => {
                                  return (
                                    <>
                                      <p
                                        key={index2}
                                        style={{
                                          borderLeft: "3px solid black",
                                        }}
                                      >
                                        {ddd.title}
                                      </p>
                                    </>
                                  );
                                })}
                            </>

                        )
                    })
                } */}
      </div>
    </>
  );
};
