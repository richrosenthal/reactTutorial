import React from 'react';

const Card = ({name, email, id}) => {
  return (

    <div className='tc bg-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
      {/* <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> */}
      <img alt='robots' src={`https://i.pravatar.cc/150?img=${id + 4}`} />
      <div>
        <h2>{name} </h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
