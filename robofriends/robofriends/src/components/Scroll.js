import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '1px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;


// import React from 'react';
//
// const Scroll = (props) => {
//   return (
//     <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
//       {props.children}
//     </div>
//   );
// };
//
// export default Scroll;
