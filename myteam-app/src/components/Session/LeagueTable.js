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
  createData('Man City', 38, 29, 6, 3, 99, 26, 73, 93),
  createData('Liverpool', 38, 28, 8, 2, 94, 26, 68, 92),
  createData('Chelsea', 38, 21, 11, 6, 76, 33, 43, 74),
  createData('Tottenham', 38, 22, 5, 11, 69, 40, 29, 71),
  createData('Arsenal', 38, 22, 3, 13, 61, 48, 13, 69),
  createData('Man United ', 38, 16, 10, 12, 57, 57, 0, 58),
  createData('West Ham ', 38, 16, 8, 14, 60, 51, 9, 56),
  createData('Leicester City ', 38, 14, 10, 14, 62, 59, 3, 52),
  createData('Brighton', 38, 12, 15, 11, 42, 44, -2, 51),
  createData('Wolves', 38, 15, 6, 17, 38, 43, -5, 51),
  createData('NewCastle', 38, 13, 10, 15, 44, 62, -18, 49),
  createData('Crystal Palace', 38, 11, 15, 12, 50, 46, 4 , 48),
  createData('Brentford', 38, 13, 7, 18, 48, 56, -8 , 46),
  createData('Aston Villa', 38, 13, 6, 19, 52, 54, -2 , 45),
  createData('Southampton', 38, 9, 13, 16, 43, 67, -24 , 40),
  createData('Everton', 38, 11, 6, 21, 43, 66, -23 , 39),
  createData('Leeds United', 38, 9, 11, 18, 42, 79, -37 , 38),
  createData('Burnley', 38, 7, 14, 17, 34, 53, -19 , 35),
  createData('Watford', 38, 6, 5, 27, 34, 77, -43 , 23),
  createData('Norwich City', 38, 5, 7, 26, 23, 84, -61 , 22),
];

export default function LeagueTable() {
  return (
  <div className='TableContainer'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
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
