import BackCard from 'common/BackCard';
import React from 'react';
import OpenedCard from 'common/OpenedCard';

const Main = () => {
  const arr = ['', '', ''];

  return (
    <div>
      <h1>hello</h1>
      {arr.map((el) => (
        <BackCard />
      ))}
      <OpenedCard />
    </div>
  );
};

export default Main;
