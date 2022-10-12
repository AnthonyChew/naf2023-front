import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import EventsHeader from './EventsHeader';
import ArtversePrelude from './EventsArtversePrelude';
import FilterWorkshops from './FilterWorkshops';
import WorkshopsList from './WorkshopsList';


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
}));

function Workshops() {
  const classes = useStyles();
  const products = useSelector((state) => state.products);

  const [filter, setFilter] = useState(false); // false, "category", "price"
  const [view, setView] = useState('products'); // "products", "vendors"

  function setFilterViews(settingsData) {
    // console.log(settingsData);
    setFilter(settingsData[0]);
    setView(settingsData[1]);
  }

  return (
    <div className={classes.root}>
      <EventsHeader />
      <ArtversePrelude />
      <FilterWorkshops />
      <WorkshopsList
        id="workshopsList"
        data-aos="zoom-in-up"
        data-aos-duration="1000"/>
      
    </div>
  );
}

export default Workshops;