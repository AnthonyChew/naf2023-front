
// import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Checkbox,
  IconButton,
  Tooltip,
  Paper,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ProductRow from './ProductRow.js';
import ConfirmationDialog from '../Components/ConfirmationDialog';
import productService from '../services/products';
import { useHistory, useNavigate } from 'react-router-dom';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  if (array != null) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
}

const productHeadCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Product',
  },
  {
    id: 'inventory',
    numeric: false,
    disablePadding: true,
    label: 'Inventory',
  },
  {
    id: 'sales',
    numeric: true,
    disablePadding: true,
    label: 'Sales Earned ($)',
  },
  {
    id: 'edit',
    numeric: false,
    disablePadding: true,
    label: 'Edit Listing',
  },
];

const orderHeadCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Product',
  },
  {
    id: 'quantityBought',
    numeric: false,
    disablePadding: true,
    label: 'Quantity Bought',
  },
  {
    id: 'Price',
    numeric: true,
    disablePadding: true,
    label: 'Price ($)',
  },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    isNested,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {!isNested && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all products' }}
            />
          </TableCell>
        )}
        <TableCell />
        {(isNested ? orderHeadCells : productHeadCells).map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

//TABLE TOOLBAR (TITLE, SELECT ITEMS, DELETE ITEMS)
const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { selected } = props;
  const [open, setOpen] = useState(false);
  const history = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDialogResult = async (continueAction) => {
    setOpen(false);

    if (continueAction) {
      // console.log(selected);
      // POST REQUEST TO DELETE SELECTED
      for (let i = 0; i < selected.length; i++) {
        let res = await productService.deleteProduct(selected[i]);
        if (res.status !== 200) {
          if (res.data.error === 'Schema does not match') {
            alert(res.data.validation.body.message);
          } else {
            alert(res.data.error);
          }
        }
      }

      history(0);
    }
  };

  return (
    <>
      <Toolbar>
        <Typography
          className={classes.title}
          variant="h4"
          id="tableTitle"
          component="div"
        >
          My Products
        </Typography>
      </Toolbar>
      {selected.length > 0 && (
        <Toolbar className={classes.highlight}>
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {selected.length} selected
          </Typography>
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={handleClickOpen}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      )}
      {open && (
        <ConfirmationDialog
          //callback
          title="Delete these products?"
          content="The selected product listings will be deleted permanently."
          parentCallback={handleDialogResult}
        />
      )}
    </>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    position: 'relative',
    textAlign: 'center',
    margin: 'auto',
    width: '90vw',
    overflow: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'auto',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

function ProductTable(props) {
  const classes = useStyles();
  // const products = useSelector((state) => state.products);
  const { rows, isNested } = props;

  // console.log(rows);

  const [filter, setFilter] = useState(false); // array of filters chosen
  const [sort, setSort] = useState(false); //"A-Z, Recency, Popularity"

  function setFilters(settingsData) {
    setFilter(settingsData[0]);
    setSort(settingsData[1]);
  }

  //start table
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(isNested ? 100 : 10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  //end

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper}> */}
      {!isNested && <EnhancedTableToolbar selected={selected} />}

      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
          style={{ position: 'relative' }}
        >
          <EnhancedTableHead
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows && rows.length}
            isNested={isNested}
          />
          <TableBody id="tableBody">
            {rows &&
              stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const itemIdentifier = row._id; //row.name ? row.name : row.productName;
                  const isItemSelected = isSelected(itemIdentifier);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  if (row.images && row.images.length > 0) {
                    row.imghref = row.images[0];
                  }
                  return (
                    <ProductRow
                      key={index}
                      row={row}
                      isItemSelected={isItemSelected}
                      labelId={labelId}
                      selected={selected}
                      setSelected={setSelected}
                      isNested={isNested}
                    />
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      {!isNested && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows && rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
      {/* </Paper> */}
    </div>
  );
}

export default ProductTable;
