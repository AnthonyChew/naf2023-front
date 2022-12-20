import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinkButton from '../utils/LinkButton';
import Typography from '@material-ui/core/Typography';
import CondensedProductCard from './CondensedProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    width: '90%',
    maxWidth: 1500,
    display: 'inline-block',
    textAlign: 'center',
    padding: 20,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    ' & .MuiCardActions-root': {
      padding: '6px',
      justifyContent: 'flex-end',
    },
  },
  pos: {
    margin: 15,
  },
  topListings: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      padding: 0,
    },
  },
}));

export default function VendorCard(props) {
  const classes = useStyles();
  const { vendor } = props;
  const { displayName, description, products } = vendor;

  return (
    <Card className={classes.root} justify="space-around">
      <CardContent>
        <Typography variant="h4">{displayName}</Typography>
        <Typography className={classes.pos} paragraph>
          {description}
        </Typography>
        <div className={classes.topListings}>
          {products.map((pdt, index) => (
            <CondensedProductCard key={index} product={pdt} />
          ))}
        </div>
      </CardContent>
      <CardActions>
        <LinkButton
          size="small"
          to={`/vendorpage/${vendor._id}`}
          className={classes.actionButton}
          variant="contained"
          color="secondary"
        >
          See More &gt;
        </LinkButton>
      </CardActions>
    </Card>
  );
}
