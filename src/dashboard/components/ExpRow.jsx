// import React from "react";
// import { useSelector } from "react-redux";
// const formatDate = (dateStr) => {
//   const date = new Date(dateStr);
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// };
// const ExpRow = ({ experience }) => {
//   const { profile } = useSelector((state) => state.profile);
//   if (!profile?.experience || profile.experience.length === 0) {
//     return (
//       <tr>
//         <td colSpan="4">No experience added yet.</td>
//       </tr>
//     );
//   }
//   return (
//     <>
//       <>
//         {experience.map((exp) => (
//           <tr key={exp._id}>
//             <td>{exp.company}</td>
//             <td className="hide-sm">{exp.title}</td>
//             <td className="hide-sm">
//               {formatDate(exp.from)} -{" "}
//               {exp.current ? "Present" : formatDate(exp.to)}
//             </td>
//             <td>
//               <button className="btn btn-danger">Delete</button>
//             </td>
//           </tr>
//         ))}
//       </>
//     </>
//   );
// };

// export default ExpRow;

import React from "react";
import { useSelector } from "react-redux";
import { TableRow, TableCell, Button, Typography } from "@mui/material";
import CommonButton from "../../core/components/common/Button";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const ExpRow = ({ experience }) => {
  const { profile } = useSelector((state) => state.profile);

  if (!profile?.experience || profile.experience.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={4}>
          <Typography variant="body2" color="text.secondary">
            No experience added yet.
          </Typography>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {experience.map((exp) => (
        <TableRow key={exp._id}>
          <TableCell>{exp.company}</TableCell>
          <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
            {exp.title}
          </TableCell>
          <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
            {formatDate(exp.from)} –{" "}
            {exp.current ? "Present" : formatDate(exp.to)}
          </TableCell>
          <TableCell>
            <CommonButton
              variant="contained"
              color="danger"
              size="small"
              label=" Delete"
            ></CommonButton>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default ExpRow;
