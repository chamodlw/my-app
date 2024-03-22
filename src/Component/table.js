import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MyTable = ({ data }) => {
  const handleGenerate = (reportID) => {
    // Handle the generate action here
    console.log(`Generating report for ReportID: ${reportID}`);
  };

  return (
    <TableContainer sx={{display: 'flex', padding:'100px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ReportID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Genarate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.reportID}>
              <TableCell>{row.reportID}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Link to="/LabReportUI"><Button variant="contained" color="primary" onClick={() => handleGenerate(row.reportID)}>
                Genarate
                </Button></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Hard-coded sample data
const sampleData = [
  { reportID: 1, name: 'John Doe' },
  { reportID: 2, name: 'Jane Smith' },
  { reportID: 3, name: 'Alice Johnson' },
];

const Report = () => {
  return (
    <div>
     
      <MyTable data={sampleData} />
    </div>
  );
};

export default Report;
