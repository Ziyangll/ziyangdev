import React from "react";
import "../../styles/styles.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(key, language, backend, frontend, database) {
  return { key, language, backend, frontend, database };
}

const rows = [
  createData(0, "JavaScript", "Node/Express", "React", "PostgreSQL"),
  createData(1, "Python", "Flask", "", "MongoDB"),
  createData(2, "Java", "", "", "Firebase"),
  createData(3, "C++", "", "", ""),
];

export default function About() {
  return (
    <div className='about'>
      <div>
        <h1 class='title-text'>Introduction</h1>
        <br />
        <h3 class='softText text'>
          I am currently a student studying <span>Software Engineering</span> at
          Auburn University
        </h3>
        <h3 class='softText text'>
          My hobbies are Competitive Programming, Cooking, Drawing, and
          Mechanical Keyboards
        </h3>
      </div>

      <br />
      <div>
        <h1 class='text'>Technology</h1>
        <br />
        <TableContainer className='tableContainer' component={Paper}>
          <Table className='table' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 700, color: "#333" }}>
                  Languages
                </TableCell>
                <TableCell style={{ fontWeight: 700, color: "#333" }}>
                  Backend
                </TableCell>
                <TableCell style={{ fontWeight: 700, color: "#333" }}>
                  Frontend
                </TableCell>
                <TableCell style={{ fontWeight: 700, color: "#333" }}>
                  Database
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.key}>
                  <TableCell>{row.language}</TableCell>
                  <TableCell>{row.backend}</TableCell>
                  <TableCell>{row.frontend}</TableCell>
                  <TableCell>{row.database}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
