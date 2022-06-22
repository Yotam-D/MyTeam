import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0A0E28',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  team: string,
  matches: number,
  wins: number,
  draws: number,
  losses: number,
  gf: number,
  ga: number,
  gd: number,
  points: number,
) {
  return { team, matches, wins, draws, losses, gf, ga, gd, points};
}

const rows = [
  createData('Man City', 83, 29, 6, 3, 99, 26, 73, 93),
  createData('Liverpool', 83, 28, 8, 2, 94, 26, 68, 92),
];

export default function LeagueTable() {
  return (
  <div className='TableContainer'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Team</StyledTableCell>
            <StyledTableCell align="right">Matches</StyledTableCell>
            <StyledTableCell align="right">Wins</StyledTableCell>
            <StyledTableCell align="right">Draws</StyledTableCell>
            <StyledTableCell align="right">Losses</StyledTableCell>
            <StyledTableCell align="right">GF</StyledTableCell>
            <StyledTableCell align="right">GA</StyledTableCell>
            <StyledTableCell align="right">GD</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.team}>
              <StyledTableCell component="th" scope="row">
                {row.team}
              </StyledTableCell>
              <StyledTableCell align="right">{row.matches}</StyledTableCell>
              <StyledTableCell align="right">{row.wins}</StyledTableCell>
              <StyledTableCell align="right">{row.draws}</StyledTableCell>
              <StyledTableCell align="right">{row.losses}</StyledTableCell>
              <StyledTableCell align="right">{row.gf}</StyledTableCell>
              <StyledTableCell align="right">{row.ga}</StyledTableCell>
              <StyledTableCell align="right">{row.gd}</StyledTableCell>
              <StyledTableCell align="right">{row.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}
