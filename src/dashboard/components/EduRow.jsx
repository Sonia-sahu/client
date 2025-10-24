// import React from "react";
// import { useSelector } from "react-redux";

// const formatDate = (dateStr) => {
//   const date = new Date(dateStr);
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// };
// const EduRow = ({ education }) => {
//   const { profile } = useSelector((state) => state.profile);

//   if (!profile?.education || profile.education.length === 0) {
//     return (
//       <tr>
//         <td colSpan="4">No education added yet.</td>
//       </tr>
//     );
//   }
//   return (
//     <>
//       {education.map((edu) => (
//         <tr key={edu._id}>
//           <td>{edu.school}</td>
//           <td className="hide-sm">{edu.degree}</td>
//           <td className="hide-sm">
//             {formatDate(edu.from)} -{" "}
//             {edu.current ? "Present" : formatDate(edu.to)}
//           </td>
//           <td>
//             <button className="btn btn-danger">Delete</button>
//           </td>
//         </tr>
//       ))}
//     </>
//   );
// };

// export default EduRow;
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

const EduRow = ({ education }) => {
  const { profile } = useSelector((state) => state.profile);

  if (!profile?.education || profile.education.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={4}>
          <Typography variant="body2" color="text.secondary">
            No education added yet.
          </Typography>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {education.map((edu) => (
        <TableRow key={edu._id}>
          <TableCell>{edu.school}</TableCell>
          <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
            {edu.degree}
          </TableCell>
          <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
            {formatDate(edu.from)} –{" "}
            {edu.current ? "Present" : formatDate(edu.to)}
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

export default EduRow;
