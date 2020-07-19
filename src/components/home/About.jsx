import React from "react";
import "../../styles/styles.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(key, database, backend, frontend, language) {
  return { key, database, backend, frontend, language };
}

const rows = [
  createData(0, "MongoDB", "Node/Express", "React", "JavaScript"),
  createData(1, "", "Flask", "", "Python"),
  createData(2, "", "", "", "Java"),
];

export default function About() {
  return (
    <div className='about'>
      <h1 class='title-text'>Introduction</h1>
      <h3 class='softText text'>
        I am currently a student studying <span>Software Engineering</span> at
        Auburn University
      </h3>
      <h3 class='softText text'>
        My hobbies are Competitive Programming, Cooking, Drawing, and Mechanical
        Keyboards
      </h3>

      <br />
      <h1 class='text'>Technology</h1>
      <TableContainer className='tableContainer' component={Paper}>
        <Table className='table' aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 700, color: "#000" }}>
                Database
              </TableCell>
              <TableCell style={{ fontWeight: 700, color: "#000" }}>
                Backend
              </TableCell>
              <TableCell style={{ fontWeight: 700, color: "#000" }}>
                Frontend
              </TableCell>
              <TableCell style={{ fontWeight: 700, color: "#000" }}>
                Languages
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.key}>
                <TableCell>{row.database}</TableCell>
                <TableCell>{row.backend}</TableCell>
                <TableCell>{row.frontend}</TableCell>
                <TableCell>{row.language}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
