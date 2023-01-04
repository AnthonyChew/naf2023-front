import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    width: '80%',
    maxWidth: 1500,
    margin: 'auto',
  },
  text: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    textTransform: 'uppercase',
    margin: '0',
    color: theme.palette.text.secondary,
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      width: '90%',
    },
    section: {
      justifyContent: 'flex-start',
    },
  },
}));

//for filter
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

//for product category:
const filters = [
  { title: 'NAF Merch', filterType: 'category' },
  { title: 'Accessories', filterType: 'category' },
  { title: 'Apparel', filterType: 'category' },
  { title: 'Food and Beverage', filterType: 'category' },
  { title: 'Bags', filterType: 'category' },
  { title: 'Decor', filterType: 'category' },
  { title: 'Illustrations/Prints/Paintings', filterType: 'category' },
  { title: 'Masks', filterType: 'category' },
  { title: 'Stationery', filterType: 'category' },
  { title: 'Others', filterType: 'category' },
  
];

export default function Filter(props) {
  const classes = useStyles();
  const { isVendorLogin, parentCallback } = props;

  const [filter, setFilter] = useState([]); // array of filters chosen
  const [sort, setSort] = useState(false); //"A-Z, Recency, Popularity"
  const [view, setView] = useState('products'); // "products", "vendors"

  const setFilterHandler = (event, newFilter) => {
    let filterArray = [];
    newFilter.map((oneFilter) => filterArray.push(oneFilter.title));
    setFilter(filterArray);
    parentCallback([filterArray, sort, view]);
  };

  const setSortHandler = (event) => {
    if (event.target.value !== sort) {
      var newSort = event.target.value;
      setSort(newSort);
      parentCallback([filter, newSort, view]);
    }
  };

  const setViewHandler = (event, newView) => {
    if (newView !== null) {
      setView(newView);
      if (newView === 'vendors' && filter === 'price') {
        setFilter(false);
        parentCallback([false, sort, newView]);
      } else {
        parentCallback([filter, sort, newView]);
      }
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="space-evenly">
        <Grid
          container
          item
          xs={12}
          sm={4}
          spacing={3}
          justify="flex-start"
          className={`${classes.section} ${classes.firstSection}`}
        >
          <Grid item align="center">
            <Typography className={classes.text} paragraph>
              Filter:
            </Typography>
          </Grid>
          <Autocomplete
            disabled={view === 'vendors' ? true : false}
            multiple
            onChange={setFilterHandler}
            id="filter-dropdown"
            options={filters}
            groupBy={(option) => option.filterType}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </React.Fragment>
            )}
            style={{ width: '70%' }}
            // fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Filter Options"
                placeholder="Select filter(s)"
                color="secondary"
              />
            )}
          />
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={4}
          spacing={3}
          justify="center"
          className={`${classes.section} ${classes.middleSection}`}
        >
          <Grid item align="center">
            <Typography className={classes.text} paragraph>
              Sort by:
            </Typography>
          </Grid>
          <FormControl variant="outlined">
            <Select
              value={sort}
              onChange={setSortHandler}
              autoWidth
              defaultValue={false}
              disabled={view === 'vendors' ? true : false}
            >
              <MenuItem value={false}>
                <em>Not Sorted</em>
              </MenuItem>
              <MenuItem value={'A-Z'}>A-Z</MenuItem>
              <MenuItem value={'Z-A'}>Z-A</MenuItem>
              <MenuItem value={'Most to least recent'}>
                Most to least recent
              </MenuItem>
              <MenuItem value={'Least to most recent'}>
                Least to most recent
              </MenuItem>
              <MenuItem value={'Price low to high'}>Price low to high</MenuItem>
              <MenuItem value={'Price high to low'}>Price high to low</MenuItem>
              {/* <MenuItem value={'Popularity'}>Popularity</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>

        {!isVendorLogin && (
          <Grid
            container
            item
            xs={12}
            sm={4}
            spacing={3}
            justify="flex-end"
            className={`${classes.section} ${classes.thirdSection}`}
          >
            <Grid item align="center">
              <Typography className={classes.text} paragraph>
                View all:
              </Typography>
            </Grid>

            <ToggleButtonGroup
              value={view}
              exclusive
              onChange={setViewHandler}
              align="center"
              aria-label="select view"
            >
              <ToggleButton value="products">PRODUCTS</ToggleButton>
              <ToggleButton value="vendors">VENDORS</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
