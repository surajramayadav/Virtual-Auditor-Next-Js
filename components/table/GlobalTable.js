import React from "react";

const GlobalTable = ({ data }) => {
  return (
    <div>
      <div style={{ margin: "3rem 0rem" }}>
        <div style={{ overflowX: "auto" }}>
          <table>
            {data.map((d, i) => {
              console.log("d>>>>", d, i);
              return (
                <tr key={i}>
                  <>
                    {d.data.map((d, i) => {
                      return (
                        <>
                          <td key={i}>{d.cell}</td>
                        </>
                      );
                    })}
                  </>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default GlobalTable;

// **************************** DATA STRUCTURE FOR TABLE ****************************

// export const gstTableData = [
//     {
//         data: [
//             { id: 1, cell: "S. No." },
//             { id: 2, cell: " " },
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "1" },
//             { id: 2, cell: " " }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "2" },
//             { id: 2, cell: " " }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "3" },
//             { id: 2, cell: " " }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "4" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "5" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "6" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "7" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "8" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "9" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "10" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "11" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "12" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "13" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "14" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "15" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "16" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "17" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "18" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "19" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "20" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "21" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "22" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "23" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "24" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "25" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "26" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "27" },
//             { id: 2, cell: "" }
//         ]
//     },
//     {
//         data: [
//             { id: 1, cell: "28" },
//             { id: 2, cell: "" }
//         ]
//     },
// ]
