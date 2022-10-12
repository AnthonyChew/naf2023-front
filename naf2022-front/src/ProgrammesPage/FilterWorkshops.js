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
  { title: 'Visual Arts', filterType: 'category' },
  { title: 'Crafts & Others', filterType: 'category' },
  { title: 'Performing Arts', filterType: 'category' },
  // { title: 'Others', filterType: 'category' },
];

export default function FilterWorkshops(props) {
  const classes = useStyles();
  const { parentCallback } = props;

  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState('Vacancies');  // default value: 'Vacancies'

  const setFilterHandler = (event, newFilter) => {
    let filterArray = [];
    newFilter.map((oneFilter) => filterArray.push(oneFilter.title));
    setFilter(filterArray);
    parentCallback([filterArray, sort]);
  };

  const setSortHandler = (event) => {
    if (event.target.value !== sort) {
      var newSort = event.target.value;
      setSort(newSort);
      parentCallback([filter, newSort]);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="space-evenly">
        <Grid
          container
          item
          xs={12}
          sm={6}
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
          sm={6}
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
              defaultValue={'Vacancies'}
            >
              <MenuItem value={'Vacancies'}>Vacancies</MenuItem>
              <MenuItem value={'A-Z'}>A-Z</MenuItem>
              <MenuItem value={'Date/Time'}>Date/Time</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
