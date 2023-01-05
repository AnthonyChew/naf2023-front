import React, { useState } from 'react';
import {
  IconButton,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  Paper,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import adminService from '../services/admin';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';
// import { useHistory } from 'react-router-dom';

export default function VerifyWorkshops(props) {
  //   const history = useHistory();
  const { workshops, handleNotAuth } = props;
  const [workshopVerify, setWorkshopVerify] = useState(null);

  const verifyWorkshop = async (studentId) => {
    const res = await trackPromise(
      adminService.verifyWorkshop(studentId, workshopVerify.name)
    );
    // console.log(auth);
    if (res.status === 401) {
      handleNotAuth(false);
    } else if (res.status === 400) {
      alert(res.data.error);
    }
  };

  const handleChange = (event) => {
    const workshop = workshops.find(
      (workshop) => workshop.name === event.target.value
    );
    setWorkshopVerify(workshop);
  };

  const { promiseInProgress } = usePromiseTracker();
  return (
    <>
      <LoadingSpinnerComponent />
      <FormControl>
        <InputLabel>Workshop</InputLabel>
        <Select
          native
          value={workshopVerify && workshopVerify.name}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          {workshops &&
            workshops.map((workshop) => (
              <option key={workshop._id} value={workshop.name}>
                {workshop.name}
              </option>
            ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workshopVerify &&
              workshopVerify.registeredParticipants &&
              workshopVerify.registeredParticipants.map(
                (participant, index) => {
                  if (participant.studentPoints.length > 0) {
                    const points = participant.studentPoints[0];
                    let pointCategory = null;
                    if (points.length > 0) {
                      pointCategory = points.find(
                        (point) => point.category === workshopVerify.name
                      );
                    }
                    if (!pointCategory) {
                      return (
                        <>
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {participant.name}
                            </TableCell>
                            <TableCell>{participant.emailAddress}</TableCell>
                            {
                              <>
                                <IconButton
                                  edge="end"
                                  aria-label="download"
                                  disabled={promiseInProgress}
                                >
                                  <DoneIcon
                                    onClick={() =>
                                      verifyWorkshop(participant.studentId)
                                    }
                                  />
                                </IconButton>
                              </>
                            }
                          </TableRow>
                        </>
                      );
                    }
                  }
                }
              )}
            {/* {workshopVerify &&
              workshopVerify.waitlistedParticipants &&
              workshopVerify.waitlistedParticipants.map(
                (participant, index) => {
                  if (participant.studentPoints.length > 0) {
                    const points = participant.studentPoints[0];
                    let pointCategory = null;
                    if (points.length > 0) {
                      pointCategory = points.find(
                        (point) => point.category === workshopVerify.name
                      );
                    }
                    if (!pointCategory) {
                      return (
                        <>
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {participant.name}
                            </TableCell>
                            <TableCell>{participant.emailAddress}</TableCell>
                            {
                              <>
                                <IconButton
                                  edge="end"
                                  aria-label="download"
                                  disabled={promiseInProgress}
                                >
                                  <DoneIcon
                                    onClick={() =>
                                      verifyWorkshop(participant.studentId)
                                    }
                                  />
                                </IconButton>
                              </>
                            }
                          </TableRow>
                        </>
                      );
                    }
                  }
                }
              )} */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
