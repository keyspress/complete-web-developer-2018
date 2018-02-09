import React from 'react';

const CardList = () => {
  return (
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
    </div>
  );
}

export default CardList;
