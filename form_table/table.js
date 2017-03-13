import React, { PropTypes } from 'react';

const Table = (props) => (
  <table className='table table-condensed'>
    {props.children}
  </table>
);

export default Table;
