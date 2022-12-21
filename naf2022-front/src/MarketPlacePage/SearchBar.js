import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import searchService from '../services/search';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    position: 'relative',
  },
  iconButton: {
    padding: 0,
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const { searchCallback } = props;
  const search = async () => {
    const searchedProducts = await searchService.searchMarketplace(query);
    searchCallback(searchedProducts);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid item xs={1} justify="flex-end">
          <IconButton
            className={classes.iconButton}
            onClick={search}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="search-bar"
            label="Search Products..."
            fullWidth
            variant="outlined"
            color="secondary"
            onChange={handleInputChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                search();
              }
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
