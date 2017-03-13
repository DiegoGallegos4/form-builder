import React, {PropTypes} from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'
//DateTime picker
export const DateTimeInput = ({
  value, 
  label, 
  onChange, 
  labelOn,
  labelClasses='',
  inputContainerClasses='',
  id=''
}) => (
  <div className='form-group'>
    {label && labelOn ? <label className={`${labelClasses} control-label`}>{label} </label>: null}
    <div id={id} className={`${inputContainerClasses}`}>
      <DateTime
        value={value}
        onChange={onChange} 
      />
    </div>
  </div>
);

DateTimeInput.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelOn: PropTypes.bool
}; 
