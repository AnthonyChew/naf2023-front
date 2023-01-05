import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import { useSelector } from 'react-redux';
import React, { useState } from 'react';
// import clsx from 'clsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Collapse,
  Box,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import AddProduct from './AddProduct';

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
    
    // marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(1),
    maxHeight: 70,
  },
}));

const reducer = (accumulator, currentValue) => accumulator + currentValue;

export default function ProductRow(props) {
  const {
    row,
    isItemSelected,
    labelId,
    selected,
    setSelected,
    isNested,
  } = props;

  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const {
    _id,
    colours,
    sizes,
    quantityBought, //Orders of user
    attribute1,
    attribute2,
    totalEarned,
    quantitySold,
    price,
    total,
    name,
    productName,
    imghref,
  } = row;
  let { quantity } = row;
  quantity = quantity ? quantity : quantityBought;
  let totalQuantity = 0;
  if (colours.length > 0) {
    for (var i = 0; i < quantity.length; i++) {
      var subarray = quantity[i];
      var subarrayTotal = subarray.reduce(reducer);
      totalQuantity += subarrayTotal;
    }
  } else {
    totalQuantity = quantity[0].reduce(reducer);
  }
  if (totalQuantity >= Number.MAX_SAFE_INTEGER) {
    totalQuantity = Number.MAX_SAFE_INTEGER;
  }
  let variants = [];
  //transform the data
  if (colours.length > 0) {
    for (let i = 0; i < colours.length; i++) {
      if (row.sizes.length > 0) {
        for (let j = 0; j < sizes.length; j++) {
          variants.push({
            colour: colours[i],
            size: sizes[j],
            quantity: quantity[i][j],
          });
        }
      } else {
        variants.push({
          colour: colours[i],
          quantity: quantity[i][0],
        });
      }
    }
  } else {
    for (let j = 0; j < sizes.length; j++) {
      variants.push({
        size: sizes[j],
        quantity: quantity[0][j],
      });
    }
  }

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  //EDIT PRODUCT DIALOG
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpen = () => {
    setOpenEdit(true);
  };
  const handleClose = () => {
    setOpenEdit(false);
  };

  return (
    <React.Fragment>
      <TableRow
        hover
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.name}
        selected={isItemSelected}
        className={variants.length > 0 && classes.root}
      >
        {!isNested && (
          <TableCell padding="checkbox">
            <Checkbox
              checked={isItemSelected}
              inputProps={{ 'aria-labelledby': labelId }}
              onClick={(event) => handleClick(event, row._id)}
            />
          </TableCell>
        )}
        <TableCell padding="checkbox">
          {variants.length > 0 && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
        <TableCell
          component="th"
          id={labelId}
          scope="row"
          // padding="none"
        >
          <div className={classes.pdtAndImg}>
            {imghref && imghref !== '' ? (
              <img
                src={imghref}
                alt={name}
                style={{ width: '60px' }}
                className={classes.pdtImg}
              />
            ) : (
              <img style={{ width: '60px' }} className={classes.pdtImg} />
            )}

            <span style={{marginLeft: "20px"}}>{productName || name}</span>
          </div>
        </TableCell>
        <TableCell align="center">
          {totalQuantity > 10000000 ? 'Unlimited' : totalQuantity}
        </TableCell>
        <TableCell align="center">
          {total || totalEarned || quantitySold * price}
        </TableCell>
        {!isNested && (
          <TableCell align="center">
            <Button
              variant="outlined"
              size="small"
              onClick={handleClickOpen}
              id="addProduct"
            >
              Edit
            </Button>
            {openEdit && (
              <AddProduct
                //callback
                parentCallback={handleClose}
                pdtName={name}
                pdtDesc={row.description}
                pdtCat={row.category}
                pdtPrice={price}
                pdtAtt1={attribute1}
                pdtAtt1Options={colours}
                pdtAtt2={attribute2}
                pdtAtt2Options={sizes}
                pdtCollect={row.canCollect}
                pdtDeliver={row.canDeliver}
                pdtQuantity={row.quantity}
                pdtPreorder={row.isPreOrder}
                pdtLeadtime={row.leadTime}
                pdtImages={row.images}
                _id={_id}
                type="edit"
              />
            )}
            {/* {console.log(row)} */}
          </TableCell>
        )}
      </TableRow>
      {variants.length > 0 && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={2}>
                <Typography variant="subtitle1" gutterBottom component="div">
                  Variants for {name || productName}
                </Typography>
                <Table size="small" aria-label="pdtVariants">
                  <TableHead>
                    <TableRow>
                      {/* <TableCell>Product ID</TableCell> */}
                      {colours.length > 1 && (
                        <TableCell align="center">{attribute1}</TableCell>
                      )}
                      {sizes.length > 1 && (
                        <TableCell align="center">{attribute2}</TableCell>
                      )}
                      <TableCell align="center">Quantity</TableCell>
                      {/* <TableCell align="right">Unit price ($)</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {variants.map((variant) => (
                      <TableRow key={variant.pdtID}>
                        {variant.colour && (
                          <TableCell align="center">{variant.colour}</TableCell>
                        )}
                        {variant.size && (
                          <TableCell align="center">{variant.size}</TableCell>
                        )}
                        <TableCell align="center">
                          {variant.quantity > 100000
                            ? 'Unlimited'
                            : variant.quantity}
                        </TableCell>
                        {/* <TableCell align="right">{variant.unitPrice}</TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
}

// TableRowVendor.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

//end
