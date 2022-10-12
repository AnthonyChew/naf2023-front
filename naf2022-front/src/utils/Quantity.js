import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  pdtQty: {
    gridColumn: '1 / 4',
    gridRow: 4,
    display: 'flex',
    alignItems: 'center',
  },
  buttonStyling: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const Quantity = (props) => {
  const { quantity, changeRedux, changeState } = props;
  const [newQuantity, setQuantity] = useState(quantity);
  const classes = useStyles();

  const parentCallback = (type) => {
    if (typeof changeRedux !== 'undefined') {
      changeRedux(type);
    } else if (typeof changeState !== 'undefined') {
      if (type === 'INCREASE') {
        changeState(quantity + 1);
      } else {
        if (quantity - 1 >= 1) {
          changeState(quantity - 1);
        }
      }
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.pdtQty}>
        <Typography
          variant="body1"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Quantity:
        </Typography>
        <IconButton
          className={classes.buttonStyling}
          onClick={() => {
            setQuantity(newQuantity - 1);
            parentCallback('DECREASE');
          }}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          {quantity}
        </Typography>
        <IconButton
          className={classes.buttonStyling}
          onClick={() => {
            setQuantity(newQuantity + 1);
            parentCallback('INCREASE');
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Quantity;
