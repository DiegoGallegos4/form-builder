import React, {PropTypes} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export const DateInput = ({
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
      <DatePicker
        selected={value}
        onChange={onChange} 
      />
    </div>
  </div>
);

DateInput.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelOn: PropTypes.bool
}; 