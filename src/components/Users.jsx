import React from 'react';

const User = (props) => {
  console.log(props.movie);
  return props.movie ? <img src={props.movie.User} />
    : <div>No movie...</div>
}

export default User;
