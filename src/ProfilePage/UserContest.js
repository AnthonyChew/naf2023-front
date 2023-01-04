import React from 'react';
import ContestCard from './ContestCard';


function UserContest(props) {

  const { contests } = props;

  return (
    <div className={classes.root}>
      <h4>
        CONTEST PARTICIPATED
      </h4>
      {contests &&
        contests.map((contest, index) => (
          <ContestCard
            key={index}
            name={contest.name}
            image={contest.image}
            desc={contest.desc}
          />
        ))}
    </div>
  );
}

export default UserContest;
