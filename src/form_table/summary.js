import React from 'react';

const roundToFour = num => {    
    return +(Math.round(num + "e+4")  + "e-4");
};

const Summary = ({subtotal}) => (
  <table className='table invoice-total'>
    <tbody>
      <tr>
        <td><strong>Subtotal</strong></td>
        <td>{roundToFour(subtotal)}</td>
      </tr>
      <tr>
        <td><strong>ISV</strong></td>
        <td>{roundToFour(subtotal * 0.15)}</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td>{roundToFour(subtotal * 1.15)}</td>
      </tr>
    </tbody>
  </table>
);

export default Summary;