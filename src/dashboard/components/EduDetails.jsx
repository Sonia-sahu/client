// import React from "react";
// import EduRow from "./EduRow";

// const EduDetails = ({ education }) => {
//   return (
//     <>
//       <h2 className="my-2">Education Credentials</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>School</th>
//             <th className="hide-sm">Degree</th>
//             <th className="hide-sm">Years</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           <EduRow education={education} />
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default EduDetails;
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
import EduRow from "./EduRow";

const EduDetails = ({ education }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Education Credentials
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>School</TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                Degree
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                Years
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <EduRow education={education} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EduDetails;
