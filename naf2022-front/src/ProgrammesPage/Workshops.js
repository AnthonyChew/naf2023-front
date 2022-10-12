import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import WorkshopsHeader from './WorkshopsHeader';
import FilterWorkshops from './FilterWorkshops';
import WorkshopsList from './WorkshopsList';
import Hidden from '@material-ui/core/Hidden';
import workshopService from '../services/workshops';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { ReactComponent as Btmleft} from './SVG/btmleft.svg';
import { ReactComponent as Btmright} from './SVG/btmright.svg';
import { ReactComponent as Star1} from './SVG/star1.svg';
import { ReactComponent as Star2} from './SVG/star2.svg';
import { ReactComponent as Star3} from './SVG/star3.svg';
import { ReactComponent as Star4} from './SVG/star4.svg';
import { ReactComponent as Dot} from './SVG/dot.svg';
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
}));

function compare(sortType, a, b) {
  // console.log(sortType, a, b);
  if (sortType === 'A-Z') { // sort by alphabetical order, A first
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  } else if (sortType === 'Date/Time') {  // sort by Date/Time, earliest first
    //earliest first
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    if (a.date === b.date) {
      if (a.startTime > b.startTime) {
        return 1;
      }
      if (a.startTime < b.startTime) {
        return -1;
      }
    }
  } else if (sortType === 'Vacancies') {  // sort by no. vacancies remaining, largest number first
    if (a.remainingVacancies > b.remainingVacancies) {
      return -1;
    }
    else {
      return 1;
    }
  }
  // a must be equal to b
  return 0;
}

function Workshops() {
  const classes = useStyles();
  const [workshops, setWorkshops] = useState([]);

  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState(false);

  function setFilterViews(settingsData) {
    setFilter(settingsData[0]);
    setSort(settingsData[1]);
  }

  useEffect(() => {
    async function fetchWorkshopData() {
      const res = await trackPromise(workshopService.getAll());
      setWorkshops(res.data);
    }
    fetchWorkshopData();
  }, []);

  return (
    <div className={classes.root}>
      <Hidden>   
      <Star1 style={{ zIndex: 0, top:'150%',left:'2%',position: 'absolute' }} />
      <Star2 style={{ zIndex: 0, top:'190%',left:'5%',position: 'absolute' }} />
      <Star3 style={{ zIndex: 0, top:'270%',right:'5%',position: 'absolute' }} />
      <Star4 style={{ zIndex: 0, top:'300%',right:'5%',position: 'absolute' }} />

      <Dot style={{ zIndex: 0, top:'290%',left:'5%',position: 'absolute' }} />
      <Dot style={{ zIndex: 0, top:'320%',left:'2%',position: 'absolute' }} />
      <Dot style={{ zIndex: 0, top:'350%',left:'7%',position: 'absolute' }} />

{/* 
      <Btmleft style={{ zIndex: 0, top:'395%',left:'0%',position: 'absolute' }} />
      <Btmright style={{ zIndex: 0, top:'403%',right:'0%',position: 'absolute' }} /> */}
      </Hidden>
      <WorkshopsHeader />
      <FilterWorkshops parentCallback={setFilterViews} />
      <LoadingSpinnerComponent />
      <WorkshopsList
        workshops={
          filter.length === 0
          ? workshops.sort((a, b) => compare(sort, a, b))
          : workshops.sort((a, b) => compare(sort, a, b)).filter((workshop) => filter.includes(workshop.category))
        }
        id="workshopsList"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      />
      
    </div>
  );
}

export default Workshops;
