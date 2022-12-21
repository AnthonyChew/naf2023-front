import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { useSelector } from 'react-redux';
import React, { useState } from 'react';
// import clsx from 'clsx';
import {
  TableCell,
  TableRow,
  Checkbox,
  IconButton,
  Collapse,
  Box,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ProductTable from './ProductTable.js';

const useRowStyles = makeStyles((theme) => ({
  root: {
    // overflow: 'scroll',
    '& > *': {
      borderBottom: 'unset',
    },
  },
  pdtAndImg: {
    display: 'flex',
    alignItems: 'center',
  },
  pdtImg: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    maxHeight: 70,
  },
  contactDetails: {
    textAlign: 'center',
  },
}));

export default function OrderRow(props) {
  const { row, labelId } = props;
  // console.log(row);
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={row.name}
        // className={classes.root}
      >
        <TableCell padding="checkbox">
          {row.purchases.length > 0 && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
        <TableCell align="center">{row.orderNumber}</TableCell>
        <TableCell align="center">
          {row.verified === true ? 'Verified' : 'Verification in Progress'}
        </TableCell>
        {/* status of the order: delivered/collected/pending */}
        <TableCell align="center">
          {Number.isInteger(row.total) ? row.total : row.total.toFixed(2)}
        </TableCell>
      </TableRow>
      {row.purchases.length > 0 && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={2}>
                <ProductTable rows={row.purchases} isNested={true} />
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
}

//end
