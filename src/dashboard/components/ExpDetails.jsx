// import React from "react";
// import ExpRow from "./ExpRow";

// const ExpDetails = ({ experience }) => {
//   return (
//     <>
//       <h2 className="my-2">Experience Credentials</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Company</th>
//             <th className="hide-sm">Title</th>
//             <th className="hide-sm">Years</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           <ExpRow experience={experience} />
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default ExpDetails;

import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
} from "@mui/material";
import ExpRow from "./ExpRow";

const ExpDetails = ({ experience }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Experience Credentials
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                Title
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                Years
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <ExpRow experience={experience} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExpDetails;
