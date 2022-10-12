import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  content: {
    width: '50%',
    maxWidth: 1500,
    margin: 'auto',
  },
  paddedItem: {
    padding: theme.spacing(3),
  },
}));

function LuckyDrawProggie() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: '',
    points: '',
    source: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClick = () => {
    setValues({
      email: '',
      points: '',
      source: '',
    });
  };

  return (
    <div>
      <Grid container spacing={3} justify="center" className={classes.content}> 
        <Grid item xs={12}>
          <Typography
            className={classes.paddedItem}
            align="center"
            variant="h3"
          >
            Lucky Draw
          </Typography>
          <Typography
            className={classes.paddedItem}
            align="center"
            paragraph
          >
            for proggies
          </Typography>
        </Grid>

        <Grid
            item
            justify="flex-start"
            alignItems="center"
            xs={12}
          >
             <FormControl fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                value={values.email}
                onChange={handleChange('email')}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            justify="flex-start"
            alignItems="center"
            xs={12}
          >
            <FormControl fullWidth>
                <InputLabel id="points">Points</InputLabel>
                <Select
                labelId="points"
                id="points"
                value={values.points}
                onChange={handleChange('points')}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                </Select>
            </FormControl>
          </Grid>

          <Grid
            item
            justify="flex-start"
            alignItems="center"
            xs={12}
          >
            <FormControl fullWidth>
                <InputLabel id="event">Event</InputLabel>
                <Select
                labelId="event"
                id="event"
                value={values.source}
                onChange={handleChange('source')}
                >
                <MenuItem value={"Event 1"}>Event 1</MenuItem>
                <MenuItem value={"Event 2"}>Event 2</MenuItem>
                <MenuItem value={"Event 3"}>Event 3</MenuItem>
                </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button onClick={handleClick} variant="contained">Submit</Button>
          </Grid>
          </Grid>
    </div>
  );
}

export default LuckyDrawProggie;
